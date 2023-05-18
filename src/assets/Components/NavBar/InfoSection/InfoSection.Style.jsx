import {styled } from 'styled-components'


export const InfoSec = styled.div`
    color: #fff;
    padding: 10rem 10rem  ;
    margin: auto;
    background: ${({LightBg})=>(LightBg ? '#fff':'#1f2937' )};
    @media screen and (max-width : 1240px) {
        padding : 10rem 5rem ;
    }
    @media screen and (max-width : 680px) {
        padding : 10rem 2rem ;
    }
`

    export const InfoRow  = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 -15px -15px -15px;
    flex-direction:${({imgStart})=>(imgStart ? 'row-reverse' : 'row' )};
`

export const InfoColumn = styled.div`
      margin: auto;
        flex: 1;
        flex-basis: 50%;
        max-width: 50%;
        @media screen and (max-width : 768px) {
            max-width: max-content;
            flex-basis:100%;
            display: flex;
            justify-content: center;
        }
`

export const TextWrap = styled.div`
        max-width: 540px;
        padding-top: 0;
        padding-bottom: 60px;
        padding-left: 60px;
    @media screen and (max-width : 768px) {
        padding-bottom: 65px;
    }    
    
`

export const TopLine = styled.div`
color :${({LightTopLine}) => (LightTopLine ? "#a9b3c1":"#4B59F7" )} ;
font-size: 18px;
line-height: 16px;
letter-spacing: 4px;
margin-bottom: 16px;
`
export const Heading = styled.h1`
margin-bottom: 24px;
letter-spacing: 1.3px;
font-size: 48px;
line-height: 1.4;
color: ${({LightText})=>(LightText ?  '#f7f8fa':'#1c2237' )};
@media screen and (max-width : 660px) {
       font-size: 32px;
    }  
    @media screen and (max-width : 520px) {
       font-size: 24px;
    }      

`

export const Subtitle = styled.h2`
max-width: 540px;
margin-bottom: 35px;
letter-spacing: 1.3px;
font-size: 18px;
line-height: 24px;
color: ${({LightTextdesc})=>(LightTextdesc ? "#f7f8fa":"#1c2237")};

`

export const ImgWrapper = styled.div`
max-width: 555px;
display: flex;
justify-content: ${({start }) =>(start ? 'flex-start' : 'flex-end')};

`

export const Image = styled.img`
padding-right: 0;
border: 0;
max-width: 100%;
display: inline-block;
max-height : 500px;
`