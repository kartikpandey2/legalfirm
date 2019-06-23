import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactUs from "../components/contactUs"

const styles = {
  container: {
    padding: "3% 15% 80px",
  },
}

const ContacPage = () => (
  <Layout page="contact">
    <SEO title="Page two" />
    <div style={styles.container}>
      <ContactUs />
    </div>
  </Layout>
)

export default ContacPage
