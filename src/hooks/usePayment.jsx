import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";


const usePayment = () => {
    const { user } = useAuth();

    const { refetch, isLoading, data: payment = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://bite-cafe-server-side.vercel.app/show-all-payments?email=${user?.email}`)
            return res.json();
        },
    })

    return [payment, refetch, isLoading]
};

export default usePayment;