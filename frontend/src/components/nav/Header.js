import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "assets/img/logo_example.png";
import Menu from "components/nav/Menu";

export default function Header() {
  return(
    <StyledWrapper>
      <div id="container">
        <Link to="/">
          <div id="logo">
            <img id="logo-image" src={ logo } alt="logo" />
            <div id="logo-letter">
              우주
            </div>
          </div>
        </Link>
        <Menu />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  #container {
    width: 100%;
    height: 100px;
    position: sticky;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  a {
    text-decoration: none;
    color: black;
  }
  #logo {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
  #logo-image {
    width: 80px;
    height: 80px;
  }
  #logo-letter {
    font-size: 32px;    
  }
`;