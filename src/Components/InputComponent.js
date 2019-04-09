import React from "react";

const InputComponent = ({
  label,
  type,
  name,
  placeholder,
  onChange,
  value
}) => {
  return (
    <div>
      <label>{label}</label>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default InputComponent;
