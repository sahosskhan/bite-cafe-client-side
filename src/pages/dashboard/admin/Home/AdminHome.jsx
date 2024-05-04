/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { FaUsers } from "react-icons/fa";
import Loader from './../../../../components/loader/Loader';
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { IoFastFood } from "react-icons/io5";
import { BsCartCheckFill } from "react-icons/bs";
import useAllPay from "../../../../hooks/useAllPay";
import useMenu from "../../../../hooks/useMenu";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend } from 'recharts';

const colors = ['#ff4233', '#1a831d', '#d3932f', '#50a3d4', '#6d68cd', '#ee82ee'];
const COLORS = ['#ff4233', '#1a831d', '#d3932f', '#50a3d4', '#6d68cd', '#ee82ee'];

const AdminHome = () => {
    const axiosPublic = useAxiosPublic();
const [allPay] = useAllPay();
const [menu] = useMenu();

const allMenuItems = allPay.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue.menuItems);
  }, []);

const categoryData = {};
menu.forEach(item => {
    if (allMenuItems.includes(item._id)) {
        if (!categoryData[item.category]) {
            categoryData[item.category] = { totalPrice: 0, quantity: 0 };
        }
        categoryData[item.category].totalPrice += item.price;
        categoryData[item.category].quantity++;
    }
});
const categoryDataArray = Object.entries(categoryData).map(([category, data]) => {
    const roundedTotalPrice = parseFloat(data.totalPrice.toFixed(1));
    return { category, totalPrice: roundedTotalPrice, quantity: data.quantity };
});

   // custom shape for the bar chart
   const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

// custom shape for the pie chart
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white"  textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const pieChartData = categoryDataArray.map(data => {
    return {name: data.category, value: data.totalPrice}
})


    const { data: stats = {}, isLoading } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosPublic.get('/admin-stats');
            return res.data;
        }
    });
    
    if (isLoading) {
        return <Loader/> 
    }
    const taka = stats.revenue
    const roundedTotal = Math.round(taka * 100) / 100; 



    return (
        <div>
<div className="grid grid-cols-4 gap-10">


<div className="text-white rounded-xl bg-fuchsia-600/70 flex justify-center items-center gap-6">
<FaMoneyCheckDollar size={65} />
<div>
<p className="text-4xl font-bold">{roundedTotal} $</p>
<p className="text-xl font-normal">Total Revenue</p>
</div>
</div>

<div className="text-white rounded-xl bg-yellow-600/70 flex justify-center items-center gap-6">
<FaUsers size={65}/>
<div>
<p className="text-4xl font-bold">{stats.users}</p>
<p className="text-xl font-normal">Total Customer</p>
</div>
</div>


<div className="text-white rounded-xl bg-pink-400 flex justify-center items-center gap-6">
<IoFastFood size={65} />

<div>
<p className="text-4xl font-bold">{stats.menuItems}</p>
<p className="text-xl font-normal">Total Menus</p>
</div>
</div>

<div className="text-white rounded-xl bg-sky-400 p-10 flex justify-center items-center gap-6">
<BsCartCheckFill size={65} />
<div>
<p className="text-4xl font-bold">{stats.orders}</p>
<p className="text-xl font-normal">Total Orders</p>
</div>
</div>




</div>


<div className="flex justify-around my-20">
    
<div className="">
                    <BarChart
                        width={780}
                        height={450}
                        data={categoryDataArray}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {categoryDataArray.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                            ))}
                        </Bar>
                    </BarChart>
                    <h1 className="text-center text-2xl mt-6 font-medium ">Each Category&apos;s Item Quantity From Total Order </h1>
                </div>

                <div className="">
                    <div className="flex text-center font-medium gap-4 text-xl justify-center items-center mb-2">
                        <h1 className="bg-[#ff4233] w-auto py-1 px-2 rounded-lg text-white">Pizza</h1>
                        <h1 className="bg-[#1a831d] w-auto py-1 px-2 rounded-lg text-white">Burger</h1>
                        <h1 className="bg-[#d3932f] w-auto py-1 px-2 rounded-lg text-white">Pasta</h1>
                        <h1 className="bg-[#50a3d4] w-auto py-1 px-2 rounded-lg text-white">Biryani</h1>
                        <h1 className="bg-[#6d68cd] w-auto py-1 px-2 rounded-lg text-white">Steak</h1>
                        <h1 className="bg-[#ee82ee] w-auto py-1 px-2 rounded-lg text-white">Dessert</h1>
                    </div>
                    <PieChart width={500} height={400}>
                        <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={190}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {pieChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                
                    </PieChart>
                    <h1 className="text-center text-2xl mt-6 font-medium ">Category Ratio From Total Revenue </h1>
                </div>
</div>
         

        </div>
    );
};

export default AdminHome;
