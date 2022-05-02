import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb } from "antd";

const { Content, Footer } = Layout;

export default () => (
  <Content
    className="site-layout"
    style={{
      padding: "0 50px",
      marginTop: 64,
    }}
  >
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      SmartFarm ©2022 Created by TecFly
    </Footer>
  </Content>
);
