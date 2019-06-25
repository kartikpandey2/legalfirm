import React, { Component } from "react"

import AvaniMalik from "../images/AvaniMalik.jpeg"
import BhuvanChadha from "../images/BhuvanChadha.jpeg"

const styles = {
  h1: {
    textAlign: "Center",
    marginBottom: "5%",
  },
  articleMobileView: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  articleDefaultView: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  imageContainerMobileView: {
    maxWidth: "200px",
    maxHeight: "200px",
  },
  imageContainerDefaultView: {
    maxWidth: "200px",
    marginBottom: "3%",
  },
  textContainerMobileView: {
    flexBasis: "100%",
  },
  textContainerDefaultView: {
    marginBottom: "5%",
  },
  name: {
    color: "#009eeb",
  },
  greenText: {
    color: "#02b875",
    marginBottom: "0.2em",
  },
  image: {
    width: "100%",
    height: "100%",
  },
}

const Cell = ({ image, children, name, width, degree, position }) => {
  const articleStyle = styles.articleDefaultView
  const imageContainer = styles.imageContainerDefaultView
  const textContainer = styles.textContainerDefaultView

  return (
    <article style={articleStyle}>
      <div style={imageContainer}>
        <img src={image} style={styles.image} alt={name} />
      </div>
      <div style={textContainer}>
        <h3 style={styles.name}>{name}</h3>
        <h4 style={styles.greenText}>{degree}</h4>
        <h4 style={styles.greenText}>{position}</h4>
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
    this.setState({ width: window.innerWidth })
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
          <Cell
            image={AvaniMalik}
            name="AVANI MALIK"
            width={width}
            degree={`B.A. LLB (H), LLM`}
            position={`MANAGING PARTNER`}
          >
            Avani is one of the founders and Managing Partner of Lotus Legal
            Associates. She completed her B.A LL.B. (Hons) from Guru Gobind
            Indraprastha University, USSLS, Dwarka, New Delhi (Main Campus) and
            completed her LLM from Kurukshetra University, Kurukshetra, Haryana.
            She started her Legal Practice in 2014 and is a member of Delhi High
            Court Bar Association and Dwarka Court Bar Association. She has
            handled numerous cases at various courts and tribunals and has a
            rich experience in handling Commercial & Civil laws, Infrastructure
            & Real Estate laws, Property Litigation, Consumer Petitions,
            matrimonial cases, arbitration cases, Delhi Rent Control Act, NI
            Act, etc. She has appeared and argued before the Hon’ble High Court
            of Delhi, District courts of Delhi, National Consumer Redressal
            Forum, State Consumer Redressal Forum, New Delhi, HRERA, Gurugram,
            and various Tribunals. She has assisted Judges of LokAdalatsession
            organized by Delhi High Court Legal Service Committee in 2009. She
            has done an internship under Delhi Legal Service Authority for the
            “Tihar Jail Project” in 2009. She has attended Advance Level
            Workshop on Intellectual Property Laws and Conference on Legal
            Education, Rule of Law and Governance in 2012 organized at Law
            Centre-1 Faculty of Law, University of Delhi, attended workshop on
            Role of Students in creating understanding and advancement of Human
            Rights Organized by National Human Rights Commission and USLLS and
            attended Seminar on E-Courts project and E-judiciary by Government
            of India.
          </Cell>
          <Cell
            image={BhuvanChadha}
            name="BHUVAN CHADHA"
            width={width}
            degree={`B.A. LLB (H), LLM`}
            position={`MANAGING PARTNER`}
          >
            Bhuvan is one of the founders and Managing Partner of Lotus Legal
            Associates. He completed his B.A. LL.B. (Hons.) from Hemvati Nanda
            Bahuguna University (Law College Dehradun) Uttarakhand India and
            L.L.M. from I.M.S Unison University Dehradun Uttarakhand India and
            joined the Bar. He is member of Nainital High Court Bar Association.
            He has handled numerous cases at various courts and tribunals and
            has a rich experience in handling writs, Consumer Petitions,
            matrimonial cases, Rent Control Act, NI Act, etc. He has appeared
            and argued before the various Hon’ble High Courts, District courts,
            National Consumer Redressal Forum, State Consumer Redressal Forum,
            and various Tribunals. He has also judged various moot courts
            conducted by various universities.
          </Cell>
        </div>
      </section>
    )
  }
}

export default Team
