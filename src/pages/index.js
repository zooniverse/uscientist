import React from "react"

import Layout from "../components/layout"
import CallToAction from "../components/CallToAction"
import Divider from "../components/divider"

const IndexPage = () => (
  <Layout>
    <div style={{ background: `#001133`, padding: `10rem` }}>
      <CallToAction/>
      <Divider />
    </div>
  </Layout>
)

export default IndexPage
