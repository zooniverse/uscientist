import React from "react";
import PropTypes from "prop-types"
import { GraphQLClient } from 'graphql-request'
import Data from "../components/data"
// import { config } from "../config"

export const statsClient = new GraphQLClient('https://graphql-stats.zooniverse.org/graphql', {
  credentials: 'include',
  mode: 'cors'
});

class RecentData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tableCount: 0,
      totalDaily: 0
    };
  }

  componentDidMount() {
    // this.setTotalCount();
    // this.setTableCount();
    this.fetchGraphQLQuery();
  }

  fetchGraphQLQuery() {
    const query = `{
      statsCount(
        eventType: "classification",
        interval: "1 Day",
        projectId: "5733"
      ){
        period,
        count
      }
    }`

    statsClient.request(query.replace(/\s+/g, ' '))
      .then((result) => {
        console.log(result);
      })
  }

  // setTotalCount() {
  //   statsClient
  //     .query({
  //       projectID: config.projectID,
  //       period: "day",
  //       type: "classification"
  //     })
  //     .then((data) => {
  //       const mostRecentCount = data[data.length - 1];
  //       if (mostRecentCount && mostRecentCount.doc_count) {
  //         this.setState({ totalDaily: mostRecentCount.doc_count });
  //       }
  //     })
  // }
  //
  // setTableCount() {
  //   statsClient
  //     .query({
  //       workflowID: config.tableWorkflowID,
  //       period: "day",
  //       type: "classification"
  //     })
  //     .then((data) => {
  //       const mostRecentCount = data[data.length - 1];
  //       if (mostRecentCount && mostRecentCount.doc_count) {
  //         this.setState({ tableCount: mostRecentCount.doc_count });
  //       }
  //     })
  // }

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
