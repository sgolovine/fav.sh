import React from "react";
import styled from "styled-components";
import { App as Extension } from "../extension/App";
import { Link } from "react-router-dom";

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
  border: 1px #333 solid;
  margin: 2.5.em;
  height: 600px;
  width: 800px;
  align-self: center;
`;

export const Demo = () => {
  return (
    <Container>
      <HeaderContianer>
        <Header>Demo</Header>
        <Subheader>
          <Link to="/">Go Back</Link>
        </Subheader>
      </HeaderContianer>

      <ContentContainer>
        <AppContainer>
          <Extension />
        </AppContainer>
      </ContentContainer>
    </Container>
  );
};
