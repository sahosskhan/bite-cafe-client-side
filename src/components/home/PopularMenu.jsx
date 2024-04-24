import useMenu from "../../hooks/useMenu";
import CLoader from "../loader/CLoader";
import Button from "../template/Button";
import MenuCard from "../template/MenuCard";


const PopularMenu = () => {
    const [menu, loading] = useMenu([]);
    if (loading) return <CLoader/>;
    const menus = menu.filter(index => index.category.includes('Popular'));
    return (
        <>
               <section className="max-w-screen-2xl container mx-auto p-2">
            <div className="grid md:grid-cols-2 gap-10 ">
                {
                    menus?.map(item => <MenuCard
                        key={item._id}
                        item={item}
                    />)
                }
            </div>
           <div className="flex justify-center mt-10">
          <Button BText={{ title: 'View Full Menu', routes: '/our-menu'}}/>
           </div>
        </section>  
        </>
    );
};

export default PopularMenu;