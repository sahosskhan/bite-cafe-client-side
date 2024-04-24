/* eslint-disable react/prop-types */


const MenuBanner = ({banner}) => {
    return (
        <>
                   <div className="p-20 ">
 <div className='menu-banner-bg flex justify-center items-center'>
     <div className=' bg-black rounded-xl bg-opacity-15 w-[90%] h-[30vh] flex justify-center items-center font-bold'>
         <div className="text-center">
             <h2 className='uppercase text-7xl text-white'>{banner.title}</h2>
         </div>
     </div>
 </div>

</div>  
        </>
    );
};

export default MenuBanner;