import { Button } from "antd";

import HomeMint from "../../assets/homeback.png";

import { Colors } from "../../config/Colors";
import { Container, Row } from "react-bootstrap";
import { useWeb3React } from "@web3-react/core";
import Swal from "sweetalert2";
import { metamaskconnect, web3Data } from "../connectors";
import { KEYS } from "../../config/Keys";
import React, { Fragment, useState } from "react";

import { Spin, Pagination, Image } from "antd";

import { useEffect } from "react";
import {
  BUYNFT,
  GetNFTs,
  GetNFTsMarketPlace,
  updateNFTWallet,
} from "../../config/Api";
import MarketTopSection from "./marketPlaceTopSection/MarketTopSection";
import MarketTrendingSection from "./marketPlaceTopSection/MarketTrendingSection";

const NFTMarketPlace = () => {
  const [datahere, setdatahere] = useState(false);
  const [loader, setLoader] = useState({ status: false, message: "" });
  const [data, setData] = useState([]);
  const [trending, setTrending] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // current page
  const pageSize = 6;
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
  useEffect(() => {
    const FetchItems = async () => {
      setLoader({ status: true, message: "Fetching Items" });

      const res = await GetNFTsMarketPlace();
      const response = await res.json();
      console.log(response.result);
      // setData(response.result);
      if (response.type === "success") {
        if (response?.result.length <= 5) {
          setData(response.result);
        } else {
          setTrending(response?.result.slice(0, 5));
          setData(response.result.slice(5));
        }
        setdatahere(true);
        setLoader({ status: false, message: "" });
      } else {
        setLoader({ status: false, message: "" });
      }
    };

    FetchItems();
  }, []);
  const { active, account, library, connector, activate, deactivate, chainId } =
    useWeb3React();
  const dataConnect = async () => {
    const dataMeta = await metamaskconnect();
    const chainIDwallet = await web3Data.eth.getChainId();
    if (chainIDwallet !== KEYS.chainID) {
      return Swal.fire({
        customClass: {
          cancelButton: "customswalcancel",
        },

        html: "<b>How to Add Cronos Network in Metamask wallet</b><br/> <p>Go to Custom RPC in wallet and Add</p><p> Network Name : Cronos</p><p>New RPC URL : https://evm-cronos.crypto.org</p><p> ChainID : 25</p>",
        title: "Change Network to Cronos",
        icon: "error",
        showCancelButton: true,
        cancelButtonText: "Ok",
        showConfirmButton: false,
        cancelButtonColor: Colors.main,
      });
    }
    await activate(dataMeta);

    // const chainIDwallet = await web3Data.eth.getChainId();
  };

  const buyNFT = (id, amount, nftid) => {
    Swal.fire({
      title: "Are you sure to purchase this collectible?",
      // text: "You will be logged out of this session",
      //   icon: "warning",
      showCancelButton: true,
      confirmButtonColor: Colors.main,
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then(async (result) => {
      if (result.isConfirmed) {
        if (active === false) {
          return Swal.fire({
            text: "Connect your wallet first",
            title: "Error",
            icon: "error",
            showCancelButton: false,
            confirmButtonColor: Colors.main,
            confirmButtonText: "ok",
          });
        }

        setLoader({ status: true, message: "Fetching Items" });

        const buynft = await BUYNFT(account, amount, nftid, library);
        // const buynft = true;
        if (buynft === false) {
          setLoader({ status: false, message: "Fetching Items" });
          return Swal.fire({
            text: "Buy NFT failure",
            title: "Error",
            icon: "error",
            showCancelButton: false,
            confirmButtonColor: Colors.main,
            confirmButtonText: "ok",
          });
        }

        const dataSend = {
          id: id,
          wallet: account,
          blockHash: buynft.blockHash,
        };
        setLoader({ status: true, message: "Fetching Items" });
        const response = await updateNFTWallet(dataSend);
        const data = await response.json();
        setLoader({ status: false, message: "Fetching Items" });
        if (response.status === 200) {
          setData(data.result);
          Swal.fire({
            text: "",
            title: "Purchase successful!",
            icon: "success",
            showCancelButton: false,
            confirmButtonColor: Colors.main,
            confirmButtonText: "Horraay!",
          });
        }
      }
    });
  };
  return (
    <Container fluid>
      {/* <Row>
        <div
          style={{
            width: "100%",
            height: "70vh",
            zIndex: "1",
            padding: "0",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              width: "100%",
            }}
          >
            <img
              src={HomeMint}
              style={{
                width: "100%",
                height: "70vh",
                objectFit: "cover",
              }}
            ></img>
          </div>
        </div>
        <div
          className="translatemint"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ color: Colors.main }} className="homeTextmint">
            Marketplace{" "}
          </h1>
          <div className="paddingTextmint">
            {active == false ? (
              <Button
                onClick={() => dataConnect()}
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
                Connect Wallet
              </Button>
            ) : (
              <p
                style={{
                  borderRadius: "25px",
                  color: "white",
                  padding: "15px",
                  backgroundColor: Colors.main,
                  borderColor: Colors.main,
                  marginTop: "35px",
                  textAlign: "center",
                  display: "flex",
                  wordBreak: "break-all",
                }}
              >
                {account}
              </p>
            )}
          </div>
        </div>
      </Row> */}
      {console.log(data)}
      <MarketTopSection />
      {loader.status === false ? (
        <>
          {data.length > 0 ? (
            <>
              {/* <MarketTrendingSection trending={trending} /> */}
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
                                wordWrap: "break-word",
                              }}
                            >
                              <span style={{ color: Colors.main }}>
                                Price :
                              </span>{" "}
                              {item.price} CRO <br />
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
                                  onClick={() =>
                                    buyNFT(item._id, item.price, item.nftID)
                                  }
                                >
                                  Buy
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </div>
            </>
          ) : (
            <div className="row" style={{ padding: "2% 4% 0% 4%" }}>
              {datahere ? (
                <div className="col">
                  <h3
                    className="blogTextav"
                    style={{ textAlign: "center", marginBottom: "75px" }}
                  >
                    No virtual collections available in marketplace
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
    </Container>
  );
};

export default NFTMarketPlace;
