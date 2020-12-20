import React from "react";
import "./style.css";

// This component exports both the List and ListItem components

export const List = ({ children }) => (
  <ul className="list-group bg-dark text-light">
    {children}
  </ul>
);

export function ListItem({ children }) {
  return <li className="list-group-item bg-dark text-light">{children}</li>;
}
