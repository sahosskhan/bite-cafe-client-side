import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { AiOutlineBars } from "react-icons/ai";
import MenuItem from "./MenuItem";
import { FaHome } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";


const Sidebar = () => {
    const [isActive, setActive] = useState(false)
    const { logOut } = useAuth()
      // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }

    return (
        <div>
             <div className='bg-amber-100 text-gray-800 flex justify-between md:hidden'>
          <div>
            <div className='block cursor-pointer p-4 font-bold'>
            <Link to='/'>
      <img
        // className='hidden md:block'
        src="/logo.png"
        alt='logo'
        width='160'
        height='100'
      />
    </Link>
            </div>
          </div>
  
          <button
            onClick={handleToggle}
            className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
          >
            <AiOutlineBars className='h-5 w-5' />
          </button>
        </div>
  
        {/* Sidebar */}
        <div
          className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-amber-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
            isActive && '-translate-x-full'
          }  md:translate-x-0  transition duration-200 ease-in-out`}
        >
          <div>
            <div>
              <div className='w-full hidden md:flex px-4 py-2 rounded-lg justify-center items-center mx-auto'>
              <Link to='/'>
      <img
        // className='hidden md:block'
        src="/logo.png"
        alt='logo'
        width='160'
        height='100'
      />
    </Link>
              </div>
            </div>
  
            {/* Nav Items */}
            <div className='flex flex-col justify-between flex-1 mt-6'>
              <nav>
                <MenuItem
                  icon={FaHome}
                  label='User Home'
                  address='/dashboard'
                />
                        <MenuItem
                  icon={FaCartShopping}
                  label='My Cart'
                  address='/dashboard/my-cart'
                />

              </nav>
            </div>
          </div>
  
          <div>
        
  
            <MenuItem
              icon={FaHome}
              label='Home'
              address='/'
            />
            <button
              onClick={logOut}
              className='flex w-full items-center px-4 py-2 mt-5 text-black hover:bg-black hover:text-white   transition-colors duration-300 transform'
            >
              <GrLogout className='w-5 h-5' />
  
              <span className='mx-4 text-xl font-medium'>Logout</span>
            </button>
          </div>
        </div>
        </div>
    );
};

export default Sidebar;