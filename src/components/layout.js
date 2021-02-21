/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main style={{ minHeight: `91.5vh` }}>{children}</main>
      {/* <footer
        style={{
          marginTop: `2rem`,
          marginLeft: `0.5rem`
        }}
      >
        © {new Date().getFullYear()} <a href="https://anli.io" target="_blank" rel="noreferrer">Anne Li</a>, Built with
        {` `}
        <a href="https://www.gatsbyjs.com" target="_blank" rel="noreferrer">Gatsby</a>
      </footer> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
