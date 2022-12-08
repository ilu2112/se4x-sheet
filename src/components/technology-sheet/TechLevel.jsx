import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-left: 6px;
  display: flex;
  align-items: baseline;
  cursor: pointer;
  user-select: none;
  width: 23px;
  height: 23px;
  border-radius: 50%;
  line-height: 23px;
  padding: 1px;
  background: #DDD;
  .tech-level {
    font-size: 15px;
    letter-spacing: 0.75px;
    font-style: italic;
    font-weight: 700;
  }

  .tech-cost {
    font-weight: 400;
    font-size: 10px;
    margin-left: 1px;
  }
`;


class TechLevel extends React.Component {
  render() {
    return (
      <Wrapper>
        <div className='tech-level'>
          1
        </div>
        <div className='tech-cost'>
          25
        </div>
      </Wrapper>
    );
  }
}

export default TechLevel;