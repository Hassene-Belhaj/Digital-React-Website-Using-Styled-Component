import React from 'react'
import {FooterContainer, FooterIcon1, FooterIcon2, FooterIcon3, FooterIcon4, FooterLinks, FooterLinksItems, FooterLinksTitle, FooterLinkscontainer, FooterLogo, FooterSocial, FooterSubTitle, FooterText, FooterTitle,FooterWrapper,Form,  InputForm } from './Footer.Style'
import { Button, DivLogo } from '../NavBar/NavBar.style'

const Footer = () => {
  return (
<FooterContainer>
    <FooterTitle>
        Join our exclusive membership to receive the latest news and trends
    </FooterTitle>
      <FooterSubTitle>
        You can unsubscribe at any time.
        </FooterSubTitle>  
        <Form>
            <InputForm name='email' type="email" placeholder='Your Email' />
            <Button width={'80%'}>Subscribe</Button>
        </Form>

        <FooterLinkscontainer>
        <FooterLinksItems>
        <FooterLinksTitle>
            About Us
        </FooterLinksTitle>  
                <FooterLinks>How it works</FooterLinks>
                <FooterLinks>Testimonials</FooterLinks>
                <FooterLinks>Careers</FooterLinks>
                <FooterLinks>Investors</FooterLinks>
                <FooterLinks>term of service</FooterLinks>
            </FooterLinksItems> 
         <FooterLinksItems>
        <FooterLinksTitle>
            Contact Us
        </FooterLinksTitle>  
                <FooterLinks>How it works</FooterLinks>
                <FooterLinks>Testimonials</FooterLinks>
                <FooterLinks>Careers</FooterLinks>
                <FooterLinks>Investors</FooterLinks>
                <FooterLinks>term of service</FooterLinks>
            </FooterLinksItems>   
        <FooterLinksItems>
        <FooterLinksTitle>
            Videos
        </FooterLinksTitle>   
                <FooterLinks>How it works</FooterLinks>
                <FooterLinks>Testimonials</FooterLinks>
                <FooterLinks>Careers</FooterLinks>
                <FooterLinks>Investors</FooterLinks>
                <FooterLinks>term of service</FooterLinks>
            </FooterLinksItems> 
        <FooterLinksItems>
        <FooterLinksTitle>
            Social media   
        </FooterLinksTitle>  
                <FooterLinks>How it works</FooterLinks>
                <FooterLinks>Testimonials</FooterLinks>
                <FooterLinks>Careers</FooterLinks>
                <FooterLinks>Investors</FooterLinks>
                <FooterLinks>term of service</FooterLinks>
            </FooterLinksItems> 
        </FooterLinkscontainer>
        <FooterWrapper>
            <FooterLogo><h6>ULTRA</h6></FooterLogo>
             <FooterText><h6>ULTRA 2023</h6></FooterText>
             <FooterSocial>
                <FooterIcon1 size={30} />
                <FooterIcon2 size={30} />
                <FooterIcon3 size={30} />
                <FooterIcon4 size={30} />
             </FooterSocial>
        </FooterWrapper>
</FooterContainer>  )
}

export default Footer