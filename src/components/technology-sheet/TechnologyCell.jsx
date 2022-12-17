import { observer } from "mobx-react";
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
  user-select: none;

  &:nth-of-type(4n) {
    border-right: none;
  }

  .tech-title {
    font-size: 13px;
    letter-spacing: 0.75px;
    font-style: italic;
    font-weight: 700;
  }

  .tech-levels {
    display: flex;
  }
`;

@observer
class TechnologyCell extends React.Component {
  render() {
    const {
      name,
      techLevels,
    } = this.props;
    return (
      <Wrapper className="technology-cell">
        <div className="tech-title">
          { name }
        </div>
        <div className="tech-levels">
          {techLevels.map(props =>
            <TechLevel
              key={ props.level }
              { ...props }
            />
          )}
        </div>
      </Wrapper>
    );
  }
}

export default TechnologyCell;