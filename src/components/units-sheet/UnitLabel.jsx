import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  font-style: italic;
  user-select: none;

  font-size: 12px;
  letter-spacing: 0.75px;
  font-weight: 700;
  text-transform: uppercase;

  border-bottom: 1px solid #000;
  border-right: 1px solid #000;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;
`;

class UnitLabel extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <Wrapper>
        { title }
      </Wrapper>
    );
  }
}

export default UnitLabel;