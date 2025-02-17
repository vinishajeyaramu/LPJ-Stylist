import React, { useState } from "react";
import "./Pricing.css"; // Import CSS for styling

const packagesData = [
  {
    title: "Our Pricing Plan Holds This Package For Each",
    features: ["Styling + Direction", "Event Directions", "Ads", "Makover", "Concept based Styling + Directions"],
    price: 35000,
  },
  
];

const PricingGrid = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className="pricing-container">
      {packagesData.map((pkg, index) => (
        <div 
          key={index} 
          className="pricing-card"
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <h2>{pkg.title}</h2>
          <ul>
            {pkg.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          <div className="pricing-box">
            {hoverIndex === index ? (
              <button className="book-now">Book Now</button>
            ) : (
              <p className="price">₹{pkg.price}</p>
            )}
            {index === 0 && hoverIndex === index && <span className="most-popular">Most Popular</span>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingGrid;
