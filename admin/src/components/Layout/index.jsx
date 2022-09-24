import React from "react";
import { Container } from "react-bootstrap";
import Header from "../Header";
import Sidebar from "../Sidebar";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Container>{props.children}</Container>
    </div>
  );
};

export default Layout;
