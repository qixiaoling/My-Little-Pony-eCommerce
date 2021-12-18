import React from 'react';
import pony from "../../Assets/Images/pony-logo.png";
import {Link as LinkR} from "react-router-dom";
import {animateScroll as scroll} from "react-scroll";
import './Footer.css'

function Footer() {
    function toggleHome() {
        scroll.scrollToTop();
    }

    return (
        <div className='footer-container'>
            <div className='footer-content'>

                <LinkR className='footer-logo-link' to='/' onClick={toggleHome}>
                    <img className='footer-pony-logo' src={pony} alt='pony-logo'/>
                </LinkR>

                <div className='footer-text'>
                    <ul className='footer-links'>
                        <li className='footer-link-item'>
                            <a href='/'>Where to Buy</a>
                        </li>
                        <li className='footer-link-item'>
                            <a href='/'>Site Map</a>
                        </li>
                        <li className='footer-link-item'>
                            <a href='/'>Consumer Care</a>
                        </li>
                        <li className='footer-link-item'>
                            <a href='/'>Corporate</a>
                        </li>
                        <li className='footer-link-item'>
                            <a href='/'>Privacy Policy</a>
                        </li>
                        <li className='footer-link-item'>
                            <a href='/'>Terms and Conditions of Use</a>
                        </li>
                        <li className='footer-link-item'>
                            <a href='/'>Calif. privacy rights & notices</a>
                        </li>
                        <li className='footer-link-item'>
                            <a href='/'>Do not sell my personal information</a>
                        </li>
                        <li className='footer-link-item'>
                            <a href='/'>Responsible disclosure policy</a>
                        </li>
                        <li className='footer-link-item'>
                            <a href='/'>For parents</a>
                        </li>

                    </ul>
                    <p className='footer-text-Two'>Product not available everywhere</p>
                    <p className='footer-text-Three'>
                        © 2021 Hasbro. All rights reserved. All audio,
                        visual and textual content on this site (including all names,
                        characters, images, trademarks and logos) are protected by
                        trademarks, copyrights and other Intellectual Property rights
                        owned by Hasbro or its subsidiaries, licensors, licensees,
                        suppliers and accounts.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Footer;