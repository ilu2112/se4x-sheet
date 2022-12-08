import React from "react";
import styled from "styled-components";
import TechLevel from "./TechLevel";

const Wrapper = styled.div`
  background: #FFF;
  box-sizing: border-box;
  border: 1px solid #CCC;
  border-top: none;
  border-left: none;
  display: flex;
  align-items: center;
  padding: 0 8px;
  justify-content: space-between;

  &:nth-of-type(3n + 1) {
    border-right: none;
  }

  .tech-title {
    font-size: 15px;
    letter-spacing: 0.75px;
    font-style: italic;
    font-weight: 700;
  }

  .tech-levels {
    display: flex;
  }
`;

class TechnologyCell extends React.Component {
  render() {
    return (
      <Wrapper className="technology-cell">
        <div className="tech-title">
          Terraforming
        </div>
        <div className="tech-levels">
          <TechLevel />
          <TechLevel />
          <TechLevel />
        </div>
      </Wrapper>
    );
  }
}

export default TechnologyCell;