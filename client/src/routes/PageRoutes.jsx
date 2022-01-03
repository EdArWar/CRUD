import React from "react";
import { Route, Routes } from "react-router-dom";
import CreatePage from "../pages/createPage/CreatePage";
import HomePage from "../pages/homePage/HomePage";
import PostDetails from "../pages/postDetails/PostDetails";
import Layout from "./../layout/Layout";
import NotFoundPage from "./../pages/404/NotFoundPage";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="create" element={<CreatePage />} />
        <Route path="posts/:id" element={<PostDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default PageRoutes;
