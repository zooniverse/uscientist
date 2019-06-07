import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import PropTypes from "prop-types"
import Map from "./map"
import dataStyles from "./data.module.css"

const Data = ({ retiredCount, totalTableClassifications, totalProjectClassifications }) => (
  <div className={dataStyles.data}>
    <h3 className='sub-header'>Even more data</h3>
    <span className='descriptor'>
      People just like you have been classifying galaxies from U!Scientist at
      the Adler as well as online on
      <OutboundLink href="https://www.galaxyzoo.org" className="peach-link">Galaxy Zoo</OutboundLink>
    </span>
    <div className={dataStyles.stats}>
      <div>
        <h5>All-Time U!Scientist Classifications</h5>
        <span>{totalTableClassifications.toLocaleString()}</span>
        <h5>All-Time Classifications From Galaxy Zoo</h5>
        <span>{totalProjectClassifications.toLocaleString()}</span>
        <h5>All-Time Completed Galaxies</h5>
        <span>{retiredCount.toLocaleString()}</span>
      </div>
      <div>
        <h5>Countries participating currently</h5>
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
  totalTableClassifications: 0,
  totalProjectClassifications: 0
}

Data.propTypes = {
  retiredCount: PropTypes.number,
  totalTableClassifications: PropTypes.number,
  totalProjectClassifications: PropTypes.number
}

export default Data;
