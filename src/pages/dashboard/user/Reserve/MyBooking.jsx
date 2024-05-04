import { useState } from "react";
import Loader from "../../../../components/loader/Loader";
import HeadingTitle from "../../../../components/template/HeadingTitle";
import useBookings from "../../../../hooks/useBookings";


const MyBooking = () => {
    const [booking,refetch] = useBookings();
    const [openModal, setOpenModal] = useState(false);









    
    return (
        <div>
        <div >
               {
      booking?.length === 0? 
          <div className=" flex justify-center items-center ">
          
          <h1 className="text-5xl">😑 Items Not Found!</h1>
          
          </div>:
<div>
<HeadingTitle text={{ short: 'hurry up they are waiting?', long: 'MANAGE ALL ITEMS' }} />
<div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
       <h3 className="text-2xl">Total Users:  <span className="text-amber-800 ml-2">{ booking?.length}</span></h3>
   </div>
   <div className="overflow-x-auto  ">
<table className="shadow-md container mx-auto ">
<thead>
   <tr className="bg-amber-600 text-xl text-white">
   <th className="py-4 px-6  text-left border-b">#</th>
       <th className="py-4 px-6  text-left border-b">Customer Details</th>
       <th className="py-4 px-3  text-left border-b">Date (yy-mm-dd)</th>
       <th className="py-4 px-6  text-left border-b">Time</th>
       <th className="py-4 px-6  text-left border-b">Guest</th>
       <th className="py-4 px-6  text-left border-b">Status</th>
       <th className="py-4 px-6  border-b text-end">Action</th>
       <th className="py-4 px-6  border-b text-end">Action</th>
   </tr>
</thead>

<tbody>
{
                   booking?.map((item, index) =>
   <tr  key={item._id} className="hover:bg-amber-50  transition-all  border-b  duration-500">
       <td className="py-4 px-6 border-b text-2xl font-medium">{index + 1}</td>
       <td className="py-4 px-6 border-b text-2xl font-medium">
       <>
        <button onClick={() => setOpenModal(true)} className="rounded-md bg-amber-500 px-5 py-[6px] text-white">View Customer Details</button>
        <div className={`fixed z-[100] flex items-center justify-center  ${openModal ? 'opacity-1 visible' : 'invisible opacity-0'} inset-0 bg-black/20 backdrop-blur-sm duration-100`}>
          <div className={`absolute max-w-md rounded-lg bg-white p-10 pb-5 drop-shadow-2xl dark:bg-gray-800 dark:text-white ${openModal ? 'scale-1 opacity-1 duration-300' : 'scale-0 opacity-0 duration-150'} `}>
            <h1 className="mx-auto mr-0 w-8 cursor-pointer fill-black dark:fill-white" onClick={() => setOpenModal(false)} >X</h1>
          
            
  
           <h1 >Name:{item.name}</h1>
           <h1 >Email:{item.email}</h1>
           <h1 >Phone: {item.phone}</h1>
  
      
            
          </div>
        </div>
      </>







       </td>


       <td className="py-4 px-6 border-b text-2xl   font-medium">{item.date}</td>
       <td className="py-4 px-6 border-b text-2xl   font-medium">{item.time}</td>
       <td className="py-4 px-6 border-b text-2xl   font-medium">{item.guest}</td>
       <td className="py-4 px-6 border-b text-2xl   font-medium">{item.status}</td>
       <td className="py-4 px-2 border-b text-end">
{ item.status == "pending" ? <button  className="bg-gray-500 disabled  cursor-wait hover:scale-110 scale-100 transition-all duration-500 text-white py-2 px-4 text-xl font-medium  rounded-md">Processing...</button>
 : <button  className="bg-green-500 hover:scale-110 scale-100 transition-all duration-500 text-white py-2 px-4 text-xl font-medium  rounded-md">Re Book</button>
}
           </td>

       <td className="py-4 px-5 border-b text-end">
           <button  className="bg-red-500 hover:scale-110 scale-100 transition-all duration-500 text-white py-2 px-4 text-xl font-medium  rounded-md">Cancel</button>
       </td>
   </tr>)
}
</tbody>
</table>
</div>
</div>
   }
</div>
</div>
    );
};

export default MyBooking;