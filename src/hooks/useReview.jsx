import { useEffect, useState } from "react";


const useReview = () => {
    const [review, setReview] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/show-all-reviews')
            .then(res => res.json())
            .then(data => {
                setReview(data);
                setLoading(false);
            });
    }, [])
    return [review, loading]
};

export default useReview;