import React from "react"

import Layout from "../components/layout"
import CallToAction from "../components/CallToAction"
import Divider from "../components/divider"
import General from "../components/general"
import Recent from "../components/recent"
import Data from "../components/data"

const IndexPage = () => (
  <Layout>
    <div style={{ background: `#001133`, padding: `15%` }}>
      <CallToAction />
      <Divider />
      <Recent />
      <Divider />
      <Data />
      <Divider />
      <General />
    </div>
  </Layout>
)

export default IndexPage
