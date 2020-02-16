import React from 'react'
import { Link } from 'react-router-dom'

export const MainPage = () => {
  return (
    <>
      <p>Hello World</p>
      <Link to="/add">Add</Link>
    </>
  )
}
