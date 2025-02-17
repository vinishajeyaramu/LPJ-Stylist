import React from 'react'
import './Footer.css'
import { FaInstagram,FaFacebookF,FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import img1 from '../../Assets/Images/gallery/image1.jpg'
import img2 from '../../Assets/Images/gallery/image2.jpg'
import img3 from '../../Assets/Images/gallery/image3.jpg'
import img4 from '../../Assets/Images/gallery/image4.jpg'
import img5 from '../../Assets/Images/gallery/image5.jpg'
import img6 from '../../Assets/Images/gallery/image6.jpg'
import f_logo from '../../Assets/Images/Label Pallavi J.jpg'
const Footer = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  return (
    <>
      <div className='footer-main'>
          <div className='grid-1'>
            <h4>CONTACT US</h4>
            <p>Saket,Delhi,India</p>
            <p>+91 9836989823</p>
            <p className='f-mail'><a href="mailto:labelpallavij@gmail.com">labelpallavij@gmail.com</a></p>
          </div>
          <div className='grid-2'>
            <div className="f-logo">
              <img src={f_logo} alt="" />
            </div>
            <p className='f-cont'>As a fashion stylist, I create unique looks for photoshoots, campaigns, Conceptual events and special events. I also provide complete makeovers, ensuring every client looks and feels their best. With a keen eye for detail, I transform aesthetics into captivating visual stories.</p>
            <div className='f-icon'>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className='icon'/>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className='icon'/>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className='icon'/>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className='icon'/>
            </a>
          </div>
          </div>
          <div className='grid-3'>
              <h4>GALLERY</h4>
              <div className='f-gallery'>
  {images.map((imgSrc, index) => (
    <a href={imgSrc} key={index} className='f-g'>
      <div>
        <img src={imgSrc} alt={`Gallery ${index + 1}`} />
      </div>
      <div className='overlay'>
        <FaSearch className="search-icon" />
      </div>
    </a>
  ))}
</div>
          </div>

      </div>
    </>
  )
}

export default Footer