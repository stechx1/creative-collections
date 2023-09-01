import { KEYS } from "./Keys";
import web3 from "web3";
export const CreateNFT = async (values) => {
  const response = await fetch(KEYS.API + "/nft/createnft", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nft: values.nft,
      wallet: values.wallet,
      nftID: values.nftID,
      nftAddress: values.nftAddress,
      file: values.file,
    }),
  });
  return response;
};
export const GetNFTs = async (values) => {
  const response = await fetch(KEYS.API + "/nft/getnfts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      wallet: values.wallet,
    }),
  });
  return response;
};
export const GetNFTsMarketPlace = async (values) => {
  const response = await fetch(KEYS.API + "/nft/getnftsmarketplace", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};
export const updateNFT = async (values) => {
  const response = await fetch(KEYS.API + "/nft/updatenft", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      wallet: values.wallet,
      price: values.price,
      statusBuy: values.statusBuy,
      id: values.id,
    }),
  });
  return response;
};
export const updateNFTWallet = async (values) => {
  const response = await fetch(KEYS.API + "/nft/updatenftwallet", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      wallet: values.wallet,
      blockHash: values.blockHash,
      id: values.id,
    }),
  });
  return response;
};
export const UpdateNFTListingContract = async (
  account,
  onSale,
  nftid,
  price,
  library
) => {
  try {
    const contactList = new library.eth.Contract(
      KEYS.CONTRACT_ABI,
      KEYS.contractAddress
    );
    var value = web3.utils.toWei(`${price}`, "ether");
    const counter = await contactList.methods
      .updateListingStatus(nftid, onSale, value)
      .send({ from: account });
    console.log(counter);
    return counter;
  } catch (error) {
    console.log("error", error);
    return false;
  }
};
export const BUYNFT = async (account, price, nftid, library) => {
  try {
    const contactList = new library.eth.Contract(
      KEYS.CONTRACT_ABI,
      KEYS.contractAddress
    );

    // const estimateGassFee = await contactList.methods.buy(nftid).estimateGas({
    //   from: account,
    // });

    // console.log(estimateGassFee);

    const counter = await contactList.methods.buy(nftid).send({
      from: account,
      value: web3.utils.toWei(price.toString(), "ether"),
    });
    console.log(counter);
    return counter;
  } catch (error) {
    console.log("error", error);
    return false;
  }
};
