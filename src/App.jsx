import React from 'react'
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import { GlobalStyles } from './Components/NavBar/NavBar.style'
import NavBar from './Components/NavBar/NavBar'
import Home from './pages/Home/Home'
import Service from './pages/Service/Service'
import Product from './pages/Product/Product'
import Footer from './Components/Footer/Footer'




const App = () => {


  return (
    <Router>
     <GlobalStyles />
       <NavBar/>
         <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/service' element={<Service/>} />
            <Route path='/product' element={<Product/>} />
         </Routes>
         <Footer />
     </Router>
   
  )
}

export default App