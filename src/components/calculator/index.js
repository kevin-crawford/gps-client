import React, { useState } from "react";
import calculatePoolVolume from "./calculateHelper";

// MUI
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const styles = {
  form: {
    textAlign: "center",
    backgroundColor: "lightblue"
  },
  formControl: {
    margin: 10
  },
  group: {
    margin: 10,
    display: "flex"
  },
  input: {
    backgroundColor: "white"
  },
  image: {
    margin: "20px auto 20px auto"
  },
  pageTitle: {
    margin: "10px auto 10px auto"
  },
  textField: {
    margin: "10px auto 10px auto"
  },
  button: {
    marginTop: 20
  },
  customError: {
    color: "red",
    fontSize: "0.8rem"
  }
};

const Calculator = props => {
  const [result, updateResult] = useState(0);
  const [width, updateWidth] = useState(0);
  const [width2, updateWidth2] = useState(0);
  const [length, updateLength] = useState(0);
  const [depth, updateDepth] = useState(0);
  const [shape, updateShape] = useState("squareOrRectangle");

  function submitForm(...args) {
    updateResult(calculatePoolVolume(length, width, width2, depth, shape));
  }

  function handleChange(event) {
    updateShape(event.target.value);
  }

  const { classes } = props;
  return (
    <Grid container>
      <Grid item sm />
      <Grid item sm>
        <form
          className={classes.form}
          onSubmit={e => {
            e.preventDefault();
            submitForm(length, width, width2, depth, shape);
          }}
        >
          <h1>Calculator</h1>
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            className={classes.group}
            value={shape}
            onChange={handleChange}
          >
            <FormControlLabel
              value="squareOrRectangle"
              control={<Radio />}
              label="Square"
              color="primary"
            />
            <FormControlLabel
              value="circle"
              control={<Radio />}
              label="Circle"
            />
            <FormControlLabel
              value="kidney"
              control={<Radio />}
              label="Kidney"
            />
          </RadioGroup>
          <TextField
            type="number"
            id="pool-length"
            value={length}
            label="Length(ft)"
            onChange={e => updateLength(e.target.value)}
          />
          {(shape === "squareOrRectangle" || shape === "kidney") && (
            <TextField
              type="number"
              id="width"
              value={width}
              label="Width(ft)"
              onChange={e => updateWidth(e.target.value)}
            />
          )}
          {shape === "kidney" && (
            <TextField
              type="number"
              id="width2"
              value={width2}
              label="Width(ft) #2"
              onChange={e => updateWidth2(e.target.value)}
            />
          )}
          <TextField
            type="number"
            id="average-depth"
            value={depth}
            label="Average Depth(ft)"
            onChange={e => updateDepth(e.target.value)}
          />
          <Grid item sm>
            <Button type="submit" color="primary" variant="contained">
              Submit
            </Button>
          </Grid>
        </form>
        <p className="total">Total Gallons: {result}</p>
      </Grid>
      <Grid item sm />
    </Grid>
  );
};

export default withStyles(styles)(Calculator);
