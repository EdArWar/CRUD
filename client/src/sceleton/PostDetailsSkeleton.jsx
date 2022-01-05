import React from "react";
import ContentLoader from "react-content-loader";

const PostDetailsSkeleton = () => {
  return (
    <ContentLoader
      rtl
      speed={2}
      width={"100%"}
      height={"100vh"}
      viewBox="0 0 400 160"
      backgroundColor="#d7cbcb"
      foregroundColor="#ecebeb"
    >
      <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
      <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
      <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
      <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
      <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
      <rect width="178" height="6" />
    </ContentLoader>
  );
};

export default PostDetailsSkeleton;
