/* eslint-disable react/prop-types */

import { useState } from "react";


const HistoryTable = ({items,index}) => {
    const {transactionId,price,date, quantity,itemNames} = items;
    const [openModal, setOpenModal] = useState(false);
    const newdate = new Date(date);
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    const formattedDate = newdate.toLocaleDateString('en-US', options);




    return (
        <>
        <tr  className="hover:bg-amber-50  transition-all  border-b  duration-500">
        <td className="py-4 px-6 border-b text-2xl font-medium">{index+1}</td>
                <td className="py-4 px-6  border-b text-2xl font-medium">
                    
                <>
        <button onClick={() => setOpenModal(true)} className="rounded-md bg-amber-500 px-5 py-[6px] text-white">Ordered Items</button>
        <div className={`fixed z-[100] flex items-center justify-center  ${openModal ? 'opacity-1 visible' : 'invisible opacity-0'} inset-0 bg-black/20 backdrop-blur-sm duration-100`}>
          <div className={`absolute max-w-md rounded-lg bg-white p-10 pb-5 drop-shadow-2xl dark:bg-gray-800 dark:text-white ${openModal ? 'scale-1 opacity-1 duration-300' : 'scale-0 opacity-0 duration-150'} `}>
            <h1 className="mx-auto mr-0 w-8 cursor-pointer fill-black dark:fill-white" onClick={() => setOpenModal(false)} >X</h1>
           
            <h className="my-6">Ordered Items: {quantity}</h>
            {itemNames.map((item, index) => (
     <ol className="list-disc p-2 mt-2" key={index}>
           <li >{item}</li>
     </ol>
      ))}
            
          </div>
        </div>
      </>
              
    </td>
                <td className="py-4 px-6 border-b text-2xl font-medium">{transactionId}</td>
                <td className="py-4 px-6 border-b text-2xl font-medium">{formattedDate}</td>
                <td className="py-4 px-6 border-b text-2xl   font-medium">${price}</td>
        </tr>
            
        </>
    );
};

export default HistoryTable;