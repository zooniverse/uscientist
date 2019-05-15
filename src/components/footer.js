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
          <Img fixed={data.file.childImageSharp.fixed} />
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
    file(relativePath: { eq: "zooniverse-logo.png" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default Layout;
