import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";


const useBookings = () => {
    const { user } = useAuth();

    const { refetch, isLoading, data: booking = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://bite-cafe-server-side.vercel.app/show-all-bookings?email=${user?.email}`)
            return res.json();
        },
    })

    return [booking, refetch, isLoading]
};

export default useBookings;