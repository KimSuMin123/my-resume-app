import React from 'react';

const ActivitiesAndTraining = () => {
  return (
    <section id="activities">
    <div style={containerStyle}>
      <section style={sectionStyle}>
        <h3 style={headingStyle}>교내 활동 및 구름톤 트레이닝</h3>
        
        <div style={projectsContainerStyle}>
          <div style={activityItemStyle}>
            <h4 style={subHeadingStyle}>학과 학생회</h4>
            <p style={dateStyle}>2021.03 ~ 2022.12</p>
            <p style={detailStyle}>기획부, 총무부장, 부학생회장, 학생회장 활동</p>
          </div>

          <div style={activityItemStyle}>
            <h4 style={subHeadingStyle}>반대표</h4>
            <p style={dateStyle}>2021.09 ~ 2022.07</p>
            <p style={detailStyle}>학교 반대표 활동</p>
          </div>

          <div style={activityItemStyle}>
            <h4 style={subHeadingStyle}>COMMON 전공동아리활동</h4>
            <p style={dateStyle}>2021.02 ~ 2023.12</p>
            <p style={detailStyle}>전공 동아리 활동 및 부장 역임</p>
          </div>

          <div style={activityItemStyle}>
            <h4 style={subHeadingStyle}>자바 튜터링</h4>
            <p style={dateStyle}>2022.03 ~ 2022.08</p>
            <p style={detailStyle}>자바 튜터로 활동</p>
          </div>

          <div style={activityItemStyle}>
            <h4 style={subHeadingStyle}>구름톤 트레이닝 알고리즘 스터디</h4>
            <p style={dateStyle}>2024.02 ~ 2024.04</p>
            <p style={detailStyle}>자바를 이용한 알고리즘 스터디</p>
          </div>

          <div style={activityItemStyle}>
            <h4 style={subHeadingStyle}>구름톤 트레이닝 스프링 스터디</h4>
            <p style={dateStyle}>2024.04 ~ 2024.06</p>
            <p style={detailStyle}>스프링 기초 공부를 위한 스터디</p>
          </div>
      
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

const projectsContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
  justifyContent: 'space-between',
};

const activityItemStyle = {
  flex: '0 0 30%', // 3개씩 배치되도록 설정
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

export default ActivitiesAndTraining;
