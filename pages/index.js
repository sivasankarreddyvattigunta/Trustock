import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import tokendetails from './tokendetails'
import atm_abi from "../artifacts/contracts/Assessment.sol/Assessment.json";
import copyright from './copyright'
import image1 from './image/quote2.jpeg';
import quote1 from './image/quote1.jpg';
import contact from './contact';
import about from './about';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


import About from "./about";
export default function HomePage() {
  
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [atm, setATM] = useState(undefined);
  const [balance, setBalance] = useState(undefined);
  const [inputAmount, setInputAmount] = useState("");
  const [lastTransactionId, setLastTransactionId] = useState("");

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const atmABI = atm_abi.abi;

  const getWallet = async () => {
    if (window.ethereum) {
      setEthWallet(window.ethereum);
    }

    if (ethWallet) {
      const accounts = await ethWallet.request({ method: "eth_accounts" });
      if (accounts.length > 0) {
        handleAccount(accounts[0]); // Use the first account if available
      } else {
        setAccount(undefined);
      }
    }
  };

  const handleAccount = (account) => {
    if (account) {
      console.log("Account connected: ", account);
      setAccount(account);
    } else {
      console.log("No account found");
      setAccount(undefined);
    }
  };

  const connectAccount = async () => {
    if (!ethWallet) {
      alert("MetaMask wallet is required to connect");
      return;
    }

    const accounts = await ethWallet.request({ method: "eth_requestAccounts" });
    if (accounts.length > 0) {
      handleAccount(accounts[0]); // Use the first account if available
    }
    // else: No accounts available, account state will be set to undefined

    // once wallet is set we can get a reference to our deployed contract
    getATMContract();
  };

  const getATMContract = () => {
    const provider = new ethers.providers.Web3Provider(ethWallet);
    const signer = provider.getSigner();
    const atmContract = new ethers.Contract(contractAddress, atmABI, signer);

    setATM(atmContract);
  };

  const getBalance = async () => {
    if (atm && account) {
      const balance = await atm.getBalance();
      setBalance(balance.toNumber());
    }
  };

  const handleInputAmountChange = (event) => {
    setInputAmount(event.target.value);
  };

  const deposit = async () => {
    if (!inputAmount || isNaN(inputAmount)) {
      alert("Please enter a valid amount.");
      return;
    }

    const amount = ethers.utils.parseEther(inputAmount);

    if (atm) {
      try {
        let tx = await atm.deposit(amount);
        await tx.wait();
        getBalance();
        setInputAmount("");
        setLastTransactionId(tx.hash); // Store the transaction hash in state
      } catch (error) {
        console.error("Error occurred during deposit:", error);
      }
    }
  };

  const withdraw = async () => {
    if (!inputAmount || isNaN(inputAmount)) {
      alert("Please enter a valid amount.");
      return;
    }

    const amount = ethers.utils.parseEther(inputAmount);

    if (atm) {
      try {
        let tx = await atm.withdraw(amount);
        await tx.wait();
        getBalance();
        setInputAmount("");
        setLastTransactionId(tx.hash); // Store the transaction hash in state
      } catch (error) {
        console.error("Error occurred during withdrawal:", error);
      }
    }
  };

  const initUser = () => {
    if (!ethWallet) {
      return <p>Please install MetaMask in order to use this ATM.</p>;
    }

    if (!account) {
      return (
        
        <button
        onClick={connectAccount}
        style={{
          backgroundColor: '#007bff', // Blue background color
          color: '#fff', // White text color
         
          padding: '10px 20px', // Padding around the text
          border: 'none', // No border
          borderRadius: '5px', // Rounded corners
          cursor: 'pointer', // Show pointer cursor on hover
        }}
      >
        Please connect your MetaMask wallet
      </button>
      );
    }

    if (balance === undefined) {
      getBalance();
    }
      return (
        <div><br></br>
          <input
            type="text"
            value={inputAmount}
            onChange={handleInputAmountChange}
            placeholder="Enter amount"
            style={{
              textAlign:"center",
              width: '300px', // Set the width of the text box here
              fontSize: '16px', // Set the font size of the text box here
              padding: '10px', // Set the padding inside the text box here
              marginBottom: '10px',
              borderRadius:'10px' // Set the margin bottom for spacing
            }}
          /><br></br>
          <button
            style={{
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              height:'50px',
              width: '300px',
              padding: '10px 20px',
              margin: '5px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize:'30px',
            }}
            onClick={deposit}
          >
            Deposit ETH
          </button>
          <button
            style={{
              fontSize:'30px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              padding: '10px 20px',
              margin: '5px',
              borderRadius: '5px',
              cursor: 'pointer',
              height:'50px',
              width: '300px',
            }}
            onClick={withdraw}
          >
            Withdraw ETH
          </button>
          {account && (
        <p style={{ fontSize: '30px', color: '#981' }}>
          Connected Account: {account}
        </p>
      )}
      {lastTransactionId && (
        <p style={{ fontSize: '30px' }}>Last Transaction ID: {lastTransactionId}</p>
      )}
        </div>
    
      
  
    );
  };

  useEffect(() => {
    getWallet();
  }, []);

  return (
    <main className="container">
      <header style={{ height: '300px',width:'100%', backgroundColor: '#286', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <h1 style={{ fontSize: '100px' }}>Welcome to Trustock</h1>
      </header>
      {initUser()}
      <style jsx>{`
        .container {
          text-align: center;
        }
      `}</style>
      <div>
    
      <h1 style={{ fontSize: '36px',  }}>Wanna do Something</h1>
      <h2 style={{ fontSize: '25px' }}>Click here for Analysis</h2>
      <a
        href="https://colab.research.google.com/drive/1cNfm5MECDttgNVUq-yswwtL7QMw5Rt9A?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          padding: '10px 20px', 
          fontSize: '18px',     
          backgroundColor: '#007bff', 
          width:'300px',
          height:'30px',
          color: '#fff',          
          textDecoration: 'none', 
          borderRadius: '5px',    
          fontSize:'30px',
        }}
      >
        Analysis
      </a> <br></br>
      <br></br>
      <h3 style={{ fontSize: '25px' }}> Click here for token importing details</h3>
      <a href="/tokendetails" style={{
          display: 'inline-block',
          padding: '10px 20px', 
          fontSize: '18px',     
          backgroundColor: '#007bff', 
          width:'300px',
          height:'30px',
          color: '#fff',          
          textDecoration: 'none', 
          borderRadius: '5px',    
          fontSize:'30px',
        }}
      >
        Token details
      </a>
      <br></br>
      <img src="/image/quote1.jpg" alt="Norman Ralph Augustine" /> <br></br>
      <img src="/image/quote2.jpeg" alt="hbdhj"/>
    </div>
    <html style={{ height: '10vh' }}>
    </html>
    <footer style={{
       
        bottom: '0',
        width: '100%',
        height: '300px',
        backgroundColor: 'grey',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
       <div style={{ display: 'flex', flexDirection: 'column' }}>
      <a href="/about" style={{ marginBottom: '10px',fontSize:'25px' }}>
        About Us
      </a>
      <a href="/contact" style={{fontSize:'25px',marginBottom: '10px'}}>contactInfo</a>
      <a href="https://www.nseindia.com/learn/find-a-course" style={{fontSize:'25px',marginBottom: '10px'}}>Learn Stock Market</a>
      <a href="/copyright" style={{fontSize:'25px',marginBottom: '10px'}}>© Trustock 2023</a>
    </div>
      </footer>
    
    </main>
  );
}
