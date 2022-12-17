import React from "react";
import styled from "styled-components";
import { BsPencilSquare } from "react-icons/bs";

import NumberStepInput from "../common/NumberStepInput";
import UnitCell from "./UnitCell";
import StaticValue from "./StaticValue";
import TechsList from "./TechsList";
import Toggler from "../common/Toggler";
import UnitNameDropdown from "./UnitNameDropdown";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(14, 1fr);

  .unit-cell {
    &:nth-of-type(11n + 1) {
      grid-column: 1 / 3;
    }

    &:nth-of-type(11n + 8) {
      grid-column: 9 / 12;
    }

    &:nth-of-type(11n) {
      grid-column: 14 / 16;
    }
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
    return (
      <Wrapper>
        <UnitCell>
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
        </UnitCell>
      </Wrapper>
    );
  }
}

export default UnitRow;