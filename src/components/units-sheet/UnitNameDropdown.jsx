import React from "react";
import styled from "styled-components";
import _ from "lodash";
import unitsSettings from "../../config/units";

let dropdownOptions = _.map(unitsSettings, setting => {
  const { type, noOfTokens, firstTokenIndex } = setting;
  const result = [];
  if (noOfTokens === 1) {
    return type;
  }
  for (let i = 1; i <= noOfTokens; i++) {
    result.push(`${type}-${firstTokenIndex - 1 + i}`);
  }
  return result;
});
dropdownOptions = _.flatten(dropdownOptions);
dropdownOptions = _.sortBy(dropdownOptions, s => s.toLowerCase());

const Wrapper = styled.div`
  select {
    width: 100%;
    outline: none;
    background: #DDD;
    border: 1px solid #AAA;
    border-radius: 0;
    color: #000;
    cursor: pointer;

    font-size: 12px;
    letter-spacing: 0.75px;
    font-weight: 700;
    font-style: italic;
    padding: 2px 0;
  }

  .static-value {
    font-size: 13px;
    letter-spacing: 0.75px;
    font-style: italic;
    font-weight: 700;
  }
`;

class UnitNameDropdown extends React.Component {
  handleChange(event) {
    const { updateFunction } = this.props;
    updateFunction(event.target.value);
  }
  
  render() {
    const {
      value,
      isEditable,
    } = this.props;
    const safeValue = value || "-";
    return (
      <Wrapper>
        {isEditable &&
          <select value={ safeValue } onChange={ this.handleChange.bind(this) }>
            <option value='-'>-</option>
            {dropdownOptions.map(name =>
              <option key={ name } value={ name }>
                { name }
              </option>
            )}
          </select>
        }
        {!isEditable &&
          <div className="static-value">{ safeValue }</div>
        }
      </Wrapper>
    );
  }
}

export default UnitNameDropdown;