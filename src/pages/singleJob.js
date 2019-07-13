import React from "react";
import { connect } from "react-redux";
import { getJob } from "../redux/actions/dataActions";

// components
import Job from "../components/Job";

export class singleJob extends React.Component {
  componentDidMount() {
    const jobId = this.props.match.params.id;
    this.props.getJob(jobId);
  }

  render() {
    const job = this.props.job;
    console.log(job);

    let singleJobMarkup = this.props.job ? <Job job={job} /> : <p>Loading..</p>;

    return <div>{singleJobMarkup}</div>;
  }
}

const mapStateToProps = state => ({
  job: state.data.job
});

export default connect(
  mapStateToProps,
  { getJob }
)(singleJob);
