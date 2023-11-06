import React, { useState } from 'react';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  font-size: 24px; /* Set the default font size */
  line-height: 1.5; /* Set line height for better readability */

  th, td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }

  input[type="text"] {
    text-align:center;
    font-size: 24px; /* Set font size for input fields */
    padding: 8px; /* Adjust input padding */
    margin-bottom: 10px; /* Add margin between input fields */
  }
`;

const TokenDetailsTable = () => {
  const [tokenDetails, setTokenDetails] = useState({
    address: '',
    name: '',
    symbol: '',
    decimals: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTokenDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <div>
        <label>Token Address:</label>
        <input type="text" name="address" value={tokenDetails.address} onChange={handleInputChange} />
      </div>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={tokenDetails.name} onChange={handleInputChange} />
      </div>
      <div>
        <label>Symbol:</label>
        <input type="text" name="symbol" value={tokenDetails.symbol} onChange={handleInputChange} />
      </div>
      <div>
        <label>Decimals:</label>
        <input type="text" name="decimals" value={tokenDetails.decimals} onChange={handleInputChange} />
      </div>
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
          <tr>
            <td>{tokenDetails.address}</td>
            <td>{tokenDetails.name}</td>
            <td>{tokenDetails.symbol}</td>
            <td>{tokenDetails.decimals}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TokenDetailsTable;
