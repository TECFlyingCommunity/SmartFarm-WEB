import React from "react";
import { Card, Col, Row } from "antd";
import "antd/dist/antd.css";
import "./estilo.css";
import { Layout, Menu, Breadcrumb } from "antd";

const { Header, Content, Footer } = Layout;

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
        Conteudo
      </div>
    </Content>
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      SmartFarm ©2022 Created by TecFly
    </Footer>
  </Layout>
);
