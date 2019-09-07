import React, { useState } from "react";

const InputField = ({
  label,
  defaultState,
  placeholder = "",
  type = "text"
}) => {
  const [state, setState] = useState(defaultState);
  const id = `use-field-${label.replace(" ", "").toLowerCase()}`;

  return (
    <label htmlFor={id}>
      {label}:
      <input
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        value={state}
        onChange={e => setState(e.target.value)}
      />
    </label>
  );
};

export default InputField;
