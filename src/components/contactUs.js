import React, { Component } from "react"
import { Button, Input, Form, Modal } from "antd"

const Label = Form.Item

const styles = {
  contactUs: {
    paddingBottom: "5rem",
  },
  extraDetails: {
    marginBottom: "3%",
  },
  consultation: {
    display: "flex",
    justifyContent: "center",
  },
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
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginBottom: "3%",
  },
  containerMobileView: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: "3%",
  },
  inputContainer: {
    marginBottom: "1rem",
  },
  button: {
    backgroundColor: "#2196F3",
    color: "white",
  },
  cancelButton: {
    backgroundColor: "#d9534f",
    color: "white",
  },
  submitButtom: {
    backgroundColor: "#13CE66",
    color: "white",
    marginRight: "0.2rem",
  },
}

const ConsultationForm = ({ submit, cancel, visible }) => {
  return (
    <Modal
      visible={visible}
      title="Free Consultation"
      onOk={submit}
      onCancel={cancel}
    >
      <Label label="Name">
        <Input />
      </Label>
      <Label label="Email">
        <Input />
      </Label>
      <Label label="Phone Number">
        <Input />
      </Label>
      <Label label="Description">
        <Input />
      </Label>
    </Modal>
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

  componentWillUnmount() {
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
    const Consultation = showForm ? (
      <ConsultationForm
        submit={() => {}}
        cancel={this.hideForm}
        visible={showForm}
      />
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
          <div>
            <p style={styles.text}>
              The Firm is headquartered at New Delhi and has offices in
              Dehradun. The Firm has associate offices in most major cities of
              India, therefore enabling the firm to provide its Clients both
              global and local support.
            </p>
          </div>
          <div>
            <strong>NEW DELHI</strong>
            <div>B-504, Plot No. 21,</div>
            <div>Mayank Mansion, </div>
            <div>Sector 06, Dwarka</div>
            <div>New Delhi 10075, India.</div>
            <br />
          </div>
          <div>
            <strong>DEHRADUN</strong>
            <div>213, Rajpur Road</div>
            <div>Opp. G.R.D Academy</div>
            <div>Dehradun U.K 248009, India</div>
            <br />
          </div>
        </div>
        <div style={styles.extraDetails}>
          <div>
            <strong>Contact Details:</strong> Ph. +919310856660, +918766315435,
            +917248546756
          </div>
          <br />
        </div>
        <div style={styles.extraDetails}>
          <div>
            <strong>E-Mail:</strong> lotuslegalassociates@gmail.com
          </div>
          <br />
        </div>
        <div style={styles.consultation}>{Consultation}</div>
      </section>
    )
  }
}

export default ContactUs
