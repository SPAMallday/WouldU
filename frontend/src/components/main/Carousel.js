import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import main_1 from "assets/img/main_1.jpg";
import main_2 from "assets/img/main_2.jpg";
import main_3 from "assets/img/main_3.jpg";
import main_4 from "assets/img/main_4.jpg";
import styled from "styled-components";

export default function Carousel() {
  return (
    <StyledWrapper>
      <MDBCarousel fade pause="false">
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={1}
          src={main_1}
          alt='main_1'
        />
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={2}
          src={main_2}
          alt='main_2'
        />
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={3}
          src={main_3}
          alt='main_3'
        />
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={4}
          src={main_4}
          alt='main_4'
        />
      </MDBCarousel>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .carousel-inner {
    height: 80vh;
  }
  .carousel-inner img {
    max-width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;