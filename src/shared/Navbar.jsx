import { FaBars, FaCartPlus } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useUserData from "../hooks/useUserData";
import useCarts from "../hooks/useCarts";
import useAdmin from "../hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useAuth()
  const {userList}=useUserData();
  const FilterUserList = userList.filter(item => item.email === user?.email);
  const imageFilter = FilterUserList.map(user => user.image);
  const roleFilter = FilterUserList.map(user => user.role);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
        .then(() => {
          navigate('/');
        })
        .catch(error => console.log(error));
}
const [isAdmin] = useAdmin();
const [cart] = useCarts();
    const NavItem = <>
          
    <Link to="/"> <li> <span className="text-2xl text-black font-medium hover:bg-amber-400">Home</span> </li></Link>
    <Link to="/our-menu"> <li> <span className="text-2xl text-black font-medium hover:bg-amber-400">Menu</span> </li></Link>
    <Link to="/order-here/Biryani"> <li> <span className="text-2xl text-black font-medium hover:bg-amber-400">Order</span> </li></Link>
    <Link to="/contact-us"> <li> <span className="text-2xl text-black font-medium hover:bg-amber-400">Contact</span> </li></Link>

    
</>
    return (
        <div className="navbar fixed z-10   bg-amber-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
             <FaBars size={25}/>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {NavItem}
            </ul>
          </div>
       <div className="flex justify-center items-center gap-2">
          <img className="lg:h-14 md:h-14 h-10" src="/logo.png" alt="" />
          <h1 className="lg:text-3xl md:text-2xl text-lg font-semibold uppercase text-amber-500 ">Bite Cafe</h1>
       </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
          {NavItem}
          </ul>
        </div>
        <div className="navbar-end">
       

          
        <div className="flex justify-center items-center gap-2">
        {roleFilter =="user" &&
        <NavLink to="/dashboard/my-cart">
        <button className="h-12 inline-flex rounded-btn justify-center items-center gap-4 px-3 py-2 bg-amber-400 hover:bg-amber-400  text-black font-medium  border-0">
        <FaCartPlus size={25} />
        <div className="bg-amber-100 inline-flex justify-center items-center py-1 px-2 text-xl rounded-badge">{cart?.length || 0}</div>
      </button>
      </NavLink>
}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {user? <img alt="avatar" src={imageFilter} /> :  <img alt="avatar" src="/user.png" />  }
              
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-amber-100 rounded-box w-52">
            {user ? 
                  <>
                  {!isAdmin?
                    <NavLink to="/dashboard/user-home"> <li> <span className="text-xl text-black font-medium hover:bg-amber-400">Dashboard</span> </li></NavLink> :        <NavLink to="/dashboard/admin-home"> <li> <span className="text-xl text-black font-medium hover:bg-amber-400">Dashboard</span> </li></NavLink> 
                  }
                  <button onClick={handleLogOut}> <li> <span className="text-xl text-black font-medium hover:bg-amber-400">Logout</span> </li></button>
                  </>
                 :
                  <>
            <NavLink to="/create-account"> <li> <span className="text-xl text-black font-medium hover:bg-amber-400">Create Account</span> </li></NavLink>
            <NavLink to="/continue-in-with-account"> <li> <span className="text-xl text-black font-medium hover:bg-amber-400">Login</span> </li></NavLink>
            </>
}
      
            </ul>
          </div>
      
        </div>
        </div>
      </div>  
    );
};

export default Navbar;