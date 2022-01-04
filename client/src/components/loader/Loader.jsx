import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-bg">
      <h3>Loading...</h3>
      <div className="loader">
        <span></span>
      </div>
    </div>
  );
};

export default Loader;
