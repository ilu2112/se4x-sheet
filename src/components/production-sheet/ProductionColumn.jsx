import React from "react";
import styled from "styled-components";
import ProductionEntry from "./ProductionEntry";

const Wrapper = styled.div`
  height: 100%;
  width: 50px;
  display: grid;
  grid-template-rows: repeat(20, 1fr);

  border-right: 1px solid #000;
  box-sizing: border-box;
`;

class ProductionColumn extends React.Component {
  render() {
    return (
      <Wrapper>
        <ProductionEntry bgColor="#DDD" readonly value={ 1 } />
        <ProductionEntry value={ 0 } />
        <ProductionEntry value={ 0 } />
        <ProductionEntry value={ 0 } />
        <ProductionEntry />
        <ProductionEntry />
        <ProductionEntry />
        <ProductionEntry />
        <ProductionEntry />
        <ProductionEntry />
        <ProductionEntry bgColor="#DDD" readonly value={ 1 } />
        <ProductionEntry />
        <ProductionEntry />
        <ProductionEntry />
        <ProductionEntry bgColor="#DDD" readonly value={ 1 } />
        <ProductionEntry />
        <ProductionEntry />
        <ProductionEntry />
        <ProductionEntry />
        <ProductionEntry bgColor="#DDD" readonly value={ 12 } />
      </Wrapper>
    );
  }
}

export default ProductionColumn;