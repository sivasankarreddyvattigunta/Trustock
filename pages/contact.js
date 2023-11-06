import React from 'react';

const Contact = () => {
  const contactInfo = {
    email1: 'donadulahemadri@gmail.com',
    email2: 'sivasankarreddyvattigunta@gmail.com',
    phone: '8688505716'
  };

  const infoStyle = {
    fontSize: '2rem',
    textAlign: 'center'
   
  };

  return (
    <div style={infoStyle}>
      <h1 style={{color:'blue'}}>Contact Us</h1>
      <p>Email: {contactInfo.email1}</p>
      <p>Email: {contactInfo.email2}</p>
      <p>Phone: {contactInfo.phone}</p>
    </div>
  );
};

export default Contact;
