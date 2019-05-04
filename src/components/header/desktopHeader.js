import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

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
}

const DesktopHeader = ({ siteTitle }) => (
  <header style={styles.header}>
    <div style={styles.innerDiv}>
      <div>
        <b style={styles.b}>
          <Link to="/" style={styles.link}>
            Logo
          </Link>
        </b>
      </div>
      <nav>
        <b style={styles.b}>
          <Link to="/" style={styles.link}>
            About
          </Link>
        </b>
        <b style={styles.b}>
          <Link to="/" style={styles.link}>
            Our Expertise
          </Link>
        </b>
        <b style={styles.b}>
          <Link to="/" style={styles.link}>
            Our Services
          </Link>
        </b>
        <b style={styles.b}>
          <Link to="/" style={styles.link}>
            Contact Us
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
