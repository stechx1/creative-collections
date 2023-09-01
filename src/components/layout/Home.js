import { Container, Row, Col } from "react-bootstrap";
import React, { Fragment } from "react";
import HomeDetail from "../../assets/homedetail.png";
import { Colors } from "../../config/Colors";
import HomeTop from "../HomeTop";
import HomeSectionOne from "../HomeSectionOne";
import HomeSectionTwo from "../HomeSectionTwo";
import HomeSectionThree from "../HomeSectionThree";
import BottomSection from "../BottomSection";

const Home = () => {
  return (
    <Fragment>
      <Container fluid>
        <HomeTop />
        <HomeSectionOne />
        <HomeSectionTwo />
        <HomeSectionThree />
        <BottomSection />
      </Container>
    </Fragment>
  );
};

export default Home;
