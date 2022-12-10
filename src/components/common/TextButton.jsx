import React from "react";
import styled, { css } from "styled-components";
import _ from "lodash";

const colors = {
  default: {
    background: "#CCC",
    hover: "#DDD",
  },
  yes: {
    background: "#52D934",
    hover: "#39b21E",
  },
  no: {
    background: "#D02C5F",
    hover: "#AC1645",
  },
}

const Wrapper = styled.div`
  cursor: pointer;
  min-width: 50px;
  height: 25px;
  line-height: 25px;
  display: inline-block;
  padding: 0 4px;
  text-align: center;
  transition: background .25s;
  user-select: none;
  border-radius: 4px;

  font-size: 16px;
  letter-spacing: 0.75px;
  font-style: italic;
  font-weight: 700;

  ${props => css`
    background: ${props.colorScheme.background};
    &:hover {
      background: ${props.colorScheme.hover};
    }
  `}
`;

class TextButton extends React.Component {
  render() {
    const {
      text,
      onClick,
      type,
    } = this.props;
    const colorScheme = _.get(colors, type || 'default');
    return (
      <Wrapper onClick={ onClick } colorScheme={ colorScheme }>
        { text }
      </Wrapper>
    )
  }
}

export default TextButton;