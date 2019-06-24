import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

//images
import gpsLogo from "../images/favicon.ico";
import pool360Logo from "../images/360logo.png";
import pepLogo from "../images/pepLogo.png";
import pentairLogo from "../images/pentairLogo.png";

// MUI STUFF
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import ListSubheader from "@material-ui/core/ListSubheader";
import InfoIcon from "@material-ui/icons/Info";

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden"
  },
  gridList: {
    width: 500,
    height: 450,
    margin: "auto !important"
  },
  title: {
    color: "#FFFFFF"
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  },
  login: {
    margin: "auto",
    width: 300,
    "& Button": {
      margin: "auto"
    }
  }
};

export class home extends Component {
  render() {
    const {
      classes,
      user: { loading, authenticated }
    } = this.props;

    const tileData = [
      {
        image: pool360Logo,
        title: "Pool 360",
        href: "https://pool360.poolcorp.com/",
        styles: {
          maxWidth: 100 + "%"
        }
      },
      {
        image: pentairLogo,
        title: "Pentair Rebates",
        href: "https://www.pentairpartners.com/register/default.aspx",
        styles: {
          maxWidth: 100 + "%"
        }
      },
      {
        image: pepLogo,
        title: "PEP Website",
        href: "https://www.pentairpartners.com/register/default.aspx",
        styles: {
          maxWidth: 100 + "%"
        }
      },
      {
        image: gpsLogo,
        title: "Garys Pool Supplies",
        href: "https://www.garyspoolsupplies.com/",
        styles: {
          margin: "20px 20px 20px 45px"
        }
      }
    ];

    return (
      <div className="root">
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
            <ListSubheader component="div">Useful Links</ListSubheader>
          </GridListTile>
          {tileData.map(tile => (
            <GridListTile key={tile.image}>
              <a href={tile.href}>
                <img src={tile.image} alt={tile.title} style={tile.styles} />
              </a>
              <GridListTileBar
                title={tile.title}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${tile.title}`}
                    className={classes.icon}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
        {!authenticated && (
          <div className={classes.login}>
            <Button
              className={classes.login}
              variant="contained"
              color="primary"
              component={Link}
              to="/login"
            >
              Employee Login
            </Button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(withStyles(styles)(home));
