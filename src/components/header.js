import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import * as theme from "../theme"

export default ({ siteTitle }) => (
  <Header>
    <Nav>
      <h3>
        <Link to="/">{siteTitle}</Link>
      </h3>
    </Nav>
  </Header>
)

const Header = styled.div`
  background: #202020;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 5px;
  z-index: 99;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.4);
`

const Nav = styled.nav`
  display: flex;
  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      color: ${theme.colors.primary};
    }
  }
`
