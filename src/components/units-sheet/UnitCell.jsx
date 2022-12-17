import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #CCC;
  border-bottom: 1px solid #CCC;
`;

class UnitCell extends React.Component {
  render() {
    return (
      <Wrapper className="unit-cell">
        { this.props.children }
      </Wrapper>
    );
  }
}

export default UnitCell;