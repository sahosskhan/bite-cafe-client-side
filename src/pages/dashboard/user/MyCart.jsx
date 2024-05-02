import Swal from "sweetalert2";
import useCarts from "../../../hooks/useCarts";
import Loader from "../../../components/loader/Loader";
import HeadingTitle from "../../../components/template/HeadingTitle";
import { Link } from "react-router-dom";


const MyCart = () => {
    const [cart, refetch, isLoading] = useCarts();
    const total = cart.reduce((sum, item) => item.price + sum, 0);
    const roundedTotal = Math.round(total * 100) / 100; 
    if (isLoading) {
        return <Loader/>
    }
    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts-delete-item/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div>
            {
                cart?.length === 0? 
                   <div className=" flex justify-center items-center">
                   
                   <h1 className="text-5xl">😑 Items Not Found! Please Add Items In Your Cart</h1>
                   
                   </div>:
<div  className="min-h-screen">
<HeadingTitle text={{ short: 'Welcome to cart, wanna add more?', long: 'MY CARTS' }} />
<div className="uppercase font-semibold h-[60px] flex lg:flex-row flex-col justify-evenly lg:mb-0 mb-10 gap-4 items-center">
                <h3 className="text-2xl">Total Items: <span className="text-amber-800">{cart.length}</span></h3>
                <h3 className="text-2xl">Total Price: <span className="text-amber-800">${roundedTotal}</span></h3>
            </div>
    <div className="mb-8 flex justify-center items-center">
<Link to="/dashboard/payment">
{
    cart.length == 0?     <button className="group relative cursor-not-allowed  w-40  rounded-lg border-4 border-amber-800 p-3 text-black flex justify-between items-center text-xl  font-medium "><span >PAY NOW </span><span className="absolute p-1 right-3 box-content flex w-1/6 justify-center rounded-btn bg-amber-500 duration-300 group-hover:w-[78%]">
    <i className="text-xl  fa-solid fa-money-check-dollar"></i>
        </span></button>
        :
    <button className="group relative  w-56  rounded-lg border-4 border-amber-800 p-3 text-black flex justify-between items-center text-xl  font-medium "><span >Checkout Now</span><span className="absolute p-1 right-3 box-content flex w-1/6 justify-center rounded-btn bg-amber-500 duration-300 group-hover:w-[86%]">
    <i className="text-xl  fa-solid fa-money-check-dollar"></i>
        </span></button>
}
</Link>
    </div>
            <div className="overflow-x-auto  ">
    <table className="shadow-md max-w-screen-2xl container mx-auto ">
        <thead>
            <tr className="bg-amber-600 text-xl text-white">
            <th className="py-4 px-6  text-left border-b">#</th>
                <th className="py-4 px-6  text-left border-b">Image</th>
                <th className="py-4 px-6  text-left border-b">Name</th>
                <th className="py-4 px-6  text-left border-b">Price</th>
                <th className="py-4 px-6  border-b text-end">Action</th>
            </tr>
        </thead>

        <tbody>
        {
                            cart?.map((item, index) =>
            <tr  key={item._id} className="hover:bg-amber-50  transition-all  border-b  duration-500">
                <td className="py-4 px-6 border-b text-2xl font-medium">{index + 1}</td>
                <td className="py-4 px-4 flex justify-start">
                    <img src={item.image} alt="img" className="h-20 w-20 object-cover rounded-xl" />
                </td>
                <td className="py-4 px-6 border-b text-2xl font-medium">{item.name}</td>
                
                <td className="py-4 px-6 border-b text-2xl   font-medium">${item.price}</td>
                <td className="py-4 px-4 border-b text-end">
                    <button onClick={() => handleDelete(item)}  className="bg-red-500 hover:scale-110 scale-100 transition-all duration-500 text-white py-2 px-4 text-xl font-medium  rounded-md">Delete <i className="fa-solid fa-trash-can"></i></button>
                </td>
            </tr>)
}
        </tbody>
    </table>
</div>
</div>
            }


        </div>
    );
};

export default MyCart;