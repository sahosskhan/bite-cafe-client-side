/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import useAdmin from './../hooks/useAdmin';
import Loader from "../components/loader/Loader";



const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <Loader/>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default AdminRoute;