// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  // <header>
  //   <h1 style={{ marginTop: '25px', textAlign: 'center' }}><span role='img' aria-label='newspaper'>📰</span></h1>
  // </header>
  <header style={{ height: '10vh' }} />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
