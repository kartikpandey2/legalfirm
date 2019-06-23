import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WhyUs from "../components/whyus"

const styles = {
  container: {
    padding: "3% 15% 80px",
  },
}

const AboutPage = () => (
  <Layout page="about">
    <SEO title="Page two" />
    <div style={styles.container}>
      <WhyUs />
    </div>
  </Layout>
)

export default AboutPage
