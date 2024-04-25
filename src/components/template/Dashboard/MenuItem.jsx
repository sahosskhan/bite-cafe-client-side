/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom'

const MenuItem = ({ label, address, icon: Icon }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-4 py-2 my-5 text-lg transition-colors duration-300 transform  hover:bg-black hover:text-white   ${
          isActive ? 'bg-black  text-white' : 'text-black'
        }`
      }
    >
      <Icon className='w-5 h-5' />

      <span className='mx-4 font-medium'>{label}</span>
    </NavLink>
  )
}

export default MenuItem