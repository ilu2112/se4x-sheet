import React from "react";
import styled from "styled-components";
import ProductionSheet from "./ProductionSheet";
import TechnologySheet from "./TechnologySheet";
import UnitsSheet from "./UnitsSheet";

const MasterSheetComponent = styled.div`
  display: grid;
  min-width: 1200px;
  min-height: 800px;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  overflow: hidden;

  .production-sheet-wrapper {
    height: 100%;
    width: 100%;
    grid-column: 1 / 8;
    grid-row: 1 / 9;
  }

  .technology-sheet-wrapper {
    height: 100%;
    width: 100%;
    grid-column: 1 / 8;
    grid-row: 9 / 13;
  }

  .units-sheet-wrapper {
    height: 100%;
    width: 100%;
    grid-column: 8 / 13;
    grid-row: 1 / 13;
  }
`;

class MasterSheet extends React.Component {
  render() {
    return (
      <MasterSheetComponent>
        <div className="production-sheet-wrapper">
          <ProductionSheet />
        </div>
        <div className="technology-sheet-wrapper">
          <TechnologySheet />
        </div>
        <div className="units-sheet-wrapper">
          <UnitsSheet />
        </div>
      </MasterSheetComponent>
    );
  }
}

export default MasterSheet;