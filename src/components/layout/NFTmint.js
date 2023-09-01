import { Button, Input, TextArea } from "antd";
import React, { Fragment, useState, useEffect } from "react";
import HomeMint from "../../assets/mint.png";
import MintUpload from "../../assets/upload.png";
import PerviewUpload from "../../assets/upload2.png";
import { Colors } from "../../config/Colors";
import { Col, Container, Row } from "react-bootstrap";
import { create } from "ipfs-http-client";
import { metamaskconnect, web3Data } from "../connectors";
import { useWeb3React } from "@web3-react/core";
import { KEYS } from "../../config/Keys";
import Swal from "sweetalert2";
import axios from "axios";
import { Buffer } from "buffer";
import { CreateNFT } from "../../config/Api";
import NFTshow from "../NFTshow";
import web3 from "web3";
import useCheckMobileScreen from "../CheckMobile";

const CONTRACT_ADDRESS = KEYS.contractAddress;
const CONTRACT_ABI = KEYS.CONTRACT_ABI;
const NFTmint = () => {
  const [file, setFile] = useState(null);
  const CM = useCheckMobileScreen();
  const [tab, setTab] = useState("upload");
  const [perviewImage, setPerviewImage] = useState(null);
  const [perviewImage2, setPerviewImage2] = useState(null);
  const [type, setType] = useState("");
  const [nfttype, setNFTTYPE] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [file2, setFile2] = useState(null);
  const [nft, setNFTID] = useState(null);

  const [loading, setLoading] = useState(false);
  const { active, account, library, connector, activate, deactivate, chainId } =
    useWeb3React();
  const projectId = KEYS.projectIdinfura; // <---------- your Infura Project ID

  const projectSecret = KEYS.projectSecret; // <---------- your Infura Secret
  // (for security concerns, consider saving these values in .env files)

  const auth =
    "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");

  // const client = create({ url: "https://ipfs.infura.io:5001" });
  const client = create({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
    headers: {
      authorization: auth,
    },
  });

  const sendTransaction = async () => {
    if (active == false) {
      return Swal.fire({
        customClass: {
          cancelButton: "customswalcancel",
        },
        text: "",
        title: "Connect wallet first",
        icon: "error",
        showCancelButton: true,
        cancelButtonText: "Ok",
        showConfirmButton: false,
        cancelButtonColor: Colors.main,
      });
    }
    if (type !== "image" && perviewImage === null) {
      return Swal.fire({
        customClass: {
          cancelButton: "customswalcancel",
        },
        text: "",
        title: "Preview image is required",
        icon: "error",
        showCancelButton: true,
        cancelButtonText: "Ok",
        showConfirmButton: false,
        cancelButtonColor: Colors.main,
      });
    }
    if (file === null && type === "image") {
      return Swal.fire({
        customClass: {
          cancelButton: "customswalcancel",
        },
        text: "",
        title: "Files are required",
        icon: "error",
        showCancelButton: true,
        cancelButtonText: "Ok",
        showConfirmButton: false,
        cancelButtonColor: Colors.main,
      });
    }
    if (name == "" || desc == "") {
      return Swal.fire({
        customClass: {
          cancelButton: "customswalcancel",
        },
        text: "",
        title: "Fill all fields correctly",
        icon: "error",
        showCancelButton: true,
        cancelButtonText: "Ok",
        showConfirmButton: false,
        cancelButtonColor: Colors.main,
      });
    }

    try {
      setLoading(true);
      if (nfttype === "video" || nfttype === "audio") {
        console.log("audio");
        const formData = new FormData();
        // console.log(file2);
        formData.append("file", file2);

        const resFilefile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: `2fe0658d5b1b423f4612`,
            pinata_secret_api_key: `a9639ee359648aa93c8fb539eb48fd1f3f70ed67bf1dfc78a6267e4779f4f727`,
            "Content-Type": "multipart/form-data",
          },
        });

        const formDataimage = new FormData();
        // console.log(file2);

        formDataimage.append("file", perviewImage2);
        const resFileImage = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formDataimage,
          headers: {
            pinata_api_key: `2fe0658d5b1b423f4612`,
            pinata_secret_api_key: `a9639ee359648aa93c8fb539eb48fd1f3f70ed67bf1dfc78a6267e4779f4f727`,
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(resFilefile.data.IpfsHash);
        console.log(resFileImage.data.IpfsHash);
        var ipfsFIle = `https://gateway.pinata.cloud/ipfs/${resFilefile.data.IpfsHash}`;
        var ipfsImage = `https://gateway.pinata.cloud/ipfs/${resFileImage.data.IpfsHash}`;

        let datas = JSON.stringify({
          name: name,
          description: desc,
          image: ipfsImage,
          file: ipfsFIle,
        });
        const cider = await client.add(datas);
        var ipfsPath = `ipfs://${cider.path}`;
        console.log(ipfsPath);
        const contactList = new library.eth.Contract(
          CONTRACT_ABI,
          CONTRACT_ADDRESS
        );
        console.log(contactList);
        const counter = await contactList.methods
          .mint(ipfsPath, account, KEYS.ownerWallet)
          .send({
            from: account,
            to: CONTRACT_ADDRESS,
            value: web3.utils.toWei(KEYS.Fee, "ether"),
          });
        if (counter.events.Minted.returnValues.nftID) {
          let values = {
            wallet: account,
            nft: ipfsPath,
            nftID: counter.events.Minted.returnValues.nftID,
            nftAddress: CONTRACT_ADDRESS,
            file: {
              image: ipfsImage,
              file: ipfsFIle,
              name: name,
              description: desc,
            },
          };
          var response = await CreateNFT(values);
          const data = await response.json();
          if (data.type === "success") {
            Swal.fire({
              title: "Collectible successfully created!",
              confirmButtonText: "Ok",
              allowOutsideClick: false,
              confirmButtonColor: Colors.main,
              customClass: {
                confirmButton: "customswalcancel",
              },
            });
          }
          setNFTID(counter.events.Minted.returnValues.nftID);
          setFile(null);
          setFile2(null);
          setPerviewImage(null);
          setPerviewImage2(null);
          setName("");
          setDesc("");
          setLoading(false);
        }
      } else {
        const formData = new FormData();
        console.log(file2);
        console.log("image");
        formData.append("file", file2);
        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: `2fe0658d5b1b423f4612`,
            pinata_secret_api_key: `a9639ee359648aa93c8fb539eb48fd1f3f70ed67bf1dfc78a6267e4779f4f727`,
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(resFile.data.IpfsHash);
        // const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
        // const ipfsHash = "QmcjNGoEuJ1tYphSpuQzWxwr6nkaa3uJUJF1DpL1oTjUY4";
        var ipfs = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
        console.log(ipfs);
        let datas = JSON.stringify({
          name: name,
          description: desc,
          image: ipfs,
        });
        const cider = await client.add(datas);
        var ipfsPath = `ipfs://${cider.path}`;
        console.log(ipfsPath);

        const contactList = new library.eth.Contract(
          CONTRACT_ABI,
          CONTRACT_ADDRESS
        );
        console.log(contactList);
        const counter = await contactList.methods
          .mint(ipfsPath, account, KEYS.ownerWallet)
          .send({
            from: account,
            to: CONTRACT_ADDRESS,
            value: web3.utils.toWei(KEYS.Fee, "ether"),
          });
        console.log(counter);
        console.log(counter.events.Minted.returnValues.nftID);
        if (counter.events.Minted.returnValues.nftID) {
          let values = {
            wallet: account,
            nft: ipfsPath,
            nftID: counter.events.Minted.returnValues.nftID,
            nftAddress: CONTRACT_ADDRESS,
            file: { image: ipfs, name: name, description: desc },
          };
          var response = await CreateNFT(values);
          const data = await response.json();
          if (data.type === "success") {
            Swal.fire({
              title: "Collectible successfully created!",
              confirmButtonText: "Ok",
              allowOutsideClick: false,
              confirmButtonColor: Colors.main,
              customClass: {
                confirmButton: "customswalcancel",
              },
            });
          }
          setNFTID(counter.events.Minted.returnValues.nftID);
          setFile(null);
          setFile2(null);
          setName("");
          setDesc("");
          setLoading(false);
        }
      }
    } catch (error) {
      console.log("Error sending File to IPFS: ");
      console.log(error);
      setLoading(false);
    }

    return;
  };

  useEffect(() => {
    if (loading && loading === true) {
      window.onbeforeunload = function () {
        return true;
      };
    } else {
      window.onbeforeunload = null;
    }
  }, [loading]);
  const data = async () => {
    // if (CM == true) {
    //   return Swal.fire({
    //     customClass: {
    //       cancelButton: "customswalcancel",
    //     },

    //     html: "<p>Open website in metamask wallet or open webiste in Laptop or Destktop</p>",
    //     title: "Metamask",
    //     icon: "error",
    //     showCancelButton: true,
    //     cancelButtonText: "Ok",
    //     showConfirmButton: false,
    //     cancelButtonColor: Colors.main,
    //   });
    // }
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
  const ImageUploadPerview = (e) => {
    {
      console.log(e.target.files[0]);

      if (e.target.files[0]) {
        if (e.target.files[0].type.split("/")[0] !== "image") {
          return Swal.fire({
            customClass: {
              cancelButton: "customswalcancel",
            },
            text: "",
            title: "Upload only PNG file or JPG file",
            icon: "error",
            showCancelButton: true,
            cancelButtonText: "Ok",
            showConfirmButton: false,
            cancelButtonColor: Colors.main,
          });
        }
        setPerviewImage(URL.createObjectURL(e.target.files[0]));
        setPerviewImage2(e.target.files[0]);
      } else {
        setPerviewImage(null);
        setPerviewImage2(null);
      }
    }
  };
  const FileUpload = (e) => {
    console.log(e.target.files[0]);
    if (e.target.files[0]) {
      if (e.target.files[0].type.split("/")[0] == "image") {
        setType("image");
      } else {
        setType("notImage");
        setNFTTYPE(e.target.files[0].type.split("/")[0]);
      }

      setFile(URL.createObjectURL(e.target.files[0]));
      setFile2(e.target.files[0]);
    } else {
      setFile(null);
      setFile2(null);
    }
  };
  const handleDisconnect = () => {
    // Disconnect the wallet
    deactivate();
  };
  return (
    <Fragment>
      <Container fluid>
        <Row>
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
            <h1 className="homeTextmint">VIRTUAL COLLECTIONS </h1>

            <div className="paddingTextmint">
              {active == false ? (
                <Button
                  onClick={() => data()}
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
                <>
                  <div style={{ display: "flex" }}>
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
                    <Button
                      className="hidemob"
                      onClick={() => handleDisconnect()}
                      style={{
                        height: "50px",
                        marginLeft: "10px",
                        borderRadius: "25px",
                        width: "220px",
                        backgroundColor: Colors.main,
                        borderColor: Colors.main,
                        marginTop: "35px",
                      }}
                      type="primary"
                    >
                      Disconnect Wallet
                    </Button>
                  </div>
                </>
              )}
            </div>
            {active == true ? (
              <Button
                className="hideweb"
                onClick={() => handleDisconnect()}
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
                Disconnect Wallet
              </Button>
            ) : null}

            <Button
              style={{
                height: "50px",
                borderRadius: "25px",
                width: "220px",
                backgroundColor: Colors.main,
                borderColor: Colors.main,
                marginTop: "35px",
              }}
              onClick={() => {
                tab === "upload" ? setTab("view") : setTab("upload");
              }}
              type="primary"
            >
              {tab == "upload" ? (
                <>View Collectibles</>
              ) : (
                <>Create Collectible</>
              )}
            </Button>
            {CM == true ? (
              <p style={{ textAlign: "center", marginTop: "10px" }}>
                Use Google Chrome to add the Metamask extension and connect your
                cryptocurrency wallet to the Cronos network.
              </p>
            ) : null}
          </div>
        </Row>
        {tab == "upload" ? (
          <Row style={{ padding: "2% 4% 4% 4%" }}>
            <Col md={0} sm={0} lg={2}></Col>
            <Col sm={12} md={12} lg={8}>
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginBottom: "5px",
                }}
              >
                Upload File
              </p>

              <label htmlFor="upload-button">
                {file != null ? (
                  <>
                    {type === "image" ? (
                      <>
                        <img
                          src={file}
                          alt="img"
                          width="100%"
                          style={{ objectFit: "contain" }}
                          className="mintImageUpload"
                        />
                        <label
                          style={{
                            borderRadius: "25px",
                            backgroundColor: Colors.main,
                            borderColor: Colors.main,
                            marginTop: "35px",
                            color: "white",
                            padding: "10px 25px",
                            cursor: "pointer",
                          }}
                          htmlFor="upload-button"
                          type="primary"
                        >
                          Replace File
                        </label>
                      </>
                    ) : (
                      <>
                        <video
                          className={
                            nfttype == "audio" ? "audioinput" : "videoinput"
                          }
                          width="100%"
                          controls
                          src={file}
                        />
                        <label
                          style={{
                            borderRadius: "25px",
                            backgroundColor: Colors.main,
                            borderColor: Colors.main,
                            margin: "35px 0px",
                            color: "white",
                            padding: "10px 25px",
                            cursor: "pointer",
                          }}
                          htmlFor="upload-button"
                          type="primary"
                        >
                          Replace File
                        </label>
                      </>
                    )}
                  </>
                ) : (
                  <img
                    src={MintUpload}
                    alt="img"
                    style={{ objectFit: "contain" }}
                    className="mintImage"
                  />
                )}
              </label>
              <Input
                onChange={(e) => {
                  FileUpload(e);
                }}
                style={{ width: "80%", display: "none" }}
                id="upload-button"
                type="file"
              ></Input>
              {type === "notImage" ? (
                <>
                  <p
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      marginBottom: "5px",
                    }}
                  >
                    Upload Preview Image
                  </p>
                  <label htmlFor="upload-button-preview">
                    {perviewImage != null ? (
                      <>
                        <img
                          src={perviewImage}
                          alt="img"
                          width="100%"
                          height="250px"
                          style={{ objectFit: "contain" }}
                        />
                        <label
                          style={{
                            borderRadius: "25px",
                            backgroundColor: Colors.main,
                            borderColor: Colors.main,
                            margin: "35px 0px",
                            color: "white",
                            padding: "10px 25px",
                            cursor: "pointer",
                          }}
                          htmlFor="upload-button-preview"
                          type="primary"
                        >
                          Replace File
                        </label>
                      </>
                    ) : (
                      <img
                        src={PerviewUpload}
                        alt="img"
                        style={{ objectFit: "contain" }}
                        className="mintImage"
                      />
                    )}
                  </label>
                  <Input
                    onChange={(e) => ImageUploadPerview(e)}
                    style={{ width: "80%", display: "none" }}
                    id="upload-button-preview"
                    type="file"
                  ></Input>
                </>
              ) : null}
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  paddingTop: "2%",
                }}
              >
                Title
              </p>
              <Input
                className="nftinput"
                placeholder="e.g.   “C8C VR Collectibles“"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
                style={{
                  width: "100%",
                  borderTop: "none",
                  borderRight: "none",
                  borderLeft: "none",
                  borderBottomColor: "#ABABAB",
                }}
                type="text"
              />
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  paddingTop: "2%",
                }}
              >
                Description
              </p>
              <Input.TextArea
                placeholder="Description of Collectible"
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
                value={desc}
                style={{
                  width: "100%",
                  borderTop: "none",
                  borderRight: "none",
                  borderLeft: "none",
                  borderBottomColor: "#ABABAB",
                }}
                type="text"
              />
              <Row
                style={{
                  width: "100%",
                  gap: "20px",
                  display: "flex",
                  alignItems: "center",
                  paddingTop: "4%",
                }}
                className="flexButton"
              >
                <Button
                  style={{
                    height: "34px",
                    borderRadius: "6px",
                    width: "220px",
                    backgroundColor: Colors.main,
                    borderColor: Colors.main,
                  }}
                  loading={loading}
                  type="primary"
                  onClick={() => sendTransaction()}
                >
                  Create Collectible
                </Button>{" "}
                <a
                  href="https://www.c8cstudio-vr.com/login"
                  target="_blank"
                  style={{
                    height: "34px",
                    borderRadius: "6px",
                    width: "220px",
                    color: Colors.main,
                    borderColor: Colors.main,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: `1px solid ${Colors.main}`,
                  }}
                  type="default"
                >
                  Publish to VR Gallery
                </a>
                {nft !== null ? (
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    Address: {CONTRACT_ADDRESS}
                    <br />
                    NFT ID : {nft}
                  </div>
                ) : null}
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {loading === true ? (
                    <p style={{ color: "red", marginTop: "15px" }}>
                      Do not close or refresh the browser
                    </p>
                  ) : (
                    false
                  )}
                </div>
              </Row>
            </Col>

            <Col sm={0} md={0} lg={2}></Col>
          </Row>
        ) : (
          <>
            {account ? (
              <NFTshow account={account} library={library} />
            ) : (
              <h1
                style={{
                  color: Colors.main,
                  fontFamily: "poppins",
                  fontSize: "46px",
                  textAlign: "center",
                  padding: "3%",
                }}
              >
                Connect Your Wallet
              </h1>
            )}
          </>
        )}
      </Container>
    </Fragment>
  );
};

export default NFTmint;
