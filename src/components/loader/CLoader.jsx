import { BallTriangle } from "react-loader-spinner";


const CLoader = () => {
    return (
        <>
                    <div className="py-32 flex items-center justify-center">
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

export default CLoader;