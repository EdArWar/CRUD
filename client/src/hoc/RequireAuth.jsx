import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router";
import { globalSel } from "../store/global";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const isAuth = useSelector(globalSel.isAuth);

  if (!isAuth) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
};

export default RequireAuth;
