import React from "react";
import styled from "styled-components";
import Tech from "./Tech";

const Wrapper = styled.div`
`;

class TechsList extends React.Component {
  render() {
    const {
      isEditable,
      technologies,
    } = this.props;
    return (
      <Wrapper>
        {technologies.map(props =>
          <Tech
            isEditable={ isEditable }
            key={ props.name }
            {...props}
          />
        )}
      </Wrapper>
    );
  }
}

export default TechsList;