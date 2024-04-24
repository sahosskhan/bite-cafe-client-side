import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import Menu from "../pages/menu/Menu";
import Order from './../pages/order/Order';


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
  { path: "/create-account", element: <Register /> },
  { path: "/continue-in-with-account", element: <Login /> },
 
]);
