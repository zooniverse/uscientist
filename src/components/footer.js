import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import footerStyles from "./footer.module.css"

const Layout = ({ data }) => {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <div className={footerStyles.footer}>
          <div className={footerStyles.logos}>
            <Img fixed={data.nsf.childImageSharp.fixed} />
            <div className={footerStyles.separator}/>
            <Img fixed={data.zooniverse.childImageSharp.fixed} />
          </div>
          <span>
            This material is based upon work supported by the national science
            foundation under grant #AISL-1713425
          </span>
          <span>
            The Zoonivese is a collaboration between the Adler Planetarium, The
            University of Oxford, The University of Minnesota, and the broader
            Citizen Science Alliance.
          </span>
          <OutboundLink href="https://zooniverse.org">zooniverse.org</OutboundLink>
        </div>
      )}
    />
  );
};

export const query = graphql`
  query {
    zooniverse: file(relativePath: { eq: "zooniverse-logo.png" }) {
      childImageSharp {
        fixed(height: 18) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    nsf: file(relativePath: { eq: "nsf.png" }) {
      childImageSharp {
        fixed(height: 35) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default Layout;
