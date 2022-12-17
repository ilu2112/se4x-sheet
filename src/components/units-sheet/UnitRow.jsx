import React from "react";
import styled from "styled-components";
import NumberStepInput from "../common/NumberStepInput";
import UnitCell from "./UnitCell";
import StaticValue from "./StaticValue";
import TechsList from "./TechsList";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(14, 1fr);

  .unit-cell {
    &:nth-of-type(10n + 7) {
      grid-column: 7 / 11;
    }

    &:nth-of-type(10n) {
      grid-column: 13 / 15;
    }
  }
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
          <TechsList />
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