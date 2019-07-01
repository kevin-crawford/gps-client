import React from "react";
import { connect } from "react-redux";
import { getJob } from "../redux/actions/dataActions";

// components
import Job from "../components/Job";

export class CustomerPage extends React.Component {
  componentDidMount() {
    const jobId = this.props.match.params.id;
    this.props.getJob(jobId);
  }

  render() {
    return <Job job={this.props.job} />;
  }
}

const mapStateToProps = state => ({
  job: state.data.job
});
export default connect(
  mapStateToProps,
  { getJob }
)(CustomerPage);
