import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import dataStyles from "./data.module.css"

const Data = () => (
  <div className={dataStyles.data}>
    <h3 className='sub-header'>Even more data</h3>
    <span className='descriptor'>
      People just like you have been classifying galaxies from U!Scientist at
      the Adler as well as online on
      <a href="https://www.galaxyzoo.org" className="peach-link">Galaxy Zoo</a>
    </span>
    <div className={dataStyles.stats}>
      <div>
        <h5>total classifications today</h5>
        <span>42,629</span>
        <h5>galaxies retired</h5>
        <span>20</span>
        <h5>u!scientist classifications today</h5>
        <span>12,054</span>
      </div>
      <div>
        <h5>Countries participating today</h5>
      </div>
    </div>
    <div className={dataStyles.buttons}>
      <button className='solid-button'>
        <OutboundLink href='https://www.galaxyzoo.org'>galaxyzoo.org</OutboundLink>
      </button>
    </div>
  </div>
)

export default Data;
