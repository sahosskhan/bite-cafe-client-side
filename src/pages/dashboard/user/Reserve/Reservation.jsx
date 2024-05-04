import HeadingTitle from "../../../../components/template/HeadingTitle";
import useUserData from './../../../../hooks/useUserData';
import useAuth from './../../../../hooks/useAuth';
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaTable } from "react-icons/fa";
import Swal from "sweetalert2";


const Reservation = () => {
    const { register, handleSubmit, reset } = useForm();
    const { userList } = useUserData();
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate()

    const options = [1, 2, 4, 6, 8, 10];


    const FilterUserList = userList.filter((item) => item.email === user?.email);
    const emailFilter = FilterUserList.map((user) => user.email).join(", ");
    const nameFilter = FilterUserList.map((user) => user.name).join(", ");
  
  
    const onSubmit = (data) => {
        const { bookingDate, bookingTime, bookingPhone ,bookingGuest} = data;
        const BookingData = {
            date: bookingDate,
           time: bookingTime,
           phone: bookingPhone,
            guest: bookingGuest,
            email: emailFilter,
            name: nameFilter,
            status: "pending",
        };
        axiosPublic.post('/bookings-data-send', BookingData)
        .then(res => {
            if (res.data.insertedId) {
                reset();
                Swal.fire({
                    icon: 'success',
                    title: "Congratulations!",
                    text: "Booking Request Is Successfully Send.",
                    footer: "Please Wait For Confirmation",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/dashboard/my-booking');
            }
        })
  
    };





    return (
        <div>
             <HeadingTitle text={{ short: 'What is new in menu?', long: 'ADD AN ITEM' }} />
            
<section>


<form onSubmit={handleSubmit(onSubmit)} className="rounded-lg p-10">
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
                    <div className="w-full  px-4">
                        <label className="text-xl font-medium">Your Full Name</label>
                        <input defaultValue={nameFilter} disabled className="flex h-14 w-full text-black font-medium placeholder:text-gray-500 rounded-md border px-3 py-2 text-xl focus:outline-none" />
                    </div>

                    <div className="w-full  px-4">
                        <label className="text-xl font-medium">Your Email Address</label>
                        <input defaultValue={emailFilter} disabled className="flex h-14 w-full text-black font-medium placeholder:text-gray-500 rounded-md border px-3 py-2 text-xl focus:outline-none" />
                    </div>

                    <div className="w-full  px-4">
                        <label className="text-xl font-medium">Your Contact Number</label>
                        <input {...register("bookingPhone", { required: true })}   type="text" placeholder="Phone number" className="flex h-14 w-full text-black font-medium placeholder:text-gray-500 rounded-md border px-3 py-2 text-xl focus:outline-none" />
                    </div>

                    <div className="w-full  px-4 mb-4 md:mb-0 ">
                        <label className="text-xl font-medium">Reservation Date</label>
                        <input {...register("bookingDate", { required: true })} type="date" className="flex h-14 w-full text-black font-medium placeholder:text-gray-500 rounded-md border px-3 py-2 text-xl focus:outline-none" />
                    </div>

                    <div className="w-full  px-4 mb-4 md:mb-0 ">
                        <label className="text-xl font-medium">Reservation Time</label>
                        <input {...register("bookingTime", { required: true })} type="time" className="flex h-14 w-full text-black font-medium placeholder:text-gray-500 rounded-md border px-3 py-2 text-xl focus:outline-none" />
                    </div>

                    <div className="w-full  px-4 mb-4 md:mb-0 mt-2 ">
                        <label className="text-xl font-medium">Select Guests For Reservation</label>
                        <select {...register("bookingGuest", { required: true })}  className="form-control border-2 mt-2 border-gray-200 block w-full rounded-md py-2 px-3 text-gray-700 placeholder-gray-400">
                            {options.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="flex justify-center items-baseline mt-8 ">
                    <button className="text-2xl flex justify-center items-center gap-3 p-3 rounded-lg font-medium w-auto h-14 bg-amber-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000">
                        <span className="absolute bg-amber-600 size-96 rounded-full group-hover:scale-100 scale-0 -z-10 left-10 top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
                        <span className="absolute bg-amber-800 size-96 -left-8 -top-7 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
                        Book A Table <span> <FaTable></FaTable> </span>
                    </button>
                </div>
            </form>





</section>

       
        </div>
    );
};

export default Reservation;