import React, { Component } from "react"

import lawyer from "../images/lawyer.png"

const styles = {
  h1: {
    textAlign: "Center",
  },
  articleMobileView: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  articleDefaultView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainerMobileView: {
    flexBasis: "100%",
  },
  imageContainerDefaultView: {
    flexBasis: "40%",
  },
  textContainerMobileView: {
    flexBasis: "100%",
  },
  textContainerDefaultView: {
    flexBasis: "50%",
  },
}

const Cell = ({ image, children, name, width }) => {
  const articleStyle =
    width > 480 ? styles.articleDefaultView : styles.articleMobileView
  const imageContainer =
    width > 480
      ? styles.imageContainerDefaultView
      : styles.imageContainerMobileView
  const textContainer =
    width > 480
      ? styles.textContainerDefaultView
      : styles.textContainerMobileView
  return (
    <article style={articleStyle}>
      <div style={imageContainer}>
        <img src={image} />
      </div>
      <div style={textContainer}>
        <h4>{name}</h4>
        <p>{children}</p>
      </div>
    </article>
  )
}

class Team extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0,
    }
  }

  componentDidMount() {
    this.setState({ width: window.width })
    window.addEventListener("resize", this.handleScreenResize)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleScreenResize)
  }

  handleScreenResize = () => {
    const width = window.innerWidth
    this.setState({ width })
  }

  render() {
    const { width } = this.state
    return (
      <section className="even">
        <h1 style={styles.h1}>Our Team</h1>
        <div>
          <Cell image={lawyer} name="Kartik" width={width}>
            Ullamcorper a lacus vestibulum sed arcu. Malesuada bibendum arcu
            vitae elementum. Enim sed faucibus turpis in eu. Laoreet non
            curabitur gravida arcu ac tortor dignissim. Leo vel fringilla est
            ullamcorper eget nulla. Gravida quis blandit turpis cursus in hac
            habitasse. Eleifend mi in nulla posuere sollicitudin aliquam
            ultrices sagittis.
          </Cell>
          <Cell image={lawyer} name="Jyoti" width={width}>
            Ullamcorper a lacus vestibulum sed arcu. Malesuada bibendum arcu
            vitae elementum. Enim sed faucibus turpis in eu. Laoreet non
            curabitur gravida arcu ac tortor dignissim. Leo vel fringilla est
            ullamcorper eget nulla. Gravida quis blandit turpis cursus in hac
            habitasse. Eleifend mi in nulla posuere sollicitudin aliquam
            ultrices sagittis.
          </Cell>
        </div>
      </section>
    )
  }
}

export default Team
