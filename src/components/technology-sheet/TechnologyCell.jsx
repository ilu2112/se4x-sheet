import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #FFF;
  box-sizing: border-box;
  border: 1px solid #000;
  border-top: none;
  border-left: none;
  font-weight: 700;
  display: flex;
  align-items: center;
  padding: 0 8px;
  font-size: 18px;
  letter-spacing: 0.75px;
  font-style: italic;
`;

class TechnologyCell extends React.Component {
  render() {
    return (
      <Wrapper>
        Terraforming
      </Wrapper>
    );
  }
}

export default TechnologyCell;