import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules'
import './Swiper.css'
import slide2 from '../../Assets/Images/300602451_588076673026224_4504409814948100079_n.jpg'

const HomeSwiper = () => {
  return (
    <>
        <div className='h-swiper'>
            <Swiper pagination={{clickable:true}} loop={true} autoplay={{
          delay: 7000,  
          disableOnInteraction: false,
        }} modules={[Pagination,Autoplay]} className="mySwiper">
                <SwiperSlide>
                    <div className='slide-1'></div>
                    <h3 className='slide1-cont slide-text'>Style That Speaks – Transforming You, Effortlessly!</h3>
                  
                    
                </SwiperSlide>
                <SwiperSlide>
                  <div className='slide-2'></div>
                    <h3 className='slide2-cont'>Create your Oun Style.</h3>
                    <p>Fresh perspectives, effortless transformations, and confidence-driven looks! Unleash your unique fashion statement with expert styling.</p>
                    <button className='btn'>Make an Appointment now!</button>
                </SwiperSlide>
               
                <SwiperSlide>
                    <div className='slide-3'></div>
                    <h6 className='slide3-cont slide-text '> Discover fresh inspiration and create stunning new looks!.. </h6>
                    <span className='lpj slide-text'>with LabelPallavij</span>
                   
                </SwiperSlide>
            </Swiper>
        </div>
    </>
  )
}

export default HomeSwiper