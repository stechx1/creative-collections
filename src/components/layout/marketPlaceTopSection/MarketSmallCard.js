import React, { useState } from "react";

import { Colors } from "../../../config/Colors";
import { Button } from "antd";
import HomeMint from "../../../assets/homeback.png";
import { Col, Row } from "react-bootstrap";

const MarketSmallCard = ({ item, buyNFT, account }) => {
  return (
    <div style={{ padding: "0% 7% 7% 7%" }}>
      <div
        style={{
          border: "1px solid #d9d9d9",
          borderRadius: "12px",
        }}
      >
        <Row>
          <Col xs={6} sm={6}>
            {" "}
            <img
              style={{
                objectFit: "cover",
              }}
              height="130px"
              width="100%"
              src={item?.file?.image}
            ></img>
          </Col>
          <Col xs={6} sm={6}>
            <p
              style={{
                fontSize: "11px",
                color: Colors.main,
                fontFamily: "poppins",
                padding: "6% 6% 0% 6%",
                wordBreak: "break-all",
              }}
            >
              {item.file.name}
            </p>
            <p
              style={{
                fontSize: "11px",
                color: "black",
                fontFamily: "poppins",
                padding: "0% 6% 0% 6%",
                wordWrap: "break-word",
              }}
            >
              <span style={{ color: Colors.main }}>Price :</span> {item.price}{" "}
              CRO <br />
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {item?.wallet === account ? (
                <p
                  style={{
                    color: Colors.main,
                    fontWeight: "bold",
                  }}
                >
                  owner
                </p>
              ) : (
                <Button
                  style={{
                    height: "34px",
                    borderRadius: "6px",
                    marginBottom: "10px",
                    width: "110px",
                    backgroundColor: Colors.main,
                    borderColor: Colors.main,
                  }}
                  type="primary"
                  onClick={() => buyNFT(item._id, item.price, item.nftID)}
                >
                  Buy
                </Button>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MarketSmallCard;
