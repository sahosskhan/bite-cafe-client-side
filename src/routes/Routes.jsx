import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import Menu from "../pages/menu/Menu";
import Order from './../pages/order/Order';
import DashboardLayout from "../layouts/DashboardLayout";
import MyCart from "../pages/dashboard/user/MyCart";
import ManageUser from "../pages/dashboard/admin/ManageUser";
import AdminRoute from "./AdminRoute";
import AddItems from "../pages/dashboard/admin/AddItems";
import ManageItems from "../pages/dashboard/admin/ManageItems";
import EditItems from "../pages/dashboard/admin/EditItems";
import Payment from "../pages/dashboard/user/Payment/Payment";
import PaymentHistory from "../pages/dashboard/user/PaymentHistory";
import PrivateRoutes from "./PrivateRoutes";
import UserHome from "../pages/dashboard/user/Home/UserHome";
import AdminHome from './../pages/dashboard/admin/Home/AdminHome';
import Reservation from "../pages/dashboard/user/Reserve/Reservation";
import MyBooking from "../pages/dashboard/user/Reserve/MyBooking";
import ManageBooking from "../pages/dashboard/admin/ManageBooking";





export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/our-menu", element: <Menu/> },
      { path: "/order-here/:category", element: <Order /> }, 
    
    ],
  },
  {
    path: 'dashboard',
    element: <PrivateRoutes><DashboardLayout/></PrivateRoutes> , 
    children: [
      {
        path: 'user-home', 
        element: <UserHome/>
      },
      {
        path: 'my-cart', 
        element: <MyCart/>
      },
      {
        path: 'payment', 
        element: <Payment/>
      },
      {
        path: 'payment-history',  
        element: <PaymentHistory/>
      },
      {
        path: 'reservation', 
        element: <Reservation/>
      },
      {
        path: 'my-booking', 
        element: <MyBooking/>
      },
      {
        path: 'admin-home', 
        element: <AdminRoute><AdminHome/></AdminRoute> 
      },
      {
        path: 'manage-user', 
        element: <AdminRoute><ManageUser/></AdminRoute> 
      },
      {
        path: 'manage-bookings', 
        element: <AdminRoute><ManageBooking/></AdminRoute> 
      },
      {
        path: 'add-items', 
        element: <AdminRoute><AddItems/></AdminRoute> 
      },
      {
        path: 'manage-items', 
        element: <AdminRoute><ManageItems/></AdminRoute> 
      },
      {
        path: 'edit-items/:id', 
        element: <AdminRoute><EditItems/></AdminRoute>,
        loader: ({params})=> fetch (`http://localhost:5000/show-one-menu/${params.id}`) 

      }
    ]
  },
  { path: "/create-account", element: <Register /> },
  { path: "/continue-in-with-account", element: <Login /> },
 
]);
