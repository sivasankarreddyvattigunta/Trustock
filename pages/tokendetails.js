import React, { useState } from 'react';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 32px;
  color: white;

  th, td {
    border: 1px solid white;
    padding: 10px;
    text-align: center;
  }

  th {
    background-color: silver;
    color: black;
  }
`;

const TokenDetailsTable = () => {
  const [tokenDetails, setTokenDetails] = useState({
    address: '',
    name: '',
    symbol: '',
    decimals: ''
  });

  const [tokenList, setTokenList] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTokenDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSaveToken = () => {
    // Validate the input fields (you can add validation logic here)
    // For example, checking if the fields are not empty
    if (tokenDetails.address && tokenDetails.name && tokenDetails.symbol && tokenDetails.decimals) {
      const newTokenList = [...tokenList, tokenDetails];
      setTokenList(newTokenList);
      // Clear input fields after saving
      setTokenDetails({
        address: '',
        name: '',
        symbol: '',
        decimals: ''
      });
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div style={{ textAlign: 'center', fontSize: '24px', background: '#111111', height: '100vh', color: 'white' }}>
      <h2 style={{ background: 'linear-gradient(to right, #111111, #999999)', height: '10vh', color: 'white', fontSize: '80px', margin: '0', padding: '20px' }}>Token Importing Details</h2>

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '20px' }}>
        <label style={{ fontSize: '32px', marginRight: '10px', fontStyle: 'oblique' }}>Address:</label>
        <input type="text" name="address" value={tokenDetails.address} onChange={handleInputChange} style={{ fontSize: '24px', marginRight: '32px' }} />

        <label style={{ fontSize: '32px', marginRight: '10px', fontStyle: 'oblique' }}>Name:</label>
        <input type="text" name="name" value={tokenDetails.name} onChange={handleInputChange} style={{ fontSize: '24px', marginRight: '32px' }} />

        <label style={{ fontSize: '32px', marginRight: '10px', fontStyle: 'oblique' }}>Symbol:</label>
        <input type="text" name="symbol" value={tokenDetails.symbol} onChange={handleInputChange} style={{ fontSize: '24px', marginRight: '32px' }} />

        <label style={{ fontSize: '32px', marginRight: '10px', fontStyle: 'oblique' }}>Decimals:</label>
        <input type="text" name="decimals" value={tokenDetails.decimals} onChange={handleInputChange} style={{ fontSize: '24px' }} />
      </div>

      <button onClick={handleSaveToken} style={{ fontSize: '24px', marginBottom: '20px' }}>Save Token</button>

      <Table>
        <thead>
          <tr>
            <th>Token Address</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Decimals</th>
          </tr>
        </thead>
        <tbody>
          {tokenList.map((token, index) => (
            <tr key={index}>
              <td>{token.address}</td>
              <td>{token.name}</td>
              <td>{token.symbol}</td>
              <td>{token.decimals}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div style={{ height: '40vh', background: 'linear-gradient(to bottom, #111111, #999999)' }}></div>
      <footer style={{
        bottom: 0,
        width: '100%',
        height: '300px',
        background: 'linear-gradient(to bottom, #555555, #999999)',
        color: 'silver',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', color: 'silver' }}>
          <a href="/" style={{ marginBottom: '10px', fontSize: '25px', color: 'silver' }}>
            Home Page
          </a>
          <a href="/about" style={{ marginBottom: '10px', fontSize: '25px', color: 'silver' }}>
            About Us
          </a>
          <a href="/contact" style={{ fontSize: '25px', marginBottom: '10px', color: 'silver' }}>Contact Information</a>
          <a href="https://www.nseindia.com/learn/find-a-course" style={{ fontSize: '25px', marginBottom: '10px', color: 'silver' }}>Learn Stock Market</a>
          <a href="/copyright" style={{ fontSize: '25px', marginBottom: '10px', color: 'silver' }}>© Trustock 2023</a>
        </div>
      </footer>
    </div>
  );
};

export default TokenDetailsTable;
