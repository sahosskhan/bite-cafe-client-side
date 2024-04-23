import { BallTriangle } from "react-loader-spinner";


const Loader = () => {
    return (
        <>
                  <div className="min-h-screen flex items-center justify-center">
         <BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#D97706"
  ariaLabel="ball-triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
        </div>  
        </>
    );
};

export default Loader;