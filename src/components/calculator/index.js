import React, { useState } from "react";
import calculatePoolVolume from "./calculateHelper";

const Calculator = () => {
  const [result, updateResult] = useState(0);
  const [width, updateWidth] = useState(0);
  const [width2, updateWidth2] = useState(0);
  const [length, updateLength] = useState(0);
  const [depth, updateDepth] = useState(0);
  const [shape, updateShape] = useState("squareOrRectangle");

  function submitForm(...args) {
    updateResult(calculatePoolVolume(length, width, width2, depth, shape));
  }

  return (
    <div className="calculator-container">
      <form
        onSubmit={e => {
          e.preventDefault();
          submitForm(length, width, width2, depth, shape);
        }}
      >
        <h1>Calculator</h1>

        <label>
          Shape:
          <select
            name="shape"
            value={shape}
            onChange={e => updateShape(e.target.value)}
            onBlur={e => updateShape(e.target.value)}
          >
            <option value="squareOrRectangle">Square or Rectangle</option>
            <option value="circular">Circular</option>
            <option value="kidney">Kidney</option>
          </select>
        </label>

        <label>
          Length(ft):
          <input
            type="number"
            id="length"
            value={length}
            onChange={e => updateLength(e.target.value)}
          />
        </label>
        {(shape === "squareOrRectangle" || shape === "kidney") && (
          <label>
            Width(ft):
            <input
              type="number"
              id="width"
              value={width}
              onChange={e => updateWidth(e.target.value)}
            />
          </label>
        )}
        {shape === "kidney" && (
          <label>
            Width(ft) #2:
            <input
              type="number"
              id="width2"
              value={width2}
              onChange={e => updateWidth2(e.target.value)}
            />
          </label>
        )}
        <label>
          Average Depth(ft):
          <input
            type="number"
            id="average-depth"
            value={depth}
            onChange={e => updateDepth(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p className="total">Total Gallons: {result}</p>
    </div>
  );
};

export default Calculator;
