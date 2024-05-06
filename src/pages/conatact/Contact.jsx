import HeadingTitle from "../../components/template/HeadingTitle";
import bgImg from '../../../assets/menu/menu-bg.png'
import { Parallax } from "react-parallax";
import HeadingBanner from "../../components/template/HeadingBanner";
import img1 from '../../../assets/contact/banner.jpg'
import ContactCard from "../../components/contact/ContactCard";
import ContactFrom from './../../components/contact/ContactFrom';
const Contact = () => {
    return (
        <div style={{backgroundImage: `url(${bgImg})`}} >
 <Parallax blur={{ min: -30, max: 30 }} bgImage={img1} bgImageAlt="menu banner" strength={200}>
       <HeadingBanner banner={{ title: 'Contact Us'}}></HeadingBanner>
       </Parallax>
     <HeadingTitle text={{ short: 'Need any query', long: 'We Are Available' }} />

     <ContactCard/>
     <ContactFrom/>
        </div>
    );
};

export default Contact;