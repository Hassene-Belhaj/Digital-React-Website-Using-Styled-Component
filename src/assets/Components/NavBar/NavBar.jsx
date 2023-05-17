import React, {useEffect, useState } from 'react'
import { ButtonStyle, Container, DivLogo, NavBarContainer, NavBarSm, NavBarSmContainer, NavBarSmUl, NavBarUl, NavIcon, NavIcon2, NavItem, NavLink } from './NavBar.style'


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
       <NavLink to={'/'}>
       <DivLogo  color={'#fff'}> 
         <h1>ULTRA</h1>      
       </DivLogo>
       </NavLink>
     <NavBarSmContainer color='#1f2937'>
        {!toggle ? <NavIcon onClick={ToggleButton} size={25} color='white'/>
        : 
        <NavIcon2 onClick={ToggleButton} size={25} color='white'/>
      }
      </NavBarSmContainer>
        <NavBarSm toggle={toggle} color={'#1f2937'}> 

        <NavBarSmUl >
               <NavLink onClick={HandleClose} to={'/'}>
                    <NavItem>Home</NavItem>
               </NavLink>
               <NavLink onClick={HandleClose} to={'/service'}>  
                   <NavItem>Service</NavItem>
              </NavLink>
              <NavLink onClick={HandleClose} to={'/about'}>
                 <NavItem>About</NavItem>
              </NavLink>
              <NavLink onClick={HandleClose} to={'/contact'}>
                  <NavItem>Contact</NavItem>
              </NavLink>
               <ButtonStyle width={'96%'} height={'50px'} background={false} color={'#fff'} font={'1.2rem'}>Get Started</ButtonStyle>
        </NavBarSmUl>
        <NavBarContainer color={'#1f2937'}>
            <NavBarUl>
            <NavLink to={'/'}>
                    <NavItem>Home</NavItem>
               </NavLink>
               <NavLink to={'/service'}>  
                   <NavItem>Service</NavItem>
              </NavLink>
              <NavLink to={'/about'}>
                 <NavItem>About</NavItem>
              </NavLink>
              <NavLink to={'/contact'}>
                  <NavItem>Contact</NavItem>
              </NavLink>
              {buttonshow ? <ButtonStyle  width={'110px'} height={'35px'} background={false} color={'#fff'}
                font={'1.1rem'}
                >SIGN UP</ButtonStyle>  : ''}
               
            </NavBarUl>
        </NavBarContainer>
        </NavBarSm>
  </Container>
  )
}

export default NavBar


