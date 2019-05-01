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
      <a href="https://www.galaxyzoo.org">Galaxy Zoo</a>, a project from Zooniverse. Check it out!
    </span>
    <div className={callToActionStyles.buttons}>
      <button className="solid-button"><a href='https://www.galaxyzoo.org'>Galaxyzoo.org</a></button>
      <button className="hollow-button"><a href='https://www.zoonvierse.org'>Share this project</a></button>
    </div>
  </div>
)

export default CallToAction;
