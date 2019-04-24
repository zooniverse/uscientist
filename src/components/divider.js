import React from "react"
import dividerStyles from "./divider.module.css"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Divider = ({ data }) => {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <div className={dividerStyles.divider}>
          <Img fixed={data.file.childImageSharp.fixed}/>
        </div>
      )}
    />
  );
}

export const query = graphql`
  query {
    file(relativePath: { eq: "divider.png" }) {
      childImageSharp {
        fixed(width: 149) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default Divider;
