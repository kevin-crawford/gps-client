import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import { convertDate } from "../util/datetimeHelper";
import { withRouter } from "react-router";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";

const useStyles = makeStyles({});

export function MaterialUIPickers(props) {
  // The first commit of Material-UI
  let dateFromURL = props.match.params.date;
  let dateForState = dateFromURL.replace(/-/g, "/");

  const [selectedDate, setSelectedDate] = React.useState(
    new Date(dateForState)
  );

  const classes = useStyles();

  function handleDateChange(date) {
    let formattedDate = convertDate(date.toString());
    setSelectedDate(date);
    handlePageLoad(formattedDate);
  }

  const handlePageLoad = date => {
    props.history.push(`/jobs/${date}`);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container className={classes.grid} justify="space-around">
        <KeyboardDatePicker
          margin="normal"
          id="mui-pickers-date"
          label="Date picker"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="mui-pickers-time"
          label="Time picker"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change time"
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}

export default withRouter(MaterialUIPickers);
