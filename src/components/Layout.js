import React from "react";
import Header from "./Header";

export default ({ children }) => {
  return (
    <>
      <Header />
      <div className="pt-12 max-w-2xl mx-auto">{children}</div>
    </>
  );
};
