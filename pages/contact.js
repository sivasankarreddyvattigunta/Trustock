import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [ismailHovered, setIsmailHovered] = useState(false);
  const [iscallHovered, setIscallHovered] = useState(false);
  const contactInfo = {
    email1: '21CBT11876@cuchd.in',
    email2: '21CBT1045@cuchd.in',
    phone: '8688505716'
  };

  return (
    <div style={{
      fontSize:'2rem',background: 'linear-gradient(to bottom, #111, #999)',color:'silver',height:'100vh',textAlign:'center'
    }}>
      <h1 style={{color:'white',background: 'linear-gradient(to right, #111, #999)'}}>Contact Us</h1>
      <p>Email: {contactInfo.email1}</p>
      <p>Email: {contactInfo.email2}</p>
      <p>Phone: {contactInfo.phone}</p>
      <div style={{margin: '20px'}}>
        <a href={`mailto:${contactInfo.email1}`} style={{marginRight: '20px', fontSize: ismailHovered ? '50px' : '35px', color: 'white', textDecoration: 'none'}}
        onMouseEnter={() => setIsmailHovered(true)}
        onMouseLeave={() => setIsmailHovered(false)}>Email US</a>
        <a href={`tel:${contactInfo.phone}`} style={{fontSize: iscallHovered ? '50px' : '35px', color: 'white', textDecoration: 'none'}}
         onMouseEnter={() => setIscallHovered(true)}
         onMouseLeave={() => setIscallHovered(false)}>Call US</a>
      </div>
      <body style={{height:'30vh'}}></body>
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

export default Contact;
