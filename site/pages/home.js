import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

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

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  margin: 1.5em;
`;

const StyledLink = styled(Link)`
  margin: 1em;
  font-size: 22px;
`;

export const Home = () => {
  return (
    <Container>
      <HeaderContianer>
        <Header>Fav.sh</Header>
        <Subheader>
          Alternative bookmark manager for Chrome and Firefox.
        </Subheader>
        <StyledLink to="/demo">Live Demo</StyledLink>
      </HeaderContianer>
      <ImageContainer>
        <LazyLoad height={400}>
          <Image src="https://i.imgur.com/AzZImTO.png" height="400px" />
        </LazyLoad>
        <LazyLoad height={400}>
          <Image src="https://i.imgur.com/ZIvRBEN.png" height="400px" />
        </LazyLoad>
        <LazyLoad height={400}>
          <Image src="https://i.imgur.com/Y4S9P6I.png" height="400px" />
        </LazyLoad>
      </ImageContainer>
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
