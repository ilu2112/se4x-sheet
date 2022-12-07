import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #BBB;
  width: 100%;
  height: 100%;
`;

class TechnologiesSheet extends React.Component {
  render() {
    return (
      <Wrapper>
        Technologies Sheet
      </Wrapper>
    );
  }
}

export default TechnologiesSheet;