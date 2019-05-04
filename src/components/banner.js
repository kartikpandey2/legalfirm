import React, { Component } from "react"
import Button from "@material-ui/core/Button"

import highCourt from "../images/Delhi-High-Court-logo.png"
import supremeCourt from "../images/supreme-court.png"
import districtCourt from "../images/district-court.jpg"
import background from "../images/close-up-court-courthouse-534204.jpg"

const styles = {
  bannerDefault: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "calc(100vh - 3rem)",
    width: "100%",
  },
  bannerMobile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPositionX: "-4rem",
    backgroundRepeat: "no-repeat",
    height: "calc(100vh - 7.8rem)",
  },
  row1: {
    position: "absolute",
    top: "18%",
  },
  row2: {
    position: "absolute",
    bottom: "20%",
  },
}

class Banner extends Component {
  constructor(props) {
    super(props)
    this.state = { width: window.innerWidth }
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize)
  }

  componentWillMount() {
    window.removeEventListener("resize", this.handleResize)
  }

  handleResize = () => {
    const width = window.innerWidth
    this.setState({ width })
  }

  render() {
    const { width } = this.state
    return (
      <div style={width > 480 ? styles.bannerDefault : styles.bannerMobile}>
        <div style={styles.row1}>
          <h3>Looking For Legal Advice ?</h3>
        </div>
        <div style={styles.row2}>
          <button>Call Us</button>
        </div>
      </div>
    )
  }
}

export default Banner
