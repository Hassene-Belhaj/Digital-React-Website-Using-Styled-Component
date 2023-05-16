import {styled } from 'styled-components'


export const InfoSec = styled.div`
    color: #fff;
    padding: 10rem 0 ;
    background: ${({LightBg})=>(LightBg ? '#fff':'#1f2937' )};
`

    export const InfoRow  = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    align-items: center;
    flex-direction:${({imgStart})=>(imgStart ? 'row-reverse' : 'row' )};
`

export const InfoColumn = styled.div`
        margin-bottom: 15px;
        padding-right: 15px;
        padding-left: 15px;
        flex: 1;
        flex-basis: 50%;
        max-width: 50%;
        @media screen and (max-width : 768px) {
            max-width: 100%;
            flex-basis: 100%;
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
        text-align:center;
        padding:0 0 65px 0;
      
    }      
`

export const TopLine = styled.div`
color :${({LightTopLine}) =>(LightTopLine ? "#a9b3c1":"#4B59F7" )} ;
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

`

export const Subtitle = styled.p`
max-width: 540px;
margin-bottom: 35px;
letter-spacing: 1.3px;
font-size: 18px;
line-height: 24px;
color: ${({LightTextdesc})=>(LightTextdesc ? "#f7f8fa":"#1c2237")};

`