import React from "react";

const Input = ({ value, onChange, type, name, label, error }) => {
  return (
    <div className="form-group">
      <label htmlFor="name" className="mb-2 mt-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="form-control"
        placeholder={`enter your  ${name}`}
      />
      {error && <p className="text-danger">{error}</p>}
    </div>
  );
};

export default Input;
