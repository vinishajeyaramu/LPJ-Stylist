import React, { useState } from "react";
import "./Testimonial.css";
import image1 from "../../Assets/Images/47582045_340399813472398_2731308399680730408_n.jpg";
import image2 from "../../Assets/Images/gallery/image2.jpg"; // Add more images as needed

const testimonialsData = [
  {
    client: "Rebecca",
    review:
      "A great makeover isn’t just about changing how you look—it’s about enhancing the confidence you already have.",
    image: image1,
  },
  {
    client: "Jaish",
    review:
     "True style isn’t about how much you spend; it’s about how you feel in what you wear and owning your confidence.",
    image: image2,
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleTestimonialChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="testimonial-container">
      <h2 className="testimonial-title">Our Happy Clients</h2>
      <p className="testimonial-text">"{testimonialsData[currentIndex].review}"</p>

      <div className="testimonial-user">
        <img
          src={testimonialsData[currentIndex].image}
          alt={testimonialsData[currentIndex].client}
          className="testimonial-image"
        />
        <h4>- {testimonialsData[currentIndex].client}</h4>
      </div>

      <div className="testimonial-navigation">
        {testimonialsData.map((_, index) => (
          <div
            key={index}
            className={`nav-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleTestimonialChange(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
