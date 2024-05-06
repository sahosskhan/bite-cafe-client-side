/* eslint-disable react/prop-types */


const RecommendCard = ({item}) => {
    const {_id, image, name, recipe, price } = item;
    return (
        <>
         <div className="max-w-md overflow-hidden hover:scale-110 scale-100 transition-all duration-500 bg-white rounded-lg shadow-lg dark:bg-gray-800">
<img className="object-cover w-full h-64 " src={image} alt="food" />
<p className="absolute right-0 top-2 px-4 py-1 w-fit rounded-lg rounded-r-none text-lg bg-amber-500 text-black font-medium">${price}</p>
  <div className="p-4">
    <h1 className="text-xl font-bold text-amber-600 uppercase ">{name}</h1>
    <p className="mt-1 text-lg font-normal text-gray-600 ">{recipe}</p>
  </div>
</div>   
        </>
    );
};

export default RecommendCard;