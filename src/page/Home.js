import React from 'react';
import BannerSection from '../components/BannerSection';
import About from '../components/About';
import OurOfferings from '../components/OurOfferings';
import OurTeam from '../components/OurTeam';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <div>
            {/* <Header /> */}
            <BannerSection />
            <About />
            <OurOfferings />
            <OurTeam />
            <Blog />
            <Contact />
            {/* <Footer /> */}
        </div >
    );
};

export default Home;