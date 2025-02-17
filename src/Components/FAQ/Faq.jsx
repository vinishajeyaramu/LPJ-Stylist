import React, { useState } from "react";
import "./Faq.css";
import { LuMailQuestion } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";

const faqs = [
  {
    question: "What is conceptual fashion styling?",
    answer: "Conceptual fashion styling is a creative approach that tells a story or conveys a strong visual message beyond traditional styling."
  },
  {
    question: "How do you style for high-fashion campaigns?",
    answer: "High-fashion campaigns require an avant-garde approach, using bold concepts, unique silhouettes, and artistic direction tailored to the brand."
  },
  {
    question: "What styling services do you offer for makeovers?",
    answer: "We provide complete makeover services including outfit curation, makeup, hair styling, and confidence coaching for beauty pageants."
  },
  {
    question: "How do you create a fashion story for editorial shoots?",
    answer: "Editorial fashion storytelling involves choosing a theme, selecting models, outfits, locations, and collaborating with photographers."
  },
  {
    question: "What should I wear for a fashion campaign shoot?",
    answer: "It depends on the campaign concept. We create a mood board and curate looks that align with the brand identity and message."
  },
  {
    question: "Do you offer styling for personal branding shoots?",
    answer: "Yes, we help individuals curate outfits that enhance their professional image for personal branding and social media presence."
  },
  {
    question: "How do you style for a bridal campaign?",
    answer: "Bridal campaigns require a mix of traditional and modern elements, focusing on intricate details, luxury fabrics, and accessories."
  },
  {
    question: "What is the difference between commercial and editorial styling?",
    answer: "Commercial styling is for advertisements and is more relatable, while editorial styling is high-fashion and conceptual."
  },
  {
    question: "Do you style for music videos and film productions?",
    answer: "Yes! We style music videos, short films, and advertisements to match the artistic vision and genre."
  },
  {
    question: "How do you ensure each styling project stands out?",
    answer: "Every project is unique, and we focus on personalization, trends, and storytelling to create impactful visuals."
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0); // First FAQ is open by default

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${openIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <span className="faq-icon"><LuMailQuestion /></span>
              <span className="faq-text">{faq.question}</span>
              <span className={`faq-dropdown ${openIndex === index ? "rotate" : ""}`}>
                <IoIosArrowDown />
              </span>
            </div>
            <div className="faq-answer" style={{ maxHeight: openIndex === index ? "300px" : "0px", opacity: openIndex === index ? "1" : "0", overflow: "hidden", transition: "max-height 0.3s ease-in-out, opacity 0.3s ease-in-out" }}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
 