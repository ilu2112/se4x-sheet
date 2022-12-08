import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  font-size: 14px;
  letter-spacing: 0.75px;
  font-style: italic;
  font-weight: 700;
  border: 1px solid #000;
  border-bottom: none;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0px 6px;

  ${props => props.bgColor && css`
    background: ${props.bgColor};
  `}
`;

class ProductionLabel extends React.Component {
  render() {
    const { bgColor } = this.props;
    return (
      <Wrapper bgColor={ bgColor }>
        { this.props.children }
      </Wrapper>
    );
  }
}

export default ProductionLabel;