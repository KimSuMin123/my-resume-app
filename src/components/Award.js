import React from 'react';

const Award = () => {
  
  return (
    
    <section id="awards">
    <div style={containerStyle}>
      <section style={sectionStyle}>
        <h2 style={headingStyle}>수상</h2>
        <div style={experienceItemStyle}>
          
          <h3 style={subHeadingStyle}>대림대 테크 페어 장려상 (2022년)</h3>
          <p style={detailStyle}>MBTI 동아리 추천 사이트 개발 - Android Studio 서버 개발</p>
          <h3 style={subHeadingStyle}>안양시 인재육성제단 IT 장학금 수상 (2022년)</h3>
          <p style={detailStyle}>다양한 교내외 활동과 우수한 성적</p>
        
        <h3 style={subHeadingStyle}>대림대 해커톤 입상 (2024년)</h3>
        <p style={detailStyle}>코린이들을 위한 코딩 게임 개발 - React 프론트 엔드 개발, Node 백엔드 개발 </p>
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
  


export default Award;
