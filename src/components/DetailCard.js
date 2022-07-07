import styled from "styled-components";
import sun from "../assets/shintu/sun.svg";
import mountains from "../assets/shintu/mountains.svg";
import water from "../assets/shintu/waterBare.svg";

const CardBack = styled.div`
  background-color: var(--cardBack);
  height: 100%;
  width: 100%;
  margin-top: 1rem;
  &:hover {
      border: 2px solid var(--white);
      padding: 2px;
    }


  display: flex;
  flex-direction: column;
  align-items: flex-start;
  img {
    left: 10%;
    top: 10%;
    width: 58%;
    height: auto;
    position: relative;
  }

  position: relative;
`;

const CardTop = styled.div`
  background-color: transparent;
  height: 58%;
  width: 100%;
  margin-bottom: 0rem;


  position: relative;
`;

const CardBottomMiddle = styled.div`
  background-color: transparent;
  height: 32%;
  width: 100%;
  margin-bottom:-8%;
  img {
    left:0;
    width: 100%;
    height: 100%;
    position: relative;
  }

  position: relative;
`;

const CardBottom = styled.div`
  background-color: transparent;
  height: 30%;
  width: 100%;
  img {
    left: 0%;
    width: 100%;
    height: 100%;
    position: relative;
  }

  position: relative;
`;

export default function DetailCard() {
    return (
    <CardBack>
        <img src={sun} alt="sun" ></img>
        <CardTop></CardTop>
        <CardBottomMiddle>
          <img src={mountains} alt="sun" ></img>
        </CardBottomMiddle>
        <CardBottom>
        <img src={water} alt="sun" ></img>
        </CardBottom>
    </CardBack>
    );
  };


