import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return <div className="jumbotron text-info bg-secondary mt-4">{children}</div>;
}

export default Jumbotron;
