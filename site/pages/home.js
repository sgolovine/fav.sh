import React from "react";
import styled from "styled-components";
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

const Section = styled.div`
  margin-top: 2.5em;
  margin-left: 15%;
  margin-right: 15%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1200px;
`;

const ContentSubheader = styled.p`
  margin-top: 2.5em;
  margin-bottom: 0.5em;
  font-size: 22px;
`;

const Content = styled.p`
  font-size: 18px;
  line-height: 1.8em;
`;

export const Home = () => {
  return (
    <Container>
      <HeaderContianer>
        <Header>Fav.sh</Header>
        <Subheader>
          Alternative bookmark manager for Chrome and Firefox.
        </Subheader>
        <Link to="/demo">Live Demo</Link>
      </HeaderContianer>

      <Section>
        <ContentSubheader>
          Browser Independent Bookmark Manager
        </ContentSubheader>
        <Content>
          Unlike the bookmark manager in Firefox and Chrome, fav.sh is not tied
          to any one specific browser
        </Content>

        <ContentSubheader>Tags and Search</ContentSubheader>
        <Content>
          Fav.sh allows you to tag your content and then filter by those tags
          later. Additionally you can search for bookmark names in the header to
          help you find the bookmark you need quickly.
        </Content>

        <ContentSubheader>Your data</ContentSubheader>
        <Content>
          Your bookmarks are kept in extension storage when you are using the
          extension and can be backed up either by backing up to your computer
          or to Github Gist.
        </Content>

        <ContentSubheader>Bookmarks Sharing</ContentSubheader>
        <Content>
          Fav.sh is meant for sharing libraries of bookmarks. With fav.sh you
          can create a bookmark collection for your team and quickly share it
          with them. Fav.sh is perfect for Development and Marketing teams.
        </Content>

        <ContentSubheader>Open Source</ContentSubheader>
        <Content>
          Fav.sh is an open source project maintained by the maintainers and
          community
        </Content>
      </Section>
    </Container>
  );
};
