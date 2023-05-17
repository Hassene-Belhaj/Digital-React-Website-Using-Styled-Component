import React from 'react'
import { Heading, Image,ImgWrapper,InfoColumn, InfoRow, InfoSec, Subtitle, TextWrap,TopLine} from './InfoSection.Style'
import { ButtonStyle, Container } from '../NavBar.style'




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
    <InfoSec LightGb={LightBg}> 
       <Container>
           <InfoRow imgStart={imgStart}>
            <InfoColumn>
                    <TextWrap>
                        <TopLine LightTopLine={LightTopLine}>{topline}</TopLine>
                        <Heading LightText={LightText}>{headline}</Heading>
                        <Subtitle LightTextdesc={LightTextdesc}>{description}</Subtitle>
                        <ButtonStyle width={'96%'} height={'50px'} background={false} color={'#fff'} font={'1.2rem'}>Get Started</ButtonStyle>
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