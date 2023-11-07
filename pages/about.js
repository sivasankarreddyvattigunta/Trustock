import React from 'react';

const About = () => {
  const names = ["Hemadri Donadula(21CBT11876)", "Vattigunta Siva Sankar Reddy(21CBT1045)"];

 const paragraphStyle = {
    fontSize:'100px',
    textAlign: 'center'
  };

  const listStyle = {
    fontSize:'50px',
    listStyleType: 'none',
    textAlign: 'center',
    color:'silver'
  };

  return (
    
    <div style={{
      background: 'linear-gradient(to right, #111, #999)', height:'100vh'
    }}><br></br>
    <header style={{ height:'10vh',background: 'linear-gradient(to right, #111, #999)'}}>
      <h1 style={{top: '0',
    fontSize: '100px',
    color: 'white',
    textAlign: 'center',
    backgroundColor:'#333',}}>About Us</h1></header>
      
      <ul style={{
    fontSize:'50px',
    listStyleType: 'none',
    textAlign: 'center',
    color:'silver'
  }}>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <body style={{height:'40vh',background: 'linear-gradient(to right, #111, #999)'}}></body>
      <footer style={{
       bottom: 0,
       bottom: '0',
       width: '100%',
       height: '300px',
       background: 'linear-gradient(to bottom, #111, #999)',
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
    </div>
  );
};

export default About;
