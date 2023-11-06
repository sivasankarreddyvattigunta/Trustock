import React from 'react';

const About = () => {
  const names = ["Donadula Hemadri", "Vattigunta Siva Sankar Reddy"];

  const headingStyle = {
    fontSize: '100px',
    color: 'blue',
    textAlign: 'center'
  };

  const paragraphStyle = {
    fontSize:'100px',
    textAlign: 'center'
  };

  const listStyle = {
    fontSize:'50px',
    listStyleType: 'none',
    textAlign: 'center'
  };

  return (
    
    <div >
      <h1 style={headingStyle}>About Us</h1>
      
      <ul style={listStyle}>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default About;
