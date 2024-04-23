import bgImg from '../../../assets/menu/menu-bg.png';
import About from '../../components/home/About';
import CategorySwipe from '../../components/home/CategorySwipe';
import SliderMain from '../../components/home/SliderMain';
import HeadingTitle from './../../components/template/HeadingTitle';

const Home = () => {
    return (
        <div style={{backgroundImage: `url(${bgImg})`}}>
       <SliderMain/>
       <HeadingTitle text={{ short: 'From 11:00am to 11:00pm', long: 'ORDER ONLINE' }} />
       <CategorySwipe/>
       <About/>
        </div>
    );
};

export default Home;