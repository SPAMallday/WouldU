import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useNavigate } from "react-router-dom";

export default function Similar({ alcohol, similar }) {
  const navigate = useNavigate();

  const clickSlmilar = item => {
    navigate("/detail/" + item.alcohol_no);
  };

  return (
    <StyledWrapper>
      <div id="similarframe">
      <div id="similartitle">&lt; "{alcohol.alco_name}"와(과) 유사한 전통주 &gt;</div>
      <div id="similarlist">
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={5}
          navigation
        >
          {similar &&
            similar.slice(0, 6).map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  id="similar"
                  onClick={() => {
                    clickSlmilar(item);
                  }}
                >
                  <img
                    id="img-sool"
                    src={item.alcohol_image}
                    alt={item.alcohol_name}
                  />
                </div>
                  <div id="name-sool">{item.alcohol_name}</div>
              </SwiperSlide>
            ))}
        </Swiper>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "GD";

  #similarframe {
    border: 3px ridge #f5f0bb;
    margin: 10px 0px;
    width: 80vw;
    min-width: 1200px;
    border-radius: 10px;
  }

  #similartitle {
    font-size: 24px;
    margin: 10px;
  }

  #similar {
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: solid #8bbccc;
    border-radius: 10px;
  }
  #img-sool {
    width: 190px;
    height: 190px;
    margin: auto;
    object-fit: contain;
    border-radius: 10px;
  }
  #name-sool {
    margin: 10px;
    font-size: 18px;
  }

  .swiper {
    width: 1300px;
  }
  .swiper-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1200px;
  }
  .swiper-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px 10px;
  }
`;
