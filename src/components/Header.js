import React from "react";
import logo from "../static/logo.png";

export default () => {
  return (
    <div className="w-full bg-white h-12 fixed z-10">
      <img className="mx-auto w-20" src={logo} alt="PJBF Logo" />
    </div>
  );
};
