import React from 'react';
import carousel_element1 from "assets/img/carousel_element1.jpg";
import carousel_element2 from "assets/img/carousel_element2.jpg";
import carousel_element3 from "assets/img/carousel_element3.jpg";
import carousel_element4 from "assets/img/carousel_element4.jpg";
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
        {/* <Carousel.Item id="carousel-item">
          <img
            id="carousel-img"
            className="d-block w-100"
            src={carousel_element5}
            alt="First slide"
          />
        </Carousel.Item> */}
        <Carousel.Item>
          <img
            id="carousel-img"
            className="d-block w-100"
            src={carousel_element1}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            id="carousel-img"
            className="d-block w-100"
            src={carousel_element2}
            alt="Third slide"
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
      </Carousel>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  #carousel {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40vw;
    margin: 0px 0px 20px;
  }
  .carousel-inner {
    height: 40vw;
  }
  .carousel-item {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .carousel-inner img {
    max-width: 90vw;
    height: 40vw;
    object-fit: fill;
    border: 8px dashed #deb6ab;
    border-radius: 20px;
  }
`;