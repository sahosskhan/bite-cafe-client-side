/* eslint-disable react/prop-types */


const HeadingBanner = ({ banner }) => {
    return (
        <>
                            <div className="pt-20">
            <div className='heading-banner-bg flex justify-center items-center'>
                <div className=' bg-black bg-opacity-30 w-[90%] h-[30vh]   flex justify-center items-center font-bold'>
                    <div className="text-center">
                        <h2 className='uppercase text-7xl text-white'>{banner.title}</h2>
                    </div>
                </div>
            </div>

        </div>    
        </>
    );
};

export default HeadingBanner;