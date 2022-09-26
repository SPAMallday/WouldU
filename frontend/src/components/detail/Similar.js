import styled from "styled-components";
import testinput from "components/search/testinput";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

/**
 * @todo 틀만 만들어 놓은 것임
*/
export default function Similar(props) {
  const { detailId } = props;

  const detailInformation = testinput[detailId - 1];

  const showSimilarList = () =>{
    const similarList = [];
    for(let i=0; i < 6; i++){
      similarList.push(
        <SwiperSlide>
          <div key={i} i="item">
            <img id="img-sool"src={detailInformation.img_link} alt="예시" />
            <h5 id="name-sool">{detailInformation.name}</h5>
          </div>
        </SwiperSlide>
      );
    }
    return similarList;
  }

  return (
    <StyledWrapper>
      <h3>
        "{detailInformation.name}"와 유사한 전통주
      </h3>
      <div id="similarlist">
        <Swiper
            modules={[Navigation]}
            spaceBetween={-50}
            slidesPerView={5}
            navigation
          >
          {showSimilarList()}
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
  }
  #name-sool {
    margin: 10px;
  }
`;
