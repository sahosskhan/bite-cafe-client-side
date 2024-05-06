/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const CategoryBtn = ({ BText, category }) => {
    return (
        <>
             <Link to={`/order-here/${category}`} className="btn hover:scale-110 scale-100 transition-all duration-500 btn-outline px-12 text-xl font-medium border-0 text-black hover:text-amber-500 bg-transparent border-t-4 hover:bg-transparent border-black border-t-transparent hover:border-amber-500 border-b-4">{BText?.title}</Link> 
        </>
    );
};

export default CategoryBtn;