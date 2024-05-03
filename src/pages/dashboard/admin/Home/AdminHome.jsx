import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import {  FaDollarSign, FaUsers } from "react-icons/fa";
import Loader from './../../../../components/loader/Loader';


const AdminHome = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();

    const { data: stats = {}, isLoading } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosPublic.get('/admin-stats');
            return res.data;
        }
    });
    
    if (isLoading) {
        return <Loader/> // or any loading indicator you prefer
    }
    const taka = stats.revenue
    const roundedTotal = Math.round(taka * 100) / 100; 
    return (
        <div>
<div className="flex justify-center items-center gap-20">


<div className="text-white rounded-xl bg-fuchsia-600/70 p-10 flex justify-center items-center gap-2">
<FaDollarSign size={75}/>
<div>
<p className="text-4xl">{roundedTotal}</p>
<p className="text-xl font-medium">Total Revenue</p>
</div>
</div>

<div className="text-white rounded-xl bg-yellow-600/50 p-10 flex justify-center items-center gap-5">
<FaUsers size={75}/>
<div>
<p className="text-4xl">{stats.users}</p>
<p className="text-xl font-medium">Total Users</p>
</div>
</div>


<div className="text-white rounded-xl bg-pink-400 p-10 flex justify-center items-center gap-2">
<FaDollarSign size={75}/>
<div>
<p className="text-4xl">{stats.menuItems}</p>
<p className="text-xl font-medium">Total Menus</p>
</div>
</div>

<div className="text-white rounded-xl bg-sky-400 p-10 flex justify-center items-center gap-2">
<FaDollarSign size={75}/>
<div>
<p className="text-4xl">{stats.orders}</p>
<p className="text-xl font-medium">Total Orders</p>
</div>
</div>




</div>


        </div>
    );
};

export default AdminHome;
