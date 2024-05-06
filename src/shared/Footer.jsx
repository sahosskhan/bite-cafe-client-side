

const Footer = () => {
    const d = new Date();
    const year = d.getFullYear();
    return (
        <>
      <div className="">
             <div className='bg-gray-900  text-white '>
            <div className="grid grid-cols-1 md:grid-cols-2 text-white ">
                <div className='flex justify-center items-center bg-gray-700 p-10'>
                    <div className='w-auto space-y-1'>
                        <h3 className='text-center text-2xl mb-2 font-medium'>Contact Us</h3>
                        <p className='text-lg text-center'><i className="fa-solid fa-map-location-dot"></i> 20/1 Lawrence Lane, Thanapara, Kushtia</p>
                        <p className='text-lg text-center'><i className="fa-solid fa-headset"></i> +8801778030482, +8801316973995</p>
                        <p className='text-lg text-center'><i className="fa-solid fa-clock"></i> Mon - Fri: 08:00 - 22:00</p>
                        <p className='text-lg text-center'><i className="fa-solid fa-clock"></i> Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>
                <div className='flex justify-center items-center p-10  bg-gray-800'>
                    <div className='w-56'>
                        <h3 className='text-center text-2xl mb-2 font-medium'>Follow Us</h3>
                        <p className='text-lg text-center mb-4'>
                            Join us on social media
                        </p>
                        <div className='flex justify-center gap-6 items-center   text-3xl'>
                        <i className="fa-brands fa-square-facebook"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-youtube"></i>

                        </div>
                    </div>
                </div>

            </div>
            <p className='flex justify-center text-xl py-4'>Copyright ©BiteCafe {year}. All rights reserved.</p>
        </div>
        </div>
        </>
    );
};

export default Footer;