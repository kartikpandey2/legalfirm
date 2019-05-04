import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Expertise from "../components/expertise"

const ExpertisePage = () => (
  <Layout page="expertise">
    <SEO title="Page two" />
    <Expertise />
  </Layout>
)

export default ExpertisePage
