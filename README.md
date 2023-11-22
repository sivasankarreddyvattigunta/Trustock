# Trustock - A Decentralized Exchange

## Overview
Trustock is a decentralized exchange (DEX) designed to provide users with a secure and transparent platform for trading various cryptocurrencies. Built on blockchain technology, Trustock enables peer-to-peer trading without the need for intermediaries.

## Installation Guide

1. Install Dependencies:
Make sure you have Node.js and npm installed on your machine. If not, download and install them from the official website.

2. Clone or Download Repository:
Clone the GitHub repository or download and extract the ZIP file containing the necessary code files (index.js, MySmartContract.sol, and deploy.js).

3. Install Dependencies:
Navigate to the project directory in the terminal and run the following command to install the required dependencies:

```
npm install
```

4. Set up Local Network and MetaMask Wallet:
Follow the instructions you provided to set up a local network in MetaMask with the RPC URL http://127.0.0.1:8545/ and Chain ID 31337. Import an account from the accounts shown in the second terminal (where you executed `npx hardhat node`) into your MetaMask wallet using the corresponding private key.

5. Deploy the Smart Contract:
In the third terminal, run the deployment script to deploy the smart contract to your local network:

```
npx hardhat run --network localhost scripts/deploy.js
```

6. Start Front-end Application:
Back in the first terminal, start the front-end application:

```
npm run dev
```

This will launch the front-end application, typically accessible at http://localhost:3000/.

7. Interact with the Smart Contract:
Visit http://localhost:3000/ in your browser to start interacting with the MetaMask wallet. The front-end code should have functionalities to interact with the deployed smart contract, such as reading data from the contract or sending transactions.

### Supervisor:

Ms.Sheetal Laroiya

### Author Information:

[Hemadri Donadula](https://github.com/hemadridonadula07)

[Siva Sankar Reddy Vattigunta](https://github.com/sivasankarreddyvattigunta)

### License

This project is licensed under the [MIT License](https://github.com/sivasankarreddyvattigunta/Trustock/blob/main/LICENSE)


