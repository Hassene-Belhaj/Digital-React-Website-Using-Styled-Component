import React from 'react'
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import NavBar from './assets/Components/NavBar/NavBar'
import { GlobalStyles } from './assets/Components/NavBar/NavBar.style'
import Home from './assets/pages/Home/Home'
import Service from './assets/pages/Service'
import About from './assets/pages/About'
import Contact from './assets/pages/Contact'



const App = () => {
  return (
    <Router>
     <GlobalStyles/>
         <NavBar/>
         <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/service' element={<Service/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
         </Routes>
     </Router>
   
  )
}

export default App