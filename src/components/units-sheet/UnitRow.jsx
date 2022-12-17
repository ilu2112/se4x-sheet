import React from "react";
import styled from "styled-components";
import {
  BsPencilSquare,
  BsFillXSquareFill,
} from "react-icons/bs";
import {
  RxDragHandleDots2,
} from "react-icons/rx";
import NumberStepInput from "../common/NumberStepInput";
import UnitCell from "./UnitCell";
import StaticValue from "./StaticValue";
import TechsList from "./TechsList";
import Toggler from "../common/Toggler";
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
  constructor(props) {
    super(props);
    this.state = {
      isEditable: false,
    };
    this.toggleIsEditable = this.toggleIsEditable.bind(this);
  }

  toggleIsEditable() {
    this.setState({
      isEditable: !this.state.isEditable,
    });
  }

  render() {
    const {
      id,
      name,
      quantity,
      attack,
      defense,
      move,
      tactic,
      experience,
      hull,
      upkeepCost,
      technologies,
      updateField,
    } = this.props;
    const {
      isEditable,
    } = this.state;
    const { 
      removeUnit,
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
            isEditable={ isEditable }
            updateFunction={ value => updateField("quantity", value) }
          />
        </UnitCell>
        <UnitCell>
          <NumberStepInput
            value={ attack }
            isEditable={ isEditable }
            updateFunction={ value => updateField("attack", value) }
          />
        </UnitCell>
        <UnitCell>
          <NumberStepInput
            value={ defense }
            isEditable={ isEditable }
            updateFunction={ value => updateField("defense", value) }
          />
        </UnitCell>
        <UnitCell>
          <NumberStepInput
            value={ move }
            isEditable={ isEditable }
            updateFunction={ value => updateField("move", value) }
          />
        </UnitCell>
        <UnitCell>
          <NumberStepInput
            value={ tactic }
            isEditable={ isEditable }
            updateFunction={ value => updateField("tactic", value) }
          />
        </UnitCell>
        <UnitCell>
          <NumberStepInput
            value={ experience }
            isEditable={ isEditable }
            updateFunction={ value => updateField("experience", value) }
          />
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
        <UnitCell>
          <NumberStepInput
            value={ upkeepCost }
            isEditable={ isEditable }
            updateFunction={ value => updateField("upkeepCost", value) }
          />
        </UnitCell>
        <UnitCell>
          <Toggler
            icon={ <BsPencilSquare /> }
            enabled={ isEditable }
            onClick={ this.toggleIsEditable }
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