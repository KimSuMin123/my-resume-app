import React from 'react';

const Certification = () => {
  return (
    <section id="certifications">
    <div style={containerStyle}>
      <section style={sectionStyle}>
        <h2 style={headingStyle}>자격증</h2>
        <div style={experienceItemStyle}>

          <h3 style={subHeadingStyle}>운전 면허증 취득</h3>
          <p style={detailStyle}>2024.02</p>
        </div>
        <div style={experienceItemStyle}>
          
          <h3 style={subHeadingStyle}>정보처리 기사 필기 합격</h3>
          <p style={detailStyle}>2024.06</p>
        </div>
      </section>
    </div>
    </section>
  );
};

const containerStyle = {
    padding: '40px 20px',
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    lineHeight: '1.8',
    backgroundColor: '#f9f9f9',
    color: '#333',
  };
  
  const sectionStyle = {
    marginBottom: '40px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  };
  
  const headingStyle = {
    borderBottom: '2px solid #007BFF',
    paddingBottom: '10px',
    marginBottom: '20px',
    fontSize: '24px',
    color: '#333',
    fontWeight: 'bold',
  };
  
  const subHeadingStyle = {
    fontSize: '20px',
    margin: '10px 0',
    fontWeight: 'bold',
    color: '#007BFF',
  };
  
  const experienceSummaryStyle = {
    color: '#007BFF',
    fontWeight: 'bold',
    marginBottom: '20px',
    fontSize: '18px',
  };
  
  const experienceItemStyle = {
    marginBottom: '20px',
    padding: '10px 0',
  };
  
  const dateStyle = {
    fontSize: '16px',
    color: '#666',
  };
  
  const detailStyle = {
    fontSize: '16px',
    color: '#555',
  };


export default Certification;
