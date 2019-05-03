import React from "react"
import PropTypes from "prop-types"
import { config } from "../config";
import subjectStyles from "./subjects.module.css"
import { getSubjectLocation } from "../lib/get-subject-location"

const Subjects = ({ project, subjects }) => (
    <div className={subjectStyles.container}>
      <h3 className='sub-header'>Recent galaxies</h3>
      <span className='descriptor'>
        People just like you have been classifying galaxies from U!Scientist at
        the Adler as well as online on Galaxy Zoo.
      </span>
      <div className={subjectStyles.subjects}>
        {subjects.map((subject, i) => {
          const location = getSubjectLocation(subject);
          return (
            <div key={i} className={subjectStyles.subject}>
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
        <a href='https://www.galaxyzoo.org'>see more at galaxyzoo.org</a>
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
