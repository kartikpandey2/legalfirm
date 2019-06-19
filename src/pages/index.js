import React, { Component } from "react"
import "antd/dist/antd.css"
import { Modal, Button } from "antd"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
    }
  }
  componentDidMount() {
    this.setState({ modal: true })
  }

  handleClick = () => {
    this.setState({ modal: false })
  }

  render() {
    const { modal } = this.state
    const footer = (
      <Button type="primary" onClick={this.handleClick}>
        I Agree
      </Button>
    )
    return (
      <Layout page="home">
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        {modal ? (
          <Modal
            title="Disclamer"
            visible={modal}
            footer={footer}
            onCancel={this.handleClick}
          >
            As per the rules of the Bar Council of India, Advocates/ Law Firms
            are not permitted to solicit work and/or advertise. By clicking on
            the "I agree" button below, the user acknowledges the following:
            There has been no advertisement, personal communication,
            solicitation, invitation or inducement of any sort whatsoever from
            Lotus Legal Associates or any of our Associates/Affiliates to
            solicit any work through this website or its related Blog Sites; The
            content of the Website and the related Blog Sites is for
            informational purposes only and is not in the nature of any
            advisory/ consultancy from Lotus Legal Associates or its
            Associates/Affiliates; The information about us is provided to the
            user only on his/her specific request and any information obtained
            or materials downloaded from this website and/or the related Blog
            Sites is completely at the user’s volition and any transmission,
            receipt or use of the said information would not create any
            lawyer-client relationship. The information provided under this
            website is solely available at your request for informational
            purposes only and should not be interpreted as soliciting or
            advertisement. We are not liable for any consequence of any action
            taken by the user relying on the material/ information provided
            under this website. In cases where the user has any legal issues,
            he/she in all cases must seek independent legal advice.
          </Modal>
        ) : null}
        <Banner />
      </Layout>
    )
  }
}

export default IndexPage
