import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  cursor: pointer;

  svg {
    height: 18px;
    width: 18px;
  }

  ${props => props.disabled && css `
    cursor: not-allowed;
    opacity: .5;
  `}

  ${props => props.withLeftMargin && css `
    margin-left: 10px;
  `}
`;

class IconButton extends React.Component {
  handleOnClick() {
    const {
      onClick,
      disabled,
    } = this.props;
    if (disabled) {
      return;
    }
    onClick();
  }

  render() {
    const {
      icon,
      disabled,
      withLeftMargin,
    } = this.props;
    return (
      <Wrapper
        disabled={ disabled }
        onClick={ this.handleOnClick.bind(this) }
        withLeftMargin={ withLeftMargin }
      >
        { icon }
      </Wrapper>
    )
  }
}

export default IconButton;