import React from "react"
import Img from "gatsby-image"
import headerStyles from "./header.module.css"
import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

const Header = ({ siteTitle }) => {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <header className={headerStyles.header}>
          <Helmet>
            <title>{siteTitle}</title> />
          </Helmet>
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
        fixed(width: 120) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image: file(relativePath: { eq: "zooniverse-word-white.png" }) {
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
