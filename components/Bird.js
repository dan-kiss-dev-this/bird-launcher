import React from "react";
import styled from "styled-components";

const Wrapper = styled.img`
  position: absolute;
  height: 50px;
  bottom: ${(props) => props.y}px;
  left: ${(props) => props.x}px;

  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`;

const Bird = ({ x = 50, y = 0 }) => {
  return <Wrapper x={x} y={y} src="/images/RedBird.png" />;
};

export default Bird;
