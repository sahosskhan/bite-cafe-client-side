import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { AiOutlineBars } from "react-icons/ai";
import MenuItem from "./MenuItem";
import { FaBookmark, FaCalendarAlt, FaHome, FaList, FaUtensils, FaWallet } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";
import { Link } from "react-router-dom";
import { FaCartShopping, FaUsersGear } from "react-icons/fa6";
import { PiCalendarCheckFill, PiShootingStarFill } from "react-icons/pi";
import useAdmin from "../../../hooks/useAdmin";


const Sidebar = () => {
    const [isActive, setActive] = useState(false)
    const { logOut } = useAuth()
      // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }

  const [isAdmin] = useAdmin();



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
        width='60'
        height='60'
      />
    </Link>
            </div>
          </div>
  
          <button
            onClick={handleToggle}
            className='mobile-menu-button p-4 focus:outline-none focus:bg-amber-300'
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
        width='120'
        height='100'
      />
    </Link>
              </div>
            </div>
  
            {/* Nav Items */}
            <div className='flex flex-col justify-between flex-1 mt-6'>
{ isAdmin ? <nav>

  <MenuItem
      icon={FaHome}
      label='Admin Home'
      address='/dashboard/admin-home'
    />
  <MenuItem
      icon={FaUtensils}
      label='Add Items'
      address='/dashboard/add-items'
    />
      <MenuItem
      icon={FaList}
      label='Manage Items'
      address='/dashboard/manage-items'
    />
          <MenuItem
      icon={FaBookmark}
      label='Manage Bookings'
      address='/dashboard/manage-bookings'
    />
          <MenuItem
      icon={FaUsersGear}
      label='Manage User'
      address='/dashboard/manage-user'
    />
</nav> :
    <nav>
    <MenuItem
      icon={FaHome}
      label='User Home'
      address='/dashboard/user-home'
    />
          <MenuItem
      icon={FaCalendarAlt}
      label='Reservation'
      address='/dashboard/reservation'
    />
               <MenuItem
      icon={FaWallet}
      label='Payment History'
      address='/dashboard/payment-history'
    />
            <MenuItem
      icon={FaCartShopping}
      label='My Cart'
      address='/dashboard/my-cart'
    />
                          <MenuItem
      icon={PiShootingStarFill}
      label='Add Review'
      address='/dashboard/add-review'
    />
                          <MenuItem
      icon={PiCalendarCheckFill}
      label='My Booking'
      address='/dashboard/my-booking'
    />

  </nav>

}
          

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