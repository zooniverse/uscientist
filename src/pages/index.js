import React from "react"

import Layout from "../components/layout"
import CallToAction from "../components/CallToAction"
import Divider from "../components/divider"
import General from "../components/general"
import Recent from "../components/recent"
import Data from "../components/data"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import yellowLogo from "../images/yellow-logo.png";
import spiral from "../images/background-spiral.png";
import smallStar from "../images/yellow-star.png";
import backgroundStar from "../images/background-star.png";

const IndexPage = ({ data }) => {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <Layout>
          <div className="layout-div">
            <img alt="Large U!Scientist Logo" className="large-logo" src={yellowLogo} />
            <img alt="Spiral Background" className="spiral-background" src={spiral} />
            <img alt="Small Background Star" className="small-star" src={smallStar} />
            <img alt="Background Star" className="background-star" src={backgroundStar} />
            <img alt="Spiral Background" className="spiral-background" src={spiral} />
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
