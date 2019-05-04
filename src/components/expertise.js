import React from "react"

import ImageCard from "./imageCard"
import image from "../images/gatsby-astronaut.png"

const styles = {
  h1: {
    textAlign: "center",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
}

const expertiseLabel = ["test1", "test2", "test3", "test4"]

const Expertise = () => {
  const ExpertiseCard = expertiseLabel.map(label => (
    <ImageCard image={image} label={label} />
  ))
  return (
    <section className="odd">
      <h1 style={styles.h1}>Our Expertise</h1>
      <div style={styles.cardContainer}>{ExpertiseCard}</div>
    </section>
  )
}

export default Expertise
