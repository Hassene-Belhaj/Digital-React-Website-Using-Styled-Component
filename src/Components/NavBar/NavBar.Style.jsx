import { createGlobalStyle, styled} from 'styled-components'
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'



export const GlobalStyles = createGlobalStyle`
*{
        padding: 0;
        margin: 0;
        box-sizing:border-box;
        font-family: 'source sans pro',sans-serif;     
}

  html {
        scroll-behavior: smooth;
        overflow-x: hidden;
}
`
export const DivLogo = styled.div`
        position: fixed;
        top:14px;
        left: 65px;
        font-family: "Noto Sans Display",sans-serif;
        font-size: 0.8rem;
        letter-spacing: 0.5rem;
        font-weight: medium;    
        z-index: 900;
        color :${({color})=>color};
        border-bottom: 4px solid #4e50ee;
        border-top:4px solid #4e50ee;
     @media screen and (max-width : 768px) {
         left:25px;
         position: fixed;
         z-index:600;
     }   
`

export const Container = styled.div`
        width: 100%;
        height: 100%;
        z-index: 30;
        overflow: hidden;
`



export const NavBarContainer = styled.div`
        position: fixed;
        display: flex;
        justify-content: center;
        width:100%;
        height: 65px;
        background-color: ${({color})=> color};
        z-index: 40;
        @media screen and (max-width: 768px) {
        display:none;
        
}

`
export const NavBarSmContainer = styled.div`
        display: none;
        justify-content: center;
        width: 100%;
        height: 65px;
        background-color: ${({color})=> color};
        z-index: 50;
        @media screen and (max-width: 768px) {
          display: flex;
          position: fixed;
                  
}
`

export const NavBarUl = styled.ul`
      width: 90%;
      display: flex;
      justify-content:flex-end;
      align-items: center;
      color: #fff;
      list-style: none;
      font-size: 1.2rem;
      font-family: "Poppins",sans-serif;
      gap: 3rem;
      z-index: 600;
      margin-right: 4rem;
`

export const NavItem = styled.li`
      transition : 0.2s ease-in-out;
      &:hover {
      transition: 0.2s ease-in-out;
      cursor: pointer;
      color :#6366f1; 
}

`

export const NavBarSm = styled.div`
    @media screen and (max-width : 768px)  {
        position: fixed;
        margin-top: 4rem;
        width: 100%;
         top:0px;
         bottom:0px;
        left:${({toggle}) =>(toggle ?  0 : "-100%")};
        background:${({color})=>color};
        opacity: 1;
        z-index:300;
        transition: all 0.4s ease-in-out;
}   

`

export const NavBarSmUl = styled.ul`
display: none;
    @media screen and (max-width : 768px) {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 5rem;
        font-family: "poppins" ,sans-serif;
        color: #fff;
        list-style: none;
        font-size: 1.5rem;
        gap: 4rem;
}

`

export const NavIcon = styled(AiOutlineMenu)`
      position:fixed;
      top: 20px;
      right: 25px;
      z-index: 600;

      @media screen and (min-width : 768px) {
      display: none;
}

`
export const NavIcon2 = styled(AiOutlineClose)`
      position:fixed;
      top: 20px;
      right: 25px;
      z-index: 1000;

    @media screen and (min-width : 768px) {
      display: none;
}

`

export const Button = styled.button`
padding: 13px 15px;
border-radius: 4px;
display: flex;
width:${({width})=>width};
margin: ${({margin})=>margin};
border: none;
background: #4e50ee;
justify-content: center;
color :#fff;
font-size: 1.2rem;
transition : all 0.3s ease-in;
&:hover {
 transition : all 0.3s ease-in;
 background:#6366f1 ;
 }
`

export const NavLink = styled(Link)`
text-decoration: none;
color : #fff ;
:hover {
text-decoration :2px underline;
text-underline-offset: 1rem;
}
`