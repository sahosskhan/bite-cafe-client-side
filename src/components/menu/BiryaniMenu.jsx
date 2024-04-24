/* eslint-disable react/prop-types */

import { Parallax } from "react-parallax";
import MenuBanner from "../template/MenuBanner";
import MenuCard from "../template/MenuCard";
import CategoryBtn from "../template/CategoryBtn";

import img1 from '../../../assets/menu/biryani-bg.jpg'

const BiryaniMenu = ({menu}) => {
    const item = menu.filter(index => index.category.includes('Biryani'));
    return (
        <>
                  <div className="mt-16">
                 <Parallax blur={{ min: -30, max: 30 }} bgImage={img1} bgImageAlt="menu banner" strength={200}>
                 <MenuBanner banner={{ title: 'Biryani'}}></MenuBanner>
                 </Parallax>
               <div className="grid md:grid-cols-2 gap-10 my-16 p-2">
            
            {
                 item?.map(item => <MenuCard
                     key={item._id}
                     item={item}
                 />)
             }
     </div>  
     <div className="flex justify-center items-center">
     <CategoryBtn BText={{ title: 'ORDER YOUR FAVORITE FOOD' }} category="Biryani" />
</div> 
        </div>  
        </>
    );
};

export default BiryaniMenu ;