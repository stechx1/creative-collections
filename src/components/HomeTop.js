import { Button } from "antd";
import React from "react";
import HomeBack from "../assets/homeback.png";
import { Colors } from "../config/Colors";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const HomeTop = () => {
  return (
    <Row>
      <div
        style={{
          width: "100%",
          height: "100vh",
          zIndex: "1",
          padding: "0",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            width: "100%",
            height: "100vh",
          }}
        >
          <img
            src={HomeBack + "?auto=compress"}
            style={{
              width: "100%",
              height: "100vh",
              objectFit: "cover",
            }}
          ></img>
        </div>
      </div>
      <div
        className="translate"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="homeText1"> </h1>

        <h1 className="homeText3"> </h1>
        {/* <a href="https://www.c8cstudio-vr.com/login" target="_blank">
          {" "}
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
            Home
          </Button>
        </a> */}

        <Link to="/create-collectible">
          {" "}
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
            Create Collectible
          </Button>
        </Link>
      </div>
    </Row>
  );
};

export default HomeTop;
