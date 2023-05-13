import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.img`
  position: absolute;
  height: 50px;
  width: 50px;
  bottom: ${(props) => props.cordY}px;
  left: ${(props) => props.cordX}px;
  /* src="/images/RedBird.png" */

  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`;

const Block = ({ cordX = 100, cordY = 100, }) => {
    return (
        <Wrapper cordX={cordX} cordY={cordY} src="/images/TNT.png" ></Wrapper>
    )
}

export default Block