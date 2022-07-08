import styled from "styled-components";
import sun from "../assets/shintu/sun.svg";
import mountains from "../assets/shintu/mountains2.svg";
import pattern from "../assets/shintu/pattern.svg";


const CardBack = styled.div`
  background-color: var(--cardBack);
  background-image: url(${pattern});
  height: 100%;
  width: 100%;
  margin-top: 1rem;
  &:hover {
      border: 2px solid var(--primary);
      ${'' /* padding: 2px; */}
    }

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  img {
    left: 25%;
    top: 30%;
    width: 58%;
    position: relative;
  }

  position: relative;
`;

const CardTop = styled.div`
  background-color: transparent;
  height: 38%;
  width: 100%;
  margin-bottom: -8%;


  position: absolute;
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


export default function DetailCard2() {
    let right = 90;

    return (
    <CardBack>
        <img src={sun} alt="sun" ></img>
        <HorizontalText text={'WHAT WE DO'} right={right} top={30}></HorizontalText>

        <CardTop></CardTop>

        <CardBottom>
        <img src={mountains} alt="sun" ></img>
        </CardBottom>
    </CardBack>
    );
  };


