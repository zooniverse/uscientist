import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import PropTypes from "prop-types"
import Map from "./map"
import dataStyles from "./data.module.css"

const Data = ({ retiredCount, tableCount, totalDaily }) => (
  <div className={dataStyles.data}>
    <h3 className='sub-header'>Even more data</h3>
    <span className='descriptor'>
      People just like you have been classifying galaxies from U!Scientist at
      the Adler as well as online on
      <OutboundLink href="https://www.galaxyzoo.org" className="peach-link">Galaxy Zoo</OutboundLink>
    </span>
    <div className={dataStyles.stats}>
      <div>
        <h5>total classifications today</h5>
        <span>{totalDaily.toLocaleString()}</span>
        <h5>galaxies retired</h5>
        <span>{retiredCount.toLocaleString()}</span>
        <h5>u!scientist classifications today</h5>
        <span>{tableCount.toLocaleString()}</span>
      </div>
      <div>
        <h5>Countries participating today</h5>
        <Map />
      </div>
    </div>
    <div className={dataStyles.buttons}>
      <button className='solid-button'>
        <OutboundLink href='https://www.galaxyzoo.org'>Learn More</OutboundLink>
      </button>
      <button className='hollow-button'>
        <OutboundLink href='https://www.zooniverse.org/accounts/register'>Register</OutboundLink>
      </button>
    </div>
  </div>
)

Data.defaultProps = {
  retiredCount: 0,
  tableCount: 0,
  totalDaily: 0
}

Data.propTypes = {
  retiredCount: PropTypes.number,
  tableCount: PropTypes.number,
  totalDaily: PropTypes.number
}

export default Data;
