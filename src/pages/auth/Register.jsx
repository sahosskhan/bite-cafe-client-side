import { useContext, useRef, useState } from "react";
import { FaEye, FaEyeSlash, FaHome } from "react-icons/fa";
import { IoCloseSharp, IoPersonAddSharp } from "react-icons/io5";
import { RiAccountPinBoxFill, RiImageAddFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider";

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const Register = () => {
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const handleTermsChange = (e) => {
        setTermsAccepted(e.target.checked);
      };
      const isSubmitDisabled = !termsAccepted;

      const [showName, setShowName] = useState({});
      const [showImagePreview, setShowImagePreview] = useState({});
      const fileInputRef = useRef();
      const handleClearFile = () => {
        setShowName("");
        setShowImagePreview("");
        fileInputRef.current.value = "";
      };
      const [imageFile, setImageFile] = useState([]); 
      const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImageFile(file)
        setShowName(file);
        setShowImagePreview(URL.createObjectURL(file));
    };

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
      const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    
    } = useForm();
    
   // Get the value of password field

    const onSubmit = (data) => {
        const images = imageFile;
        const formData = new FormData();
        formData.append('image', images);
        const url = "https://api.imgbb.com/1/upload?key=6273bd312b6b06c225c0b5a1c1f4f59f";


        fetch(url, {
            method: 'POST',
            body: formData,
        })
        .then((res) => res.json())
        .then((imageData) => {
            if (imageData.success) {
                const image = imageData?.data?.url;
                createUser(data.email, data.password).then((result) => {
                    const loggedUser = result.user;
                    console.log(loggedUser);
                    updateUserProfile(data.name, image).then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            image: image,
                            role: 'user',
                        };
                        axiosPublic
                        .post('/users', userInfo)
                        .then((res) => {
                            if (res.data.insertedId) {
                                console.log('user created successfully');
                                reset();
                                Swal.fire({
                                  icon: 'success',
                                  title: 'Congratulations!',
                                  text: '😍Your Account was successfully Created',
                                  showConfirmButton: false,
                                  timer: 1500
                              });
                                navigate('/');
                            }
                        })
                        .catch((error) => console.log(error));
                    });
                });
            }
        });    
    };
    return (
        <div>
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
                    placeholder="Enter Your Full Name"
                    type="text"
                    {...register("name", { required: true })} name="name"
                  />
{errors.name && <span className="text-red-600">Full Name is required</span>}

                  <div className="my-10">
                    {showName?.name ? (
                      <div className="mx-auto flex max-w-[600px] items-center gap-x-6 rounded-lg border-2 border-dashed border-gray-400 p-5 bg-white">
                        <img
                          className="size-[100px] h-[100px] w-full max-w-[150px] rounded-lg object-cover"
                          src={showImagePreview}
                          alt={showName?.name}
                        />
                        <div className="flex-1 space-y-1.5 overflow-hidden">
                          <h5 className="text-xl font-medium tracking-tight truncate">
                            {showName?.name}
                          </h5>
                          <p className="text-gray-500">
                            {(showName.size / 1024).toFixed(1)} KB
                          </p>
                        </div>
                        <div onClick={handleClearFile}>
                          <IoCloseSharp className="text-5xl" />
                        </div>
                      </div>
                    ) : (
                      <label
                        className="mx-auto flex max-w-[600px] flex-col items-center justify-center space-y-3 rounded-lg border-2 border-dashed border-gray-400 p-6 bg-white"
                        htmlFor="file5"
                      >
                        <RiImageAddFill className="text-6xl" />
                        <div className="space-y-1.5 text-center">
                          <h5 className="whitespace-nowrap text-lg font-medium tracking-tight ">
                            Upload your profile picture
                          </h5>
                          <p className="text-sm text-gray-500">
                            File Should be in PNG, JPEG or JPG formate
                          </p>
                        </div>
                      </label>
                    )}

                    <input
                  
                     name="photoURL"
                      ref={fileInputRef}
                      onChange={handleImageChange} 
                      className="hidden"
                      id="file5"
                      type="file"
                    />
                  </div>

                  <input
                    className="flex h-14 w-full text-black font-medium placeholder:text-gray-500 rounded-md border px-3 py-2 text-xl focus:outline-none"
                    placeholder="Enter Your Email Address"
                    type="email"
                    {...register("email", { required: true })} name="email" 
                  />
  {errors.email && <span className="text-red-600">Email is required</span>}
                 
             
                  <div className="relative">
                    <input
                      className="flex h-14 w-full text-black font-medium placeholder:text-gray-500 rounded-md border px-3 py-2 text-xl focus:outline-none"
                      placeholder="Enter Your Password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        maxLength: 20,
                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                    })}
                    />
                     {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
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
                  </div>

                </div>
                <div className="flex items-center mb-6">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={termsAccepted}
                    onChange={handleTermsChange}
                    className="h-5 w-10 mt-1 rounded-md  focus:ring-black"
                  />
                  <label
                    htmlFor="terms"
                    className="ml-2 text-xl font-normal text-black "
                  >
                    I agree to the{" "}
                    <Link
                      to="terms-and-conditions"
                      className="text-orange-500 hover:underline"
                    >
                      Terms & Conditions
                    </Link>{" "}
                    Of Bite Cafe.
                  </label>
                </div>
                <button
                type="submit"
                  disabled={isSubmitDisabled}
                  className={`inline-flex gap-2  items-center justify-center rounded-md text-xl font-semibold h-14 w-full bg-amber-500 border-4 border-black text-black ${
                    isSubmitDisabled ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  <IoPersonAddSharp className="text-2xl" />
                  CREATE AN ACCOUNT
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
            <div className="w-full sm:w-1/2">
              <p className="text-xl py-9 font-normal">
                If you already have an account click the button below to
                continue in with your account.
              </p>
              <Link
                to="/continue-in-with-account"
                className="inline-flex gap-2 items-center justify-center rounded-md text-xl font-medium h-14 w-full mb-2 bg-amber-50 border-4 border-black text-black"
              >
                <RiAccountPinBoxFill className="text-4xl" /> CONTINUE IN WITH
                ACCOUNT
              </Link>
              <p className="text-center text-lg font-semibold my-4">OR</p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Register;