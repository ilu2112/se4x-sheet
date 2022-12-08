import React from "react";
import styled from "styled-components";
import TitleBar from "./common/TitleBar";
import ProductionLabel from "./production-sheet/ProductionLabel";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(18, 1fr);

  .title-bar {
    grid-column: 1 / 14;
  }

  .production-labels {
    grid-column: 1 / 4;
    grid-row: 2 / 19;
    display: grid;
    grid-template-rows: repeat(20, 1fr);
    border: 1px solid #000;
    border-top: none;
  }
`;

class ProductionSheet extends React.Component {
  render() {
    return (
      <Wrapper>
        <TitleBar title="Production" />
        <div className="production-labels">
          <ProductionLabel bgColor="#DDD">Economic Phase</ProductionLabel>
          <ProductionLabel>Carry over from last turn</ProductionLabel>
          <ProductionLabel>+ Colony CPs</ProductionLabel>
          <ProductionLabel>+ Mineral CPs</ProductionLabel>
          <ProductionLabel>+ MS Pipeline CPs</ProductionLabel>
          <ProductionLabel>+ Industrial Center CPs</ProductionLabel>
          <ProductionLabel>- Maintenance</ProductionLabel>
          <ProductionLabel>- Turn order bid</ProductionLabel>
          <ProductionLabel>&lt;= 15 CP convereted to RP</ProductionLabel>
          <ProductionLabel>Purchases</ProductionLabel>
          <ProductionLabel bgColor="#DDD">Remaining CP</ProductionLabel>
          <ProductionLabel>CP spent on upgrades</ProductionLabel>
          <ProductionLabel>Maint. Increase (buys)</ProductionLabel>
          <ProductionLabel>Maint. Decrease (losses)</ProductionLabel>
          <ProductionLabel bgColor="#DDD"></ProductionLabel>
          <ProductionLabel>Carry over from last turn</ProductionLabel>
          <ProductionLabel>+ Research Center RPs</ProductionLabel>
          <ProductionLabel>&lt;= 15 CP convereted to RP</ProductionLabel>
          <ProductionLabel>- Technology spending</ProductionLabel>
          <ProductionLabel bgColor="#DDD">Remaining RP</ProductionLabel>
        </div>
      </Wrapper>
    );
  }
}

export default ProductionSheet;