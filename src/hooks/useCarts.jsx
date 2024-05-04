import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";


const useCarts = () => {
    const { user } = useAuth();

    const { refetch, isLoading, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/show-all-carts?email=${user?.email}`)
            return res.json();
        },
    })

    return [cart, refetch, isLoading]

};

export default useCarts;