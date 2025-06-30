import React from 'react';
import Banner from './Banner';
import Faq from './Faq';
import Features from './Features';

const Home = () => {
    return (
        <div className='max-w-5xl mx-auto px-4'>
            <Banner></Banner>
            <Features></Features>
            <Faq></Faq>
        </div>
    );
};

export default Home;