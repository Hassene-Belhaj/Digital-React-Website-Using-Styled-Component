import React from 'react'
import InfoSection from '../../Components/NavBar/InfoSection/InfoSection'
import { HomeObjFour, HomeObjOne, HomeObjThree, HomeObjTwo } from './Data'


const Home = () => {
  return (
    <>
   <InfoSection {...HomeObjOne} />
   <InfoSection {...HomeObjTwo} />
   <InfoSection {...HomeObjThree} />
    </>
    )
}

export default Home