/* eslint-disable react/prop-types */
import HeadingTitle from "../template/HeadingTitle";
import MenuCard from "../template/MenuCard";


const OfferMenu = ({menu}) => {
    const item = menu.filter(index => index.category.includes('Offer'));
    return (
        <>
         <HeadingTitle text={{ short: "Don't miss it for taste", long: "TODAY'S OFFER" }} />    
         <div className="grid md:grid-cols-2 gap-10 my-16 p-2">
            
            {
                 item?.map(item => <MenuCard
                     key={item._id}
                     item={item}
                 />)
             }
     </div>
        </>
    );
};

export default OfferMenu;