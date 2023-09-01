import React, { Fragment, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Row, Col, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Colors } from "../../config/Colors";

const HomeNav = ({ urlContainsNftMarketplace }) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <Fragment>
      <Row style={{ width: "100%" }}>
        <Col xs={20} sm={19} lg={4} md={20}>
          <Link to="/">
            <img
              className="navlogo"
              alt="logo"
              height="80px"
              src="/images/logo.png"
            />
          </Link>
        </Col>
        <Col className="hidemob" xs={8} sm={5} lg={2} md={3}>
          <a
            style={{
              color: urlContainsNftMarketplace ? Colors?.main : "white",
            }}
            href="https://www.c8cstudio.com/"
            target="_blank"
          >
            Home
          </a>
        </Col>
        <Col className="hidemob" xs={8} sm={5} lg={4} md={3}>
          <a
            style={{
              color: urlContainsNftMarketplace ? Colors?.main : "white",
            }}
            href="https://c8cstudio-vr.com/c8cstudios"
            target="_blank"
          >
            C8C VR (Desktop)
          </a>
        </Col>
        <Col className="hidemob" xs={8} sm={5} lg={4} md={3}>
          <a
            style={{
              color: urlContainsNftMarketplace ? Colors?.main : "white",
            }}
            href="https://www.c8cstudio.com/product-page/cre8tive-collective-vr"
            target="_blank"
          >
            C8C VR (Meta Quest 2)
          </a>
        </Col>

        <Col className="hidemob" xs={8} sm={5} lg={4} md={3}>
          <Link
            style={{
              color: urlContainsNftMarketplace ? Colors?.main : "white",
            }}
            to="/nftmarketplace"
          >
            Virtual Collections
          </Link>
        </Col>
        <Col className="hidemob" xs={8} sm={4} lg={2} md={3}>
          <a
            className="navlink"
            style={{
              color: urlContainsNftMarketplace ? Colors?.main : "white",
              fontWeight: "500",
            }}
            href="https://www.c8cstudio.com/plans-pricing"
            target="_blank"
          >
            Sign Up
          </a>
          {/* <Link className="navlink" to="/register">
            Register
          </Link> */}
          {/* <Button
            style={{
              height: "34px",
              borderRadius: "6px",
            }}
            type="primary"
            onClick={showDrawer}
          >
            <MenuOutlined />
          </Button> */}
        </Col>
        <Col className="hidemob" xs={8} sm={4} lg={2} md={3}>
          <a
            className="navlink"
            href="https://www.c8cstudio.com"
            target="_blank"
          >
            <Button
              style={{
                height: "34px",
                borderRadius: "6px",
                width: "110px",
                backgroundColor: Colors.main,
                borderColor: Colors.main,
              }}
              type="primary"
            >
              Log In
            </Button>
          </a>
        </Col>

        <Col className="hideweb" xs={4} sm={4} lg={2} md={3}>
          <Button
            style={{
              height: "34px",
              borderRadius: "6px",
              backgroundColor: Colors.main,
              borderColor: Colors.main,
            }}
            type="primary"
            onClick={showDrawer}
          >
            <MenuOutlined />
          </Button>
        </Col>
      </Row>
      <Drawer title="C8cstudio" placement="right" onClose={onClose} open={open}>
        <div>
          <a
            className="navlink"
            style={{ color: "black", fontWeight: "500" }}
            href="https://www.c8cstudio.com"
            target="_blank"
          >
            Home
          </a>{" "}
        </div>
        <br />
        <a
          className="navlink"
          style={{ color: "black", fontWeight: "500" }}
          href="https://www.c8cstudio.com/plans-pricing"
          target="_blank"
        >
          Signup
        </a>
        <br />
        <a
          className="navlink"
          href="https://www.c8cstudio.com"
          target="_blank"
          style={{
            color: "black",
            fontWeight: "500",
            display: "inline-block",
            marginTop: "20px",
          }}
        >
          Login
        </a>
        <br />
        <a
          className="navlink"
          href="https://www.c8cstudio.com/product-page/cre8tive-collective-vr"
          target="_blank"
          style={{
            color: "black",
            fontWeight: "500",
            display: "inline-block",
            marginTop: "20px",
          }}
        >
          C8C VR (Meta Quest 2)
        </a>
        <br />
        <a
          className="navlink"
          href="https://c8cstudio-vr.com/c8cstudios"
          target="_blank"
          style={{
            color: "black",
            fontWeight: "500",
            display: "inline-block",
            marginTop: "20px",
          }}
        >
          C8C VR (Desktop)
        </a>
        <br />
        <Link
          style={{
            color: "black",
            fontWeight: "500",
            display: "inline-block",
            marginTop: "20px",
          }}
          to="/nftmarketplace"
        >
          Virtual Collections
        </Link>
      </Drawer>
    </Fragment>
  );
};

export default HomeNav;
