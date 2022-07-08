import styled from "styled-components";
import sun from "../assets/shintu/sun.svg";
import tree from "../assets/shintu/treeL.svg";
import mountains from "../assets/shintu/mountains3.svg";
import { VerticalText } from "./DetailCard";
import pattern from "../assets/shintu/pattern.svg";



const CardBack = styled.div`
  background-color: var(--cardBack);
  background-image: url(${pattern});
  height: 100%;
  width: 100%;
  margin-top: 1rem;
  &:hover {
      border: 2px solid var(--primary);
    }

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  img {
    left: 25%;
    top: 40%;
    width: 58%;
    position: relative;
  }

  position: relative;
`;

const CardTop = styled.div`
  background-color: transparent;
  height: 200%;
  width: 150%;
  margin-bottom: 0rem;
  img {
    left: 0%;
    top: 0%;
    width: 66%;
    position: absolute;
  }

  position: absolute;
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
  ${'' /* background-color: var(--black); */}
  width: 100%;
  bottom:0%;
  img {
    left: 0%;
    width: 100%;
    margin-bottom:-2%;

    position: relative;
  }
  position: absolute;
`;

export const HorizontalText = props => (
  <div style={{ 
    width:200,
    // backgroundColor: 'white',
    flex: 1, 
    flexDirection: 'row', 
    position:'absolute',
    right:props.right,
    top:props.top
    }}>
       <h3>{props.text}</h3>
  </div>
);


export default function DetailCard3() {
    let right = 10;

    return (
    <CardBack>
        <img src={sun} alt="sun" ></img>
        <VerticalText text={'WHAT'} right={right} top={30}></VerticalText>
        <VerticalText text={'WE'} right={right} top={130}></VerticalText>
        <VerticalText text={'DID'} right={right} top={190}></VerticalText>

        <CardTop>
        <img src={tree} alt="sun" ></img>
        </CardTop>

        <CardBottom>
        <img src={mountains} alt="sun" ></img>
        </CardBottom>
    </CardBack>
    );
  };


