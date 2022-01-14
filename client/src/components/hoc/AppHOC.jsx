import React from "react";
import AlertProviderHooks from "./../hooks/AlertProviderHooks";

const AppHOC = ({ children }) => {
  return <AlertProviderHooks>{children}</AlertProviderHooks>;
};

export default AppHOC;
