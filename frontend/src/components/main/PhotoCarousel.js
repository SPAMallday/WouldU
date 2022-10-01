import React from 'react';
// import carousel_element1 from "assets/img/carousel_element1.jpg";
// import carousel_element2 from "assets/img/carousel_element2.jpg";
// import carousel_element3 from "assets/img/carousel_element3.jpg";
// import carousel_element4 from "assets/img/carousel_element4.jpg";
import carousel_element5 from "assets/img/carousel_element5.jpg";
import styled from "styled-components";

import Carousel from "react-bootstrap/Carousel";

export default function PhotoCarousel() {
  return (
    <StyledWrapper>
      <Carousel
        id="carousel"
        fade
        controls={false}
        indicators={false}
        pause={false}
      >
        <Carousel.Item id="carousel-item">
          <img
            id="carousel-img"
            className="d-block w-100"
            src={carousel_element5}
            alt="First slide"
          />
        </Carousel.Item>
        {/* <Carousel.Item>
          <img
            id="carousel-img"
            className="d-block w-100"
            src={carousel_element2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            id="carousel-img"
            className="d-block w-100"
            src={carousel_element3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            id="carousel-img"
            className="d-block w-100"
            src={carousel_element4}
            alt="Third slide"
          />
        </Carousel.Item> */}
      </Carousel>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  #carousel {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30vw;
    margin: 0px 0px 10px;
  }
  .carousel-inner {
    height: 30vw;
  }
  .carousel-item {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .carousel-inner img {
    max-width: 90vw;
    height: 30vw;
    object-fit: fill;
  }
`;