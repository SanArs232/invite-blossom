import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import ImageRing from "../images/ring-ivanisanja.png"
import Nav from "../components/header-en"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <section className="xl:container mx-auto">
      <div className=" text-center bg-wedding py-20">
        <div>
          <h1 className=" font-bold text-zinc-700 md:py-10 ">
            Welcome to our Wedding Invitation
          </h1>
        </div>
        <div className=" ">
          <img src={ImageRing} alt="Logo" className="h-96 w-auto mx-auto" />
        </div>

        <div>
          <h2 className=" px-10 font-bold text-zinc-700 pb-10 md:w-2/4 mx-auto ">
            We are pleased to invite you to our wedding celebration
          </h2>
          <div className="font-bold text-zinc-700 text-5xl  pb-10">
            {" "}
            24.06.2022
          </div>
        </div>
        <div>
          <h2 className=" font-bold text-zinc-700  ">
            in the summer garden of the resorant "Vago"
          </h2>
          <h2 className=" font-bold text-zinc-700  ">in 19:00 h</h2>
        </div>
      </div>

      <div className="h-96 "></div>
    </section>

    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
   <StaticImage src="../images/background.jpg" alt="gatsby astronaut" />
     <StaticImage src="../images/ivanisanja-bg.png"/>
      <p>
      <Link to="/page-2/">Go to page 2</Link>
    </p>
    <p>
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
    </div> */}
  </Layout>
)

export default IndexPage
