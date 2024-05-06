import { useQuery } from "@tanstack/react-query";


const useAllPay = () => {
    const {data: allPay = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['allPay'],
        queryFn: async() => {
            const res = await fetch('https://bite-cafe-server-side.vercel.app/all-payments');
            return res.json();
        }
    })

    return [allPay, loading, refetch]
};

export default useAllPay;