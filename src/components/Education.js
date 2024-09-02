import React from 'react';

const Education = () => {
  return (
    <section id="education">
    <div style={containerStyle}>
      <section style={sectionStyle}>
        <h2 style={headingStyle}>교육</h2>
        <div style={educationItemStyle}>
          
          <h3 style={subHeadingStyle}>대림대학교(4년제)</h3>
          <p style={dateStyle}>2024.03 ~ 재학중</p>
          <p style={detailStyle}>컴퓨터 소프트웨어 학과</p>
        </div>
        <div style={educationItemStyle}>
          
          <h3 style={subHeadingStyle}>구름톤 트레이닝 수료</h3>
          <p style={dateStyle}>수료(2024.02~2024.08)</p>
          <p style={detailStyle}>[구름 X 인프런] 자바 스프링 & 리액트 풀스택 개발자 과정</p>
        </div>
        <div style={educationItemStyle}>
         
          <h3 style={subHeadingStyle}>대림대학교(3년제)</h3>
          <p style={dateStyle}>졸업(2021.03~2024.02)</p>
          <p style={detailStyle}>컴퓨터정보학부</p>
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

const educationItemStyle = {
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

export default Education;
