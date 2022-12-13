import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #000;
  border-bottom: 1px solid #000;
`;

class UnitCell extends React.Component {
  render() {
    return (
      <Wrapper>
        { this.props.children }
      </Wrapper>
    );
  }
}

export default UnitCell;