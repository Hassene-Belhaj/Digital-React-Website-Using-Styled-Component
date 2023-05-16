import { createGlobalStyle, styled} from 'styled-components'
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'



export const GlobalStyles = createGlobalStyle`
*{
        padding: 0;
        margin: 0;
        box-sizing:border-box;
}

  html {
        scroll-behavior: smooth;
        overflow-x: hidden;
}
`
export const DivLogo = styled.div`
        position: absolute;
        top:10px;
        left: 25px;
        font-family: "Noto Sans Display",sans-serif;
        font-size: 0.7rem;
        letter-spacing: 0.3rem;
        font-weight: medium;
        z-index: 900;
        color :${({color})=>color};
`

export const Container = styled.div`
        width: 100%;
        height: 100%;
        z-index: 30;
        overflow: hidden;
`



export const NavBarContainer = styled.div`
        display: flex;
        justify-content: center;
        width: 100%;
        height: 60px;
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
        height: 50px;
        background-color: ${({color})=> color};
        z-index: 100;
        @media screen and (max-width: 768px) {
          display: flex;
}
`

export const NavBarUl = styled.ul`
      width: 100%;
      display: flex;
      justify-content:flex-end;
      align-items: center;
      color: #fff;
      list-style: none;
      font-size: 0.9rem;
      font-family: "Poppins",sans-serif;
      font-weight: 100;
      gap: 4rem;
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
        position: absolute;
        width: 100%;
        // top 0 right 0 bottom 0 left 0
        inset: 0;
        left:${({toggle}) =>(toggle ?  0 : "-100%")};
        background:${({color})=>color};
        opacity: 1;
        z-index:200;
        transition: all 0.4s ease-in-out;
}   

`

export const NavBarSmUl = styled.ul`
display: none;
    @media screen and (max-width : 768px) {
        padding: 4rem 0 0 0 ;
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
        font-family: "poppins" ,sans-serif;
        color: #fff;
        list-style: none;
        font-size: 1.5rem;
        gap: 4rem;
}

`

export const NavIcon = styled(AiOutlineMenu)`
      position:fixed;
      top: 10px;
      right: 20px;
      z-index: 400;

      @media screen and (min-width : 768px) {
      display: none;
}

`
export const NavIcon2 = styled(AiOutlineClose)`
      position:fixed;
      top: 10px;
      right: 20px;
      z-index: 400;

    @media screen and (min-width : 768px) {
      display: none;
}

`

export const ButtonStyle = styled.button`
      border-radius: 8px;
      border: none;
      background : ${({background})=>(background ? '#000' : '#6366f1')} ;
      width: ${({width})=>width};
      height: ${({height})=>height};
      padding:${({padding})=>padding};
      margin: ${({margin})=>margin};
      font-size: ${({font})=>font};
      color: ${({color})=>color};
      transition : all 0.3s ease-in;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
      cursor:pointer;
      &:hover {
      transition : all 0.3s ease-in;
      background: #fff;
      color:#6366f1;
      }

`

export const NavLink = styled(Link)`
text-decoration: none;
color : #fff ;
`