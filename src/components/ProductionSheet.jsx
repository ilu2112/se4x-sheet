import React from "react";
import styled from "styled-components";
import { Scrollbars } from "react-custom-scrollbars";
import { observer } from "mobx-react";
import {
  BsFillArrowRightSquareFill,
  BsFillArrowLeftSquareFill,
} from "react-icons/bs";

import TitleBar from "./common/TitleBar";
import IconButton from "./common/IconButton";
import ProductionLabel from "./production-sheet/ProductionLabel";
import ProductionColumn from "./production-sheet/ProductionColumn";
import { sheetStore } from "../models/store";
import settings from "../config/settings";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(18, 1fr);

  .title-bar {
    grid-column: 1 / 14;
  }

  .production-content {
    grid-column: 1 / 14;
    grid-row: 2 / 19;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(17, 1fr);
  }

  .production-labels {
    grid-column: 1 / 5;
    grid-row: 1 / 19;
    display: grid;
    grid-template-rows: repeat(20, 1fr);
    border: 1px solid #000;
  }

  .production-columns {
    grid-column: 5 / 13;
    grid-row: 1 / 19;
    overflow: hidden;

    box-sizing: border-box;
    border: 1px solid #000;
    height: 100%;
  
    &__wrapper {
      width: 2000px;
      height: 100%;
      display: flex;
    }
  }
`;

@observer
class ProductionSheet extends React.Component {
  render() {
    const {
      productionColumns,
      moveToPrevProductionColumn,
      moveToNextProductionColumn,
    } = sheetStore;
    return (
      <Wrapper>
        <TitleBar title="Production">
          <IconButton
            icon={ <BsFillArrowLeftSquareFill /> }
            onClick={ moveToPrevProductionColumn }
          />
          <IconButton
            icon={ <BsFillArrowRightSquareFill /> }
            onClick={ moveToNextProductionColumn }
          />
        </TitleBar>
        <div className="production-content">
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
          <div className="production-columns">
            <Scrollbars>
              <div className="production-columns__wrapper">
                {productionColumns.map(props =>
                  <ProductionColumn key={ props.phase } {...props} />
                )}
              </div>
            </Scrollbars>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default ProductionSheet;