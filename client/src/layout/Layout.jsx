import React from "react";
import { Outlet } from "react-router-dom";
import SignInModal from "../components/modal/signIn/SignInModal";
import MenuNavbar from "../components/navbar/MenuNavbar";
import LayoutModals from "./LayoutModals";

const Layout = () => {
  return (
    <>
      <MenuNavbar />
      <Outlet />
      <SignInModal />
      <LayoutModals />
    </>
  );
};

export default Layout;
