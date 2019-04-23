import React from "react"
import Img from "gatsby-image"
import headerStyles from "./header.module.css"
import { StaticQuery, graphql } from "gatsby"

const Header = () => {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <header className={headerStyles.header}>
          <div>
            <div className={headerStyles.upperDiv}>
              <Img style={{ margin: `auto 0.5rem` }} fixed={data.logo.childImageSharp.fixed} />
              <div style={{ borderLeft: `1px solid white` }}/>
              <Img style={{ margin: `auto 0.5rem` }} fixed={data.image.childImageSharp.fixed} />
            </div>
            <div className={headerStyles.lowerDiv}>
            </div>
          </div>
          <div className={headerStyles.centeredDiv}>
            <Img style={{ margin: `auto` }} fixed={data.file.childImageSharp.fixed} />
          </div>
        </header>
      )}
    />
  );
};

export const query = graphql`
  query {
    file(relativePath: { eq: "uscientist-logo.png" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image: file(relativePath: { eq: "zooniverse-logo-white.png" }) {
      childImageSharp {
        fixed(height: 10) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    logo: file(relativePath: { eq: "nsf.png" }) {
      childImageSharp {
        fixed(height: 15) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default Header
