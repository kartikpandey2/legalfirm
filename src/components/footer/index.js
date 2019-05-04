import React, { Component } from "react"
import DesktopFooter from "./desktopFooter"
import MobileFooter from "./mobileFooter"

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0,
    }
  }

  componentDidMount() {
    this.setState({ width: window.innerWidth })
    window.addEventListener("resize", this.updateWindowWidth)
  }

  componentWillUnmout() {
    window.removeEventListener("resize", this.updateWindowWidth)
  }

  updateWindowWidth = () => {
    const width = window.innerWidth
    this.setState({ width })
  }

  render() {
    const { width } = this.state
    const ShowFooter =
      width > 480 ? <DesktopFooter /> : <MobileFooter page={this.props.page} />
    return ShowFooter
  }
}

export default Footer
