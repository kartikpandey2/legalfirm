import { Link } from "gatsby"
import React from "react"
import Button from "@material-ui/core/Button"
import logo from "../../images/logo.jpeg"

const styles = {
  header: {
    background: `white`,
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 10px",
  },
  container: {
    padding: `1rem 1.0875rem`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#2196F3",
    color: "white",
  },
  logo: {
    width: "40px",
    height: "40px",
  },
  link: {
    color: `Black`,
    textDecoration: `none`,
  },
}

const MobileHeader = () => {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div>
          <Link to="/" style={styles.link}>
            <img src={logo} alt="logo" style={styles.logo} />
            &nbsp;<b>Lotus Legal</b>
          </Link>
        </div>
        <div>
          <a href="tel:+918287634022">
            <Button style={styles.button}>Call Us</Button>
          </a>
        </div>
      </div>
    </header>
  )
}

export default MobileHeader
