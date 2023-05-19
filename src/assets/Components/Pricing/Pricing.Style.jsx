import { styled } from 'styled-components'
import { GiSilverBullet,GiGoldStack } from 'react-icons/gi'
import { BiDiamond } from 'react-icons/bi'

export const Container= styled.div`
width: 100%;
height: 100%;
background-color:#4B59F7;
color: #fff;
padding: 2rem 0rem;
text-align: center;
@media screen and (max-width:768px) {

}
`
export const PricingTitle = styled.h4`
font-size: 4rem ;
text-align:center;
margin: 3rem 0 2.5rem 0;
`
export const PricingContainer = styled.div`
display: flex;
justify-content: center;
gap: 2rem;
@media screen and (max-width:1000px) {
display : block;
}

`

export const PricingElement = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 380px;
height: 600px;
border-radius: 2%;
border: none;
margin: 2rem;
background:#1c2237 ;
cursor: pointer;
transition: all 0.3s ease-in-out;
@media screen and (max-width:768px) {
display : block;
margin:2rem auto;
width: 65%;

}

@media screen and (max-width:568px) {
display : block;
margin:2rem auto;
width: 90%;

}

&:hover {
transform: scale(1.05);
transition: all 0.3s ease-in-out;
}

`
export const PricingItem = styled.div`
display: flex;
flex-direction: column;
`

export const PricingItemIcon = styled(GiSilverBullet)`
margin-top: 3rem;
margin-left: auto;
margin-right: auto;
`
export const PricingItemIcon2 = styled(GiGoldStack)`
margin-top: 3rem;
margin-left: auto;
margin-right: auto;
`
export const PricingItemIcon3 = styled(BiDiamond)`
margin-top: 3rem;
margin-left: auto;
margin-right: auto;
`
export const PricingTitleItem = styled.p`
display: flex;
flex-direction: column;
justify-content: center;
font-size: 2.5rem;
color: #fff;
margin: 0.5rem 0  0;
font-weight: bold;
text-align: center;
`
export const Span1 = styled.p`
font-size: 4rem;
color: #fff;
font-weight: bold;
`

export const PricingItemSpan = styled.span`
display: flex;
flex-direction: column;
margin-top: 2.5rem;
margin-bottom: 2rem;
font-size: 1.7rem;
color: #bab9b9;
`