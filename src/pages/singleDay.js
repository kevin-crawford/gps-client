import React, { Component } from "react";

// REDUX
import { connect } from "react-redux";
import { getUserData } from "../redux/actions/userActions";
import { getJobsByDate } from "../redux/actions/dataActions";

// Components
import Profile from "../components/Profile";
import Job from "../components/Job";
import JobCreatorModal from '../components/JobCreatorModal';

//Helper functions
import { formatTime } from "../util/datetimeHelper";

// MUI
import Grid from "@material-ui/core/Grid";

export class singleDay extends Component {
  state = {
    date: this.props.match.params.date,
    time: formatTime()
  };

  componentDidMount() {
    this.props.getJobsByDate(this.state.date);
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps);
    if (this.props.match.params.date !== prevProps.match.params.date) {
      this.setState({
        date: this.props.match.params.date
      });
      this.props.getJobsByDate(this.props.match.params.date);
    }
  }

  render() {
    console.log(this.props.data.jobs);
    // if there is jobs , load jobs, else show a loading indicator
    let jobMarkup = this.props.data.jobs.length ? (
      this.props.data.jobs ? (
        this.props.data.jobs.map((job, index) => <Job key={index} job={job} />)
      ) : (
        <p>Loading..</p>
      )
    ) : (
      <div>No Jobs Found</div>
    );

    return (
      <Grid container spacing={5}>
        <Grid item sm={4} xs={12}>
          <Profile />
          <JobCreatorModal date={this.state.date}/>
        </Grid>
        <Grid item sm={8} xs={12}>
          {jobMarkup}
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  data: state.data
});

export default connect(
  mapStateToProps,
  { getJobsByDate, getUserData }
)(singleDay);
