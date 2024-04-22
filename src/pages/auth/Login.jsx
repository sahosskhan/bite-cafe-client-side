/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { BiReset } from "react-icons/bi";
import { FaEye, FaEyeSlash, FaHome } from "react-icons/fa";
import { IoPersonAddSharp } from "react-icons/io5";
import { RiAccountBoxFill } from "react-icons/ri";
import { TbFidgetSpinner } from "react-icons/tb";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LoadCanvasTemplateNoReload, loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha";
import { AuthContext } from './../../auth/AuthProvider';
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [disabled, setDisabled] = useState(true);
  const [captchaKey, setCaptchaKey] = useState(0);

  const handleReloadCaptcha = () => {
    setCaptchaKey((prevKey) => prevKey + 1);
  };

  useEffect(() => {
    loadCaptchaEnginge(6, "white", "black", captchaKey);
  }, [captchaKey]);

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  const { signIn, loading } = useContext(AuthContext);

  const { register, handleSubmit, formState: { errors } } = useForm();      
    const onSubmit = data => {
        signIn(data.email, data.password)
        .then((result) => {
          navigate(from, { replace: true });
          Swal.fire({
            icon: "success",
            title: "Congratulations!",
            text: "😎 You have successfully continued with your account",
            timer: 3000,
            showConfirmButton: false,
          });
         
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops!",
            text: "😒 Invalid Email Or Password. Please try again",
            footer: err?.message && err.message,
          });
        });
    };



    return (
        <>
            <div className="bg-form min-h-screen flex justify-center items-center">
        <div>
          <div className="max-w-7xl mx-auto p-6 bg-amber-50 rounded-xl shadow-xl sm:px-8 sm:py-10 lg:px-12 lg:py-16">
            <div className="flex flex-col sm:flex-row justify-between space-x-0 sm:space-x-12">
              <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
                {/* Left side form */}
                <div className="flex justify-start items-center gap-2 pb-6">
                  <img className="h-20" src="/logo.png" alt="" />
                  <h1 className="text-3xl font-semibold">Bite Cafe</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-col space-y-6 mb-6">
                    <input
                      className="flex h-14 w-full text-black font-medium placeholder:text-gray-500 rounded-md border px-3 py-2 text-xl focus:outline-none"
                      placeholder="Enter Your Email Address"
                      type="email"
                      {...register("email", { required: true })}
                      name="email"
                    />
                    {errors.email && (
                      <span className="text-red-600">Email is required</span>
                    )}

                    {/*captcha  */}
                    <div>
                      <input
                        onBlur={handleValidateCaptcha}
                        className="flex h-14 w-full text-black font-medium placeholder:text-gray-500 rounded-md border px-3 py-2 text-xl focus:outline-none"
                        placeholder="Type The Captcha Below  "
                        type="text"
                      />

                      <div className="flex justify-between mt-6 items-center">
                        <LoadCanvasTemplateNoReload />

                        <button
                          type="button"
                          className="h-12 inline-flex items-center justify-center gap-2 p-2 w-fit text-center bg-black text-white border-0 rounded-md text-lg font-medium focus:outline-none"
                          onClick={handleReloadCaptcha}
                        >
                          Reload Captcha <BiReset />
                        </button>
                      </div>

                      
                    </div>

                    <div className="relative">
                      <input
                        className="flex h-14 w-full rounded-md font-medium placeholder:text-gray-500 border px-3 py-2 text-xl focus:outline-none"
                        placeholder="Enter Your Password"
                        type={showPassword ? "text" : "password"}
                        {...register("password", { required: true })}
                        name="password"
                      />
                      <button
                        type="button"
                        className="absolute top-1/2 right-4 transform -translate-y-1/2"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? (
                          <FaEyeSlash className="text-2xl" />
                        ) : (
                          <FaEye className="text-2xl" />
                        )}
                      </button>
                      {errors.password && (
                        <span className="text-red-500">
                          <i className="fa-solid fa-triangle-exclamation"></i>
                          Password is required
                        </span>
                      )}
                    </div>
                  </div>
                  <button
                    disabled={disabled}
                    className={`inline-flex gap-2  items-center justify-center rounded-md text-xl font-semibold h-14 w-full bg-amber-500 border-4 border-black text-black ${
                      disabled ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {loading ? (
                      <TbFidgetSpinner className="animate-spin m-auto" />
                    ) : (
                      <>
                        <RiAccountBoxFill className="text-4xl" />
                        CONTINUE IN WITH ACCOUNT
                      </>
                    )}
                  </button>
                  <p className="text-center text-lg font-semibold my-4">OR </p>
                  <Link
                    to="/"
                    className="inline-flex gap-2  items-center justify-center rounded-md text-xl font-semibold h-14 w-full bg-amber-500 border-4 border-black text-black"
                  >
                    <FaHome className="text-4xl" />
                    RETURN BACK TO HOME
                  </Link>
                </form>
              </div>
              {/* Right side content */}
              <div className="w-full sm:w-1/2 ">
                <p className="text-xl py-7 font-normal">
                  If you don&apos;t already have an account click the button
                  below to create your account.
                </p>
                <Link
                  to="/create-account"
                  className="inline-flex gap-2 items-center justify-center rounded-md text-xl font-medium h-14 w-full mb-2 bg-amber-50 border-4 border-black text-black"
                >
                  <IoPersonAddSharp className="text-2xl" />
                  CREATE AN ACCOUNT
                </Link>
                <p className="text-center text-lg font-semibold my-4">OR</p>
                
              
              </div>
            </div>
          </div>
        </div>
      </div>   
        </>
    );
};

export default Login;