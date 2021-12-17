import React from 'react';
import HeroSection from "../Component/HeroSection";
import CardSection from "../Component/CardSection";
import Banner from "../Component/Banner/Banner";



function Home() {

    return(
        <div className='home-container'>
            <HeroSection/>
            <CardSection />
            <Banner/>
        </div>
    )
}
export default Home;