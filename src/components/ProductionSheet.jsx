import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #CCC;
  width: 100%;
  height: 100%;
`;

class ProductionSheet extends React.Component {
  render() {
    return (
      <Wrapper>
        Production Sheet
      </Wrapper>
    );
  }
}

export default ProductionSheet;