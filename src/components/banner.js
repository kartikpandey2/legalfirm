import React, { Component } from "react"
import { Button } from "antd"

import background from "../images/hammer.jpg"
import backgroundMobile from "../images/hammerResized.jpg"

const styles = {
  bannerDefault: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "calc(100vh - 4rem)",
    width: "100%",
  },
  bannerMobile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundImage: `url(${backgroundMobile})`,
    backgroundSize: "cover",
    backgroundPositionX: "-4rem",
    backgroundRepeat: "no-repeat",
    height: "calc(100vh - 7.8rem)",
  },
  row1Mobile: {
    position: "absolute",
    top: "40%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  row1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "absolute",
    top: "40%",
    right: "4%",
  },
  text: {
    fontSize: "1.4rem",
    color: "white",
  },
}

class Banner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0,
    }
  }

  componentDidMount() {
    this.setState({ width: window.innerWidth })
    window.addEventListener("resize", this.handleResize)
  }

  componentWillUnmount() {
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
        <div style={width > 480 ? styles.row1 : styles.row1Mobile}>
          <p style={styles.text}>Hi, We are Lotus Legal Associates</p>
          <p style={styles.text}>Let Our Experience be Your Guide</p>
          <Button>
            <a href="tel:+918287634022">
              <b>Contact Us</b>
            </a>
          </Button>
        </div>
      </div>
    )
  }
}

export default Banner
