import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "./index.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi Frontend Guild!</h1>
    <p>How cool is that personalized message huh?...</p>
    <div className="image-wrapper">
      <Image />
    </div>
    <Link to="/404/">404 page</Link>
  </Layout>
)

export default IndexPage
