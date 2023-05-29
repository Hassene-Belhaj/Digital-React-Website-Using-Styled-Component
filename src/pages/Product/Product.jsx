import React from 'react'
import InfoSection from '../../Components/NavBar/InfoSection/InfoSection'
import { HomeObjThree, HomeObjTwo } from '../Home/Data'

const Product = () => {
  return (
<div>
<InfoSection {...HomeObjTwo} />
<InfoSection {...HomeObjThree} />

</div>  )
}

export default Product