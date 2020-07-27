import React from "react";
import Header from "./Header";

export default ({ children }) => {
  return (
    <>
      <Header />
      <div className="pt-12">{children}</div>
    </>
  );
};
