import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";
import Tech from "./Tech";

const Wrapper = styled.div`
`;

@observer
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