import React, { Component } from "react"
import Button from "@material-ui/core/Button"
import Input from "@material-ui/core/Input"

const styles = {
  contactUs: {
    paddingBottom: "5rem",
  },
  h1: {
    textAlign: "center",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  containerMobileView: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  inputContainer: {
    marginBottom: "1rem",
  },
  button: {
    backgroundColor: "#2196F3",
    color: "white",
  },
}

const ConsultationForm = ({ submit, cancel }) => {
  return (
    <div>
      <div style={styles.inputContainer}>
        <label>Name</label>
        <Input />
      </div>
      <div style={styles.inputContainer}>
        <label>Email</label>
        <Input />
      </div>
      <div style={styles.inputContainer}>
        <label>Phone Number</label>
        <Input />
      </div>
      <div style={styles.inputContainer}>
        <label>Description</label>
        <Input />
      </div>
      <div>
        <Button onClick={submit}>Submit</Button>
        <Button onClick={cancel}>Cancel</Button>
      </div>
    </div>
  )
}

class ContactUs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0,
      showForm: false,
    }
  }

  componentDidMount() {
    this.setState({ width: window.innerWidth, showForm: window.width > 480 })
    window.addEventListener("resize", this.handleResize)
  }

  componentWillMount() {
    window.removeEventListener("resize", this.handleResize)
  }

  handleResize = () => {
    const width = window.innerWidth
    const showForm = window.innerWidth > 480
    this.setState({ width, showForm })
  }

  showForm = () => {
    this.setState({ showForm: true })
  }

  hideForm = () => {
    this.setState({ showForm: false })
  }

  render() {
    const { width, showForm } = this.state
    console.log(width)
    const Consultation = showForm ? (
      <div>
        <h3>Free Consultation</h3>
        <ConsultationForm submit={() => {}} cancel={this.hideForm} />
      </div>
    ) : (
      <Button onClick={this.showForm} style={styles.button}>
        Book Free Consultation
      </Button>
    )
    return (
      <section style={styles.contactUs} className="even">
        <h1 style={styles.h1}>Contact Us</h1>
        <div
          style={width > 480 ? styles.container : styles.containerMobileView}
        >
          <div>Address</div>
          {Consultation}
        </div>
      </section>
    )
  }
}

export default ContactUs
