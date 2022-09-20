import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import main_1 from "assets/img/main_1.jpg"
import main_2 from "assets/img/main_2.jpg"
import main_3 from "assets/img/main_3.jpg"
import main_4 from "assets/img/main_4.jpg"

export default function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    variableWidth: true,
  };
  return (
    <StyledWrapper>
      <Slider {...settings}>
        <div id="carousel-frame">
          <img src={main_1} alt="main_1" />
        </div>
        <div id="carousel-frame">
          <img src={main_2} alt="main_2" />
        </div>
        <div id="carousel-frame">
          <img src={main_3} alt="main_3" />
        </div>
        <div id="carousel-frame">
          <img src={main_4} alt="main_4" />
        </div>
      </Slider>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  #carousel-frame {
    width: 100%;
    height: 70%;
    overflow: hidden;
  }
  #carousel-frame img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;