import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import tokendetails from './tokendetails';
import atm_abi from "../artifacts/contracts/Assessment.sol/Assessment.json";
import copyright from './copyright'
import contact from './contact';
import about from './about';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import About from "./about";
export default function HomePage() {
  const [isenterHovered, setIsenterHovered] =useState(false);
  const [isanalysisHovered, setIsanalysisHovered] = useState(false);
  const [isconnectHovered, setIsconnectHovered] = useState(false);
  const [ethWallet, setEthWallet] = useState(undefined);
  const [istokenHovered, setIstokenHovered] = useState(false);
  const [isDepositHovered, setIsDepositHovered] = useState(false);
  const [isWithdrawHovered, setIsWithdrawHovered] = useState(false);
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
          backgroundColor:isconnectHovered ?'white':'silver', 
          color: 'black', 
          fontSize: isconnectHovered?'24px':'18px',  
          transformStyle:'preserve-3d',
          transitionDuration:'1s',   
          width:isconnectHovered?'600px':'500px',
          height:isconnectHovered?'80px':'70px',
          padding: '10px 20px', // Padding around the text
          border: 'none', // No border
          borderRadius: '10px', // Rounded corners
          cursor: 'pointer', // Show pointer cursor on hover
        }}
        onMouseEnter={() => setIsconnectHovered(true)}
        onMouseLeave={() => setIsconnectHovered(false)}
      >
        Please connect your MetaMask wallet
      </button>
      );
    }
   

    if (balance === undefined) {
      getBalance();
    }
      return (
        <div style={{backgroundColor:'#111111',height:'30vh'}}>
           {account && (
        <p style={{ fontSize: '30px', color: 'silver' }}>
          Connected Account: {account}
        </p>
      )}
          <input
            type="text"
            value={inputAmount}
            onChange={handleInputAmountChange}
            placeholder="Enter amount"
            style={{
              transitionDuration:'1s',
              textAlign:"center",
              width: '300px', 
              fontSize: '16px', 
              padding: '10px', 
              borderRadius:'10px',
              height:isenterHovered?'60px':'50px',
              width:isenterHovered?'400px':'300px',
        }} onMouseEnter={() => setIsenterHovered(true)}
        onMouseLeave={() => setIsenterHovered(false)}
          /><br></br>
          <button
        style={{
          backgroundColor: isDepositHovered ? 'white' : 'silver',
          color: 'black',
          border: 'none',
          padding: '10px 20px',
          margin: '5px',
          borderRadius: '10px',
          cursor: 'pointer',
          fontSize: isDepositHovered?'24px':'18px',  
          transformStyle:'preserve-3d',
          transitionDuration:'1s',   
          width:isDepositHovered?'400px':'300px',
          height:isDepositHovered?'60px':'50px',
        }}
        onMouseEnter={() => setIsDepositHovered(true)}
        onMouseLeave={() => setIsDepositHovered(false)}
        onClick={deposit}
      >
        Deposit ETH
      </button>

      <button
        style={{
        
          backgroundColor: isWithdrawHovered ? 'white' : 'silver',
          color: 'black',
          border: 'none',
          padding: '10px 20px',
          margin: '5px',
          borderRadius: '10px',
          cursor: 'pointer',
          fontSize: isWithdrawHovered?'24px':'18px',  
          transformStyle:'preserve-3d',
          transitionDuration:'1s',   
          width:isWithdrawHovered?'400px':'300px',
          height:isWithdrawHovered?'60px':'50px',
        }}
        onMouseEnter={() => setIsWithdrawHovered(true)}
        onMouseLeave={() => setIsWithdrawHovered(false)}
        onClick={withdraw}
      >
        Withdraw ETH
      </button>
         
      {lastTransactionId && (
        <p style={{ fontSize: '30px',backgroundColor:'#111111',color:'white' }}>Last Transaction ID: {lastTransactionId}</p>
      )}
        </div>
    
      
  
    );
  };

  useEffect(() => {
    getWallet();
  }, []);

  return (
    <main className="container">
      <header style={{ height: '300px',width:'100%', background: 'linear-gradient(to right, #111, #999)', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <h1 style={{ fontSize: '100px',color:'white' }}>Welcome to Trustock</h1>
      </header>
      {initUser()}
      <style jsx>{`
        .container {
          text-align: center;
        }
      `}</style>
      <div style={{background: 'linear-gradient(to bottom, #111, #999)',}}>
    
      <h1 style={{ fontSize: '36px', color:'silver'  }}>Wanna do Analysis!</h1>
      <h2 style={{ fontSize: '25px', color:'silver' }}>Click here for Analysis</h2>
      <a
        href="https://colab.research.google.com/drive/1cNfm5MECDttgNVUq-yswwtL7QMw5Rt9A?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: isanalysisHovered ? 'white' : 'silver',
          display: 'inline-block',
          padding: '10px 20px',
          fontSize: isanalysisHovered?'24px':'18px',  
          transformStyle:'preserve-3d',
          transitionDuration:'1s',   
          width:isanalysisHovered?'400px':'300px',
          height:isanalysisHovered?'40px':'30px',

          color: 'black',
          textDecoration: 'none',
          borderRadius: '10px',
          fontSize: '30px',
        }}
        onMouseEnter={() => setIsanalysisHovered(true)}
        onMouseLeave={() => setIsanalysisHovered(false)}
        href="https://colab.research.google.com/drive/1cNfm5MECDttgNVUq-yswwtL7QMw5Rt9A?usp=sharing"
      >
        Analysis
      </a> <br></br>
      <br></br>
      <h3 style={{ fontSize: '25px' ,color:'silver'}}> Click here for token importing details</h3>
      <a href="/tokendetails" style={{
          display: 'inline-block',
          padding: '10px 20px', 
          backgroundColor: istokenHovered ? 'grey' : 'black',
          fontSize: istokenHovered?'24px':'18px',  
          transformStyle:'preserve-3d',
          transitionDuration:'1s',   
          width:istokenHovered?'400px':'300px',
          height:istokenHovered?'40px':'30px',
          color: 'white',          
          textDecoration: 'none', 
          borderRadius: '10px',    
          fontSize:'30px',
        }}
        onMouseEnter={() => setIstokenHovered(true)}
        onMouseLeave={() => setIstokenHovered(false)}
        href="/tokendetails"
      >
        Token details
      </a>
      <br></br>
     
    </div>
    <html style={{ backgroundColor: '#111111' }}>
</html>

    <footer style={{
       
        bottom: '0',
        width: '100%',
        height: '300px',
        background: 'linear-gradient(to right, #111, #999)',
        color: '#silver',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
       <div style={{ display: 'flex', flexDirection: 'column',color:'silver' }}>
       <a href="/" style={{ marginBottom: '10px',fontSize:'25px',color:'silver' }}>
        Home Page
      </a>
      <a href="/about" style={{ marginBottom: '10px',fontSize:'25px',color:'silver' }}>
        About Us
      </a>
      <a href="/contact" style={{fontSize:'25px',marginBottom: '10px',color:'silver'}}>Contact Information</a>
      <a href="https://www.nseindia.com/learn/find-a-course" style={{fontSize:'25px',marginBottom: '10px',color:'silver'}}>Learn Stock Market</a>
      <a href="/copyright" style={{fontSize:'25px',marginBottom: '10px',color:'silver'}}>© Trustock 2023</a>
    </div>
      </footer>
      <body style={{
        backgroundcolor:'#111'
      }}></body>
    
    </main>
  );
}
