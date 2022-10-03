import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useNavigate } from "react-router-dom";
/**
 * @todo 틀만 만들어 놓은 것임
 */
export default function Similar({ alcohol, similar }) {
  const navigate = useNavigate();

  const clickSlmilar = item => {
    navigate("/detail/" + item.alcohol_no);
  };

  return (
    <StyledWrapper>
      <h3>"{alcohol.alco_name}"와 유사한 전통주</h3>
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
                  <h5 id="name-sool">{item.alcohol_name}</h5>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  border: solid yellow;
  margin: 10px 0px;
  width: 1300px;

  #title {
    text-align: left;
    padding-top: 20px;
    margin-left: 30px;
  }

  #item {
    display: inline-block;
    border: 1px solid;
    margin-right: 30px;
  }
  #img-sool {
    height: 250px;
    width: 100%;
    object-fit: scale-down;
  }
  #name-sool {
    margin: 10px;
  }
  #similarlist h5 {
    text-align: center;
  }
`;
