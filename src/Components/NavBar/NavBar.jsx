import React, {useEffect, useState } from 'react'
import {Button, Container, DivLogo, NavBarContainer, NavBarSm, NavBarSmContainer, NavBarSmUl, NavBarUl, NavIcon, NavIcon2, NavItem, NavLink } from './NavBar.style'


const NavBar = () => {
  const [toggle,setToggle] = useState(false)
  const [buttonshow,setButtonshow] = useState(true)

  const ToggleButton = () => setToggle(!toggle)
  const HandleClose = () =>setToggle(!toggle)





 const showButton = () => {
   if (window.innerWidth <= 980 ) {
   setButtonshow(false)
   } else {
    setButtonshow(true)
   }
  } 
  
 window.addEventListener('resize',showButton) 
  
 useEffect(()=>{
 showButton()
 },[])

  return (
   <Container>    
       <DivLogo  color={'#fff'}> 
         <h1>ULTRA</h1>      
       </DivLogo>   
     <NavBarSmContainer color='#1f2937'>
        {!toggle ? <NavIcon onClick={ToggleButton} size={25} color='white'/>
        : 
        <NavIcon2 onClick={ToggleButton} size={25} color='white'/>
      }
      </NavBarSmContainer>
        <NavBarSm toggle={toggle ? 1 : 0} color={'#1f2937'}> 

        <NavBarSmUl >
               <NavLink onClick={HandleClose} to={'/'}>
                    <NavItem>Home</NavItem>
               </NavLink>
               <NavLink onClick={HandleClose} to={'/service'}>  
                   <NavItem>Service</NavItem>
              </NavLink>
              <NavLink onClick={HandleClose} to={'/Product'}>
                 <NavItem>Product</NavItem>
              </NavLink>
    
               <Button width={'96%'} >Get Started</Button>
        </NavBarSmUl>
        <NavBarContainer color={'#1f2937'}>
            <NavBarUl>
            <NavLink to={'/'}>
                    <NavItem>Home</NavItem>
               </NavLink>
               <NavLink to={'/service'}>  
                   <NavItem>Service</NavItem>
              </NavLink>
              <NavLink to={'/product'}>
                 <NavItem>Product</NavItem>
              </NavLink>
              {buttonshow ? <Button  width={'110px'} 
                >SIGN UP</Button>  : ''}
               
            </NavBarUl>
        </NavBarContainer>
        </NavBarSm>
  </Container>
  )
}

export default NavBar


