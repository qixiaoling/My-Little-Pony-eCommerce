import React, {useState} from 'react';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';
import SearchBar from "../../SearchBar/SearchBar";
import pony from '../../Assets/Images/pony-logo.png';
import './Navbar.css'
import {animateScroll as scroll} from 'react-scroll';
import {useHistory} from "react-router-dom";

function Navbar({navQuery}) {
    const [links, toggleLinks] = useState(false);
    const [icon, toggleIcon] = useState(false);
    const history = useHistory();
    function toggleHome() {
        scroll.scrollToTop();
    }
    function changeLinksClasses () {
        let className = 'navLinks';
        if(links) {
            className += ' active'
        }
        return className;
    }
    function closeMobileMenu() {
        toggleLinks(false);
    }
    function changeIconClasses() {
        let className = 'iconLinks';
        if(icon) {
            className += ' iconActive';
        }
        return className;
    }
    console.log(history.location.pathname)

    return (
        <nav className='navbar-container'>
            <div className='navbar-content'>
                <div className='navbar-header'>
                    <LinkR className='logo-link' to='/' onClick={toggleHome}>
                        <img className='pony-logo' src={pony} alt='pony-logo'/>
                    </LinkR>
                    <div className='nav-icon'>
                        <button  className='hamburger-menu'
                              onClick={()=>{toggleLinks(!links)}}
                                disabled={icon? true: false}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                        <button className='search-icon'
                                onClick={()=>{toggleIcon(!icon)}}
                                disabled={links? true: false}
                        >
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </div>
                <ul className={changeLinksClasses()}>
                    <li className='link'>
                        {
                            history.location.pathname === '/' ?
                                (
                                    <LinkS to='pony-card'
                                           smooth={true} duration={500} onClick={closeMobileMenu}
                                    >
                                        Meet the friends
                                    </LinkS>
                                )
                                :
                                (
                                    (<LinkR to='/' onClick={closeMobileMenu} >Meet the friends</LinkR>)
                                )
                        }

                    </li>
                    <li>
                        <LinkR to='/products' onClick={closeMobileMenu}>
                            Products
                        </LinkR>
                    </li>
                    <li>
                        <LinkR to='/cart' onClick={closeMobileMenu}>Cart</LinkR>
                    </li>
                </ul>
                <div className={changeIconClasses()}>
                        <SearchBar searchBarQuery={navQuery}/>
                </div>
            </div>

        </nav>
    )
}

export default Navbar;