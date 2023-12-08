import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../Assets/3.jpg";
import img2 from "../Assets/4.jpg";
//import { FALSE } from "sass";
function Services() {
  return (
    <div className="services">
      <Carousel infiniteLoop autoPlay showStatus={false}  showArrows={false}  
      
    showIndicators={false}
    showThumbs={false}
    interval={1000} >
        <div>
          <img src={img1} alt="Item1" />
          <p className="legend">full stack</p>
        </div>

        <div>
          <img src={img2} alt="Item3" />
          <p  className="legend">Peer to peer suppport</p>
        </div>


      </Carousel>
    </div>
  );
}

export default Services;
