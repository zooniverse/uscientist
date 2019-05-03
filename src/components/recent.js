import React from "react"
import PropTypes from "prop-types"
import recentStyles from "./recent.module.css"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { getSubjectLocation } from "../lib/get-subject-location"

const Recent = ({ subjects }) => (
    <div className={recentStyles.recent}>
      <h3 className='sub-header'>Recent galaxies</h3>
      <span className='descriptor'>
        Check out some of the galaxies that have been classified both on
        U!Scientist at the Adler Planetarium and online on
        <OutboundLink className="peach-link" href="https://www.galaxyzoo.org">Galaxy Zoo.</OutboundLink>
      </span>
      <div className={recentStyles.subjects}>
        {subjects.map((subject, i) => {
          const location = getSubjectLocation(subject);
          return (
            <div key={i} className={recentStyles.subject}>
<<<<<<< HEAD
              <div />
              <OutboundLink href="https://www.zooniverse.org">{image}</OutboundLink>
=======
              <img src={location.src} />
              <span>{subject.id}</span>
>>>>>>> Display Recent Subjects
            </div>
          );
        })}
      </div>
      <button className='hollow-button'>
        <OutboundLink href='https://www.galaxyzoo.org'>more recent galaxies</OutboundLink>
      </button>
    </div>
);

Recent.defaultProps = {
  subjects: []
}

Recent.propTypes = {
  subjects: PropTypes.arrayOf(PropTypes.object)
}

export default Recent;
