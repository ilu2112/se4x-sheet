import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import TechnologyCell from "./technology-sheet/TechnologyCell";
import { sheetStore } from "../models/store";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  grid-template-rows: repeat(9, 1fr);
  box-sizing: border-box;
  border: 1px solid #000;

  .technology-cell {
    &:nth-of-type(3n - 1) {
      grid-column: 1 / 6;
    }

    &:nth-of-type(3n) {
      grid-column: 6 / 10;
    }

    &:nth-of-type(3n + 1) {
      grid-column: 10 / 14;
    }
  }
`;

const Title = styled.div`
  grid-column: 1 / 14;
  display: flex;
  align-items: center;
  font-size: 18px;
  letter-spacing: 0.75px;
  font-style: italic;
  justify-content: center;
  font-weight: 700;
  box-sizing: border-box;
  border-bottom: 1px solid #000;;
  color: #FFF;
  background: #00698c;
`;

@observer
class TechnologySheet extends React.Component {
  render() {
    const { technologies } = sheetStore;
    return (
      <Wrapper>
        <Title>Tech</Title>
        {technologies.map(props => 
          <TechnologyCell
            key={ props.id }
            { ...props }
          />
        )}
      </Wrapper>
    );
  }
}

export default TechnologySheet;