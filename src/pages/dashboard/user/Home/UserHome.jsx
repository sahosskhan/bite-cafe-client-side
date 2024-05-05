import useAuth from "../../../../hooks/useAuth";
import useBookings from "../../../../hooks/useBookings";
import useCarts from "../../../../hooks/useCarts";
import useMyReview from "../../../../hooks/useMyReview";
import usePayment from "../../../../hooks/usePayment";
import useUserData from "../../../../hooks/useUserData";


const UserHome = () => {
    const {userList} = useUserData();
    const {user} = useAuth();
const [payment] = usePayment();
const  [booking ]= useBookings();
const  [review ]= useMyReview();
const  [cart ]= useCarts();


    const FilterUserList = userList.filter(item => item.email === user?.email);
    const imageFilter = FilterUserList.map(user => user.image);
    const nameFilter = FilterUserList.map(user => user.name);



    return (
        <div className="p-20">

<div className="flex flex-row items-center justify-evenly ">
<div className="flex w-full p-16 flex-col justify-center items-center bg-orange-100">
<div className="avatar online">
  <div className="w-48 rounded-full">
    <img src={imageFilter}/>
  </div>
</div>
<h1 className="text-3xl font-medium mt-6">{nameFilter}</h1>
</div>

<div className="flex w-full border-l-4 border-black  p-14 flex-col justify-center  bg-amber-100">
<h1 className="text-4xl text-center">My Activities</h1>
<h1 className="text-2xl text-rose-500 text-left font-medium mt-6"><i className="fa-solid fa-cart-shopping"></i> Orders: {cart.length}</h1>
<h1 className="text-2xl text-fuchsia-500 font-medium mt-6"><i className="fa-regular fa-face-smile"></i> Reviews: {review.length}</h1>
<h1 className="text-2xl text-green-500  font-medium mt-6"><i className="fa-solid fa-calendar-day"></i> Bookings: {booking.length}</h1>
<h1 className="text-2xl text-sky-500 font-medium mt-6"><i className="fa-solid fa-money-check-dollar"></i> Payments: {payment.length}</h1>
</div>
</div>







        </div>
    );
};

export default UserHome;