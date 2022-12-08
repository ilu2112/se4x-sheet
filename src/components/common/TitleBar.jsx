import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  letter-spacing: 0.75px;
  font-style: italic;
  justify-content: center;
  font-weight: 700;
  box-sizing: border-box;
  border-bottom: 1px solid #000;;
  color: #FFF;
  background: #00698c;
  user-select: none;
`;

class TitleBar extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <Wrapper className="title-bar">
        { title }
      </Wrapper>
    );
  }
}

export default TitleBar;