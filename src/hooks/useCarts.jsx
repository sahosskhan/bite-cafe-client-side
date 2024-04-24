import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../auth/AuthProvider";
import { useContext } from "react";


const useCarts = () => {
    const { user } = useContext(AuthContext);

    const { refetch, isLoading, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
            return res.json();
        },
    })

    return [cart, refetch, isLoading]

};

export default useCarts;