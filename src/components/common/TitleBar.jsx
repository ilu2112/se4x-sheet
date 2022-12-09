import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #000;;
  color: #FFF;
  background: #00698c;
  user-select: none;

  .title-bar__title {
    font-size: 18px;
    letter-spacing: 0.75px;
    font-style: italic;
    font-weight: 700;
  }

  .title-bar__controls {
    display: flex;
    gap: 6px;
  }
`;

class TitleBar extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <Wrapper className="title-bar">
        <div className="title-bar__title">{ title }</div>
        <div className="title-bar__controls">
          { this.props.children }
        </div>
      </Wrapper>
    );
  }
}

export default TitleBar;