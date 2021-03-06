import React, { ComponentProps } from "react";
import { Col } from "react-bootstrap";

import { Container, Content, Row } from "./styles";
import Header from "../Header";
import Footer from "../Footer";

export default function Layout({ children }: ComponentProps<"div">) {
  return (
    <Container>
      <Header />
      <Content>
        <Row>
          <Col lg="8">{children}</Col>
        </Row>
      </Content>
      <Footer />
    </Container>
  );
}
