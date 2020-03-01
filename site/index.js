import React from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"

const Container = styled.div`
  padding: 2em;
`

const HeaderContianer = styled.div``

const Header = styled.p``

const Subheader = styled.p``

const ContentContainer = styled.div``

const AppContainer = styled.div``

const App = () => {
  return (
    <Container>
      <HeaderContianer>
        <Header>Fav.sh</Header>
        <Subheader>
          Alternative bookmark manager for Chrome and Firefox.
        </Subheader>
      </HeaderContianer>
    </Container>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
