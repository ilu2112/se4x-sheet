import React from "react";
import styled from "styled-components";
import TechnologyCell from "./technology-sheet/TechnologyCell";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(8, 1fr);

  box-sizing: border-box;
  border: 1px solid #000;
  border-bottom: none;
  border-right: none;
`;

class TechnologySheet extends React.Component {
  render() {
    return (
      <Wrapper>
        <TechnologyCell />
        <TechnologyCell />
        <TechnologyCell />
        <TechnologyCell />
        <TechnologyCell />
        <TechnologyCell />
        <TechnologyCell />
        <TechnologyCell />
        <TechnologyCell />
        <TechnologyCell />

        <TechnologyCell />
        <TechnologyCell />
        <TechnologyCell />
        <TechnologyCell />
        <TechnologyCell />
        <TechnologyCell />
        <TechnologyCell />
        <TechnologyCell />
        <TechnologyCell />
        <TechnologyCell />

        <TechnologyCell />
        <TechnologyCell />
        <TechnologyCell />
      </Wrapper>
    );
  }
}

export default TechnologySheet;