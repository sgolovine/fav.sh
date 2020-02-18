import React from 'react'
import Header, { HeaderText } from '~/components/common/Header'
import { IconButton, InputBase, Fab } from '@material-ui/core'
import { MdCreate, MdMenu, MdSync } from 'react-icons/md'
import styled from 'styled-components'
import { navigate } from '~/store/modules/navigation'
import { useDispatch } from 'react-redux'
import { BookmarkCard } from '~/components/BookmarkCard'

const HeaderLeftButton = ({ onClick }: { onClick: () => void }) => (
  <IconButton onClick={onClick}>
    <MdMenu color="#fff" />
  </IconButton>
)

const HeaderRightButton = ({ onClick }: { onClick: () => void }) => (
  <IconButton onClick={onClick}>
    <MdSync color="#fff" />
  </IconButton>
)

export const MainScreen = () => {
  const dispatch = useDispatch()

  const handleCategories = () => {
    dispatch(navigate('categories'))
  }

  const handleAdd = () => {
    dispatch(navigate('add'))
  }

  const handleSync = () => {
    dispatch(navigate('sync'))
  }

  return (
    <>
      <Header>
        <FlexContainer>
          <Section>
            <HeaderLeftButton onClick={handleCategories} />
            <SearchBox
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Section>
          <Section>
            <HeaderRightButton onClick={handleSync} />
          </Section>
        </FlexContainer>
      </Header>
      <BookmarkCard
        guid="foo"
        name="Some website"
        href="http://some.href"
        desc="A sample description of the site here"
        tags={[
          { name: 'foo', guid: 'foo' },
          { name: 'bar', guid: 'foo' },
          { name: 'baz', guid: 'foo' },
        ]}
      />
      <BookmarkCard
        guid="foo"
        name="Some website"
        href="http://some.href"
        desc="A sample description of the site here"
        tags={[
          { name: 'foo', guid: 'foo' },
          { name: 'bar', guid: 'foo' },
          { name: 'baz', guid: 'foo' },
        ]}
      />
      <BookmarkCard
        guid="foo"
        name="Some website"
        href="http://some.href"
        desc="A sample description of the site here"
        tags={[
          { name: 'foo', guid: 'foo' },
          { name: 'bar', guid: 'foo' },
          { name: 'baz', guid: 'foo' },
        ]}
      />
      <PositionedFab onClick={handleAdd} color="primary">
        <MdCreate size={28} />
      </PositionedFab>
    </>
  )
}

const PositionedFab = styled(Fab)`
  position: fixed;
  bottom: 2.5em;
  right: 2.5em;
`

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  align-items: center;
`
const SearchBox = styled(InputBase)`
  color: inherit;
  padding: 1px 1px 1px 7px;
  width: 100%;
`
