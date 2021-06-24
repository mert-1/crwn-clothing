import React from "react";

const Form = ({ children, title, label, ...otherProps }) => (
  <div className="w-100 p-5" style={{ maxWidth: "50rem" }}>
    <h2>{title}</h2>
    <span>{label}</span>
    {children}
  </div>
);

export default Form;
