import React from 'react'
import HomeSwiper from '../Components/Swiper/Swiper'
import AboutMe from '../Components/Aboutme/Aboutme'
import Services from '../Components/Services/Services'
import Testimonial from '../Components/Testimonials/Testimonial'
import Pricing from '../Components/Pricing/Pricing'
import Events from '../Components/Events/Events'

const HOME = () => {
  return (
    <>
      <HomeSwiper/>
      <AboutMe/>
      <Services/>
      <Testimonial/>
      <Events/>
      <Pricing/>
    </>
  )
}

export default HOME