import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"

const IndexPage = () => (
  <Layout page="home">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Banner />
  </Layout>
)

export default IndexPage
