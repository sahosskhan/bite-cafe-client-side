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
    element: <DashboardLayout/>, 
    children: [
      {
        path: 'my-cart', 
        element: <MyCart/>
      },
      {
        path: 'manage-user', 
        element: <AdminRoute><ManageUser/></AdminRoute> 
      },
      {
        path: 'add-items', 
        element: <AdminRoute><AddItems/></AdminRoute> 
      }
    ]
  },
  { path: "/create-account", element: <Register /> },
  { path: "/continue-in-with-account", element: <Login /> },
 
]);
