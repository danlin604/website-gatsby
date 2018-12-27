import React from 'react'
import { Link } from 'gatsby'
import './layout.css'

import styled from 'styled-components'

import Header from './header'

export default class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    // const rootPath = `${__PATH_PREFIX__}/`

    return (
      <React.Fragment>
        <Header />
        <Main>
          {children}
        </Main>
      </React.Fragment>
    )
  }
}

const Main = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`