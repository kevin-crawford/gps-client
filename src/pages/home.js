import React, { Component } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Customer from '../components/Customer'
import DatePicker from '../components/DatePicker'

export class home extends Component {

  state = {
    customers: null
  };

  componentDidMount() {
  const token = localStorage.FBIdToken;
  if(token) {
      axios
      .get("/customers")
      .then(res => {
        console.log(res.data);
        this.setState({
          customers: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
    } else {
      window.location.href = "/login"
    }
  }



  render() {
    let customerMarkup = this.state.customers ? (
      this.state.customers.map((customer, index) => <Customer key={index} customer={customer} />)
    ) : (
      <p>Loading</p>
    );
    return (
      <Grid container spacing={10}>
        <Grid item sm={8} xs={12}>
        {customerMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          <DatePicker />
        </Grid>
      </Grid>
    );
  }
}

export default home;
