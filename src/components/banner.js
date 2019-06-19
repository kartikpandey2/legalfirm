import React, { Component } from "react"
import { Button } from "antd"

// import background from "../images/close-up-court-courthouse-534204.jpg"
import background from "../images/hammer.jpg"

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
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPositionX: "-4rem",
    backgroundRepeat: "no-repeat",
    height: "calc(100vh - 7.8rem)",
  },
  row1: {
    position: "absolute",
    top: "40%",
    right: "10%",
  },
  row2: {
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
        <div style={styles.row1} />
        <div style={styles.row2}>
          <p style={styles.text}>Let Our Experience be Your Guide</p>
          <Button>
            <b>Contact Us</b>
          </Button>
        </div>
      </div>
    )
  }
}

export default Banner
