import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Expertise from "../components/expertise"

const styles = {
  container: {
    padding: "3% 15% 80px",
  },
}

const ExpertisePage = () => (
  <Layout page="expertise">
    <SEO
      title="Expertise"
      keywords={[
        `Lotus Legal`,
        `Lotus Legal expertise`,
        `Legal Firm expertise`,
        `contact`,
      ]}
    />
    <div style={styles.container}>
      <Expertise />
    </div>
  </Layout>
)

export default ExpertisePage
