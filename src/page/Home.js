import React from 'react';
import HeroSection from "../Component/HeroSection/HeroSection";
import HomeCardSection from "../Component/HomeCardSection/HomeCardSection";
import Banner from "../Component/Banner/Banner";



function Home() {

    return(
        <div className='home-container'>
            <HeroSection/>
            <HomeCardSection />
            <Banner/>
        </div>
    )
}
export default Home;