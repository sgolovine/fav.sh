import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Bootstrap as Extension } from "./extension/App";

const Container = styled.div`
  padding: 2em;
`;

const HeaderContianer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.p`
  font-size: 32px;
`;

const Subheader = styled.p`
  font-size: 24px;
`;

const ContentContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 3em;
`;

const AppContainer = styled.div`
  border: 3px solid;
  margin: 2.5.em;
  height: 600px;
  width: 800px;
  align-self: center;
`;

const App = () => {
  return (
    <Container>
      <HeaderContianer>
        <Header>Fav.sh</Header>
        <Subheader>
          Alternative bookmark manager for Chrome and Firefox.
        </Subheader>
      </HeaderContianer>

      <ContentContainer>
        <AppContainer>{/* <Extension /> */}</AppContainer>
      </ContentContainer>
    </Container>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
