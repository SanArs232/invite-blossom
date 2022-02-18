import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage src="../images/background.jpg" alt="gatsby astronaut" />
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
     
    </div> */}
    <p>
      <Link to="/page-2/">Go to page 2</Link>
    </p>
    <p>
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
