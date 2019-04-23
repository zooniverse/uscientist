import React from "react"
import footerStyles from "./footer.module.css"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Layout = ({ data }) => {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <div className={footerStyles.footer}>
          <Img fixed={data.file.childImageSharp.fixed} />
          <span>U!Scientist is made possible by a grant from the national science foundation.</span>
          <span>The Zoonivese is a collaboration between the Adler Planetarium, The University of Oxford, The University of Minnesota, and the broader Citizen Science Alliance.</span>
          <a href="https://zooniverse.org">zooniverse.org</a>
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
