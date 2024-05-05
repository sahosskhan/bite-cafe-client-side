import { useState } from "react";
import { useParams } from "react-router-dom";
import useMenu from "../../hooks/useMenu";
import Loader from "../../components/loader/Loader";

import HeadingBanner from "../../components/template/HeadingBanner";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import img1 from '../../../assets/shop/banner2.jpg';
import bgImg from '../../../assets/menu/menu-bg.png';
import OrderTabData from "../../components/order/OrderTabData";
import { Parallax } from "react-parallax";
import { Helmet } from "react-helmet-async";
const Order = () => {
    const categories = ['Biryani', 'Steak', 'Pizza', 'Burger', 'Pasta', 'Dessert'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu, loading] = useMenu([]);
    if (loading) return <Loader/>;

    const Biryani = menu.filter(item => item.category === 'Biryani');
    const Steak = menu.filter(item => item.category === 'Steak');
    const Pizza = menu.filter(item => item.category === 'Pizza');
    const Burger = menu.filter(item => item.category === 'Burger');
    const Pasta = menu.filter(item => item.category === 'Pasta');
    const Dessert = menu.filter(item => item.category === 'Dessert');
    return (
        <div>
                     <Helmet>
        <title>Order|BiteCafe</title>
      </Helmet>
         <div style={{backgroundImage: `url(${bgImg})`}}>
            <Parallax blur={{ min: -30, max: 30 }} bgImage={img1} bgImageAlt="menu banner" strength={200}>
                <HeadingBanner banner={{ title: 'Order Now'}} />
            </Parallax> 

            <div className="max-w-screen-2xl container mx-auto">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <div className="flex justify-center items-center text-3xl mt-20 text-amber-500">
                    <TabList>
                    <Tab>Biryani</Tab>
                    <Tab>Steak</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Burger</Tab>
                    <Tab>Pasta</Tab>
                    <Tab>Dessert</Tab>
                </TabList>
                    </div>
                    <TabPanel>
                        <OrderTabData items={Biryani}/>
                    </TabPanel>
                    <TabPanel>
                        <OrderTabData items={Steak}/>
                    </TabPanel>
                    <TabPanel>
                        <OrderTabData items={Pizza}/>
                    </TabPanel>
                    <TabPanel>
                        <OrderTabData items={Burger}/>
                    </TabPanel>
                    <TabPanel>
                        <OrderTabData items={Pasta}/>
                    </TabPanel>
                    <TabPanel>
                        <OrderTabData items={Dessert}/>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
        </div>
    );
};

export default Order;