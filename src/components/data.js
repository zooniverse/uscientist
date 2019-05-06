import React from "react"
import Map from "./map"
import dataStyles from "./data.module.css"

const Data = () => (
  <div className={dataStyles.data}>
    <h3 className='sub-header'>Even more data</h3>
    <span className='descriptor'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna alique. Ut
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
        <Map />
      </div>
    </div>
    <div className={dataStyles.buttons}>
      <button className='hollow-button'>
        <a href='https://www.galaxyzoo.org'>galaxyzoo.org</a>
      </button>
      <button className='hollow-button'>
        <a href='https://www.zooniverse.org'>share this project</a>
      </button>
    </div>
  </div>
)

export default Data;
