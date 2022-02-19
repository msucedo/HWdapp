import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import './App.css';
import deployedContracts from "./contracts/hello_world.json";

export default function App() {
  const [textTitle, setTextTitle] = useState(""); // manages input and sending new text
  const [visibleTitle, setVisibleTitle] = useState(""); // manages the website title and retrieve new text
  
  const chainId = 1337; // for localhost
  // const chainId = 4; // for rinkeby
  // const chainId = ?; // other testnets
  const contractABI = deployedContracts[chainId][0].contracts["HelloWorld"].abi;
  const contractAddress = deployedContracts[chainId][0].contracts["HelloWorld"].address;

  const [currentAccount, setCurrentAccount] = useState(""); /*store user public key*/

  // check if a wallet is already logged in
  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        console.log("make sure you have metamask");
      } else {
        console.log("we have the ethereum object", ethereum);
      }
      /*check authorization to access user wallet*/
      const accounts = await ethereum.request({method: "eth_accounts"});
      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Connected account:", account);
        setCurrentAccount(account)
        const callGetText = getText();
      } else {
        console.log("No authorized account found")
      } 
    } catch (error) {
      console.log(error);
    }
  }

  // connect a wallet
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
      const callGetText = getText();
    } catch (error) {
      console.log(error)
    }
  }

  // GET action
  const getText = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        console.log("PROVIDER: ",provider);
        // this is the contract object, note this is not editable
        const readOnlyContract = new ethers.Contract(contractAddress, contractABI, provider);

        // actual call to function from contract
        let textTxn = await readOnlyContract.getText();
        console.log("text: ",textTxn);

        setTextTitle(textTxn);
        setVisibleTitle(textTxn);
        await textTxn.wait;
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error)
    }
  }

  // POST action
  const updateText = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner(); // when updating a contract we do need a signer

        // this is the contract object - note this is editable
        const editableContract = new ethers.Contract(contractAddress, contractABI, signer);

        // actual call to contract function
        const updateTextTxn = await editableContract.updateText(textTitle);
        console.log("mining new name...")
        await updateTextTxn.wait();
        console.log("Mined --", updateTextTxn.hash);
        getText(); // to refresh and show new title
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])
  
  return (
    <div className="mainContainer">
      <div className="dataContainer">
        {currentAccount && (
          <div className="dataTop">
            {visibleTitle && (
              <h1>Hello, {visibleTitle}!</h1>
            )}
            <div className="dataTop-action">
              <input value={textTitle==visibleTitle?"":textTitle} onInput={(e) => setTextTitle(e.target.value)}/>
              <button className="updateTextButton" onClick={()  => updateText()}>new text</button>
            </div>
          </div>
        )}
        {!currentAccount && (
          <div className="dataBottom">
            <button className="waveButton" onClick={connectWallet}>Connect Wallet</button>
            <a href="https://metamask.io/download/" >don't have a metamask wallet? click here</a>
          </div> 
        )}
      </div>
    </div>
  );
}
