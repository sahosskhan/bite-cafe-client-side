
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useMyReview = () => {
    const { user } = useAuth();

    const { refetch, isLoading, data: review = [] } = useQuery({
        queryKey: ['reviews', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://bite-cafe-server-side.vercel.app/show-my-reviews?email=${user?.email}`)
            return res.json();
        },
    })

    return [review, refetch, isLoading]
};

export default useMyReview;