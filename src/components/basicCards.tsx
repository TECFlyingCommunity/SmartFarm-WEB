import React from "react";
import { Card, Col, Row, Divider } from "antd";

import { Layout } from "antd";

const { Header, Content, Footer } = Layout;
const style = {};

export default () => (
  <Content className="site-layout" style={{}}>
    <div className="site-layout-background">
      <Divider orientation="left">Conteudo</Divider>
      <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6}>
          <div style={style}>
            <Card
              title="CARD 1"
              extra={<a href="#">Mais</a>}
              style={{ width: 300 }}
            >
              <p>TEXTO 1</p>
              <p>TEXTO 2</p>
              <p>TEXTO 3</p>
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>
            <Card
              title="CARD 2"
              extra={<a href="#">Mais</a>}
              style={{ width: 300 }}
            >
              <p>TEXTO 1</p>
              <p>TEXTO 2</p>
              <p>TEXTO 3</p>
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>
            <Card
              title="CARD 3"
              extra={<a href="#">Mais</a>}
              style={{ width: 300 }}
            >
              <p>TEXTO 1</p>
              <p>TEXTO 2</p>
              <p>TEXTO 3</p>
            </Card>
          </div>
        </Col>
      </Row>

      <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6}>
          <div style={style}>
            <Card
              title="CARD 1"
              extra={<a href="#">Mais</a>}
              style={{ width: 300 }}
            >
              <p>TEXTO 1</p>
              <p>TEXTO 2</p>
              <p>TEXTO 3</p>
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>
            <Card
              title="CARD 2"
              extra={<a href="#">Mais</a>}
              style={{ width: 300 }}
            >
              <p>TEXTO 1</p>
              <p>TEXTO 2</p>
              <p>TEXTO 3</p>
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>
            <Card
              title="CARD 3"
              extra={<a href="#">Mais</a>}
              style={{ width: 300 }}
            >
              <p>TEXTO 1</p>
              <p>TEXTO 2</p>
              <p>TEXTO 3</p>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  </Content>
);
