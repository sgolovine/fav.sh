import React from "react";
import { Router } from "./screens/Router";
import { configureStore } from "./store/store";
import { Provider } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  height: 600px;
  width: 800px;
  position: fixed;
  overflow: hidden;
`;

export function App() {
  const { store } = configureStore();
  return (
    <Provider store={store}>
      <Container>
        <Router />
      </Container>
    </Provider>
  );
}
