import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  background: #DDD;
  font-size: 10px;
  letter-spacing: 0.5px;
  font-style: italic;
  font-weight: 700;
  padding: 2px 4px;
  border-radius: 5px;
  margin: 5px;
  text-align: center;

  ${props => !props.owned && css`
    opacity: .25;
  `};

  ${props => props.isEditable && css`
    cursor: pointer;
  `};

  ${props => !props.isEditable && !props.owned && css`
    display: none;
  `};
`;

class Tech extends React.Component {
  handleClick() {
    const { isEditable, toggleOwned } = this.props;
    if (isEditable) {
      toggleOwned();
    }
  }

  render() {
    const {
      name,
      owned,
      isEditable,
    } = this.props;
    return (
      <Wrapper
        owned={ owned }
        isEditable={ isEditable }
        onClick={ this.handleClick.bind(this) }
      >
        { name }
      </Wrapper>
    );
  }
}

export default Tech;