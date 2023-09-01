import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import { Colors } from "../config/Colors";
import HomeWriter from "../assets/writer.png";
import HomePhoto from "../assets/photo.png";
import HomeMusic from "../assets/music.png";
import HomeDancer from "../assets/dancer.png";
import HomePainter from "../assets/painter.png";
import HomeGallery from "../assets/gallery.png";
import HomeActor from "../assets/actor.png";
import { Button } from "antd";

const HomeSectionThree = () => {
  return (
    <Fragment>
      <Row style={{ padding: "2% 4% 0% 4%" }}>
        <Col
          sm={{ order: "first", span: "6" }}
          xs={{ order: "last", span: "12" }}
        >
          <img
            src={HomeWriter}
            width="100%"
            style={{ objectFit: "contain", padding: "10%" }}
          ></img>
        </Col>
        <Col
          xs={{ order: "first", span: "12" }}
          sm={{ order: "last", span: "6" }}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <p className="suitetitle">Writers Suite</p>
          <p className="suitedesc">
            Try a writer's experience in VR with us! Share your current ideas to
            network with peers or enter a breakout room solo or with friends, to
            brainstorm your next story magic.
          </p>
        </Col>
      </Row>
      <Row style={{ padding: "0% 4% 0% 4%" }}>
        <Col
          xs={12}
          sm={6}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <p className="suitetitle">Photography Suite</p>
          <p className="suitedesc">
            Camera lovers, come ready to network and practice your lighting and
            angle skills on a VR functional digital camera when you select a
            preferred model and backdrop for a virtual photoshoot session.
          </p>
        </Col>
        <Col xs={12} sm={6}>
          <img
            src={HomePhoto}
            width="100%"
            style={{ objectFit: "contain", padding: "10%" }}
          ></img>
        </Col>
      </Row>
      <Row
        style={{
          padding: "0% 4% 0% 4%",
        }}
      >
        <Col
          sm={{ order: "first", span: "6" }}
          xs={{ order: "last", span: "12" }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <img
            src={HomeMusic}
            width="100%"
            style={{ objectFit: "contain", padding: "10% 10% 5% 10%" }}
          ></img>
          {/* <Button
            style={{
              height: "40px",
              borderRadius: "6px",
              width: "150px",
              backgroundColor: Colors.main,
              borderColor: Colors.main,
            }}
            type="primary"
          >
            Enter
          </Button> */}
        </Col>
        <Col
          sm={{ order: "last", span: "6" }}
          xs={{ order: "first", span: "12" }}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <p className="suitetitle">Musicians Suite</p>
          <p
            style={{
              color: "#FF360A",
              fontSize: "16px",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            NOW AVAILABE IN BETA
          </p>
          <p className="suitedesc">
            This room is for all the music lovers! Enter to select an instrument
            and create your own original mixes. Start a live jam session in the
            main room or invite selected user(s) to share and create audio in
            the breakout room!
          </p>
        </Col>
      </Row>
      <Row style={{ padding: "0% 4% 2% 4%" }}>
        <Col
          xs={12}
          sm={6}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <p className="suitetitle">Dancers Suite</p>
          <p className="suitedesc">
            Dance fever, anyone? Visit our dance room studio for follow-along
            routines of various genres, with a simulated dance instructor!
          </p>
        </Col>
        <Col xs={12} sm={6}>
          <img
            src={HomeDancer}
            width="100%"
            style={{ objectFit: "contain", padding: "10%" }}
          ></img>
        </Col>
      </Row>
      <Row style={{ padding: "0% 4% 2% 4%" }}>
        <Col
          sm={{ order: "first", span: "6" }}
          xs={{ order: "last", span: "12" }}
        >
          <img
            src={HomePainter}
            width="100%"
            style={{ objectFit: "contain", padding: "10%" }}
          ></img>
        </Col>
        <Col
          sm={{ order: "last", span: "6" }}
          xs={{ order: "first", span: "12" }}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <p className="suitetitle">Painters Suite</p>
          <p className="suitedesc">
            Our painter's room is a VR crowd favorite. Invite a friend to
            collaborate on an art piece or create your own painted masterpiece!
          </p>
        </Col>
      </Row>
      <Row style={{ padding: "0% 4% 0% 4%" }}>
        <Col
          xs={12}
          sm={6}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <p className="suitetitle">Actors Suite</p>
          <p className="suitedesc">
            Want to try out your acting skills in VR? Enter this room to network
            with peers and practice scene development with monologue and improv
            pieces.
          </p>
        </Col>
        <Col xs={12} sm={6}>
          <img
            src={HomeActor}
            width="100%"
            style={{ objectFit: "contain", padding: "10%" }}
          ></img>
        </Col>
      </Row>
      <Row
        style={{
          padding: "0% 4% 0% 4%",
        }}
      >
        <Col
          sm={{ order: "first", span: "6" }}
          xs={{ order: "last", span: "12" }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <img
            src={HomeGallery}
            width="100%"
            style={{ objectFit: "contain", padding: "10% 10% 5% 10%" }}
          ></img>
        </Col>
        <Col
          sm={{ order: "last", span: "6" }}
          xs={{ order: "first", span: "12" }}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <p className="suitetitle">Community Gallery</p>
          <p
            style={{
              color: "#FF360A",
              fontSize: "16px",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            NOW AVAILABE IN BETA
          </p>
          <p className="suitedesc">
            Invite friends and family to visit our virtual art
            gallery/marketplace and browse all user-created content in an unique
            immersive experience. Join us to upload your creative work and
            create your own virtual collectibles to have available for purchase!
          </p>
        </Col>
      </Row>
    </Fragment>
  );
};

export default HomeSectionThree;
