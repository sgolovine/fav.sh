import React from 'react'
import Header, { HeaderText } from '~/components/common/Header'
import { IconButton, InputBase, Fab } from '@material-ui/core'
import { MdCreate, MdMenu, MdSync } from 'react-icons/md'
import styled from 'styled-components'
import { navigate } from '~/store/modules/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { BookmarkCard } from '~/components/BookmarkCard'
import { getBookmarks } from '~/store/modules/bookmarks'

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
  const bookmarks = useSelector(getBookmarks)
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

  const renderBookmarks = () => {
    const bookmarkKeys = Object.keys(bookmarks)

    if (bookmarkKeys.length === 0) {
      return <p>Wow such empty</p>
    }

    return (
      <>
        {bookmarkKeys.map((key) => {
          const currentBookmark = bookmarks[key]

          return (
            <BookmarkCard
              key={currentBookmark.guid}
              guid={currentBookmark.guid}
              name={currentBookmark.name}
              href={currentBookmark.href}
              desc={currentBookmark.desc}
              tags={currentBookmark.tags}
            />
          )
        })}
        <Spacer />
      </>
    )
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
      <BookmarksContainer>{renderBookmarks()}</BookmarksContainer>
      <PositionedFab onClick={handleAdd} color="primary">
        <MdCreate size={28} />
      </PositionedFab>
    </>
  )
}

const Spacer = styled.div`
  height: 50px;
`

const BookmarksContainer = styled.div`
  height: 525px;
  overflow-y: scroll;
`

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
