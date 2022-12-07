import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import MasterSheet from "./components/MasterSheet";

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
        <MasterSheet />
      </div>
    );
  }
}

export default App;