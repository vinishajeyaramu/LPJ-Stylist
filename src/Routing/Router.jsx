import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from '../Components/Navabr/Navbar'
import Aboutme from '../Pages/Aboutme'
import Footer from '../Components/Footer/Footer'
import HOME from '../Pages/HOME'
import Services from '../Pages/Services'
import Portfolio from '../Pages/Portfolio'
import Blog from '../Pages/Blog'
import Appointment from '../Pages/Appointment'
import Contact from '../Pages/Contact'

const Router = () => {
  return (
    <>
        <BrowserRouter>
            <Navbar/>
            <main>
            <Routes>
                <Route path="/" element={<HOME/>} />
                <Route path="/aboutme" element={<Aboutme/>} />
                <Route path="/services" element={<Services/>}/>
                <Route path='/portfolio' element={<Portfolio/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/appointment' element={<Appointment/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
            </main>
            <Footer/>
        </BrowserRouter>
    </>
  )
}

export default Router