import React from "react";
import styled from "styled-components";
import Tech from "./Tech";

const Wrapper = styled.div`
`;

class TechsList extends React.Component {
  render() {
    return (
      <Wrapper>
        <Tech owned name="Exploration 1" />
        <Tech name="Exploration 2" />
      </Wrapper>
    );
  }
}

export default TechsList;