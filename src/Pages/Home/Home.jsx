import Banner from './Banner';
import Faq from './Faq';
import Features from './Features';
import FeaturedAssignments from './FeaturedAssignments';
import WhyChooseUs from './WhyChooseUs';

const Home = () => {
    return (
        <div className='max-w-5xl mx-auto px-4'>
            <Banner></Banner>
            <Features></Features>
            <FeaturedAssignments></FeaturedAssignments>
            <WhyChooseUs></WhyChooseUs>
            <Faq></Faq>
        </div>
    );
};

export default Home;