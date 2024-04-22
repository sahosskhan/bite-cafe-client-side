import { FaSquareFacebook, FaSquareGithub } from "react-icons/fa6";
import { TbFidgetSpinner } from "react-icons/tb";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { FcGoogle } from "react-icons/fc";


const Socialbtn = () => {

    const navigate = useNavigate();
    const { googleLogin, githubLogin , facebookLogin ,loading } = useAuth();
    const axiosPublic = useAxiosPublic();

    const handleGoogleLogin= () => {
      googleLogin().then((res) => {
        const userInfo = {
          email: res.user?.email,
          name: res.user?.displayName,
          image: res.user?.photoURL,
          role: "user",
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          Swal.fire({
            title: "Congratulations!",
            text: "😎 You have successfully continued with google",
            icon: "success",
            confirmButtonText: "Done",
        });
          navigate("/");
        });
      });
    };

    const handleFacebookLogin= () => {
        facebookLogin().then((res) => {
          const userInfo = {
            email: res.user?.email,
            name: res.user?.displayName,
            image: res.user?.photoURL,
            role: "user",
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            console.log(res.data);
            Swal.fire({
              title: "Congratulations!",
              text: "😎 You have successfully continued with facebook",
              icon: "success",
              confirmButtonText: "Done",
          });
            navigate("/");
          });
        });
      };

      const handleGithubLogin= () => {
        githubLogin().then((res) => {
          const userInfo = {
            email: res.user?.email,
            name: res.user?.displayName,
            image: res.user?.photoURL,
            role: "user",
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            console.log(res.data);
            Swal.fire({
              title: "Congratulations!",
              text: "😎 You have successfully continued with github",
              icon: "success",
              confirmButtonText: "Done",
          });
            navigate("/");
          });
        });
      };



    return (
        <>
                 <button onClick={handleGoogleLogin} className="inline-flex gap-4 items-center justify-center rounded-md text-xl font-semibold h-14 w-full mb-4 bg-white border-4 border-black text-black">
                {loading ? (
                    <TbFidgetSpinner className='animate-spin m-auto' />
                ) : (
                    <>
                        <FcGoogle className="text-4xl" /> CONTINUE IN WITH GOOGLE
                    </>
                )}
            </button>


            <button data-tip="Due to some technical difficulties with Github, user data may not load properly. We are working to fix this issue in the upcoming version."  onClick={handleGithubLogin} className="tooltip  tooltip-warning tooltip-bottom inline-flex gap-4 items-center justify-center rounded-md text-xl font-semibold h-14 w-full mb-4 bg-white border-4 border-black text-black">
                {loading ? (
                    <TbFidgetSpinner className='animate-spin m-auto' />
                ) : (
                    <>
                        <FaSquareGithub className="text-4xl" /> CONTINUE IN WITH GITHUB
                    </>
                )}
            </button>
          
            <button data-tip="Due to some technical difficulties with Facebook, user data may not load properly. We are working to fix this issue in the upcoming version." onClick={handleFacebookLogin} className="tooltip  tooltip-warning tooltip-bottom inline-flex gap-4 items-center justify-center rounded-md text-xl font-semibold h-14 w-full mb-4 bg-white border-4 border-black text-black">
                {loading ? (
                    <TbFidgetSpinner className='animate-spin m-auto' />
                ) : (
                    <>
                        <FaSquareFacebook className="text-4xl ml-3" /> CONTINUE WITH FACEBOOK
                    </>
                )}
            </button>
        </>
    );
};

export default Socialbtn;