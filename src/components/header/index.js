import React, { Component } from "react"
import DesktopHeader from "./desktopHeader"
import MobileHeader from "./mobileHeader"

export default class Header extends Component {
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
    const ShowHeader = width > 480 ? <DesktopHeader /> : <MobileHeader />
    return ShowHeader
  }
}
