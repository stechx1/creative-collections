import { InjectedConnector } from "@web3-react/injected-connector";

import Web3 from "web3";
import { KEYS } from "../config/Keys";

export const metamaskconnect = async (chainId) => {
  const connectorMetamaskWallet = new InjectedConnector({
    supportedChainIds: [KEYS.chainID],
  });
  return connectorMetamaskWallet;
};

export const web3Data = new Web3(
  Web3.givenProvider //test
);
