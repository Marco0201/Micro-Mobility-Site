import React from 'react'
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll';
import { FooterContainer, FooterWrap, FooterLinksContainer, 
        FooterLinkItems, FooterLinksWrapper, FooterLink, FooterLinkTitle,
        SocialMedia, SocailMediaWrap, SocialLogo, SocialIcons, SocialIconLink,
        WebsiteRights} from './FooterElements'


const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };

  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to="/">How it works</FooterLink>
                            <FooterLink to="/">Testimonials</FooterLink>
                            <FooterLink to="/">Careers</FooterLink>
                            <FooterLink to="/">Investors</FooterLink>
                            <FooterLink to="/">Terms of service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Help</FooterLinkTitle>
                            <FooterLink to="/">Contact</FooterLink>
                            <FooterLink to="/">Safety</FooterLink>
                            <FooterLink to="/">Report an Issue</FooterLink>
                            <FooterLink to="/">FAQs</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Inside Micro</FooterLinkTitle>
                            <FooterLink to="/">Research & Design</FooterLink>
                            <FooterLink to="/">User Experience</FooterLink>
                            <FooterLink to="/">Rebrand</FooterLink>
                            <FooterLink to="/">Inside our scooters</FooterLink>
                            <FooterLink to="/">Inside our bikes</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Company</FooterLinkTitle>
                            <FooterLink to="/">Press</FooterLink>
                            <FooterLink to="/">Careers</FooterLink>
                            <FooterLink to="/">Locations</FooterLink>
                            <FooterLink to="/">Micro Access</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocailMediaWrap>
                    <SocialLogo to='/'  onClick={toggleHome}>
                        Micro
                    </SocialLogo>
                    <WebsiteRights>Micro © {new Date().getFullYear()} All rights reserved</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" 
                        aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" 
                        aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" 
                        aria-label="Youtube">
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" 
                        aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" 
                        aria-label="Linkedin">
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocailMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer