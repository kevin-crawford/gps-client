import React, { useState, useRef, useEffect } from "react";

const useInput = (label, defaultState, options) => {
  const [state, updateState] = useState(defaultState);

  const inputRef = useRef();
  console.log(inputRef);
  // useEffect(() => {
  //   inputRef.current.focus();
  // });

  const Input = () => (
    <label>
      {label}
      <input
        type="number"
        value={state}
        ref={inputRef}
        onChange={e => updateState(e.target.value)}
      />
    </label>
  );

  return [state, Input, updateState];
};

export default useInput;
