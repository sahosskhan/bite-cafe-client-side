import { useEffect, useState } from "react"
import useAuth from "./useAuth";

const useAdmin = () => {
    const { user } = useAuth();
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/users/admin/${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    setIsAdmin(data.isAdmin);
                    setIsAdminLoading(false);
                })
        }
    }, [user])
    return [isAdmin, isAdminLoading]
}

export default useAdmin;