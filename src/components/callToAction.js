import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import callToActionStyles from "./callToAction.module.css"

const CallToAction = () => (
  <div className={callToActionStyles.callToAction}>
    <h1>Hey there, fellow scientist!</h1>
    <h2>
      Thanks for participating in real scientific research at the Adler Planetarium!
    </h2>
    <span>
      You can keep science-ing on your mobile device or at home with
      <a className="peach-link" href="https://www.galaxyzoo.org">Galaxy Zoo</a>, a project from Zooniverse. Check it out!
    </span>
    <div>
      <button className="solid-button">
        <OutboundLink href='https://www.galaxyzoo.org'>Galaxyzoo.org</OutboundLink>
      </button>
    </div>
  </div>
)

export default CallToAction;
