/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { ReactNode } from "react"
import GlobalStyle from "../style/global-style"
import LoaderContainer from "./loader/loader-container"

interface Props {
  children: ReactNode
}

const Layout: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <LoaderContainer />
      {children}
    </>
  )
}

export default Layout
