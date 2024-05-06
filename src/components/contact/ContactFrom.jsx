import { FaPaperPlane } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useUserData from "../../hooks/useUserData";
import Swal from 'sweetalert2';

const ContactFrom = () => {
    const { userList } = useUserData();
const { user } = useAuth();


const FilterUserList = userList.filter((item) => item.email === user?.email);
const emailFilter = FilterUserList.map((user) => user.email).join(", ");
const nameFilter = FilterUserList.map((user) => user.name).join(", ");
const sendMessage = () => {
    // Show SweetAlert when button is clicked
    Swal.fire({
        icon: 'success',
        title: 'Congratulations!',
        text: 'Your message has been successfully sent.',
        showConfirmButton: false,
        timer: 1500
    });
};
    return (
        <div>
                <div className="container mx-auto bg-stone-300 p-10 ">
                    <h1 className="text-center text-amber-600 font-semibold uppercase text-3xl mb-10">Submit A Query To Contact Us</h1>
            <form onSubmit={sendMessage} className="rounded-lg " >
            
                    <div className="flex flex-row justify-between">
                    <div className="w-full space-y-2  px-4">
                        <label className="text-xl font-medium ">Your Full Name</label>
                        <input disabled  defaultValue={nameFilter} className="flex h-14 w-full text-black font-medium placeholder:text-gray-500 rounded-md border px-3 py-2 text-xl focus:outline-none" />
                    </div>
                    <div className="w-full space-y-2  px-4">
                        <label className="text-xl font-medium">Your Email Address</label>
                        <input disabled defaultValue={emailFilter} className="flex h-14 w-full text-black font-medium placeholder:text-gray-500 rounded-md border px-3 py-2 text-xl focus:outline-none" />
                    </div>

                    </div>

                <div className="w-full space-y-2  px-4 mt-4">
                        <label className="text-xl font-medium">Your Contact Number</label>
                        <input   type="text" placeholder="Enter your phone number" className="flex h-14 w-full text-black font-medium placeholder:text-gray-500 rounded-md border px-3 py-2 text-xl focus:outline-none" />
                    </div>



                    <div className="w-full space-y-2  px-4 mt-4">
                        <label className="text-xl font-medium">Your Message</label>
                        <textarea rows="5"  type="text" placeholder="Write your message here" className="flex h-36 w-full text-black font-medium placeholder:text-gray-500 rounded-md border px-3 py-2 text-xl focus:outline-none" > </textarea>
                    </div>


                <div className="text-center mt-8">
                    <button type="submit" className="btn hover:scale-110 scale-100 transition-all duration-500 btn-outline px-12 text-xl font-medium border-0 text-black hover:text-amber-500 bg-transparent border-t-4 hover:bg-transparent border-black border-t-transparent hover:border-amber-500 border-b-4">
                        Send Message
                        <FaPaperPlane className="ml-2" style={{ verticalAlign: 'middle' }} />
                    </button>
                </div>
            </form >

        </div > 
        </div>
    );
};

export default ContactFrom;