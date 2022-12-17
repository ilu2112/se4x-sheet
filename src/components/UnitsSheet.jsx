import React from "react";
import styled from "styled-components";
import { Scrollbars } from "react-custom-scrollbars";
import { observer } from "mobx-react";
import { BsFillPlusSquareFill } from "react-icons/bs";
import IconButton from "./common/IconButton";
import TitleBar from "./common/TitleBar";
import UnitLabel from "./units-sheet/UnitLabel";
import UnitRow from "./units-sheet/UnitRow";
import { sheetStore } from "../models/store";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  user-select: none;
  display: grid;
  grid-template-rows: repeat(18, 1fr);
  border: 1px solid #000;
  border-top: none;
  
  .units-content {
    grid-row: 2 / 19;
    display: grid;
    grid-template-rows: repeat(15, 1fr);
  }

  .units-labels {
    display: grid;
    grid-template-columns: repeat(14, 1fr);
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    background: #DDD;
    grid-row: 1 / 2;

    .unit-label {
      &:nth-of-type(10n + 1) {
        grid-column: 1 / 3;
      }

      &:nth-of-type(10n + 7) {
        grid-column: 8 / 11;
      }
  
      &:nth-of-type(10n) {
        grid-column: 13 / 15;
      }
    }
  }

  .units-rows {
    grid-row: 2 / 16;
  }
`;

@observer
class UnitsSheet extends React.Component {
  render() {
    const {
      units,
      addNewUnit,
    } = sheetStore;
    return (
      <Wrapper>
        <TitleBar title="Units">
          <IconButton
            icon={ <BsFillPlusSquareFill /> }
            onClick={ addNewUnit }
          />
        </TitleBar>
        <div className="units-content">
          <div className="units-labels">
            <UnitLabel title="Grp" />
            <UnitLabel title="#" />
            <UnitLabel title="Atk" />
            <UnitLabel title="Def" />
            <UnitLabel title="Mov" />
            <UnitLabel title="Exp" />
            <UnitLabel title="Tech" />
            <UnitLabel title="Hull" />
            <UnitLabel title="Upkp" />
            <UnitLabel title="" />
          </div>
          <div className="units-rows">
            <Scrollbars autoHide={ false }>
              <div className="units-rows__wrapper">
                {units.map(props =>
                  <UnitRow key={ props.id } {...props} />
                )}
              </div>
            </Scrollbars>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default UnitsSheet;