import React from 'react'
import { IconButton } from '@material-ui/core'
import { Bookmark } from '~/types/Bookmark'
import { MdEdit, MdDelete } from 'react-icons/md'
import styled from 'styled-components'
import { actions } from '~/store/modules/bookmarks'
import { useDispatch } from 'react-redux'

export const BookmarkCard = (bookmark: Bookmark) => {
  const dispatch = useDispatch()

  return (
    <Card>
      <FlexCol>
        <Link href={bookmark.href}>{bookmark.name}</Link>
        <SmallLink href={bookmark.href}>{bookmark.href}</SmallLink>
        <Desc>{bookmark.desc}</Desc>
      </FlexCol>
      <FlexRow>
        <IconButton>
          <MdEdit />
        </IconButton>
        <IconButton>
          <MdDelete />
        </IconButton>
      </FlexRow>
    </Card>
  )
}

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 0.75em;
  padding-bottom: 0.75em;
  padding-left: 0.1em;
  border-bottom: 1.5px solid #c9d6df;
`

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`

const FlexRow = styled.div`
  display: flex;
  flex-dirction: row;
`

const Link = styled.a`
  font-size: 18px;
  text-decoration: none;
  font-family: Roboto;
  line-height: 1.5em;
  padding-left: 0.25em;
  color: #424242;
  :visited {
    color: #424242;
  }
  :hover {
    color: #0277bd;
  }
`

const SmallLink = styled(Link)`
  font-size: 12.5px;
`

const Desc = styled.p`
  font-size: 18px;
  font-family: Roboto;
  padding-left: 0.25em;
`
