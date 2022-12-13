import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  cursor: pointer;
  opacity: .25;

  svg {
    height: 18px;
    width: 18px;
  }

  ${props => props.enabled && css`
    opacity: 1;
  `}
`;

class Toggler extends React.Component {
  render() {
    const {
      icon,
      onClick,
      enabled,
    } = this.props;
    return (
      <Wrapper
        enabled={ enabled }
        onClick={ onClick }
      >
        { icon }
      </Wrapper>
    )
  }
}

export default Toggler;