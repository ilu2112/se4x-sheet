import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 16px;
  letter-spacing: 0.75px;
  font-style: italic;
  font-weight: 700;
`;

class StaticValue extends React.Component {
  render() {
    return (
      <Wrapper>
        { this.props.children }
      </Wrapper>
    );
  }
}

export default StaticValue;