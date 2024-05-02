/* eslint-disable react/prop-types */


const HistoryTable = ({items,index}) => {
    const {transactionId,price,date,itemNames} = items;

const newdate = new Date(date);

const year = newdate.getFullYear();
const month = newdate.getMonth() + 1; // Adding 1 because getMonth() returns zero-based index
const day = newdate.getDate();

const simpleString = itemNames.join(', ');

    return (
        <>
        <tr  className="hover:bg-amber-50  transition-all  border-b  duration-500">
        <td className="py-4 px-6 border-b text-2xl font-medium">{index+1}</td>
                <td className="py-4 px-6 border-b text-2xl font-medium">{simpleString}</td>
                <td className="py-4 px-6 border-b text-2xl font-medium">{transactionId}</td>
                <td className="py-4 px-6 border-b text-2xl font-medium">{`${day}-${month}-${year}`}</td>
                <td className="py-4 px-6 border-b text-2xl   font-medium">${price}</td>
        </tr>
            
        </>
    );
};

export default HistoryTable;