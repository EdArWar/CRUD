import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import MenuNavbar from "../components/navbar/MenuNavbar";
import UserInfoPanel from "../components/userInfoPanel/UserInfoPanel";
import { userSel } from "../store/user";
import LayoutModals from "./LayoutModals";

const Layout = () => {
  const userInfoPanel = useSelector(userSel.userInfoPanel);

  return (
    <>
      <MenuNavbar />
      <CSSTransition
        in={userInfoPanel}
        timeout={1000}
        classNames="my-node"
        unmountOnExit
      >
        <UserInfoPanel />
      </CSSTransition>
      <Outlet />
      <LayoutModals />
    </>
  );
};

export default Layout;
