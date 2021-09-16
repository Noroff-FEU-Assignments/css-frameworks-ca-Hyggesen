import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import slide1 from "../assets/Carousel images/carousel-1.jpg";
import slide2 from "../assets/Carousel images/carousel-2.jpg";
import slide3 from "../assets/Carousel images/carousel-3.jpg";

function TheCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={slide1} alt="First slide" />
        <Carousel.Caption />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default TheCarousel;
