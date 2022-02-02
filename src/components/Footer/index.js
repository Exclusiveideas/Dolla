import { FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from "./FooterElements"
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll';

const Footer = () => {
    
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                About Us
                            </FooterLinkTitle>
                            <FooterLink to="home"
                                smooth={true}
                                duration={500} 
                                spy={true} 
                                offset={-80}
                                exact>How it works</FooterLink>
                            <FooterLink to="home"
                                smooth={true}
                                duration={500} 
                                spy={true} 
                                offset={-80}
                                exact>Testimonials</FooterLink>
                            <FooterLink to="home"
                                smooth={true}
                                duration={500} 
                                spy={true} 
                                offset={-80}
                                exact>Careers</FooterLink>
                            <FooterLink to="home"
                                smooth={true}
                                duration={500} 
                                spy={true} 
                                offset={-80}
                                exact>Investors</FooterLink>
                            <FooterLink to="home"
                                smooth={true}
                                duration={500} 
                                spy={true} 
                                offset={-80}
                                exact>Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                Contact Us
                            </FooterLinkTitle>
                            <FooterLink to="home"
                                smooth={true}
                                duration={500} 
                                spy={true} 
                                offset={-80}
                                exact>Contact</FooterLink>
                            <FooterLink to="home"
                                smooth={true}
                                duration={500} 
                                spy={true} 
                                offset={-80}
                                exact>Support</FooterLink>
                            <FooterLink to="home
                                smooth={true}
                                duration={500} 
                                spy={true} 
                                offset={-80}
                                exact">Destinations</FooterLink>
                            <FooterLink to="home"
                                smooth={true}
                                duration={500} 
                                spy={true} 
                                offset={-80}
                                exact>Sponsorship</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                Videos
                            </FooterLinkTitle>
                            <FooterLink to="home"
                                smooth={true}
                                duration={500} 
                                spy={true} 
                                offset={-80}
                                exact>Submit Video</FooterLink>
                            <FooterLink to="home"
                                smooth={true}
                                duration={500} 
                                spy={true} 
                                offset={-80}
                                exact>Ambassadors</FooterLink>
                            <FooterLink to="home"
                                smooth={true}
                                duration={500} 
                                spy={true} 
                                offset={-80}
                                exact>Agency</FooterLink>
                            <FooterLink to="home"
                                smooth={true}
                                duration={500} 
                                spy={true} 
                                offset={-80}
                                exact>Influencer</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                Business
                            </FooterLinkTitle>
                            <FooterLink to="home"
                                smooth={true}
                                duration={500} 
                                spy={true} 
                                offset={-80}
                                exact>Instagram</FooterLink>
                            <FooterLink to="home"
                                smooth={true}
                                duration={500} 
                                spy={true} 
                                offset={-80}
                                exact>Facebook</FooterLink>
                            <FooterLink to="home"
                                smooth={true}
                                duration={500} 
                                spy={true} 
                                offset={-80}
                                exact>Youtube</FooterLink>
                            <FooterLink to="home"
                                smooth={true}
                                duration={500} 
                                spy={true} 
                                offset={-80}
                                exact>Youtube</FooterLink>
                            <FooterLink to="home"
                                smooth={true}
                                duration={500} 
                                spy={true} 
                                offset={-80}
                                exact>Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            dolla
                        </SocialLogo>
                        <WebsiteRights>
                            dolla &copy; {new Date().getFullYear()} All rights reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://www.facebook.com" target="_blank"
                                aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com" target="_blank"
                                aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.youtube.com" target="_blank"
                                aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.twitter.com" target="_blank"
                                aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.linkedin.com" target="_blank"
                                aria-label="Linkedln">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer