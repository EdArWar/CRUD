import React from "react";
import { Link, useMatch } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch(to);
  return (
    <Link
      to={to}
      {...props}
      style={{
        color: match ? "aqua" : "white",
        textDecoration: "none",
        margin: "0px 5px",
      }}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
