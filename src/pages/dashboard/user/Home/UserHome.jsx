
import useAuth from "../../../../hooks/useAuth";
import useUserData from "../../../../hooks/useUserData";


const UserHome = () => {
    const {userList} = useUserData();
    const {user} = useAuth();

    const FilterUserList = userList.filter(item => item.email === user?.email);
    
    const imageFilter = FilterUserList.map(user => user.image);
    const nameFilter = FilterUserList.map(user => user.name);




    return (
        <div className="p-20">

<div className="flex flex-row items-center justify-evenly ">
<div className="flex w-full p-16 flex-col justify-center items-center bg-amber-100">
<div className="avatar online">
  <div className="w-48 rounded-full">
    <img src={imageFilter}/>
  </div>
</div>
<h1 className="text-3xl font-medium mt-6">{nameFilter}</h1>
</div>

<div className="flex w-full border-l-4 border-black  p-14 flex-col justify-center  bg-amber-100">
<h1 className="text-4xl text-center">Your Activities</h1>
<h1 className="text-2xl text-left font-medium mt-6">Orders: 6</h1>
<h1 className="text-2xl font-medium mt-6">Reviews: 6</h1>
<h1 className="text-2xl font-medium mt-6">Bookings: 6</h1>
<h1 className="text-2xl font-medium mt-6">Payments: 6</h1>
</div>
</div>







        </div>
    );
};

export default UserHome;