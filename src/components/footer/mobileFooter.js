import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"

import contact from "../../images/call.svg"
import service from "../../images/deal.svg"
import expertise from "../../images/lawyer.svg"
import about from "../../images/file.svg"
import { relative } from "upath"

const styles = {
  footer: {
    borderTop: "1px solid rgba(0, 0, 0, 0.1)",
    position: "fixed",
    bottom: 0,
    backgroundColor: "white",
    width: "100%",
  },
  container: {
    padding: "0.5rem 1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  items: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    position: "relative",
    right: "1rem",
    maxHeight: "1.5em",
    maxWidth: "2rem",
  },
}

const MobileFooter = props => {
  const { classes } = props
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.items}>
          <img src={about} className={classes.image} />
          <label>About</label>
        </div>
        <div className={classes.items}>
          <img src={expertise} className={classes.image} />
          <label>Expertise</label>
        </div>
        <div className={classes.items}>
          <img src={service} className={classes.image} />
          <label>Services</label>
        </div>
        <div className={classes.items}>
          <img src={contact} className={classes.image} />
          <label>Contact</label>
        </div>
      </div>
    </footer>
  )
}

export default withStyles(styles)(MobileFooter)
