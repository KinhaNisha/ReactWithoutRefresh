// CustomInput.js
import React from 'react';

const CustomInput = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomInput;
