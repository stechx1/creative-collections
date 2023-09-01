import React, { Fragment, useState } from "react";

import { Spin, Pagination, Image } from "antd";
import moment from "moment";

import { useEffect } from "react";
import { GetNFTs, UpdateNFTListingContract, updateNFT } from "../config/Api";
import { Colors } from "../config/Colors";

import { Button, Modal, Form } from "react-bootstrap";
import Swal from "sweetalert2";
const NFTshow = ({ account, library }) => {
  const pageSize = 6;
  const [datahere, setdatahere] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [id, setId] = useState("");
  const [nftID, setNftId] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [loader, setLoader] = useState({ status: false, message: "" });
  const [loader2, setLoader2] = useState({ status: false, message: "" });
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // current page
  const [index, setIndex] = useState({
    min: 0,
    max: pageSize,
  });
  const handleChange = (page) => {
    setCurrentPage(page);
    setIndex({
      min: (page - 1) * pageSize,
      max: page * pageSize,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValue == "" || inputValue < 0) {
      return Swal.fire({
        customClass: {
          cancelButton: "customswalcancel",
        },
        text: "",
        title: "Enter Price Correctly",
        icon: "error",
        showCancelButton: true,
        cancelButtonText: "Ok",
        showConfirmButton: false,
        cancelButtonColor: Colors.main,
      });
    }
    if (!account) {
      return Swal.fire({
        customClass: {
          cancelButton: "customswalcancel",
        },
        text: "",
        title: "Connect your wallet",
        icon: "error",
        showCancelButton: true,
        cancelButtonText: "Ok",
        showConfirmButton: false,
        cancelButtonColor: Colors.main,
      });
    }

    setLoader2({ status: true, message: "Fetching Items" });
    let values = {
      wallet: account,
      id: id,
      statusBuy: true,
      price: inputValue,
    };
    const editNFT = await UpdateNFTListingContract(
      account,
      true,
      parseInt(nftID),
      inputValue,
      library
    );

    if (editNFT === false) {
      setLoader2({ status: false, message: "" });
      return Swal.fire({
        text: "NFT price update failure",
        title: "Error",
        icon: "error",
        showCancelButton: false,
        confirmButtonColor: Colors.main,
        confirmButtonText: "ok",
      });
    }
    const res = await updateNFT(values);
    const response = await res.json();

    if (response.type === "success") {
      setData(response.result);
      setModalShow(false);
      setLoader2({ status: false, message: "" });
    } else {
      setLoader2({ status: false, message: "" });
    }

    setInputValue("");
  };
  useEffect(() => {
    const FetchItems = async () => {
      setLoader({ status: true, message: "Fetching Items" });
      let values = {
        wallet: account,
        statusBuy: true,
        id: id,
        price: inputValue,
      };
      const res = await GetNFTs(values);
      const response = await res.json();

      if (response.type === "success") {
        setData(response.result);
        setdatahere(true);
        setLoader({ status: false, message: "" });
      } else {
        setLoader({ status: false, message: "" });
      }
    };

    FetchItems();
  }, []);

  const unList = async (id) => {
    let values = {
      wallet: account,
      id: id,
      statusBuy: false,
    };
    setLoader({ status: true, message: "Fetching Items" });
    const res = await updateNFT(values);
    const response = await res.json();

    if (response.type === "success") {
      setData(response.result);

      setLoader({ status: false, message: "" });
    } else {
      setLoader({ status: false, message: "" });
    }
  };
  return (
    <>
      <Modal show={modalShow} onHide={() => setModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Sell NFT</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formInput">
              <Form.Label>Enter NFT Price in CRO:</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter price in CRO"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        {loader2.status === false ? (
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setModalShow(false)}>
              Close
            </Button>
            <Button
              style={{
                borderRadius: "6px",
                width: "110px",
                backgroundColor: Colors.main,
                borderColor: Colors.main,
              }}
              type="primary"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Modal.Footer>
        ) : (
          <div
            className="container-fluid"
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              padding: "5%",
            }}
          >
            <Spin style={{ color: Colors.main }} />
          </div>
        )}
      </Modal>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1
              style={{
                color: Colors.main,
                fontFamily: "poppins",
                fontSize: "46px",
                textAlign: "center",
                padding: "3%",
              }}
            >
              Virtual Collectibles
            </h1>
          </div>
        </div>
        {loader.status === false ? (
          <>
            {data.length > 0 ? (
              <div className="row" style={{ padding: "2% 4% 0% 4%" }}>
                {data.map(
                  (item, i) =>
                    i >= index.min &&
                    i < index.max && (
                      <div key={i} className="col-md-6 col-lg-4">
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
                              src={item.file.image}
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
                              {item.file.name}
                            </p>
                            <p
                              style={{
                                fontSize: "0.9rem",
                                color: "black",
                                fontFamily: "poppins",
                                padding: "0% 6% 0% 6%",
                              }}
                              className="textturncatedesc"
                            >
                              {item.file.description}
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
                              <span style={{ color: Colors.main }}>
                                NFT ID :
                              </span>{" "}
                              {item.nftID} <br />
                              <span style={{ color: Colors.main }}>
                                NFT Address :
                              </span>
                              {item.nftAddress}
                            </p>
                            <p
                              style={{
                                fontSize: "0.9rem",
                                color: Colors.main,
                                fontFamily: "poppins",
                                padding: "0% 6% 0% 6%",
                                textAlign: "right",
                              }}
                            >
                              {moment(item.updatedAt).format("MMM DD, YYYY")}
                            </p>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              {" "}
                              {item?.statusBuy !== undefined &&
                              item?.statusBuy === false ? (
                                <Button
                                  onClick={() => {
                                    setId(item?._id);
                                    setNftId(item?.nftID);
                                    setModalShow(true);
                                  }}
                                  style={{
                                    height: "34px",
                                    borderRadius: "6px",
                                    marginBottom: "10px",
                                    width: "110px",
                                    backgroundColor: Colors.main,
                                    borderColor: Colors.main,
                                  }}
                                  type="primary"
                                >
                                  Sell
                                </Button>
                              ) : (
                                <Button
                                  onClick={() => {
                                    unList(item?._id);
                                  }}
                                  style={{
                                    height: "34px",
                                    borderRadius: "6px",
                                    marginBottom: "10px",
                                    width: "110px",
                                    backgroundColor: "red",
                                    borderColor: "red",
                                  }}
                                  type="primary"
                                >
                                  Unlist
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </div>
            ) : (
              <div className="row" style={{ padding: "2% 4% 0% 4%" }}>
                {datahere ? (
                  <div className="col">
                    <h3 className="blogTextav" style={{ textAlign: "center" }}>
                      No virtual collections available
                    </h3>
                  </div>
                ) : null}
              </div>
            )}

            {data.length > 0 ? (
              <Pagination
                showSizeChanger={false}
                current={currentPage}
                total={data.length}
                pageSize={pageSize}
                onChange={handleChange}
                hideOnSinglePage={true}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingBottom: "20px",
                }}
              />
            ) : null}
          </>
        ) : (
          <div
            className="container-fluid"
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              padding: "5%",
            }}
          >
            <Spin style={{ color: Colors.main }} />
          </div>
        )}
      </div>
    </>
  );
};

export default NFTshow;
