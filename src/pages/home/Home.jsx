import bgImg from '../../../assets/menu/menu-bg.png';
import About from '../../components/home/About';
import CategorySwipe from '../../components/home/CategorySwipe';
import SliderMain from '../../components/home/SliderMain';
import HeadingTitle from './../../components/template/HeadingTitle';
import PopularMenu from './../../components/home/PopularMenu';
import Delivery from './../../components/home/Delivery';
import Recommend from '../../components/home/Recommend';
import Testimonial from '../../components/home/Testimonial';

const Home = () => {
    return (
        <div style={{backgroundImage: `url(${bgImg})`}}>
       <SliderMain/>
       <HeadingTitle text={{ short: 'From 11:00am to 11:00pm', long: 'ORDER ONLINE' }} />
       <CategorySwipe/>
       <About/>
       <HeadingTitle text={{ short: 'Must be Check it out', long: 'POPULAR MENU' }} />
       <PopularMenu/>
       <Delivery/>
       <HeadingTitle text={{ short: 'Recommended by our chef', long: 'RECOMMENDS MENU' }} />
       <Recommend/>
       <HeadingTitle text={{ short: 'What our clients say', long: 'OUR TESTIMONIALS' }} />
       <Testimonial/>
        </div>
    );
};

export default Home;