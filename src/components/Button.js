import React from "react";
import { Link } from "react-router-dom";

export default function Button(props) {
  return (
    <li className={`nav-item me-3 ${props.url === props.pathname ? 'active' : ''}`}>
      <Link to={props.url}
        className="text-decoration-none text-dark fs-5">
        {props.children}
      </Link>
    </li>
  );
}
