import React from "react"

import Layout from "../components/layout"
import CallToAction from "../components/CallToAction"
import Divider from "../components/divider"
import General from "../components/general"
import Recent from "../components/recent"
import Data from "../components/data"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const IndexPage = ({ data }) => {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <Layout>
          <div style={{ background: `#001133`, padding: `15% 15% 5% 15%`, position: `relative` }}>
            <Img
              fixed={data.file.childImageSharp.fixed}
              style={{ position: `absolute`, right: 0, top: 0, marginRight: `15%` }}
            />
            <Img
              fixed={data.image.childImageSharp.fixed}
              style={{ position: `absolute`, left: 0, top: 0, margin: `12% 0 0 10%` }}
            />
            <Img
              fixed={data.star.childImageSharp.fixed}
              style={{ position: `absolute`, left: 0, marginTop: `12%` }}
            />
            <CallToAction />
            <Divider />
            <Recent />
            <Divider />
            <Img
              fixed={data.zooniverse.childImageSharp.fixed}
              style={{ position: `absolute`, left: 0, bottom: 0, margin: `0 0 20% 5%` }}
            />
            <Data />
            <Divider />
            <General />
            <Img
              fixed={data.image.childImageSharp.fixed}
              style={{ position: `absolute`, right: 0, bottom: 0, margin: `0 10% 2% 0` }}
            />
          </div>
        </Layout>
      )}
    />
  );
}

export const query = graphql`
  query {
    file(relativePath: { eq: "yellow-logo.png" }) {
      childImageSharp {
        fixed(width: 624) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image: file(relativePath: { eq: "yellow-star.png" }) {
      childImageSharp {
        fixed(height: 44) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    star: file(relativePath: { eq: "background-star.png" }) {
      childImageSharp {
        fixed(height: 350) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    spiral: file(relativePath: { eq: "background-spiral.png" }) {
      childImageSharp {
        fixed(height: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    zooniverse: file(relativePath: { eq: "zooniverse-logo-white.png" }) {
      childImageSharp {
        fixed(height: 360) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default IndexPage
