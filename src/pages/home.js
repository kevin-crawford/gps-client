import React, { Component } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";

export class home extends Component {
  state = {
    customers: null
  };
  componentDidMount() {
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
  }

  render() {
    let customerMarkup = this.state.customers ? (
      this.state.customers.map(customer => <p>{customer.name}</p>)
    ) : (
      <p>Loading</p>
    );
    return (
      <Grid container spacing={10}>
        <Grid item sm={8} xs={12}>
          {}
        </Grid>
        <Grid item sm={4} xs={12}>
          {customerMarkup}
        </Grid>
      </Grid>
    );
  }
}

export default home;
