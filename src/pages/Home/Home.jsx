import React from 'react'
import InfoSection from '../../Components/NavBar/InfoSection/InfoSection'
import { HomeObjOne, HomeObjThree, HomeObjTwo } from './Data'
import Pricing from '../../Components/Pricing/Pricing'


const Home = () => {
  return (
    <>
   <InfoSection {...HomeObjOne} />
   <InfoSection {...HomeObjTwo} />
   <Pricing />
   <InfoSection {...HomeObjThree} />
   <InfoSection {...HomeObjTwo} />
    </>
    )
}

export default Home