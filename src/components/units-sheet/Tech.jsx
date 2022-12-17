import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  background: #DDD;
  font-size: 13px;
  letter-spacing: 0.75px;
  font-style: italic;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;

  ${props => !props.owned && css `
    opacity: .25;
  `};
`;

class Tech extends React.Component {
  render() {
    const { name, owned } = this.props;
    return (
      <Wrapper owned={ owned }>
        { name }
      </Wrapper>
    );
  }
}

export default Tech;