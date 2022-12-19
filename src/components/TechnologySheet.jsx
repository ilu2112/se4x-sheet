import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";
import {
  BsFillCheckSquareFill,
  BsExclamationSquareFill,
} from "react-icons/bs";

import TitleBar from "./common/TitleBar";
import IconButton from "./common/IconButton";
import Toggler from "./common/Toggler";
import TechnologyCell from "./technology-sheet/TechnologyCell";
import { sheetStore } from "../models/store";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(7, 1fr);
  box-sizing: border-box;
  border: 1px solid #000;

  .title-bar {
    grid-column: 1 / 10;
  }

  .technologies-list-wrapper {
    grid-column: 1 / 10;
    grid-row: 2 / 8;
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }

  .technology-cell {
    &:nth-of-type(4n + 1) {
      grid-column: 1 / 4;
    }

    &:nth-of-type(4n + 2) {
      grid-column: 4 / 6;
    }

    &:nth-of-type(4n + 3) {
      grid-column: 6 / 8;
    }

    &:nth-of-type(4n) {
      grid-column: 8 / 10;
    }   
  }
`;

@observer
class TechnologySheet extends React.Component {
  render() {
    const {
      technologies,
      acceptAllTechLevels,
      shouldSyncTechSpendings,
      toggleShouldSyncTechSpendings,
    } = sheetStore;
    return (
      <Wrapper>
        <TitleBar title="Tech">
          <Toggler
            icon={ <BsExclamationSquareFill /> }
            enabled={ shouldSyncTechSpendings }
            onClick={ toggleShouldSyncTechSpendings }
          />
          <IconButton
            icon={ <BsFillCheckSquareFill /> }
            onClick={ acceptAllTechLevels }
            withLeftMargin
          />
        </TitleBar>
        <div className="technologies-list-wrapper">
          {technologies.map(props => 
            <TechnologyCell
              key={ props.id }
              { ...props }
            />
          )}
        </div>
      </Wrapper>
    );
  }
}

export default TechnologySheet;