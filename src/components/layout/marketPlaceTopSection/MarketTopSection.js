import React from "react";
import { Col, Row } from "react-bootstrap";
import HomeMint from "../../../assets/home.PNG";
import { Button } from "antd";
import { Colors } from "../../../config/Colors";
import { metamaskconnect, web3Data } from "../../connectors";
import { useWeb3React } from "@web3-react/core";
import Swal from "sweetalert2";
import { KEYS } from "../../../config/Keys";
import { Link } from "react-router-dom";
const MarketTopSection = () => {
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
  return (
    <Row>
      <Col xs={12} sm={6} style={{ padding: "2%" }}>
        <h1
          style={{ fontWeight: "bolder", paddingLeft: "3%", paddingTop: "12%" }}
        >
          Discover and collect Digital Art NFTs
        </h1>
        <p style={{ paddingLeft: "3%" }}>
          Digital marketplace for non-fungible tokens (NFTs). Buy, Sell, and
          discover exclusive digital assets.
        </p>
        <Row style={{ paddingLeft: "3%" }}>
          <Col xs={12} style={{ padding: "2%" }}>
            <Link to="/create-collectible">
              <Button
                style={{
                  height: "34px",
                  borderRadius: "6px",
                  width: "50%",
                  backgroundColor: Colors.main,
                  borderColor: Colors.main,
                }}
                type="primary"
              >
                Create Collectible
              </Button>
            </Link>
          </Col>
          <Col xs={12} style={{ padding: "2%" }}>
            {active == false ? (
              <Button
                onClick={() => dataConnect()}
                style={{
                  height: "34px",
                  borderRadius: "6px",
                  width: "50%",
                  backgroundColor: Colors.main,
                  borderColor: Colors.main,
                }}
                type="primary"
              >
                Connect Wallet
              </Button>
            ) : (
              <p
                style={{
                  borderRadius: "6px",
                  width: "50%",
                  color: "white",
                  backgroundColor: Colors.main,
                  borderColor: Colors.main,
                  textAlign: "center",
                  display: "flex",
                  wordBreak: "break-all",
                  padding: "12px 6px",
                  fontSize: "9px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                type="primary"
              >
                {account}
              </p>
            )}
          </Col>
        </Row>
      </Col>
      <Col
        xs={12}
        sm={6}
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <img
          style={{ padding: "4% 9% 4% 4%" }}
          src={HomeMint}
          height="auto"
          width="100%"
        ></img>
      </Col>
    </Row>
  );
};

export default MarketTopSection;
