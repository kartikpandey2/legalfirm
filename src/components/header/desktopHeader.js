import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from "../../images/logo.jpeg"

const styles = {
  header: {
    background: `white`,
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 10px",
  },
  innerDiv: {
    margin: `0 auto`,
    maxWidth: 960,
    display: "flex",
    padding: `1rem 1.0875rem`,
    justifyContent: "space-between",
    alignItems: "center",
  },
  b: { margin: "0 1rem 0 0" },
  link: {
    color: `Black`,
    textDecoration: `none`,
  },
  item1: {
    flex: "1 1 4rem",
  },
  item2: {
    flex: "1 2 27rem",
  },
  logo: {
    width: "40px",
    height: "40px",
  },
}

const DesktopHeader = ({ siteTitle }) => (
  <header style={styles.header}>
    <div style={styles.innerDiv}>
      <div>
        <b style={styles.b}>
          <Link to="/" style={styles.link}>
            <img src={logo} alt="logo" style={styles.logo} />
          </Link>
        </b>
      </div>
      <nav>
        <b style={styles.b}>
          <Link to="/about" style={styles.link}>
            About
          </Link>
        </b>
        <b style={styles.b}>
          <Link to="/expertise" style={styles.link}>
            Expertise
          </Link>
        </b>
        <b style={styles.b}>
          <Link to="/" style={styles.link}>
            Services
          </Link>
        </b>
        <b style={styles.b}>
          <Link to="/contact" style={styles.link}>
            Contact
          </Link>
        </b>
      </nav>
    </div>
  </header>
)

DesktopHeader.propTypes = {
  siteTitle: PropTypes.string,
}

DesktopHeader.defaultProps = {
  siteTitle: ``,
}

export default DesktopHeader
