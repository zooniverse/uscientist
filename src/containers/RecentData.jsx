import React from "react";
import PropTypes from "prop-types"
import Data from "../components/data";
import statsClient from "panoptes-client/lib/stats-client";
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
    this.setTotalCount();
    this.setTableCount();
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
        retiredCount={this.props.retiredCount}
        tableCount={this.state.tableCount}
        totalDaily={this.state.totalDaily}
      />
    );
  }
}

RecentData.defaultProps = {
  retiredCount: 0
}

RecentData.propTypes = {
  retiredCount: PropTypes.number
}

export default RecentData;
