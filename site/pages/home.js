import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import GitHubButton from "react-github-btn";

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

const Video = styled.iframe`
  width: 100%;
`;

const FlexSubheaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const FlexBetween = styled(FlexSubheaderContainer)`
  justify-content: space-between;
  width: 100%;
`;

const ComingSoonText = styled.p``;

export const Home = () => {
  return (
    <Container>
      <HeaderContianer>
        <Header>Fav.sh</Header>
        <Subheader>
          Alternative bookmark manager for Chrome and Firefox.
        </Subheader>
        <FlexSubheaderContainer>
          <StyledLink to="/demo">Live Demo</StyledLink>
          <GitHubButton
            href="https://github.com/sgolovine/fav.sh"
            data-size="large"
            data-show-count="true"
            aria-label="Star sgolovine/fav.sh on GitHub"
          >
            Star
          </GitHubButton>
        </FlexSubheaderContainer>
      </HeaderContianer>
      <Video
        height="400px"
        src="https://streamable.com/s/9pdpv/lrhvm"
        allowFullScreen
      ></Video>
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
        <FlexBetween>
          <a href="https://chrome.google.com/webstore/detail/fav-bookmark-manager/gammmbkeceiljlgijimbhhgkfmiejnkl?hl=en">
            <LazyLoad height={58}>
              <Image
                src="https://developer.chrome.com/webstore/images/ChromeWebStore_Badge_v2_206x58.png"
                height="58px"
              />
            </LazyLoad>
          </a>

          <ComingSoonText>Firefox Coming Soon!</ComingSoonText>
        </FlexBetween>
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
