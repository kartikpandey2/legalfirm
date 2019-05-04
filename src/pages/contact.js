import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactUs from "../components/contactUs"

const ContacPage = () => (
  <Layout page="contact">
    <SEO title="Page two" />
    <ContactUs />
  </Layout>
)

export default ContacPage
