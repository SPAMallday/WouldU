import styled from "styled-components";
import testinput from "components/search/testinput";
import RadarChart from "./RadarChart";

export default function Information(props) {
  const { detailId } = props;

  const detailInformation = testinput[detailId - 1];
  const detailInformationTags = (detailInformation.tags === "" ?
    [] :
    detailInformation.tags.split("|"))
  const detailInformationTagslist = detailInformationTags.map(e => (
    <div>#{e}</div>
  ))

  /**
   * @todo 유저 평점 집어넣어야 함
  */
  const tasteData = [
    {
      "taste": "평점",
      "전통주": 3,
    },
    {
      "taste": "단맛",
      "전통주": Number(detailInformation.sweet),
    },
    {
      "taste": "바디감",
      "전통주": Number(detailInformation.body),
    },
    {
      "taste": "신맛",
      "전통주": Number(detailInformation.sour),
    },
    {
      "taste": "향",
      "전통주": Number(detailInformation.scent),
    }
  ];
    
  return (
    <StyledWrapper>
      <button>좋아요버튼</button>
      <div id="picture-information">
        <div id="picture">
          <img src={detailInformation.img_link} alt="example" />
        </div>
        <div id="information">
          <h3>{detailInformation.name}</h3>
          <div>양조장{detailInformation.brewery}</div>
          <div>종류{detailInformation.type}</div>
          <div>
            재료{detailInformation.ingredients}
          </div>
          <div>용량{detailInformation.size}ml</div>
          <div>
            도수{detailInformation.alcohol}도
          </div>
          <div>수상내역{detailInformation.prize}</div>
          <a
            href={`https://search.shopping.naver.com/search/all?query=${detailInformation.name}`}
          >
            <button>구매하러 가기</button>
          </a>
          <a
            href="#"
          >
            <button>리뷰하기</button>
          </a>
          <div id="information-desc">{detailInformation.desc}</div>
          <div id="information-tags">{detailInformationTagslist}</div>
        </div>
      </div>
      <div id="information-chart">
        <RadarChart tasteData={tasteData} />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  #picture-information{
    display: flex;
    border: solid;
    margin: 10px 0px;
  }

  #picture {
    width: 200px;
    height: 200px;
    border: solid;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #picture img {
    width: 190px;
    height: 190px;
    margin: auto;
    object-fit: contain;
  }
  #information {
    display: flex;
    flex-direction: column;
    margin: 10px;
  }
  #information div {
    margin: 0px 5px;
  }
  #information-desc {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    line-height: 1.2em;
  }
  #information-tags {
    display: flex;
  }
  #information-chart {
    border: solid olive;
  }
`;
