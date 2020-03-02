import React, { useState } from "react";
import Header from "../components/common/Header";
import { IconButton, InputBase, Fab } from "@material-ui/core";
import { MdCreate, MdMenu } from "react-icons/md";
import styled from "styled-components";
import { navigate } from "../store/modules/navigation";
import { useDispatch, useSelector } from "react-redux";
import { BookmarkCard } from "../components/BookmarkCard";
import { getBookmarks } from "../store/modules/bookmarks";
import { Categories } from "./Categories";
import { getActiveTags } from "../store/modules/tags";
import intersection from "lodash/fp/intersection";
import { Bookmark } from "../types/Bookmark";
import escapeRegExp from "lodash/fp/escapeRegExp";
import { isBlank } from "../helpers";
import Sidebar from "react-sidebar";

const HeaderLeftButton = ({ onClick }: { onClick: () => void }) => (
  <IconButton onClick={onClick}>
    <MdMenu color="#fff" />
  </IconButton>
);

// This function will filter bookmarks
// Based on the search term enteredd
function applySearch(searchTerm: string, bookmarks: Bookmark[]) {
  const re = new RegExp(escapeRegExp(searchTerm), "i");
  return bookmarks.filter((bookmark: Bookmark) => re.test(bookmark.name));
}

export const MainScreen = () => {
  const bookmarks = useSelector(getBookmarks);
  const bookmarksAsArray = Object.keys(bookmarks).map(key => bookmarks[key]);
  const activeTags = useSelector(getActiveTags);
  const dispatch = useDispatch();

  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const [searchTerm, setSearchTerm] = useState("");

  const handleCategories = () => {
    setShowSidebar(!showSidebar);
  };

  const handleAdd = () => {
    dispatch(navigate("add"));
  };

  const renderBookmarks = () => {
    let filteredBookmarks: Bookmark[] = [];

    // If we have tags that have been selected
    // Filter bookmarks based on the intersection
    // Of their tags versus the ones that have been selected
    if (activeTags.length > 0) {
      filteredBookmarks = bookmarksAsArray.filter(
        bookmark => intersection(bookmark.tags, activeTags).length > 0
      );
      // If we do not have any active tags we apply all bookmarks
      // To filtered bookmarks
    } else {
      filteredBookmarks = bookmarksAsArray;
    }

    // After we are done filtering on tags we now check
    // If there is anything in search that we need to filter
    if (!isBlank(searchTerm)) {
      filteredBookmarks = applySearch(searchTerm, filteredBookmarks);
    }

    // If there are no filtered bookmarks
    // After we finish our filtering then return an empty
    // Component
    if (filteredBookmarks.length === 0) {
      return <p>Wow such empty</p>;
    }

    return (
      <>
        {filteredBookmarks.map(bookmark => {
          return (
            <BookmarkCard
              key={bookmark.guid}
              guid={bookmark.guid}
              name={bookmark.name}
              href={bookmark.href}
              desc={bookmark.desc}
              tags={bookmark.tags}
            />
          );
        })}
        <Spacer />
      </>
    );
  };

  return (
    <>
      <Sidebar
        sidebar={<Categories />}
        open={showSidebar}
        docked={showSidebar}
        onSetOpen={() => setShowSidebar(true)}
      >
        <Header>
          <FlexContainer>
            <Section>
              <HeaderLeftButton onClick={handleCategories} />
              <SearchBox
                style={{ color: "white" }}
                placeholder="Search…"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                inputProps={{ "aria-label": "search" }}
                autoFocus
                fullWidth
              />
            </Section>
            <Section></Section>
          </FlexContainer>
        </Header>
        <BookmarksContainer>{renderBookmarks()}</BookmarksContainer>
        <PositionedFab onClick={handleAdd} color="primary">
          <MdCreate size={28} />
        </PositionedFab>
      </Sidebar>
    </>
  );
};

const Spacer = styled.div`
  height: 50px;
`;

const BookmarksContainer = styled.div`
  height: 450px;
  overflow-y: scroll;
`;

const PositionedFab = styled(Fab)`
  position: fixed;
  left: 85%;
  bottom: 2.5em;
  right: 2.5em;
  bottom: 15%;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  align-items: center;
`;
const SearchBox = styled(InputBase)`
  color: inherit;
  padding: 3px 3px 3px 7px;
  border: 1px solid #90a4ae;
  border-radius: 7px;
  width: 500px;
  font-size: 22px;
`;
