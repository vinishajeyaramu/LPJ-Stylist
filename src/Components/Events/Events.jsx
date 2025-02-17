import React from 'react'
import './Events.css'
import image1 from '../../Assets/Images/36136946_199918164054169_696433847604084736_n.jpg'
import image2 from '../../Assets/Images/40337930_476255122892045_2995082009207898112_n.jpg'
import image3 from '../../Assets/Images/69279476_395118644486262_178845403697018458_n.jpg'
import image4 from '../../Assets/Images/32233044_363842887470813_4662017438794121216_n.jpg'
import Image from '../../Assets/Images/377299447_212866611779427_8560025188523534024_n.jpg'
const Events = () => {
    
        const handleImageClick = () => {
            window.open(
                "https://www.instagram.com/reel/CxBe_93BTGU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D",
                "_blank" // Opens in a new tab
            );
        };
    const events = [
        {
          title: "the enigma",
          description: "Whether you're preparing for a special occasion or simply craving a transformation, my makeover services will enhance your beauty and boost your confidence.",
          image: image1,
          link: "#"
        },
        {
          title: "MISS & MRS BENGAL",
          description: "We provide exceptional styling and direction, collaborating with some of the most talented and experienced artists in the industry to bring your vision to life.",
          image: image2,
          link: "#"
        },
        {
          title: "MODERN IMPERIAL",
          description: "My team and I craft captivating looks for campaigns, enhancing every face with stunning hairdressing techniques—from elegant updos to intricate fishtails.",
          image: image3,
          link: "#"
        },
        {
            title: "the vintage",
            description: "Whether you're getting ready for a big event or just want a fresh new look, my styling services will elevate your appearance and amplify your confidence.",
            image: image4,
            link: "#"
        }
      ];
  return (
    <>
        <div className="event-container">
        {events.map((events, index) => (
          <div className="event-card" key={index}>
            <img src={events.image} alt={events.title} />
            <div className="event-content">
              <h3>{events.title}</h3>
              <p>{events.description}</p>
              <a href={events.link}>More Info</a>
            </div>
          </div>
        ))}
      </div>

      <div className="grid-container">
            {/* Left Side Content */}
            <div className="grid-content">
                <h2>The Magical Transformation</h2>
                <p>
                    We provide exceptional styling and makeover services to help 
                    you look and feel your best. Whether it's a personal transformation, 
                    a conceptual shoot, or a high-end campaign, we bring your vision to life.
                </p>
            </div>

            {/* Right Side Image (Clickable) */}
            <div className="grid-image" onClick={handleImageClick}>
                <img src={Image} alt="Our Services" />
            </div>
        </div>
    </>
  )
}

export default Events