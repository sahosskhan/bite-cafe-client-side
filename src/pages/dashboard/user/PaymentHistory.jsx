import HeadingTitle from "../../../components/template/HeadingTitle";
import usePayment from "../../../hooks/usePayment";
import HistoryTable from "./Payment/HistoryTable";


const PaymentHistory = () => {
  const [ payment] = usePayment();
    return (
        <div >
          <HeadingTitle text={{ short: 'eat to live, live to pay', long: 'PAYMENT History' }} />  


          <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
                <h3 className="text-2xl">Total Payments:  <span className="text-amber-800 ml-2">{payment?.length}</span></h3>
            </div>


          <div className="overflow-x-auto  ">
    <table className="shadow-md container mx-auto  ">
        <thead>
            <tr className="bg-amber-600 text-xl text-white">
            <th className="py-4 px-6  text-left border-b">#</th>
            <th className="py-4 px-6  text-left border-b">Items</th>
                <th className="py-4 px-6  text-left border-b">Transaction ID</th>
                <th className="py-4 px-6  text-left border-b">Date</th>
                <th className="py-4 px-6  text-left border-b">Total Price</th>
            </tr>
        </thead>

        <tbody>
        {payment?.map((items,index) => (
    <HistoryTable key={items._id} items={items} index={index}/>
    ))}
        </tbody>
    </table>
</div>


        </div>
    );
};

export default PaymentHistory;
