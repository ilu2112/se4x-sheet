import React from "react";
import styled from "styled-components";
import NumberStepInput from "../common/NumberStepInput";
import UnitCell from "./UnitCell";
import StaticValue from "./StaticValue";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
`;

class UnitRow extends React.Component {
  render() {
    const {
      name,
      quantity,
      attack,
      defense,
      move,
      experience,
      hull,
      upkeepCost,
      updateField,
    } = this.props;
    return (
      <Wrapper>
        <UnitCell>
          <StaticValue>{ name }</StaticValue>
        </UnitCell>
        <UnitCell>
          <NumberStepInput
            value={ quantity }
            updateFunction={ value => updateField("quantity", value) }
          />
        </UnitCell>
        <UnitCell>
          <NumberStepInput
            value={ attack }
            updateFunction={ value => updateField("attack", value) }
          />
        </UnitCell>
        <UnitCell>
          <NumberStepInput
            value={ defense }
            updateFunction={ value => updateField("defense", value) }
          />
        </UnitCell>
        <UnitCell>
          <NumberStepInput
            value={ move }
            updateFunction={ value => updateField("move", value) }
          />
        </UnitCell>
        <UnitCell>
          { experience }
        </UnitCell>
        <UnitCell>
          ...
        </UnitCell>
        <UnitCell>
          <StaticValue>{ hull }</StaticValue>
        </UnitCell>
        <UnitCell>
          <NumberStepInput
            value={ upkeepCost }
            updateFunction={ value => updateField("upkeepCost", value) }
          />
        </UnitCell>
        <UnitCell></UnitCell>
      </Wrapper>
    );
  }
}

export default UnitRow;