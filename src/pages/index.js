import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import WhyUs from "../components/whyus"
import Team from "../components/team"
import Expertise from "../components/expertise"
import ContactUs from "../components/ContactUs"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <WhyUs />
    <Team />
    <Expertise />
    <ContactUs />
  </Layout>
)

export default IndexPage
