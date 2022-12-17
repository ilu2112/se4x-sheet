import React from "react";
import styled, { css } from "styled-components";
import {
  BsFillPlusSquareFill,
  BsFillDashSquareFill,
} from "react-icons/bs";

const Wrapper = styled.div`
  position: relative;
  height: 30px;
  max-width: 40px;
  width: 100%;
  margin: 4px auto;
  padding: 0 2px;
  box-sizing: border-box;

  .nsi {
    &__value {
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 13px;
      letter-spacing: 0.75px;
      font-style: italic;
      font-weight: 700;

      ${props => !props.isEditable && css`
        justify-content: center;
      `}
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
    width: 14px;
    height: 14px;
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
    const {
      value,
      isEditable,
    } = this.props;
    return (
      <Wrapper isEditable={ isEditable } className="nsi">
        <div className="nsi__value">
          { value }
        </div>
        {isEditable &&
          <div
            className="nsi__button nsi__button--plus"
            onClick={ () => this.handleOnClick(1) }
          >
            <BsFillPlusSquareFill />
          </div>
        }
        {isEditable &&
            <div
              className="nsi__button nsi__button--minus"
              onClick={ () => this.handleOnClick(-1) }
            >
              <BsFillDashSquareFill />
            </div>
        }
      </Wrapper>
    )
  }
}

export default NumberStepInput;