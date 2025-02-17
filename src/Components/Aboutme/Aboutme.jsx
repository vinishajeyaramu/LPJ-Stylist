import React from "react";
import "./Aboutme.css"; // Import the CSS file
import image from '../../Assets/Images/Slider-1.jpeg'
const AboutMe = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        
        <div className="about-image-container">
          <div className="about-image-border">
            <img
              src={image}
              alt="Fashion Stylist"
              className="about-image"
            />
          </div>
         
        </div>

         
        <div className="about-text">
          <h2 className="about-title">About Me</h2>
          <p className="about-description">
          I have been a passionate stylist and groomer based in <strong>India</strong> for over <strong>10 years</strong>.<br/>  
          With a deep understanding of fashion, personal styling, and grooming, I specialize in curating looks that enhance individuality and confidence.
          </p>
          <p className="about-description">
          My expertise extends from personal styling and image consulting to runway, editorial, and high-profile event grooming. I take pride in transforming appearances while ensuring my clients feel empowered and refined.
          </p>
          <p className="about-description">
          With an extensive portfolio spanning celebrity styling, corporate makeovers, fashion shoots, and bridal transformations, I have been recognized as a creative force in the industry. Recently, I was featured as an emerging talent in an independent fashion and lifestyle magazine.
          </p>
          <h3>Label Pallavi Jai</h3>
          <p className="a-role">-Fashion Director Stylist</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
