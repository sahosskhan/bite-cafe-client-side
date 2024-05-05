import { FaRocket, FaStar } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import useUserData from "../../../hooks/useUserData";
import { useForm } from "react-hook-form";
import HeadingTitle from "../../../components/template/HeadingTitle";
import Rating from "react-rating";
import Swal from "sweetalert2";
import { useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const { userList } = useUserData();
    const { user } = useAuth();
    const [star, setStar] = useState(0)
    const axiosPublic = useAxiosPublic();

    const FilterUserList = userList.filter((item) => item.email === user?.email);
    const nameFilter = FilterUserList.map((user) => user.name).join(", ");
    const emailFilter = FilterUserList.map((user) => user.email).join(", ");
    const onSubmit = (data) => {
        const {reviewText} = data;
        const ReviewData = {
            name: nameFilter,
            email: emailFilter,
            details: reviewText,
            rating: star
        };

axiosPublic.post('/reviews-data-send', ReviewData)
        .then(res => {
            if (res.data.insertedId) {
                reset();
                Swal.fire({
                    icon: 'success',
                    title: "Thanks!",
                    text: "Your Review Is Successfully Added.",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
    }
    return (
        <div>
                    <HeadingTitle text={{ short: 'Share what is in your mind', long: 'ADD A Review' }} />

                    <div className="container mx-auto ">

<p className="text-2xl my-6 font-medium text-center">Rate Us On Our Providing Service!</p>
<div className="text-center">
    <Rating
        emptySymbol={<FaStar color="#ccc" size="2em" />} // Set the empty star icon and color
        fullSymbol={<FaStar color="#d1a054" size="2em" />} // Set the full star icon and color
        onChange={(rate) => {
            Swal.fire({
                icon: 'success',
                title: "Thank you!💐",
                text: `You have given ${rate} 🌟 ratings.`,
                showConfirmButton: false,
                 timer: 1000

            })
            setStar(rate)

        }}
    />
</div>
</div>


                    
         <form onSubmit={handleSubmit(onSubmit)}  className="rounded-lg container mx-auto" >

                    <div className="mb-4">
                        <label className="text-xl font-medium">Your Full Name</label>
                        <input disabled
                            className="flex  h-14  mt-4 w-full text-black font-medium placeholder:text-gray-500 rounded-md border px-3 py-2 text-xl focus:outline-none"
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your Name"
                            defaultValue={nameFilter}
                        />
                    </div>


                    <div className="mb-4">
                    <label className="text-xl font-medium"> Kindly express your feelings about us in a short way</label>
               
                        <textarea
                            className="flex h-28 mt-4 w-full text-black font-medium placeholder:text-gray-500 rounded-md border-2  px-3 py-2 text-xl focus:outline-none"
                            type="text"
                            rows="5"
                            {...register("reviewText", { required: true })}
                            placeholder="tell us your feelings about us"
                        />
                    </div>

                    <div className="text-center mt-8">
                        <button className='btn bg-amber-500 text-xl border-none transition-all duration-500 flex justify-center items-center'>
                            Send Review
                            <FaRocket className="ml-2" />
                        </button>
                    </div>
                </form >
        </div>
    );
};

export default Review;