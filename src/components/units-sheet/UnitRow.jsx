import React from "react";
import styled from "styled-components";
import {
  BsPencilSquare,
  BsFillXSquareFill,
  BsFillCheckSquareFill,
} from "react-icons/bs";
import {
  RxDragHandleDots2,
} from "react-icons/rx";
import {
  FiCopy,
} from "react-icons/fi";

import NumberStepInput from "../common/NumberStepInput";
import UnitCell from "./UnitCell";
import StaticValue from "./StaticValue";
import TechsList from "./TechsList";
import IconButton from "../common/IconButton";
import UnitNameDropdown from "./UnitNameDropdown";
import { sheetStore } from "../../models/store";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  background: #FFF;

  .unit-cell {
    position: relative;

    &:nth-of-type(11n + 1) {
      grid-column: 1 / 3;
      padding-left: 16px;
    }

    &:nth-of-type(11n + 8) {
      grid-column: 9 / 11;
    }

    &:nth-of-type(11n) {
      grid-column: 13 / 15;
    }
  }

  .drag-handle {
    background: #EEE;
    cursor: move;
    width: 16px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
  }
`;

class UnitRow extends React.Component {
  render() {
    const {
      id,
      name,
      quantity,
      attack,
      defense,
      move,
      tactic,
      canGainExp,
      reactThreshold,
      immovable,
      unupgradable,
      experience,
      hull,
      upkeepCost,
      technologies,
      isEditable,
      isUpkeepCostUnmodified,
      updateField,
      toggleIsEditable,
    } = this.props;
    const { 
      removeUnit,
      copyUnit,
    } = sheetStore;
    return (
      <Wrapper>
        <UnitCell>
          <div className="drag-handle">
            <RxDragHandleDots2 />
          </div>
          <UnitNameDropdown
            value={ name }
            isEditable={ isEditable }
            updateFunction={ value => updateField("name", value) }
          />
        </UnitCell>
        <UnitCell>
          <NumberStepInput
            value={ quantity }
            minValue={ 0 }
            maxValue={ 6 }
            isEditable={ isEditable }
            updateFunction={ value => updateField("quantity", value) }
          />
        </UnitCell>
        <UnitCell>
          { unupgradable && <StaticValue>-</StaticValue> }
          { !unupgradable && 
            <NumberStepInput
              value={ attack }
              minValue={ 0 }
              isEditable={ isEditable }
              updateFunction={ value => updateField("attack", value) }
            />
          }
        </UnitCell>
        <UnitCell>
          { unupgradable && <StaticValue>-</StaticValue> }
          { !unupgradable &&
            <NumberStepInput
              value={ defense }
              minValue={ 0 }
              isEditable={ isEditable }
              updateFunction={ value => updateField("defense", value) }
            />
          }
        </UnitCell>
        <UnitCell>
          { immovable && <StaticValue>-</StaticValue> }
          { !immovable &&
            <NumberStepInput
              value={ move }
              minValue={ 1 }
              maxValue={ 7 }
              isEditable={ isEditable }
              updateFunction={ value => updateField("move", value) }
              superscript="R"
              superscriptThreshold={ reactThreshold }
            />
          }
        </UnitCell>
        <UnitCell>
          { unupgradable && <StaticValue>-</StaticValue> }
          { !unupgradable &&
            <NumberStepInput
              value={ tactic }
              minValue={ 0 }
              isEditable={ isEditable }
              updateFunction={ value => updateField("tactic", value) }
            />
          }
        </UnitCell>
        <UnitCell>
          { !canGainExp && <StaticValue>-</StaticValue> }
          { canGainExp && 
            <NumberStepInput
              value={ experience }
              minValue={ 0 }
              maxValue={ 4 }
              labels={ ["G", "S", "V", "E", "L"] }
              isEditable={ isEditable }
              updateFunction={ value => updateField("experience", value) }
            />
          }
        </UnitCell>
        <UnitCell>
          <TechsList
            technologies={ technologies }
            isEditable={ isEditable }
          />
        </UnitCell>
        <UnitCell>
          <StaticValue>{ hull }</StaticValue>
        </UnitCell>
        <UnitCell withBackground={ !isUpkeepCostUnmodified() }>
          <NumberStepInput
            value={ upkeepCost }
            minValue={ 0 }
            isEditable={ isEditable }
            updateFunction={ value => updateField("upkeepCost", value) }
          />
        </UnitCell>
        <UnitCell>
          <IconButton
            icon={ isEditable ? <BsFillCheckSquareFill /> : <BsPencilSquare /> }
            onClick={ toggleIsEditable }
          />
          <IconButton
            icon={ <FiCopy /> }
            disabled={ !isEditable }
            withLeftMargin
            onClick={ () => copyUnit(id) }
          />
          <IconButton
            icon={ <BsFillXSquareFill /> }
            disabled={ !isEditable }
            withLeftMargin
            onClick={ () => removeUnit(id) }
          />
        </UnitCell>
      </Wrapper>
    );
  }
}

export default UnitRow;