import { useQuery } from "@tanstack/react-query";



const useAllBookings = () => {
    const {data: allBookings= [], isLoading: loading, refetch} = useQuery({
        queryKey: ['allBookings'],
        queryFn: async() => {
            const res = await fetch('https://bite-cafe-server-side.vercel.app/get-all-bookings');
            return res.json();
        }
    })

    return [allBookings, loading, refetch]
};

export default useAllBookings;