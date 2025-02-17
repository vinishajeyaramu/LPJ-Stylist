import React from 'react'
import './Services.css'
import image1 from '../../Assets/Images/70748853_1398834400279144_6963165645478380164_n.jpg'
import image2 from '../../Assets/Images/59079337_150380986005230_8007068835424954940_n.jpg'
import image3 from '../../Assets/Images/260959763_389194129652720_9074802248093225505_n.jpg'
const Services = () => {
    const services = [
        {
          title: "MAKEOVER",
          description: "Whether you're preparing for a special occasion or simply craving a transformation, my makeover services will enhance your beauty and boost your confidence.",
          image: image1,
          link: "#"
        },
        {
          title: "STYLING & DIRECTION",
          description: "We provide exceptional styling and direction, collaborating with some of the most talented and experienced artists in the industry to bring your vision to life.",
          image: image2,
          link: "#"
        },
        {
          title: "CAMPAIGN",
          description: "My team and I craft captivating looks for campaigns, enhancing every face with stunning hairdressing techniques—from elegant updos to intricate fishtails.",
          image: image3,
          link: "#"
        }
      ];
  return (
    <>
        <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} />
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href={service.link}>More Info</a>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Services