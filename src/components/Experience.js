import React from 'react';

const Experience = () => {
  return (
    <section id="experience">
    <div style={containerStyle}>
      <section style={sectionStyle}>
        <h2 style={headingStyle}>경력</h2>
        <p style={experienceSummaryStyle}>총 5개월</p>
        <div style={experienceItemStyle}>
         
          <h3 style={subHeadingStyle}>(주)필드유 - 인턴</h3>
          <p style={dateStyle}>2022.12 ~ 2023.02 (3개월)</p>
          <p style={detailStyle}>Vue.js를 이용한 프론트엔드 개발 업무</p>
        </div>
        <div style={experienceItemStyle}>
          
          <h3 style={subHeadingStyle}>(주)알라딘시스템 - 인턴</h3>
          <p style={dateStyle}>2022.07 ~ 2022.08 (2개월)</p>
          <p style={detailStyle}>PostgreSQL을 이용한 데이터 보조 업무 및 퍼블리싱 업무</p>
        </div>
      </section>
    </div>
    </section>
  );
};

// Styles
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

export default Experience;
