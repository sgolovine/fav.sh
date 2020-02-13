/**
 * This is the entry point for web
 */
import React from "react";
import ReactDOM from "react-dom";
import { App } from "../js/App";
import styled from "styled-components";

// To preserve the original size of the extension on the web
// We use this wrapper
const AppDevContainer = styled.div`
  height: 500px;
  width: 800px;
  overflow-x: hidden;
  border: 1px solid;
  margin: 1em;
`;

// Place anything "dev" related that should be rendered next
// to the extension here, (ie. Redux dev tools)
const WebContainer = () => {
  return (
    <AppDevContainer>
      <App />
    </AppDevContainer>
  );
};

ReactDOM.render(<WebContainer />, document.getElementById("root"));
