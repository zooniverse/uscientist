import React from "react";
import Data from "../components/data";
import statsClient from "panoptes-client/lib/stats-client";
import apiClient from "panoptes-client/lib/api-client";
import { config } from "../config";

class RecentData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      retiredCount: 0,
      tableCount: 0,
      totalDaily: 0
    };
  }

  componentDidMount() {
    this.setRetiredCount();
    this.setTotalCount();
    this.setTableCount();
  }

  setRetiredCount() {
    apiClient.type("projects").get({ id: config.projectID })
      .then(([project]) => {
        if (project && project.retired_subjects_count) {
          this.setState({ retiredCount: project.retired_subjects_count });
        }
      });
  }

  setTotalCount() {
    statsClient
      .query({
        projectID: config.projectID,
        period: "day",
        type: "classification"
      })
      .then((data) => {
        const mostRecentCount = data[data.length - 1];
        if (mostRecentCount && mostRecentCount.doc_count) {
          this.setState({ totalDaily: mostRecentCount.doc_count });
        }
      })
  }

  setTableCount() {
    statsClient
      .query({
        workflowID: config.tableWorkflowID,
        period: "day",
        type: "classification"
      })
      .then((data) => {
        const mostRecentCount = data[data.length - 1];
        if (mostRecentCount && mostRecentCount.doc_count) {
          this.setState({ tableCount: mostRecentCount.doc_count });
        }
      })
  }

  render() {
    return (
      <Data
        retiredCount={this.state.retiredCount}
        tableCount={this.state.tableCount}
        totalDaily={this.state.totalDaily}
      />
    );
  }
}

export default RecentData;
