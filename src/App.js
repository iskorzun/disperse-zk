import React, { useEffect, useState } from "react";
import { networks } from "./utils/networks";
import zkLogo from "./assets/icon_zkSync_Era_round.svg";
import ethLogo from "./assets/ethlogo.png";
import "./styles/App.css";
import Ether from "./components/Ether";

// Constants
const disperse_research_link = `https://github.com/banteg/disperse-research`;
const build_space_fonrend_link = `https://github.com/AlmostEfficient/domain-starter`;
const disperse_clone_link = "https://github.com/rajkharvar/disperse-clone";
const contract_link =
  "https://explorer.zksync.io/address/0x754308c605820E2464200eAD8156d45351db4029";

const App = () => {
  const [network, setNetwork] = useState("");
  const [currentAccount, setCurrentAccount] = useState("");

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask -> https://metamask.io/");
        return;
      }

      // Fancy method to request access to account.
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      // Boom! This should print out public address once we authorize Metamask.
      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };
  // Gotta make sure this is async.
  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have metamask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }

    // Check if we're authorized to access the user's wallet
    const accounts = await ethereum.request({ method: "eth_accounts" });

    // Users can have multiple authorized accounts, we grab the first one if its there!
    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found");
    }
    const chainId = await ethereum.request({ method: "eth_chainId" });
    setNetwork(networks[chainId]);

    ethereum.on("chainChanged", handleChainChanged);

    // Reload the page when they change networks
    function handleChainChanged(_chainId) {
      window.location.reload();
    }
  };

  // Create a function to render if wallet is not connected yet
  const renderNotConnectedContainer = () => (
    <div className="connect-wallet-container">
      <img src="https://matterlabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9e5244f5-a89a-4338-a497-a8250e46f4fc%2Ficon_zkSync_Era_round.svg?id=3786e7ee-bb9c-4692-ab21-6d69a66cfbe4&table=block&spaceId=703ee435-9e35-441a-b595-a8f42972ac1a&userId=&cache=v2" />
      <button
        onClick={connectWallet}
        className="cta-button connect-wallet-button"
      >
        Connect Wallet
      </button>
    </div>
  );
  const renderIncorrectNetwork = () => {
    return (
      <div className="connect-wallet-container">
        <p>Please connect to zkSync Era Mainnet</p>
      </div>
    );
  };

  // This runs our function when the page loads.
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <header>
            <div className="left">
              <p className="title">disperse</p>
              <a
                className="subtitle"
                href={contract_link}
                target="_blank"
                rel="noreferrer"
              >{`disperse for zkSync Era`}</a>
            </div>
            <div className="right">
              <img
                alt="Network logo"
                className="logo"
                src={network.includes("zkSync Era Mainnet") ? zkLogo : ethLogo}
              />
              {currentAccount ? (
                <p>
                  {" "}
                  Wallet: {currentAccount.slice(0, 6)}...
                  {currentAccount.slice(-4)}{" "}
                </p>
              ) : (
                <p> Not connected </p>
              )}
            </div>
          </header>
        </div>

        <div className="pt-16">
          {" "}
          {!currentAccount && renderNotConnectedContainer()}
          {network !== "zkSync Era Mainnet" ? (
            renderIncorrectNetwork()
          ) : (
            <Ether address={currentAccount} />
          )}
        </div>

        <div className="footer-container">
          <a
            className="footer-text"
            target="_blank"
            rel="noreferrer"
          >{`References:\xa0`}</a>

          <a
            className="footer-text"
            href={disperse_research_link}
            target="_blank"
            rel="noreferrer"
          >{`disperse-research,\xa0`}</a>

          <a
            className="footer-text"
            href={build_space_fonrend_link}
            target="_blank"
            rel="noreferrer"
          >{`buildspace,\xa0`}</a>
          <a
            className="footer-text"
            href={disperse_clone_link}
            target="_blank"
            rel="noreferrer"
          >{`disperse-clone`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
