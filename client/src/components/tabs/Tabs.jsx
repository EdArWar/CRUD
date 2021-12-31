import React, { useEffect } from "react";
import "./Tabs.css";

const Tabs = () => {
  useEffect(() => {
    const navBtns = document.querySelectorAll(".tab_nav li");
    const activeState = document.querySelector(".tab_nav span");
    const updateActiveState = function (e) {
      let selectedEl = e.target;
      let activeEl = document.querySelector(".active");

      if (activeEl !== selectedEl) {
        let width = selectedEl.offsetWidth;
        let position = selectedEl.offsetLeft;

        activeState.style.width = `${width}px`;
        activeState.style.left = `${position}px`;

        activeEl.classList.remove("active");
        selectedEl.classList.add("active");
      }
    };

    for (let i = 0; i < navBtns.length; i++) {
      navBtns[i].addEventListener("click", updateActiveState);
    }
  }, []);

  return <>Tabs</>;
};

export default Tabs;
