import React from "react";
import { Outlet } from "react-router-dom";
import MenuNavbar from "../components/navbar/MenuNavbar";

const Layout = () => {
  return (
    <>
      <MenuNavbar />
      <Outlet />
    </>
  );
};

export default Layout;
