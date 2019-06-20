import React from "react"
import PropTypes from "prop-types"
import apiClient from "panoptes-client/lib/api-client"
import talkClient from 'panoptes-client/lib/talk-client'
import Subjects from "../components/subjects"
import { config } from "../config"

class RecentSubjects extends React.Component {
  constructor(props) {
    super(props);

    this.subjectQueue = [];
    this.state = {
      subjects: []
    }

    this.getSubject = this.getSubject.bind(this);
  }

  componentDidMount() {
    this.getTalkSubjects();
    this.interval = setInterval(() => this.setSubjects(), 15000);
  }

  componentWillReceiveProps(next) {
    if (this.props.newestClassification !== next.newestClassification) {
      this.getSubject(next.newestClassification.subject_ids[0])
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  setSubjects() {
    const subjects = this.subjectQueue.slice().concat(this.state.subjects);
    const threeSubjects = subjects.slice(0,3);
    this.setState({ subjects: threeSubjects });
    this.subjectQueue = [];
  }

  getTalkSubjects() {
    talkClient.type('comments').get({ section: `project-${config.projectID}`, page_size: 10, sort: '-created_at', focus_type: 'Subject' })
      .then((comments) => {
        if (comments.length > 0) {
          const subjectIds = comments.map(x => x.focus_id);
          const uniqueSubjects = subjectIds.filter((el, i, arr) => { return arr.indexOf(el) === i; });
          uniqueSubjects.splice(3, 7);
          apiClient.type('subjects').get(uniqueSubjects)
            .then((subjects) => {
              this.setState({ subjects });
            });
        }
      }).catch(error => console.error(error));
  }

  getSubject(id) {
    apiClient.type("subjects").get({ id })
      .then(([subject]) => {
        this.subjectQueue.unshift(subject);
      })
      .catch((e) => { console.log("Subject Fetch Error:", e) })
  }

  render() {
    return (
      <Subjects
        project={this.props.project}
        subjects={this.state.subjects}
      />
    );
  }
}

RecentSubjects.defaultProps = {
  newestClassification: null,
  project: null
}

RecentSubjects.propTypes = {
  newestClassification: PropTypes.shape(),
  project: PropTypes.shape({
    slug: PropTypes.string
  })
}

export default RecentSubjects;
