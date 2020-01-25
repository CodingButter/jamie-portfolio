import React from "react"

import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Hero from "../components/hero"

const IndexPage = () => {
  const { cityScapeImage } = useStaticQuery(graphql`
    query {
      cityScapeImage: file(relativePath: { eq: "city_scape.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2560) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />

      <Hero image={cityScapeImage?.childImageSharp?.fluid}>
        <h1>Jamie Lee Nichols</h1>
        <p>I make stuff.</p>
        <Link to="/contact">Get in touch</Link>
      </Hero>
    </Layout>
  )
}

export default IndexPage
