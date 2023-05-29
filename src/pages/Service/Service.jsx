import React from 'react'
import Pricing from '../../Components/Pricing/Pricing'
import { HomeObjTwo } from '../Home/Data'
import InfoSection from '../../Components/NavBar/InfoSection/InfoSection'

const Service = () => {
  return (
    <div>
      <Pricing />  
      <InfoSection {...HomeObjTwo} />


    </div>
 )
}

export default Service