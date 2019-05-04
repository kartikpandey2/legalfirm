import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WhyUs from "../components/whyus"

const AboutPage = () => (
  <Layout page="about">
    <SEO title="Page two" />
    <WhyUs />
  </Layout>
)

export default AboutPage
