import React, { useState } from 'react'
import Header from '~/components/common/Header'
import { IconButton, InputBase, Fab, Drawer } from '@material-ui/core'
import { MdCreate, MdMenu, MdSync } from 'react-icons/md'
import styled from 'styled-components'
import { navigate } from '~/store/modules/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { BookmarkCard } from '~/components/BookmarkCard'
import { getBookmarks } from '~/store/modules/bookmarks'
import { Categories } from './Categories'
import { getActiveTags } from '~/store/modules/tags'
import intersection from 'lodash/fp/intersection'

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
  const activeTags = useSelector(getActiveTags)
  const dispatch = useDispatch()

  const [showSidebar, setShowSidebar] = useState<boolean>(false)

  const handleCategories = () => {
    setShowSidebar(!showSidebar)
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

    // TODO:
    // This could be more efficent, right now the component re-renders all elements
    // When we filter by tags, not an issue now but something we want to fix in the future
    return (
      <>
        {bookmarkKeys.map((key) => {
          const currentBookmark = bookmarks[key]
          // Check first if we even need to do filtering
          // If activeTags = 0 then we return all of them
          if (activeTags.length > 0) {
            // Here we dont need to know which tags are similar
            // Just that the bookmark and activeTags share 1 or more
            if (intersection(currentBookmark.tags, activeTags).length > 0) {
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
            }
          } else {
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
          }
        })}
        <Spacer />
      </>
    )
  }

  return (
    <>
      <Drawer
        anchor="left"
        open={showSidebar}
        onClose={() => setShowSidebar(false)}
      >
        <Categories />
      </Drawer>
      <Header>
        <FlexContainer>
          <Section>
            <HeaderLeftButton onClick={handleCategories} />
            <SearchBox
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              autoFocus
              fullWidth
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
  padding: 3px 3px 3px 7px;
  border: 1px solid #90a4ae;
  border-radius: 7px;
  width: 500px;
  font-size: 22px;
`
