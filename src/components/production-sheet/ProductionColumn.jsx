import React from "react";
import styled, { css } from "styled-components";
import ProductionEntry from "./ProductionEntry";

const Wrapper = styled.div`
  height: 100%;
  width: 50px;
  display: grid;
  grid-template-rows: repeat(20, 1fr);

  border-right: 1px solid #000;
  border-left: 1px solid #000;
  box-sizing: border-box;

  position: relative;
`;

const GlassPane = styled.div`
  position: absolute;
  top: 0;
  left: -1px;
  width: 50px;
  height: 100%;
  background: rgba(255, 255, 255, .8);
`;

class ProductionColumn extends React.Component {
  render() {
    const { isActive } = this.props;
    return (
      <Wrapper>
        {!isActive && <GlassPane />}
        <ProductionEntry { ...this.props } fieldName="phase" bgColor="#DDD" readonly />
        <ProductionEntry { ...this.props } fieldName="cpCarriedOver" />
        <ProductionEntry { ...this.props } fieldName="colonyCP" />
        <ProductionEntry { ...this.props } fieldName="mineralCP" />
        <ProductionEntry { ...this.props } fieldName="msPipelineCP" />
        <ProductionEntry { ...this.props } fieldName="industrialCenterCP" />
        <ProductionEntry { ...this.props } fieldName="maintenance" />
        <ProductionEntry { ...this.props } fieldName="turnOrderBid" />
        <ProductionEntry { ...this.props } fieldName="cpConvertedToRP" />
        <ProductionEntry { ...this.props } fieldName="purchases" />
        <ProductionEntry { ...this.props } fieldName="remainingCP" bgColor="#DDD" readonly />
        <ProductionEntry { ...this.props } fieldName="cpSpentOnUpgrades" />
        <ProductionEntry { ...this.props } fieldName="maintenanceIncrease" />
        <ProductionEntry { ...this.props } fieldName="maintenanceDecrease" />
        <ProductionEntry bgColor="#DDD" readonly />
        <ProductionEntry { ...this.props } fieldName="rpCarriedOver" />
        <ProductionEntry { ...this.props } fieldName="researchCenterRP" />
        <ProductionEntry { ...this.props } fieldName="cpConvertedToRP" />
        <ProductionEntry { ...this.props } fieldName="technologySpending" />
        <ProductionEntry { ...this.props } fieldName="remainingRP" bgColor="#DDD" readonly />
      </Wrapper>
    );
  }
}

export default ProductionColumn;