import { BiSolidPhoneCall } from "react-icons/bi";
import { FaCalendarDay, FaClock, FaTruck } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoChatboxEllipses } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";


const ContactCard = () => {
    return (
 <div className="container mx-auto pb-16">
           <div className=" grid grid-cols-3 gap-10">

<section>
<div className="bg-white h-full  pb-20 rounded-lg">
<div className="bg-amber-600/80 rounded-lg w-full justify-center items-center flex p-10">
<BiSolidPhoneCall size={50} />
</div>
<div className="text-center p-10 mx-20 h-auto  w-auto space-y-4 bg-gray-200">
    <h1 className="text-2xl uppercase font-medium">Hotline</h1>
    <p className="text-lg font-normal "><span>+880 1778 030482</span> <br />
    <span>+880 1316 973995</span></p>
</div>
</div>
</section>


<section>
<div className="bg-white pb-20 h-full rounded-lg">
<div className="bg-amber-600/80 rounded-lg w-full justify-center items-center flex p-10">
<FaMapLocationDot size={50} />
</div>
<div className="text-center p-10 mx-20  w-auto space-y-4 bg-gray-200">
    <h1 className="text-2xl uppercase font-medium">ADDRESS</h1>
    <p className="text-lg font-normal">20/1 Lawrence Lane, Thanapara, Kushtia</p>
</div>
</div>
</section>



<section>
<div className="bg-white pb-20 h-full rounded-lg">
<div className="bg-amber-600/80 rounded-lg w-full justify-center items-center flex p-10">
<FaClock size={50} />
</div>
<div className="text-center p-10 mx-20   w-auto space-y-4 bg-gray-200">
    <h1 className="text-2xl uppercase font-medium">WORKING HOURS</h1>
    <p className="text-lg font-normal">Mon - Fri: 08:00 - 22:00 <br />
Sat - Sun: 10:00 - 23:00</p>
</div>
</div>
</section>


<section>
<div className="bg-white pb-20 h-full rounded-lg">
<div className="bg-amber-600/80 rounded-lg w-full justify-center items-center flex p-10">
<MdEmail size={50} />
</div>
<div className="text-center p-10 mx-20   w-auto space-y-4 bg-gray-200">
    <h1 className="text-2xl uppercase font-medium">Email Address</h1>
    <p className="text-lg font-normal">support@bitecafe.com</p>
</div>
</div>
</section>


<section>
<div className="bg-white  h-full rounded-lg">
<div className="bg-amber-600/80 rounded-lg w-full justify-center items-center flex p-10">
<FaCalendarDay size={50} />
</div>
<div className="text-center p-10 mx-20   w-auto space-y-4 bg-gray-200">
    <h1 className="text-2xl uppercase font-medium">Booking Helpline</h1>
    <p className="text-lg font-normal">+880 1780 326391</p>
</div>
</div>
</section>

<section>
<div className="bg-white pb-20 h-full rounded-lg">
<div className="bg-amber-600/80 rounded-lg w-full justify-center items-center flex p-10">
<FaTruck size={50} />
</div>
<div className="text-center p-10 mx-20   w-auto space-y-4 bg-gray-200">
    <h1 className="text-2xl uppercase font-medium">Home Delivery</h1>
    <p className="text-lg font-normal">+880 1736 316678</p>
</div>
</div>
</section>



        </div>
 </div>
    );
};

export default ContactCard;