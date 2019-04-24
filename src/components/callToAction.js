import React from "react"
import callToActionStyles from "./callToAction.module.css"

const CallToAction = () => (
  <div className={callToActionStyles.callToAction}>
    <h1>Hey there, fellow scientist!</h1>
    <h2>
      Thanks for participating in real scientific research at the Adler Planetarium!
    </h2>
    <span>
      You can keep science-ing on your mobile device or at home with
      Galaxy Zoo, a project from Zooniverse. Check it out!
    </span>
    <div>
      <button className="solid-button"><a href='https://www.galaxyzoo.org'>Galaxyzoo.org</a></button>
      <button className="hollow-button"><a>Share this project</a></button>
    </div>
  </div>
)

export default CallToAction;
