import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import { BsFacebook,BsInstagram,BsYoutube,BsTwitter,BsLinkedin } from 'react-icons/bs'

export const FooterContainer = styled.div`
width: 100%;
margin:0 auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #1F2937;
color: #fff;
`


export const FooterTitle = styled.h2`
font-size: 2rem;

margin: rem 0;
text-align: center;
`
export const FooterSubTitle = styled.h3`
font-size: 1.1rem;
margin-bottom: 1rem;
text-align: center;
`
export const Form = styled.form`
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width:768px) {
flex-direction: column;
width: 80%;
}

`
export const InputForm = styled.input`
padding: 12px 20px ;
border-radius: 4px;
outline: none;
border:1px solid #fff ;
font-size: 1rem;
margin:15px 15px;
@media screen and (max-width:768px) {
    width: 80%;
    margin: 20px 0;
}
`
export const  FooterLinkscontainer =styled.div`
display: flex;
max-width:1000px ;
gap:8rem;
@media screen and (max-width : 768px) {
width:100% ;
display: block;
}

`
export const FooterLinksItems = styled.h3`
margin: 4rem 0 2rem 0;
font-size: 1.5rem;
text-align:center;
@media screen and (max-width : 768px) {
margin : 2rem 0     
}
`


export const FooterLinksTitle = styled.h4`
font-size: 1.5rem;
margin: 1.5rem 0;
text-align:center;
`


export const FooterLinks = styled(Link)`
font-size: 1.2rem;
display: flex;
flex-direction: column;
text-decoration: none;
color: #fff;
margin: 15px 0 15px 0;
`

export const FooterWrapper = styled.div`
max-width: 1280px;
width: 900px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items:center;
padding: 3rem 0 5rem 0;
@media screen and (max-width : 1000px) {
flex-direction: column;
justify-content: center;
align-items: center;
gap: 3rem;
}

`
export const FooterLogo = styled.div`
font-family: "Noto Sans Display",sans-serif;
font-size: 2rem;
letter-spacing: 0.5rem;
font-weight: medium;    
color :#fff;
border-bottom: 4px solid #4e50ee;
border-top:4px solid #4e50ee; 
@media screen and (max-width : 768px) {
order:2    
}
`

export const FlexText = styled.div`
width: 30%;
display: flex;

`

export const FooterText = styled.div`
width: 25%;
font-size: 1.5rem;
display: flex;
justify-content:center;
@media screen and (max-width : 768px) {
display    :flex ;
order: 3;
}
`

export const FooterSocial = styled.div`
width: 30%;
display: flex;
justify-content: space-between;
align-items: center;
`

export const FooterIcon1 = styled(BsInstagram)`
`
export const FooterIcon2 = styled(BsFacebook)`
`
export const FooterIcon3 = styled(BsYoutube)`
`
export const FooterIcon4 = styled(BsTwitter)`
`
export const FooterIcon5 = styled(BsLinkedin)`
`

export const FooterFlex =styled.div`
display: flex;
gap: 8rem;
@media screen and (max-width:1000px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}
` 