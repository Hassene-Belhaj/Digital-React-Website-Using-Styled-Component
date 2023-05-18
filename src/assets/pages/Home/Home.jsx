import React from 'react'
import InfoSection from '../../Components/NavBar/InfoSection/InfoSection'
import { HomeObjFour, HomeObjOne, HomeObjThree, HomeObjTwo } from './Data'
import Pricing from '../../Components/Pricing/Pricing'


const Home = () => {
  return (
    <>
   <InfoSection {...HomeObjOne} />
   <InfoSection {...HomeObjTwo} />
   <Pricing />
   <InfoSection {...HomeObjThree} />
    </>
    )
}

export default Home