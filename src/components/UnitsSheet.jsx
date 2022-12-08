import React from "react";
import styled from "styled-components";
import TitleBar from "./common/TitleBar";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  user-select: none;
  display: grid;
  grid-template-rows: repeat(27, 1fr);
  border: 1px solid #000;
  border-top: none;
`;

class UnitsSheet extends React.Component {
  render() {
    return (
      <Wrapper>
        <TitleBar title="Units" />
      </Wrapper>
    );
  }
}

export default UnitsSheet;