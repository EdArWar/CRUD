import React from "react";
import { Outlet } from "react-router-dom";
import MenuNavbar from "../components/navbar/MenuNavbar";
import LayoutModals from "./LayoutModals";

const Layout = () => {
  return (
    <>
      <MenuNavbar />
      <Outlet />
      <LayoutModals />
    </>
  );
};

export default Layout;
