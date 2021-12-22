import React from 'react';
import './Banner.css';
import ponyPic from '../../Assets/Images/new_generation.jpg';
function Banner() {
    return(
        <div className='banner-container'>
            <div className='banner-content'>
                <img src={ponyPic} alt='hi'/>
            </div>
        </div>
    )
}
export default Banner;