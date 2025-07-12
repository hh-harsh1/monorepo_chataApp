import React from "react";

interface Proptype {
  placeholder: string;
  onChange: () => void;
}

export const Input = ({ placeholder, onChange }: Proptype) => {
  return (
    <input
      placeholder={placeholder}
      onChange={onChange}
      type="text"
      style={{
        height: "20px",
        borderColor: "black",
        borderWidth: 1,
      }}
    ></input>
  );
};

export default Input;
