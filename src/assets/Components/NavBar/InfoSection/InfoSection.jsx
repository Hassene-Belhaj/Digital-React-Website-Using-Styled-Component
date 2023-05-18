import React from 'react'
import { Heading, Image,ImgWrapper,InfoColumn, InfoRow, InfoSec, Subtitle, TextWrap,TopLine} from './InfoSection.Style'
import {Button, Container } from '../NavBar.style'




const InfoSection = ({
  LightBg,
  LightTopLine,
  LightText,
  LightTextdesc,
  topline,
  headline,
  description,
  imgStart,
  start,
  img,
  alt,
}) => {
  return (
    <>
    <InfoSec LightBg={LightBg}> 
       <Container>
           <InfoRow imgStart={imgStart}>
            <InfoColumn>
                    <TextWrap>
                        <TopLine LightTopLine={LightTopLine}>{topline}</TopLine>
                        <Heading LightText={LightText}>{headline}</Heading>
                        <Subtitle LightTextdesc={LightTextdesc}>{description}</Subtitle>
                        <Button width={'96%'}>Get Started</Button>
                     </TextWrap>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Image src={img} alt={alt}></Image>
              </ImgWrapper>
            </InfoColumn>
           </InfoRow>
       </Container>
   </InfoSec>
    </>
  )
}

export default InfoSection