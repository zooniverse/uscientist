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

  getTotalCount(query) {
    return statsClient.query(query)
      .then((data) => {
        let classificationCount = 0;
        data.map(year => classificationCount += year.doc_count);
        return classificationCount;
      })
  }

  setTotalCount() {
    const query = { projectID: config.projectID, period: "year", type: "classification"};
    this.getTotalCount(query).then(totalProjectClassifications => this.setState({ totalProjectClassifications }));
  }

  settotalTableClassifications() {
    const query = { workflowID: config.tableWorkflowID, period: "year", type: "classification"};
    this.getTotalCount(query).then(totalTableClassifications => this.setState({ totalTableClassifications }));
  }

  render() {
    return (
      <Data
        newestClassification={this.props.newestClassification}
        retiredCount={this.props.retiredCount}
        totalTableClassifications={this.state.totalTableClassifications}
        totalProjectClassifications={this.state.totalProjectClassifications}
      />
    );
  }
}

RecentData.defaultProps = {
  newestClassification: null,
  retiredCount: 0
}

RecentData.propTypes = {
  newestClassification: PropTypes.shape(),
  retiredCount: PropTypes.number
}

export default RecentData;
