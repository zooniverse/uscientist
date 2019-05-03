import React from "react"
import Recent from "../components/recent"
import Pusher from "pusher-js"
import apiClient from "panoptes-client/lib/api-client"
import { config } from "../config"

class RecentSubjects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subjects: []
    }

    this.getSubject = this.getSubject.bind(this);
    this.processClassification = this.processClassification.bind(this);
  }

  componentDidMount() {
    const pusher = new Pusher('79e8e05ea522377ba6db', {encrypted: true});
    const channel = pusher.subscribe('panoptes');
    channel.bind('classification', this.processClassification);
  }

  getSubject(id) {
    const subjects = this.state.subjects.slice();
    apiClient.type("subjects").get({ id })
      .then(([subject]) => {
        console.log(subject);
        subjects.unshift(subject);
        const threeSubjects = subjects.slice(0,3);
        console.log(subjects);
        this.setState({ subjects: threeSubjects });
      })
  }

  processClassification(classification) {
    if (classification.project_id === config.projectID) {
      this.getSubject(classification.subject_ids[0])
    }
  }

  render() {
    return (
      <Recent subjects={this.state.subjects} />
    );
  }
}

export default RecentSubjects;
