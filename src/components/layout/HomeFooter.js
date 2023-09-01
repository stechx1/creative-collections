import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import yt from "../../assets/youtube.png";
import fb from "../../assets/facebook.png";
import insta from "../../assets/insta.png";
import twitter from "../../assets/twitter.png";

const HomeFooter = () => {
  return (
    <Container>
      <Row>
        <Col md={4}></Col>
        <Col md={4} style={{ textAlign: "center" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <a href="https://www.facebook.com/c8cstudio" target="_blank">
              {" "}
              <img height="70px" width="70px" src={fb}></img>
            </a>
            <a
              href="https://twitter.com/c8cstudio?s=20&t=qkzZIYSAOIxJBlNw05RwUQ"
              target="_blank"
            >
              <img height="70px" width="70px" src={twitter}></img>{" "}
            </a>
            <a href="https://www.instagram.com/c8cstudio/" target="_blank">
              <img height="70px" width="70px" src={insta}></img>{" "}
            </a>
            <a
              href="https://www.youtube.com/channel/UCTjR7UF7mspG1mBqtEB1BJQ"
              target="_blank"
            >
              <img height="70px" width="70px" src={yt}></img>{" "}
            </a>
          </div>
          <p style={{ color: "white" }}>770.629.0661</p>
          <p style={{ color: "white" }}>info@c8cstudio.com</p>
        </Col>
        <Col md={4}></Col>
      </Row>
      <Row>
        <hr
          style={{
            background: "#FFFFFF",
            color: "#FFFFFF",
            borderColor: "#FFFFFF",
            height: "2px",
          }}
        />
      </Row>
      <Row style={{ textAlign: "center" }}>
        <p style={{ color: "#FFFFFF", fontSize: "11px" }}>
          © 2023 Cre8tive Collective, C8C STUDIO LLC.{" "}
          <a style={{ color: "#FFFFFF", textDecoration: "underline" }} href="/">
            {" "}
            Privacy Policy.
          </a>
        </p>
      </Row>
    </Container>
  );
};

export default HomeFooter;
