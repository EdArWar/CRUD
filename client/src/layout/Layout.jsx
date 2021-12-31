import React from "react";
import { Outlet } from "react-router-dom";
import SignInModal from "../components/modal/signIn/SignInModal";
import MenuNavbar from "../components/navbar/MenuNavbar";

const Layout = () => {
  return (
    <>
      <MenuNavbar />
      <Outlet />
      <SignInModal />
    </>
  );
};

export default Layout;
