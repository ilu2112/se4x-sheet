import React from "react";
import styled from "styled-components";
import ProductionSheet from "./ProductionSheet";
import TechnologiesSheet from "./TechnologiesSheet";
import UnitsSheet from "./UnitsSheet";

const MasterSheetComponent = styled.div`
  display: grid;
  width: 1200px;
  height: 800px;
  margin: 50px auto;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  background: #EEE;

  .production-sheet-wrapper {
    grid-column-start: 1;
    grid-column-end: 9;
    grid-row-start: 1;
    grid-row-end: 10;
  }

  .technologies-sheet-wrapper {
    grid-column-start: 1;
    grid-column-end: 9;
    grid-row-start: 10;
    grid-row-end: 13;
  }

  .units-sheet-wrapper {
    grid-column-start: 9;
    grid-column-end: 13;
    grid-row-start: 1;
    grid-row-end: 13;
  }
`;

class MasterSheet extends React.Component {
  render() {
    return (
      <MasterSheetComponent>
        <div className="production-sheet-wrapper">
          <ProductionSheet />
        </div>
        <div className="technologies-sheet-wrapper">
          <TechnologiesSheet />
        </div>
        <div className="units-sheet-wrapper">
          <UnitsSheet />
        </div>
      </MasterSheetComponent>
    );
  }
}

export default MasterSheet;