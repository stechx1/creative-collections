import { Button } from "antd";
import React from "react";

import { Colors } from "../config/Colors";
import { Container, Row } from "react-bootstrap";
const BottomSection = () => {
  return (
    // /"url(images/cro.png),linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.3))",

    <Row
      style={{
        backgroundImage: "url(images/cro.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "600px",
        backgroundPosition: "center center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h1
        className="bottomText"
        style={{
          color: "white",

          fontWeight: "bolder",
          letterSpacing: "2px",
        }}
      >
        COMING SOON
      </h1>

      <p style={{ color: "white", fontSize: "16px" }}>
        We are crowdfunding! All contributions will help us to introduce our
        full-platform to you even sooner.
      </p>
      <a
        href="https://ifundwomen.com/projects/are-you-ready-begin-your-creative-journey "
        target="_blank"
      >
        <Button
          style={{
            height: "50px",
            borderRadius: "25px",
            width: "220px",
            backgroundColor: Colors.main,
            borderColor: Colors.main,
            marginTop: "35px",
          }}
          type="primary"
        >
          CONTRIBUTE
        </Button>
      </a>
    </Row>
  );
};

export default BottomSection;
