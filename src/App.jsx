import React from 'react'
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import NavBar from './assets/Components/NavBar/NavBar'
import { GlobalStyles } from './assets/Components/NavBar/NavBar.style'
import Home from './assets/pages/Home/Home'
import Service from './assets/pages/Service/Service'
import Footer from './assets/Components/Footer/Footer'
import Product from './assets/pages/Product/Product'
import ScrollToTop from './assets/Components/ScrollToTop'



const App = () => {


  return (
    <Router>
     <GlobalStyles />
     <ScrollToTop />        
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