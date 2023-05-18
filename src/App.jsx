import React from 'react'
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import NavBar from './assets/Components/NavBar/NavBar'
import { GlobalStyles } from './assets/Components/NavBar/NavBar.style'
import Home from './assets/pages/Home/Home'
import Service from './assets/pages/Service/Service'
import Contact from './assets/pages/Contact/Contact'
import About from './assets/pages/About/About'
import Footer from './assets/Components/Footer/Footer'



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
         <Footer />
     </Router>
   
  )
}

export default App