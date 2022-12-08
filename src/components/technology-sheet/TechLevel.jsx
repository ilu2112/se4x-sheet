import React from "react";
import styled, { css } from "styled-components";
import { TECH_LEVEL_STATE } from "../../models/enums";

const background = {
  [TECH_LEVEL_STATE.NOT_OWNED]: '#FFF',
  [TECH_LEVEL_STATE.MARKED]: '#BCF0FF',
  [TECH_LEVEL_STATE.OWNED]: '#CCC',
};

const Wrapper = styled.div`
  margin-left: 6px;
  display: flex;
  align-items: baseline;
  cursor: pointer;
  user-select: none;
  width: 23px;
  height: 23px;
  border-radius: 50%;
  line-height: 23px;
  padding: 1px;
  justify-content: center;
  transition: background .35s;

  ${props => css`
    background: ${background[props.state]};
  `}

  ${props => (props.isPlaceholder && css`
    cursor: auto;
  `)}

  .tech-level {
    font-size: 15px;
    letter-spacing: 0.75px;
    font-style: italic;
    font-weight: 700;
  }

  .tech-cost {
    font-weight: 400;
    font-size: 8px;
    margin-left: 0;
    font-style: italic;
  }
`;

class TechLevel extends React.Component {
  render() {
    const {
      level,
      cost,
      state,
      isPlaceholder,
      toggleState,
    } = this.props;
    return (
      <Wrapper
        state={ state }
        isPlaceholder={ isPlaceholder }
        onClick={ toggleState }
      >
        <div className='tech-level'>{ level }</div>
        {cost > 0 &&
          <div className='tech-cost'>{ cost }</div>
        }
      </Wrapper>
    );
  }
}

export default TechLevel;