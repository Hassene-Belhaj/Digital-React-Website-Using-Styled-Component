import React from 'react'
import InfoSection from '../../Components/NavBar/InfoSection/InfoSection'
import { HomeObjOne, HomeObjTwo } from './Data'


const Home = () => {
  return (
    <>
   <InfoSection {...HomeObjOne} />
   <InfoSection {...HomeObjTwo} />
    </>
    )
}

export default Home