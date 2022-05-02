import React from "react";
import { Card, Col, Row, Divider } from "antd";
import "antd/dist/antd.css";
import "./estilo.css";
import { Layout, Menu, Breadcrumb } from "antd";

import Cards from "../../components/basicCards";
import Rodape from "../../components/Footer/index";

const { Header, Content, Footer } = Layout;
const style = { background: "#0092ff", padding: "8px 0", margin: "1px 0 0 0" };

export default () => (
  <Layout className="container">
    <Header
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]} />
    </Header>
    <Content
      className="site-layout"
      style={{
        padding: "0 50px",
        marginTop: 64,
      }}
    >
      <div
        style={{
          margin: "26px 0",
        }}
      ></div>
      <div
        className="site-layout-background"
        style={{
          padding: 24,
          minHeight: 510,
        }}
      >
        <Cards />
      </div>
    </Content>
    <Rodape />
  </Layout>
);
