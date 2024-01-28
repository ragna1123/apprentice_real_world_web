import React from "react";

export default function FromInput(props) {
  const { type, placeholder, value, onChange} = props;
  return (
    <fieldset className="form-group">
      <input
        className="form-control form-control-lg"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </fieldset>
  );
}
