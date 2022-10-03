import styled from "styled-components";

export default function SearchResultElement(props) {
  return (
    <StyledWrapper>
      <div id="picture">
        <img src={props.img_link} alt="example" />
      </div>
      <div id="information">
        <div id="alcoholtitle">{props.name}</div>
        <div>{props.brewery}</div>
        <div>{props.size}ml / {props.alcohol}도</div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  border: 2px solid #ceab93;
  border-radius: 10px;
  margin: 10px 0px;
  align-items: center;
  width: 340px;

  #picture {
    width: 100px;
    height: 100px;
    border: 0.2px solid #d0b8a8;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
  }
  #picture img {
    width: 90px;
    height: 90px;
    margin: auto;
    object-fit: contain;
  }
  #information {
    display: flex;
    flex-direction: column;
    margin: 5px;
    font-family: "GD";
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
  #alcoholtitle {
    font-size: 20px;
  }
`;
  