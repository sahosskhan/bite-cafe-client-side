import useMenu from "../../hooks/useMenu";
import CLoader from "../loader/CLoader";
import RecommendCard from "../template/RecommendCard";


const Recommend = () => {
    const [menu, loading] = useMenu([]);
    if (loading) return <CLoader/>;
    const menus = menu.filter(index => index.category.includes('Recommended'));
    return (
        <>
                  <div className="max-w-screen-2xl container mx-auto p-2">
          <div className=" grid md:grid-cols-3 gap-10 place-items-center md:w-10/12 md:mx-auto">

{
    menus?.map(item => <RecommendCard
        key={item._id}
        item={item}
    />)
    
}
</div>  
<div className="flex justify-center items-center my-8">
<button className="btn hover:scale-110 scale-100 transition-all duration-500 btn-outline px-12 text-xl font-medium border-0 text-black hover:text-amber-500 bg-transparent hover:bg-transparent border-black hover:border-amber-500 border-b-4">Go For Order</button>
        </div>  
        </div>
        </>
    );
};

export default Recommend;