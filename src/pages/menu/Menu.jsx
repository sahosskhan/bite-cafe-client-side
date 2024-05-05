import { Parallax } from "react-parallax";
import HeadingBanner from "../../components/template/HeadingBanner";
import img1 from '../../../assets/menu/banner3.jpg'
import bgImg from '../../../assets/menu/menu-bg.png'
import Loader from './../../components/loader/Loader';
import useMenu from "../../hooks/useMenu";
import OfferMenu from "../../components/menu/OfferMenu";
import BiryaniMenu from "../../components/menu/BiryaniMenu";
import SteakMenu from "../../components/menu/SteakMenu";
import PizzaMenu from "../../components/menu/PizzaMenu";
import BurgerMenu from "../../components/menu/BurgerMenu";
import PastaMenu from "../../components/menu/PastaMenu";
import DessertMenu from "../../components/menu/DessertMenu";
import { Helmet } from "react-helmet-async";

const Menu = () => {
    const [menu, loading] = useMenu([]);
    if (loading) return <Loader/>;
    return (
        <div style={{backgroundImage: `url(${bgImg})`}} >
                     <Helmet>
        <title>Menu|BiteCafe</title>
      </Helmet>
        <Parallax blur={{ min: -30, max: 30 }} bgImage={img1} bgImageAlt="menu banner" strength={200}>
       <HeadingBanner banner={{ title: 'Our Menu'}}></HeadingBanner>
       </Parallax>
<div  className="max-w-screen-2xl container mx-auto py-20 ">
{menu && <OfferMenu menu={menu}/>}
{menu && <BiryaniMenu menu={menu}/>}
{menu && <SteakMenu menu={menu}/>}
{menu && <PizzaMenu menu={menu}/>}
{menu && <BurgerMenu menu={menu}/>}
{menu && <PastaMenu menu={menu}/>}
{menu && <DessertMenu menu={menu}/>}




</div>

  
</div>
    );
};

export default Menu;