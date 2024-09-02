import React from 'react';

const Volunteer = () => {
  return (
    <section id="volunteer">
    <div style={containerStyle}>
      <section style={sectionStyle}>
        <h2 style={headingStyle}>봉사 활동</h2>
        <div style={experienceItemStyle}>
          <h3 style={subHeadingStyle}>안양시 건강가정 다문화 가족 우수 자원 봉사자 표창장 수상 (2022년)</h3>
          <p style={detailStyle}>다문화 가정 초등학생을 위해 스크래치 교육 보조</p>
          
          <h3 style={subHeadingStyle}>안양시 진로 페스티벌 부스 운영 6회 (2022년-2023년)</h3>
          <p style={detailStyle}>파이썬을 이용하여 중, 고등학생 코딩 교육</p>
          
          <h3 style={subHeadingStyle}>교내 봉사상 수상 (2023년)</h3>
          <p style={detailStyle}>학생회, 반대표 등 교내 봉사</p>
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

const experienceItemStyle = {
  marginBottom: '20px',
  padding: '10px 0',
};

const detailStyle = {
  fontSize: '16px',
  color: '#555',
};

export default Volunteer;
