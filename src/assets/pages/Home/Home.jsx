import React from 'react'
import InfoSection from '../../Components/NavBar/InfoSection/InfoSection'
import { HomeObjOne } from './Data'


const Home = () => {
  return (
   <InfoSection {...HomeObjOne} />
    )
}

export default Home