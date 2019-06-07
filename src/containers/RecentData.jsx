import React from "react";
import PropTypes from "prop-types"
import Data from "../components/data"
import statsClient from "panoptes-client/lib/stats-client";
import { config } from "../config"

class RecentData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalTableClassifications: 0,
      totalProjectClassifications: 0
    };
  }

  componentDidMount() {
    this.setTotalCount();
    this.settotalTableClassifications();
  }

  setTotalCount() {
    statsClient
      .query({
        projectID: config.projectID,
        period: "year",
        type: "classification"
      })
      .then((data) => {
        let totalProjectClassifications = 0;
        data.map(year => totalProjectClassifications += year.doc_count);
        this.setState({ totalProjectClassifications });
      })
  }

  settotalTableClassifications() {
    statsClient
      .query({
        workflowID: config.tableWorkflowID,
        period: "day",
        type: "classification"
      })
      .then((data) => {
        const mostRecentCount = data[data.length - 1];
        if (mostRecentCount && mostRecentCount.doc_count) {
          this.setState({ totalTableClassifications: mostRecentCount.doc_count });
        }
      })
  }

  render() {
    return (
      <Data
        retiredCount={this.props.retiredCount}
        totalTableClassifications={this.state.totalTableClassifications}
        totalProjectClassifications={this.state.totalProjectClassifications}
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
