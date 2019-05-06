import React from "react"
import PropTypes from "prop-types"
import { config } from "../config";
import recentStyles from "./recent.module.css"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { getSubjectLocation } from "../lib/get-subject-location"

const Recent = ({ project, subjects }) => (
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
              <div />
              <OutboundLink href="https://www.zooniverse.org">{image}</OutboundLink>
              <img src={location.src} />
              <img alt="Recently Classified Galaxy" src={location.src} />
              <a
                href={`${config.root}projects/${project.slug}/talk/subjects/${subject.id}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                subject ID: {subject.id}
              </a>
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
  project: null,
  subjects: []
}

Recent.propTypes = {
  project: PropTypes.shape({
    slug: PropTypes.string
  }),
  subjects: PropTypes.arrayOf(PropTypes.object)
}

export default Recent;
