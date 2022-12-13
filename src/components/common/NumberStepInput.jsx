import React from "react";
import styled from "styled-components";
import {
  BsFillPlusSquareFill,
  BsFillDashSquareFill,
} from "react-icons/bs";

const Wrapper = styled.div`
  position: relative;
  height: 40px;
  max-width: 50px;
  width: 100%;
  margin: 4px auto;
  padding: 0 2px;
  box-sizing: border-box;

  .nsi {
    &__value {
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 18px;
      letter-spacing: 0.75px;
      font-style: italic;
      font-weight: 700;
    }

    &__button {
      position: absolute;
      right: 2px;
      cursor: pointer;

      &--plus {
        top: 0;
      }

      &--minus {
        bottom: 0;
      }
    }
  }

  svg {
    fill: #999;
  }
`;

class NumberStepInput extends React.Component {
  handleOnClick(delta) {
    const {
      updateFunction,
      value,
    } = this.props;
    updateFunction(value + delta);
  }

  render() {
    const { value } = this.props;
    return (
      <Wrapper className="nsi">
        <div className="nsi__value">
          { value }
        </div>
        <div
          className="nsi__button nsi__button--plus"
          onClick={ () => this.handleOnClick(1) }
        >
          <BsFillPlusSquareFill />
        </div>
        <div
          className="nsi__button nsi__button--minus"
          onClick={ () => this.handleOnClick(-1) }
        >
          <BsFillDashSquareFill />
        </div>
      </Wrapper>
    )
  }
}

export default NumberStepInput;