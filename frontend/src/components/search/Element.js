import styled from "styled-components";

export default function Element(props) {
  return (
    <StyledWrapper>
      <div id="picture">
        <img src={props.img_link} alt="example" />
      </div>
      <div id="information">
        <div>{props.name}</div>
        <div>{props.brewery}</div>
        {/* <div>{props.ingredients}</div> */}
        <div>
          {props.size}ml / {props.alcohol}도
        </div>
        {/* <div id="information-desc">{props.desc}</div> */}
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  border: solid;
  margin: 10px 0px;
  align-items: center;

  #picture {
    width: 100px;
    height: 100px;
    border: solid;
    display: flex;
    align-items: center;
    justify-content: center;
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
`;