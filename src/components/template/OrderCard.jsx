/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useCarts from "../../hooks/useCarts";


const OrderCard = ({item}) => {
    const {user} = useAuth();
    const navigate = useNavigate();
    const [, refetch] = useCarts();
    const location = useLocation();
    const axiosPublic = useAxiosPublic();
        const {_id, image, name, recipe, price } = item;
        const handleAddToCart = () => {

    if(user && user.email){
     const cartItem = {
      menuId: _id,
      email: user.email,
      name,
      image,
      recipe,
      price,
     }
     axiosPublic.post('/carts-add-item', cartItem)
    .then(res=>{
      console.log(res.data);
    if(res.data.insertedId){
        refetch()
      Swal.fire({
        icon:'success',
        title: 'Congratulations!',
        text:`${name} added to your cart`,
        showConfirmButton: false,
        timer: 1500
      })
    }
    })
    
    
    }
    else{
      Swal.fire({
        title: 'Please login to order the food',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login now!'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/continue-in-with-account', {state: {from: location}})
        }
      })
    }
        }
    return (
        <>
           <div className="max-w-md overflow-hidden hover:scale-110 scale-100 transition-all duration-500 bg-white rounded-lg shadow-lg dark:bg-gray-800">
<img className="object-cover w-full h-64 " src={image} alt="food" />
<p className="absolute right-0 top-2 px-4 py-1 w-fit rounded-lg rounded-r-none text-lg bg-amber-500 text-black font-medium">${price}</p>
  <div className="p-4">
    <h1 className="text-xl font-bold text-amber-600 uppercase ">{name}</h1>
    <p className="mt-1 text-lg font-normal text-gray-600 ">{recipe}</p>
  </div>
<div className="flex justify-center items-center mb-8">
<button onClick={handleAddToCart}  className="btn hover:scale-110 scale-100 transition-all duration-500 btn-outline px-12 text-xl font-medium border-0 text-black hover:text-amber-500 bg-transparent hover:bg-transparent border-black hover:border-amber-500 border-b-4">Add To Cart</button>


</div>
</div> 
        </>
    );
};

export default OrderCard;