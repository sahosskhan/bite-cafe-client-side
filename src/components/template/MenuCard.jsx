/* eslint-disable react/prop-types */


const MenuCard = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <>
              <div className="flex hover:scale-110 scale-100 transition-all duration-500 lg:flex-row flex-col justify-center gap-12 items-center">
        <img  className="w-52  rounded-2xl" src={image} alt="" />
        <div>
            <h1 className="uppercase  lg:text-start text-center text-xl text-amber-500 font-semibold">{name}</h1>
            <p className="text-lg  lg:text-start text-center font-normal text-gray-500">{recipe}</p>
        </div>
        <p className="text-black bg-amber-600 text-center py-1 px-4 rounded-full text-lg font-bold">{price}$</p>
    </div> 
        </>
    );
};

export default MenuCard;