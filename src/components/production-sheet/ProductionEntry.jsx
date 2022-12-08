import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  font-size: 14px;
  letter-spacing: 0.75px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;

  border-bottom: 1px solid #000;
  box-sizing: border-box;

  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    -moz-appearance: textfield;
    font-size: 14px;
    letter-spacing: 0.75px;
    font-weight: 700;
    padding: 0;
    text-align: center;
    border-radius: 0;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ${props => props.bgColor && css`
    background: ${props.bgColor};
  `}
`;

class ProductionEntry extends React.Component {
  onChange(event) {
    console.log(event.target.value);
  }

  render() {
    const {
      bgColor,
      readonly,
      value,
    } = this.props;
    return (
      <Wrapper bgColor={ bgColor }>
        {readonly && value}
        {!readonly && 
          <input type="number" value={ value } onChange={ this.onChange } />
        }
      </Wrapper>
    );
  }
}

export default ProductionEntry;