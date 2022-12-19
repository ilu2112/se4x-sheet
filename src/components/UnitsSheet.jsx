import React from "react";
import styled from "styled-components";
import { Scrollbars } from "react-custom-scrollbars";
import { observer } from "mobx-react";
import {
  BsPencilSquare,
  BsFillPlusSquareFill,
  BsFillCheckSquareFill,
} from "react-icons/bs";
import { ReactSortable } from "react-sortablejs";
import _ from "lodash";

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
      &:nth-of-type(11n + 1) {
        grid-column: 1 / 3;
      }

      &:nth-of-type(11n + 8) {
        grid-column: 9 / 11;
      }
  
      &:nth-of-type(11n) {
        grid-column: 13 / 15;
      }
    }
  }

  .units-rows {
    grid-row: 2 / 16;
  }

  .sortable-chosen {
    border-top: 1px solid #CCC;
    border-left: 1px solid #CCC;
  }

  .sortable-ghost {
    position: relative;
    &:after {
      background: #CCC;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: "";
    }
  }
`;

@observer
class UnitsSheet extends React.Component {
  constructor(props) {
    super(props);
    this.scrollRef = React.createRef();
    this.state = {
      allUnitsEditable: false
    };
  }

  handleListReorder(newState) {
    const { reorderUnits } = sheetStore;
    const ids = _.map(newState, s => s.id);
    reorderUnits(ids);
  }
  
  onAddNewUnit() {
    const { addNewUnit } = sheetStore;
    addNewUnit();
    setTimeout(this.scrollRef.current.scrollToBottom, 250);
  }

  onAllUnitEditableClick() {
    const newValue = !this.state.allUnitsEditable;
    this.setState({
      allUnitsEditable: newValue
    });
    const { setAllUnitsEditable } = sheetStore;
    setAllUnitsEditable(newValue);
  }

  render() {
    const {
      units,
      totalUpkeepCost,
    } = sheetStore;
    const {
      allUnitsEditable,
    } = this.state;
    return (
      <Wrapper>
        <TitleBar title="Units">
        <IconButton
            icon={ allUnitsEditable ? <BsFillCheckSquareFill /> : <BsPencilSquare /> }
            onClick={ this.onAllUnitEditableClick.bind(this) }
          />
          <IconButton
            icon={ <BsFillPlusSquareFill /> }
            withLeftMargin
            onClick={ this.onAddNewUnit.bind(this) }
          />
        </TitleBar>
        <div className="units-content">
          <div className="units-labels">
            <UnitLabel title="Group" />
            <UnitLabel title="#" />
            <UnitLabel title="Atk" />
            <UnitLabel title="Def" />
            <UnitLabel title="Mov" />
            <UnitLabel title="Tac" />
            <UnitLabel title="Exp" />
            <UnitLabel title="Tech" />
            <UnitLabel title="Hull" />
            <UnitLabel title="Upkp" subtitle={`(${totalUpkeepCost})`} />
            <UnitLabel title="" />
          </div>
          <div className="units-rows">
            <Scrollbars
              autoHide={ false }
              ref={ this.scrollRef }
            >
              <div className="units-rows__wrapper">

                <ReactSortable
                  list={ units }
                  setList={ this.handleListReorder.bind(this) }
                  handle=".drag-handle"
                >
                  {units.map(props =>
                    <UnitRow key={ props.id } {...props} />
                  )}
                </ReactSortable>

              </div>
            </Scrollbars>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default UnitsSheet;