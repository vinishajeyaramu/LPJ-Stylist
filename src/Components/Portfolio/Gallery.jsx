import React from "react";
import "./Gallery.css";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

// Import Images
import image1 from "../../Assets/Images/50100460_1708581542575595_2339927915510267505_n.jpg";
import image2 from "../../Assets/Images/61404922_119145729311803_3670960322178795071_n.jpg";
import image3 from "../../Assets/Images/62485680_372383996965837_7390229785949425789_n.jpg";
import image4 from "../../Assets/Images/69318063_162883364826150_7494046212161949988_n.jpg";
import image5 from "../../Assets/Images/309224720_486223250042987_7607759336279860938_n.jpg";
import image6 from "../../Assets/Images/296142252_584308926603243_1790121563677909208_n.jpg";
import image7 from "../../Assets/Images/47582045_340399813472398_2731308399680730408_n.jpg";
import image8 from "../../Assets/Images/41477370_2190051081280446_5076192068742669927_n.jpg";
import image9 from "../../Assets/Images/256642596_445052930524205_2770230527125382700_n.jpg";
import image10 from "../../Assets/Images/244306746_136748572014335_8513204586779846635_n.jpeg";
import image11 from "../../Assets/Images/71147761_366375584251905_2607844874735390198_n.jpg";
import image12 from "../../Assets/Images/66669110_396743580964528_4790796421128469466_n.jpg";
import image13 from "../../Assets/Images/289701571_445138347048946_7076633491378893000_n.jpg";
import image14 from "../../Assets/Images/236027004_173285808111727_5653376781859821103_n.jpg";

// Image Data Array
const images = [
  { src: image1, alt: "Fashion Look 1", objectPosition: "center" },
  { src: image2, alt: "Fashion Look 2", objectPosition: "center" },
  { src: image3, alt: "Fashion Look 3", objectPosition: "center" },
  { src: image4, alt: "Fashion Look 4", objectPosition: "center" },
  { src: image5, alt: "Fashion Look 5", objectPosition: "center" },
  { src: image6, alt: "Fashion Look 6", objectPosition: "center" },
  { src: image7, alt: "Fashion Look 7", objectPosition: "top" }, // ✅ Moves this image to the top
  { src: image8, alt: "Fashion Look 8", objectPosition: "center" },
  { src: image9, alt: "Fashion Look 9", objectPosition: "center" },
  { src: image10, alt: "Fashion Look 10", objectPosition: "top" },
  { src: image11, alt: "Fashion Look 11", objectPosition: "center" },
  { src: image12, alt: "Fashion Look 12", objectPosition: "center" },
  { src: image13, alt: "Fashion Look 13", objectPosition: "center" },
  { src: image14, alt: "Fashion Look 14", objectPosition: "center" },
];

const Gallery = () => {
  return (
    <div className="grid-container-1">
      {/* 1st Row (3 Images, Different Sizes) */}
      <div className="grid-row-3">
        {images.slice(0, 3).map((img, index) => (
          <div key={index} className="grid-item">
            <img src={img.src} alt={img.alt} style={{ objectPosition: img.objectPosition }} />
            <div className="overlay">
              <FaSearch className="icon" />
              <FaMapMarkerAlt className="icon" />
            </div>
          </div>
        ))}
      </div>

      {/* 2nd Row (4 Images, Same Size) */}
      <div className="grid-row-4">
        {images.slice(3, 7).map((img, index) => (
          <div key={index} className="grid-item">
            <img src={img.src} alt={img.alt} style={{ objectPosition: img.objectPosition }} />
            <div className="overlay">
              <FaSearch className="icon" />
              <FaMapMarkerAlt className="icon" />
            </div>
          </div>
        ))}
      </div>

      {/* 3rd Row (3 Images, Different Sizes) */}
      <div className="grid-row-3">
        {images.slice(7, 10).map((img, index) => (
          <div key={index} className="grid-item">
            <img src={img.src} alt={img.alt} style={{ objectPosition: img.objectPosition }} />
            <div className="overlay">
              <FaSearch className="icon" />
              <FaMapMarkerAlt className="icon" />
            </div>
          </div>
        ))}
      </div>

      {/* 4th Row (4 Images, Same Size) */}
      <div className="grid-row-4">
        {images.slice(10, 14).map((img, index) => (
          <div key={index} className="grid-item">
            <img src={img.src} alt={img.alt} style={{ objectPosition: img.objectPosition }} />
            <div className="overlay">
              <FaSearch className="icon" />
              <FaMapMarkerAlt className="icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
