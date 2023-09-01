import React, { useState } from "react";

import { Colors } from "../../../config/Colors";
import { Button } from "antd";
import HomeMint from "../../../assets/homeback.png";

const MarketLargeCard = ({ item, buyNFT, account }) => {
  console.log(item);
  return (
    <div style={{ padding: "0% 7% 7% 7%" }}>
      <div
        style={{
          border: "1px solid #d9d9d9",
          borderRadius: "12px",
        }}
      >
        <img
          style={{
            borderTopLeftRadius: "12px",
            objectFit: "cover",
            borderTopRightRadius: "12px",
          }}
          height="240px"
          width="100%"
          src={item?.file?.image}
        ></img>

        <p
          className="textturncatetitle"
          style={{
            fontSize: "1.2rem",
            color: Colors.main,
            fontFamily: "poppins",
            padding: "6% 6% 0% 6%",
          }}
        >
          {item?.file?.name}
        </p>

        <p
          style={{
            fontSize: "0.9rem",
            color: "black",
            fontFamily: "poppins",
            padding: "0% 6% 0% 6%",
            wordWrap: "break-word",
          }}
        >
          <span style={{ color: Colors.main }}>Price :</span> {item?.price} CRO{" "}
          <br />
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
      </div>
    </div>
  );
};

export default MarketLargeCard;
