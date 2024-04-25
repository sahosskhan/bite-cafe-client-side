import Loader from "../../../components/loader/Loader";
import HeadingTitle from "../../../components/template/HeadingTitle";
import useUserData from "../../../hooks/useUserData";


const ManageUser = () => {
    const {userList, refetch, isLoading} = useUserData();
    
    if (isLoading) {
        return <Loader/>
    }
    return (
        <div >
                        {
                userList?.length === 0? 
                   <div className=" flex justify-center items-center min-h-screen">
                   
                   <h1 className="text-5xl">😑 User Not Found!</h1>
                   
                   </div>:
<div  className="min-h-screen">
<HeadingTitle text={{ short: 'how many user do you I have?', long: 'MANAGE USERS' }} />
<div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
                <h3 className="text-2xl">Total Users:  <span className="text-amber-800 ml-2">{userList?.length}</span></h3>
            </div>
            <div className="overflow-x-auto  ">
    <table className="shadow-md max-w-screen-2xl container mx-auto  mt-6 ">
        <thead>
            <tr className="bg-amber-600 text-xl text-white">
            <th className="py-4 px-6  text-left border-b">#</th>
                <th className="py-4 px-6  text-left border-b">Name</th>
                <th className="py-4 px-6  text-left border-b">Email</th>
                <th className="py-4 px-6  text-left border-b">Role</th>
                <th className="py-4 px-6  border-b text-end">Action</th>
                <th className="py-4 px-6  border-b text-end">Action</th>
            </tr>
        </thead>

        <tbody>
        {
                            userList?.map((item, index) =>
            <tr  key={item._id} className="hover:bg-amber-50 hover:scale-110 scale-100 transition-all  border-b  duration-500">
                <td className="py-4 px-6 border-b text-2xl font-medium">{index + 1}</td>
                <td className="py-4 px-6 border-b text-2xl font-medium">{item.name}</td>
                <td className="py-4 px-6 border-b text-2xl font-medium">{item.email}</td>
                <td className="py-4 px-6 border-b text-2xl   font-medium">{item.role}</td>
                <td className="py-4 px-2 border-b text-end">
                    <button className="bg-green-500 hover:scale-110 scale-100 transition-all duration-500 text-white py-2 px-4 text-xl font-medium  rounded-md">Make Admin <i className="fa-solid fa-user-pen"></i></button>
                </td>
                <td className="py-4 px-2 border-b text-end">
                    <button className="bg-red-500 hover:scale-110 scale-100 transition-all duration-500 text-white py-2 px-4 text-xl font-medium  rounded-md">Delete <i className="fa-solid fa-trash-can"></i></button>
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

export default ManageUser;