import React from "react"

import ImageCard from "./imageCard"
import image from "../images/gatsby-astronaut.png"

const styles = {
  h1: {
    textAlign: "center",
  },
  text: {
    fontSize: "medium",
    overflow: "hidden",
    textOverflow: "ellipsis",
    marginBottom: "3%",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  container: {
    padding: "3% 15%",
  },
}

const expertiseLabel = ["test1", "test2", "test3", "test4"]

const Expertise = () => {
  const ExpertiseCard = expertiseLabel.map(label => (
    <ImageCard image={image} label={label} key={label} />
  ))
  return (
    <section className="odd">
      <h1 style={styles.h1}>Our Expertise</h1>
      <div style={styles.container}>
        <div>
          <p style={styles.text}>
            Our aim is to provide clear, concise and practical advice with
            time-bound deliverables to support our client’s business objectives.
            The firm's perspective is based on its knowledge of the
            sector/industry, local laws, and customs. Our team of Advocates and
            Experts understand issues across a broad spectrum of business and
            legal practice. Our Advocates have experience of handling over
            various cases from the past many years at all over India. Our
            Advocates has Specialization in drafting and reviewing contracts
            entered by an Organization. The further risk mapping exercise is
            also our strong point.
          </p>
        </div>
        <div style={styles.cardContainer}>{ExpertiseCard}</div>
      </div>
    </section>
  )
}

export default Expertise
