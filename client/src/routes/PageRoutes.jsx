import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "../hoc/RequireAuth";
import CreatePage from "../pages/createPage/CreatePage";
import HomePage from "../pages/homePage/HomePage";
import PostDetails from "../pages/postDetails/PostDetails";
import { globalSel } from "../store/global";
import Layout from "./../layout/Layout";
import NotFoundPage from "./../pages/404/NotFoundPage";

const PageRoutes = () => {
  const isAuth = useSelector(globalSel.isAuth);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route
          path="create"
          element={
            <RequireAuth>
              <CreatePage />
            </RequireAuth>
          }
        />
        <Route path="posts/:id" element={<PostDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default PageRoutes;
