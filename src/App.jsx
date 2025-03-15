import React from 'react';
import './App.css'
import { BrowserRouter,Route,Routes, } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
// import Interior from './components/Interior';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import Review from './components/Review';
// import Architecture from './components/Architecture';
// import Construction from './components/Construction';
// import Structure from './components/Structure';

function App() {
  return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/contactus' element={<ContactUs/>} />
        <Route path='/review' element={<Review/>} />
        {/* <Route path='/interior' element={<Interior/>} />
        <Route path='/architecture' element={<Architecture/>} />
        <Route path='/construction' element={<Construction/>} />
        <Route path='/structure' element={<Structure/>} /> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
