// For some reason I can't get traditional DOM routers
// to work with this extension. Nomally this would be a terrible
// idea but with only 3 - 4 simple routes, this won't hurt and
// simple UI, this won't hurt
import React from 'react'
import { AddScreen } from './AddScreen'
import { Categories } from './Categories'
import { MainScreen } from './MainScreen'
import { useSelector } from 'react-redux'
import { getCurrentScreen } from '~/store/modules/navigation'

export const Router = () => {
  const currentScreen = useSelector(getCurrentScreen)

  switch (currentScreen) {
    case 'add':
      return <AddScreen />
    case 'categories':
      return <Categories />
    case 'home':
    case 'sync':
    default:
      return <MainScreen />
  }
}