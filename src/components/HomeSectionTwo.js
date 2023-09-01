import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

import HomeCard from "../assets/homecard.png";
import { Colors } from "../config/Colors";
const HomeSectionTwo = () => {
  return (
    <Fragment>
      <Row style={{ textAlign: "center", padding: "0% 4% 0% 4%" }}>
        <img src={HomeCard} width="100%" className="homecard"></img>
      </Row>
      <Row style={{ textAlign: "center", padding: "4% 4% 0% 4%" }}>
        <p
          className="welcometext2 webhidetext2"
          style={{
            marginBottom: "7px",
          }}
        >
          The future of <span style={{ color: Colors.main }}>Web3</span> and{" "}
          <span style={{ color: Colors.main }}>Commerce</span> is shifting
          towards digitization. With
          <span style={{ color: Colors.main }}> NFTs</span> being the connective
          tissue binding them together,{" "}
          <span style={{ color: Colors.main }}>
            where is the marketplace to facilitate this change?
          </span>{" "}
          <p>
            No matter who you are - gamer, collector, artist -
            <span style={{ color: Colors.main }}>
              {" "}
              participating in any digital marketplace can have tremendous
              rewards.
            </span>
          </p>
        </p>
        <p className="welcometext2 webhidetext2">
          <span style={{ fontWeight: "bold" }}>
            Will we see you in the Metaverse?
          </span>
        </p>
        <p
          className="welcometext2 mobilehidetext2"
          style={{
            marginBottom: "7px",
          }}
        >
          The future of <span style={{ color: Colors.main }}>Web3</span> and{" "}
          <span style={{ color: Colors.main }}>Commerce</span> is shifting
          towards digitization. With
          <span style={{ color: Colors.main }}> NFTs</span> being the
        </p>

        <p className="welcometext2 mobilehidetext2">
          connective tissue binding them together,{" "}
          <span style={{ color: Colors.main }}>
            where is the marketplace to facilitate this change?
          </span>
        </p>
        <p className="welcometext2 mobilehidetext2">
          No matter who you are - gamer, collector, artist -
          <span style={{ color: Colors.main }}>
            {" "}
            participating in any digital marketplace can have tremendous
            rewards.
          </span>
        </p>
        <p className="welcometext2 mobilehidetext2">
          {" "}
          {/*  platform for creative artists to{" "} */}
        </p>
        <p className="welcometext2 mobilehidetext2">
          <span style={{ fontWeight: "bold" }}>
            Will we see you in the Metaverse?
          </span>
        </p>
      </Row>
    </Fragment>
  );
};

export default HomeSectionTwo;
