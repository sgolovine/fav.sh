import React, { useState, useEffect } from "react";
import Header, { HeaderText } from "../components/common/Header";
import {
  IconButton,
  TextField,
  Button,
  Select,
  MenuItem,
  Chip
} from "@material-ui/core";
import { MdArrowBack, MdAdd } from "react-icons/md";
import styled from "styled-components";
import { navigate } from "../store/modules/navigation";
import { useDispatch, useSelector } from "react-redux";
import { actions, getTags } from "../store/modules/bookmarks";
import { Bookmark } from "../types/Bookmark";
import uuid from "uuid/v1";
import {
  getEditingBookmark,
  actions as editingActions
} from "../store/modules/editing";
import { Tag } from "../types/Tag";
import remove from "lodash/fp/remove";
import uniq from "lodash/fp/uniq";

const randomSites = [
  {
    name: "Google",
    href: "http://www.google.com",
    desc: "Google Home Page"
  },
  {
    name: "Hacker News",
    href: "http://news.ycombinator.com",
    desc: "Hacker news from Y Combinator"
  }
];

const HeaderLeftButton = ({ onClick }: { onClick: () => void }) => (
  <IconButton onClick={onClick}>
    <MdArrowBack color="#fff" />
  </IconButton>
);

export const AddScreen = () => {
  const existingTags = useSelector(getTags);
  const editingBookmark = useSelector(getEditingBookmark);
  const freshGuid = uuid();

  const [guid] = useState<string>(editingBookmark?.guid || freshGuid);
  const [name, setName] = useState<string>(editingBookmark?.name || "");
  const [href, setHref] = useState<string>(editingBookmark?.href || "");
  const [desc, setDesc] = useState<string>(editingBookmark?.desc || "");
  const [currentTag, setCurrentTag] = useState<string>("");
  const [tags, setTags] = useState<string[]>(editingBookmark?.tags || []);

  useEffect(() => {
    setName(randomSites[0].name);
    setHref(randomSites[0].href);
    setDesc(randomSites[0].desc);
  }, []);

  const dispatch = useDispatch();

  const goBack = () => {
    dispatch(editingActions.clearEditing());
    dispatch(navigate("home"));
  };

  const submitTag = () => {
    const newTags = currentTag.split(",");
    setTags(uniq([...tags, ...newTags]));
    setCurrentTag("");
  };

  const submitMenuTag = (event: any) => {
    const tag = event.target.value;
    setTags(uniq([...tags, tag]));
  };

  const handleDeleteTag = (tag: Tag) => {
    setTags(remove(item => item === tag, tags));
  };

  const createBookmark = () => {
    const bookmark: Bookmark = {
      guid,
      name,
      href,
      desc,
      tags
    };

    dispatch(actions.add(bookmark));
    dispatch(editingActions.clearEditing());
    dispatch(navigate("home"));
  };

  const renderHeader = () => (
    <Header>
      <FlexContainer>
        <Section>
          <HeaderLeftButton onClick={goBack} />
          <HeaderText>Add</HeaderText>
        </Section>
        <Section>
          <ConfirmButton
            variant="outlined"
            onClick={createBookmark}
            style={{ color: "white" }}
          >
            Submit
          </ConfirmButton>
        </Section>
      </FlexContainer>
    </Header>
  );

  const renderChips = () => {
    return (
      <ChipContainer>
        {tags.map(tag => {
          return (
            <CategoryChip
              key={tag}
              label={tag}
              onDelete={() => handleDeleteTag(tag)}
            />
          );
        })}
      </ChipContainer>
    );
  };

  const renderCategories = () => (
    <>
      <CategoriesContainer style={{ marginTop: "0.5em" }}>
        <CategoriesSelect
          variant="outlined"
          placeholder="Tags"
          onChange={submitMenuTag}
        >
          {existingTags.map(tag => {
            return <MenuItem value={tag}>{tag}</MenuItem>;
          })}
        </CategoriesSelect>
        <CategoriesText
          value={currentTag}
          onChange={e => setCurrentTag(e.target.value)}
          label="Add New Tag"
          variant="outlined"
          onKeyUp={event => {
            // This is so when the user hits the enter
            // Key after entering a tag we can submit the tag
            // Event.keycode 13 is the enter key
            if (event && event.keyCode === 13) {
              submitTag();
            }
          }}
        />
        <IconButton onClick={submitTag}>
          <MdAdd />
        </IconButton>
      </CategoriesContainer>
      {renderChips()}
    </>
  );

  const renderForm = () => (
    <FormContainer>
      <FieldsContainer>
        <Text
          style={{ marginTop: "0.5em" }}
          value={name}
          onChange={e => setName(e.target.value)}
          label="Name"
          variant="outlined"
        />
        <Text
          style={{ marginTop: "0.5em" }}
          value={href}
          onChange={e => setHref(e.target.value)}
          label="Website"
          variant="outlined"
        />
        <Text
          style={{ marginTop: "0.5em" }}
          value={desc}
          onChange={e => setDesc(e.target.value)}
          label="Description"
          variant="outlined"
          multiline
          rows="4"
        />
        {renderCategories()}
      </FieldsContainer>
    </FormContainer>
  );

  return (
    <>
      {renderHeader()}
      <Container>{renderForm()}</Container>
    </>
  );
};

const Container = styled.div`
  padding: 0.5em;
`;

const CategoryChip = styled(Chip)`
  margin: 0.5em;
`;

const ChipContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Text = styled(TextField)`
  padding-top: 1.5em;
`;

const CategoriesSelect = styled(Select)`
  flex-grow: 1;
  width: 150px;
  text-overflow: ellipsis;
  margin-right: 5px;
`;

const CategoriesText = styled(Text)`
  flex-grow: 2;
`;

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ConfirmButton = styled(Button)`
  color: #fff;
  border-color: #fff;
  margin-left: 0.25em;
  margin-right: 0.25em;
  font-size: 14px;
`;

const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0.25em;
  padding-left: 0.75em;
  padding-right: 0.75em;
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
