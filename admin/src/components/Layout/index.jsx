import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <div className="d-flex">
        <Sidebar />
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;
