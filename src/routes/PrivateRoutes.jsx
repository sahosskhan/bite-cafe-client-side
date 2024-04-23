import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from './../components/loader/Loader';


const PrivateRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <Loader/>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/continue-in-with-account" state={{from: location}} replace></Navigate>

};

export default PrivateRoutes;