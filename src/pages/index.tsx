import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "./index.scss"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="image-wrapper">
        <Image />
      </div>
      <h1>Hi Frontend Guild!</h1>
      <p>How cool is that personalized message huh?...</p>
      <br /><br /><br />
      <h2>Latest Blog Posts</h2>
      <div className="blog-posts">
        <p style={{ textAlign: 'center' }}><i>Replace this element with our blog content.</i></p>
      </div>
    </Layout>
  );
}

export default IndexPage
