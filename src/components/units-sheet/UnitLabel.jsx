import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  user-select: none;

  font-size: 12px;
  letter-spacing: 0.75px;
  font-weight: 700;
  text-transform: uppercase;
  font-style: italic;

  border-bottom: 1px solid #000;
  border-right: 1px solid #000;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .sublabel {
    display: block;
  }
`;

class UnitLabel extends React.Component {
  render() {
    const { title, subtitle } = this.props;
    return (
      <Wrapper className="unit-label">
        { title }
        { subtitle && <div className="sublabel">{ subtitle }</div> }
      </Wrapper>
    );
  }
}

export default UnitLabel;