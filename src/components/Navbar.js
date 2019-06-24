import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

//images
import gpsLogo from "../images/favicon.ico";

//material UI
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const styles = {
  companyLogo: {
    width: 100,
    height: 50,
    paddingLeft: 10
  },
  navBar: {
    flexDirection: "row",
    alignItems: "center"
  }
};

export class Navbar extends Component {
  render() {
    const { classes, user: authenticated } = this.props;

    return (
      <AppBar position="fixed" className={classes.navBar}>
        <img src={gpsLogo} alt="company logo" className={classes.companyLogo} />
        <Toolbar className="nav-container">
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          {authenticated && (
            <Button color="inherit" component={Link} to="/jobs">
              Jobs
            </Button>
          )}
          <Button color="inherit" component={Link} to="/calculator">
            Pool Calculator
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});
export default connect(mapStateToProps)(withStyles(styles)(Navbar));
