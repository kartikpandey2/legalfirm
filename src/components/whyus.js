import React from "react"
import { Alert } from "antd"

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
  container: {
    padding: "3% 15%",
  },
}

const alertMessage1 =
  "Lotus Legal Associates is a law office to fill in as a one-stop answer for customers going from new companies to the global association."

const alertMessage2 =
  "The firm comprises of a team of litigation and Non-litigation lawyers providing services across all judicial, quasi-judicial and administrative bodies. Our point is to sort out the contest goals as indicated by the necessities and fundamentals of our Clients."

const WhyUs = () => {
  return (
    <section className="odd">
      <h1 style={styles.h1}>Why Us</h1>
      <div style={styles.container}>
        <div>
          <Alert message={alertMessage1} type="info" style={styles.text} />
        </div>
        <p style={styles.text}>
          We are rapid Commercial, Finance, Corporate and Taxation Law work on
          giving customized administration, inclusion and monetarily solid
          guidance. The associates are acclaimed for its legal skill of its
          highly knowledgeable team of expert’s attorneys & consultants. A
          well-knit team of professionals from across different practices works
          to ensure that every client is provided the best & most comprehensive
          services. The law division provides an entire range of services
          essentials to setting up & operating a corporate business entity in
          India including advisory, litigation, audit, legal compliance review &
          documentation. Moreover, merger & acquisition capital market
          infrastructure environment law alternative dispute resolution are few
          of the area of expertise. The corporate team is comprised of the
          specialist in each area of work. The corporate team comprises of the
          specialist in each area of work with rich experience in their
          respective domains.
        </p>
        <div>
          <Alert message={alertMessage2} type="info" style={styles.text} />
        </div>
      </div>
    </section>
  )
}

export default WhyUs
