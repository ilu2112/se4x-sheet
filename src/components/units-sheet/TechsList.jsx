import React from "react";
import styled from "styled-components";
import Tech from "./Tech";

const Wrapper = styled.div`
`;

class TechsList extends React.Component {
  render() {
    const { isEditable } = this.props;
    return (
      <Wrapper>
        <Tech
          owned
          isEditable={ isEditable }
          name="Exploration 1"
        />
        <Tech
          isEditable={ isEditable }
          name="Exploration 2"
        />
      </Wrapper>
    );
  }
}

export default TechsList;