import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useUserData = () => {
    const axiosPublic = useAxiosPublic();
    const { data: userList = [], refetch, isLoading} = useQuery({ 
        queryKey: ['user'],
        queryFn: async() => {
            const res = await axiosPublic.get('/user-list');
            return res.data;
            
        }
        
    })
    
    
    return {userList, refetch, isLoading} ;
};

export default useUserData;