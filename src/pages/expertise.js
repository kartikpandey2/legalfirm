import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Expertise from "../components/expertise"

const styles = {
  container: {
    padding: "3% 15%",
  },
}

const ExpertisePage = () => (
  <Layout page="expertise">
    <SEO title="Page two" />
    <div style={styles.container}>
      <Expertise />
    </div>
  </Layout>
)

export default ExpertisePage
