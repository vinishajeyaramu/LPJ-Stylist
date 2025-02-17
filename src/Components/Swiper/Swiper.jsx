import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules'
import './Swiper.css'
import slide1 from '../../Assets/Images/309947895_1278353496232931_1537738754282127533_n.jpeg'
import slide2 from '../../Assets/Images/300602451_588076673026224_4504409814948100079_n.jpg'
import slide3 from '../../Assets/Images/s.jpeg'
const HomeSwiper = () => {
  return (
    <>
        <div className='h-swiper'>
            <Swiper pagination={{clickable:true}} loop={true} autoplay={{
          delay: 7000,  
          disableOnInteraction: false,
        }} modules={[Pagination,Autoplay]} className="mySwiper">
                <SwiperSlide>
                  
                    <img src={slide1} alt=""  className='slide-1'/>
                    <h3 className='slide1-cont slide-text'>Style That Speaks – Transforming You, Effortlessly!</h3>
                  
                    
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" className='slide-2'/>
                    <h3 className='slide2-cont'>Create your Oun Style.</h3>
                    <p>Fresh perspectives, effortless transformations, and confidence-driven looks! Unleash your unique fashion statement with expert styling.</p>
                    <button>Make an Appointment now!</button>
                </SwiperSlide>
               
                <SwiperSlide>
                    <h6 className='slide3-cont slide-text '> Discover fresh inspiration and create stunning new looks!.. </h6>
                    <span className='lpj slide-text'>with LabelPallavij</span>
                    <img src={slide3} alt=""  className='slide-1'/>
                   
                </SwiperSlide>
            </Swiper>
        </div>
    </>
  )
}

export default HomeSwiper