import { useQuery } from "@tanstack/react-query";


const useAllPay = () => {
    const {data: allPay = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['allPay'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/all-payments');
            return res.json();
        }
    })

    return [allPay, loading, refetch]
};

export default useAllPay;