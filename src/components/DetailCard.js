import styled from "styled-components";
import sun from "../assets/shintu/sun.svg";
import pattern from "../assets/shintu/pattern.svg";
import mountains from "../assets/shintu/mountains.svg";
import water from "../assets/shintu/waterBare.svg";

const CardBack = styled.div`
  background-color: var(--cardBack);
  background-image: url(${pattern});
  height: 100%;
  width: 100%;
  margin-top: 1rem;
  &:hover {
      border: 2px solid var(--primary);
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
  height: 200%;
  width: 180%;
  padding:1.3rem;

  position: relative;
`;

const CardBottomMiddle = styled.div`
  background-color: transparent;
  height: 42%;
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

export const VerticalText = props => (
  <div style={{ 
    flex: 1, 
    flexDirection: 'column', 
    position:'absolute',
    right:props.right,
    top:props.top
    }}>
      {props.text.split('').map(char => <h3>{char}</h3>)}
  </div>
);

export default function DetailCard() {
    let right = 30;

    return (
    <CardBack>
        
        <img src={sun} alt="sun" ></img>
        <VerticalText text={'WHO'} right={right} top={30}></VerticalText>
        <VerticalText text={'WE'} right={right} top={100}></VerticalText>
        <VerticalText text={'ARE'} right={right+2} top={150}></VerticalText>
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


