import React, { Component } from "react";
import { Link } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";

// MUI
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    display: "flex",
    marginBottom: 20
  },
  content: {
    padding: 25
  }
};

class Customer extends Component {
  render() {
    const {
      classes,
      customer: { address, customerId, name, phoneNum }
    } = this.props;
    return (
      <Card className={classes.card}>
        {this.props.customer.length ? (
          <CardContent className={classes.content}>
            <Typography
              variant="h5"
              color="primary"
              component={Link}
              to={`/customer/${customerId}`}
            >
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              ID: {customerId}{" "}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Address: {address}{" "}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Phone Number: {phoneNum}
            </Typography>
          </CardContent>
        ) : (
          <Typography>Customer Not Found</Typography>
        )}
      </Card>
    );
  }
}

export default withStyles(styles)(Customer);
