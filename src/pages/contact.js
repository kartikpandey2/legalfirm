import React from "react"

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
    <SEO
      title="Contact"
      keywords={[
        `Lotus Legal`,
        `Lotus Legal contact`,
        `Legal Firm contact`,
        `contact`,
      ]}
    />
    <div style={styles.container}>
      <ContactUs />
    </div>
  </Layout>
)

export default ContacPage
