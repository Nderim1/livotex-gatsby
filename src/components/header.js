import * as React from "react"
import PropTypes from "prop-types"
import Navbar from './Navbar'

const Header = ({ siteTitle }) => (
  <Navbar />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
