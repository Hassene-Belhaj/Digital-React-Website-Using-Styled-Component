import React from 'react'
import { Heading, Image,ImgWrapper,InfoColumn, InfoRow, InfoSec, Subtitle, TextWrap,TopLine} from './InfoSection.Style'
import {Button, Container } from '../NavBar.style'



const InfoSection = ({
  lightbg,
  lighttopline,
  lighttext,
  lighttextdesc,
  topline,
  headline,
  description,
  imgstart,
  start,
  img,
  alt,
}) => {
  return (
    <>
    <InfoSec lightbg={lightbg ? 1 : 0}> 
       <Container>
           <InfoRow imgstart={imgstart ? 1 : 0}>
            <InfoColumn>
                    <TextWrap>
                        <TopLine lighttopline={lighttopline ? 1 : 0}>{topline}</TopLine>
                        <Heading lighttext={lighttext ? 1 : 0}>{headline}</Heading>
                        <Subtitle lighttextdesc={lighttextdesc ? 1 : 0}>{description}</Subtitle>
                        <Button width={'96%'}>Get Started</Button>
                     </TextWrap>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start ? 1 : 0}>
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