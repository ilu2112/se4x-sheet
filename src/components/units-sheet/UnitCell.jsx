import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #CCC;
  border-bottom: 1px solid #CCC;

  ${props => props.withBackground && css`
    background: #F4E9CF;
  `}
`;

class UnitCell extends React.Component {
  render() {
    const { withBackground } = this.props;
    return (
      <Wrapper className="unit-cell" withBackground={ withBackground }>
        { this.props.children }
      </Wrapper>
    );
  }
}

export default UnitCell;