import React, { useState } from "react";
import "./Pricing.css"; // Import CSS for styling

const packagesData = [
  {
    title: "Makeover Package",
    features: ["Bridal Makeup", "HD Makeup", "Airbrush", "Glamour"],
    price: 199,
  },
  {
    title: "Styling Package",
    features: ["Casual Styling", "Formal Styling", "Grooming", "Personalized Fit"],
    price: 250,
  },
  {
    title: "Conceptual Package",
    features: ["Theme-Based Looks", "Editorial Styling", "Creative Direction"],
    price: 299,
  },
  {
    title: "Campaign Package",
    features: ["Commercial Shoots", "Brand Styling", "Model Coordination"],
    price: 399,
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
              <p className="price">${pkg.price}</p>
            )}
            {index === 2 && hoverIndex === index && <span className="most-popular">Most Popular</span>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingGrid;
