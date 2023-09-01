import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

import HomeDetail from "../assets/homedetail.png";
import { Colors } from "../config/Colors";
const HomeSectionOne = () => {
  return (
    <Fragment>
      <Row style={{ textAlign: "center" }}>
        <h1
          className="welcometext"
          style={{
            color: Colors.main,
            fontFamily: "poppinsbold",
            marginBottom: "7px",
          }}
        >
          WELCOME VISIONARY
        </h1>

        <p
          className="welcometext1 mobilehide"
          style={{
            marginBottom: "7px",
          }}
        >
          Cre8tive Collective VR will help power creatives to bring their inner
          world into VR. A full-fledged
        </p>
        <p className="welcometext1 mobilehide">
          platform for creative artists to{" "}
          <span style={{ color: Colors.main, fontWeight: "bold" }}>
            learn, earn, explore, exhibit and collaborate.
          </span>
        </p>

        <p
          className="welcometext1 webhide"
          style={{
            marginBottom: "7px",
          }}
        >
          Cre8tive Collective VR will help power creatives to bring their inner
          world into VR. A full-fledged platform for creative artists to{" "}
          <span style={{ color: Colors.main, fontWeight: "bold" }}>
            learn, earn, explore, exhibit and collaborate.
          </span>
        </p>
      </Row>
      <Row>
        <Col
          xs={{ order: "last", span: "12" }}
          sm={{ order: "first", span: "6" }}
          style={{
            padding: "4%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <p
            className="apktext"
            style={{
              color: Colors.main,

              fontWeight: "bolder",
              letterSpacing: "2px",
              marginBottom: "7px",
            }}
          >
            Install APK
          </p>
          <p
            style={{
              fontSize: "16px",
            }}
          >
            Visit our parent website,&nbsp;
            <a href="https://www.c8cstudio.com" target="_blank">
              www.c8cstudio.com
            </a>
            ,&nbsp;to download and install the FREE beta of Cre8tive Collective
            VR. Grab your Meta Quest 2 headset, build a custom avatar and begin
            your creative journey into the Metaverse!
          </p>
        </Col>
        <Col
          sm={{ order: "last", span: "6" }}
          xs={{ order: "first", span: "12" }}
          style={{ padding: "4%" }}
        >
          <img
            src={HomeDetail}
            width="100%"
            style={{ objectFit: "contain" }}
            className="homedetailimage"
          ></img>
        </Col>
      </Row>
    </Fragment>
  );
};

export default HomeSectionOne;
