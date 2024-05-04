import Swal from "sweetalert2";
import Loader from "../../../components/loader/Loader";
import HeadingTitle from "../../../components/template/HeadingTitle";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const [menu, loading, refetch] = useMenu();
    if (loading) {
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
                fetch(`http://localhost:5000/menu-delete-one/${item._id}`, {
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
                 <div >
                        {
               menu?.length === 0? 
                   <div className=" flex justify-center items-center ">
                   
                   <h1 className="text-5xl">😑 Items Not Found!</h1>
                   
                   </div>:
<div>
<HeadingTitle text={{ short: 'hurry up they are waiting?', long: 'MANAGE ALL ITEMS' }} />
<div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
                <h3 className="text-2xl">Total Users:  <span className="text-amber-800 ml-2">{menu?.length}</span></h3>
            </div>
            <div className="overflow-x-auto  ">
    <table className="shadow-md max-w-screen-2xl container mx-auto  mt-6 ">
        <thead>
            <tr className="bg-amber-600 text-xl text-white">
            <th className="py-4 px-6  text-left border-b">#</th>
                <th className="py-4 px-6  text-left border-b">Image</th>
                <th className="py-4 px-6  text-left border-b">Name</th>
                <th className="py-4 px-6  text-left border-b">Category</th>
                <th className="py-4 px-6  text-left border-b">Price</th>
                <th className="py-4 px-6  border-b text-end">Action</th>
                <th className="py-4 px-6  border-b text-end">Action</th>
            </tr>
        </thead>

        <tbody>
        {
                            menu?.map((item, index) =>
            <tr  key={item._id} className="hover:bg-amber-50  transition-all  border-b  duration-500">
                <td className="py-4 px-6 border-b text-2xl font-medium">{index + 1}</td>
                <td className="py-4 px-4 flex justify-start">
                    <img src={item.image} alt="img" className="h-20 w-20 object-cover rounded-xl" />
                </td>
                <td className="py-4 px-6 border-b text-2xl font-medium">{item.name}</td>
                <td className="py-4 px-6 border-b text-2xl font-medium">{item.category}</td>
                <td className="py-4 px-6 border-b text-2xl   font-medium">${item.price}</td>
                <td className="py-4 px-2 border-b text-end">

              <Link to={`/dashboard/edit-items/${item._id}`}>
              <button  className="bg-green-500 hover:scale-110 scale-100 transition-all duration-500 text-white py-2 px-4 text-xl font-medium  rounded-md"><i className="fa-regular fa-pen-to-square"></i></button>
              </Link>
                    
                    </td>
                <td className="py-4 px-5 border-b text-end">
                    <button onClick={() => handleDelete(item)}  className="bg-red-500 hover:scale-110 scale-100 transition-all duration-500 text-white py-2 px-4 text-xl font-medium  rounded-md"><i className="fa-solid fa-trash-can"></i></button>
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

export default ManageItems;