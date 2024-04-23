import bgImg from '../../../assets/menu/menu-bg.png';
import SliderMain from '../../components/home/SliderMain';

const Home = () => {
    return (
        <div style={{backgroundImage: `url(${bgImg})`}}>
       <SliderMain/>
        </div>
    );
};

export default Home;