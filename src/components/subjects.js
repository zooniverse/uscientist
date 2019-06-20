import React from "react"
import PropTypes from "prop-types"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { config } from "../config"
import subjectStyles from "./subjects.module.css"
import { getSubjectLocation } from "../lib/get-subject-location"

const Subjects = ({ project, subjects }) => (
    <div className={subjectStyles.container}>
      <h3 className='sub-header'>Recent galaxies</h3>
      <span className='descriptor'>
        Check out some of the galaxies that have been classified both on
        U!Scientist at the Adler Planetarium and online on
        <OutboundLink className="peach-link" href="https://www.galaxyzoo.org">Galaxy Zoo.</OutboundLink>
      </span>
      <div className={subjectStyles.subjects}>
        {subjects.map((subject, i) => {
          const location = getSubjectLocation(subject);
          return (
            <div key={i} className={subjectStyles.subject}>
              <img alt="Recently Classified Galaxy" src={location.src} />
              <OutboundLink
                href={`${config.root}projects/${project.slug}/talk/subjects/${subject.id}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                subject ID: {subject.id}
              </OutboundLink>
            </div>
          );
        })}
      </div>
      <button className='hollow-button'>
        <OutboundLink href='https://www.galaxyzoo.org'>More Recent Galaxies</OutboundLink>
      </button>
    </div>
);

Subjects.defaultProps = {
  project: null,
  subjects: []
}

Subjects.propTypes = {
  project: PropTypes.shape({
    slug: PropTypes.string
  }),
  subjects: PropTypes.arrayOf(PropTypes.object)
}

export default Subjects;
