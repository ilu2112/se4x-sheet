import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Sheet from "./components/Sheet";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: 'Roboto', sans-serif;
  }
`;

class App extends React.Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Sheet />
      </div>
    );
  }
}

export default App;