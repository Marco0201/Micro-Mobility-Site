import React, {useEffect, useState} from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    Navlinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };


    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>Micro</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <Navlinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</Navlinks>
                        </NavItem>
                        <NavItem>
                            <Navlinks to="locations" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Locations</Navlinks>
                        </NavItem>
                        <NavItem>
                            <Navlinks to="safety" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Safety</Navlinks>
                        </NavItem>
                        <NavItem>
                            <Navlinks to="services" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services</Navlinks>
                        </NavItem>
                        <NavItem>
                            <Navlinks to="fleet">Fleet</Navlinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signup">Sign Up</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar