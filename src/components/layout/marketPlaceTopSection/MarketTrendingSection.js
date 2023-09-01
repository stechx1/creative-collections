import React, { useState } from "react";
import Swal from "sweetalert2";
import { BUYNFT, updateNFTWallet } from "../../../config/Api";
import { metamaskconnect, web3Data } from "../../connectors";
import { useWeb3React } from "@web3-react/core";
import { KEYS } from "../../../config/Keys";
import { Col, Container, Row } from "react-bootstrap";
import HomeMint from "../../../assets/homeback.png";
import { Colors } from "../../../config/Colors";
import MarketLargeCard from "./MarketLargeCard";
import MarketSmallCard from "./MarketSmallCard";

const MarketTrendingSection = ({ trending }) => {
  const [loader, setLoader] = useState({ status: false, message: "" });
  const [data, setData] = useState([]);

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
      title: "Are you sure to purchase this collectibl?",
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
      <Row style={{ padding: "8% 2% 2% 2%" }}>
        <h4 style={{ color: Colors.main, fontWeight: "bold" }}>
          Trending Collection
        </h4>
      </Row>
      <Row>
        <Col xs={12} sm={4} style={{ padding: "2%" }}>
          <Row style={{ paddingLeft: "3%" }}>
            <Col xs={12} style={{ padding: "2%" }}>
              <MarketLargeCard
                buyNFT={buyNFT}
                item={trending[0]}
                account={account}
              />
            </Col>
          </Row>
        </Col>
        <Col
          xs={12}
          sm={8}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div className="row" style={{ padding: "2% 4% 0% 4%" }}>
            {trending.slice(1).map((item, i) => (
              <div key={i} className="col-md-6 col-lg-6">
                <MarketSmallCard
                  buyNFT={buyNFT}
                  item={item}
                  account={account}
                />
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MarketTrendingSection;
