import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Team from "../components/team"

const styles = {
  container: {
    padding: "3% 15%",
  },
}

const TeamPage = () => (
  <Layout page="team">
    <SEO title="Page two" />
    <div style={styles.container}>
      <Team />
    </div>
  </Layout>
)

export default TeamPage
