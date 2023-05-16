import React from 'react'
import { InfoColumn, InfoRow, InfoSec, TextWrap } from './InfoSection.Style'
import { Container } from '../NavBar.style'
const InfoSection = ({LightBg,imgStart}) => {
  return (
    <>
    <InfoSec LightGb={LightBg}> 
       <Container>
           <InfoRow imgStart={imgStart}>
            <InfoColumn>
                <TextWrap>
                    <TopLine LightTopLine={LightTopLine}>{topline}</TopLine>
                    <Heading LightText={LightText}>{headline}</Heading>
                    <Subtitle LightTextdesc={LightTextdesc}>{description}</Subtitle>
                </TextWrap>
            </InfoColumn>
           </InfoRow>
       </Container>
   </InfoSec>
    </>
  )
}

export default InfoSection