import React from 'react';
import code from '../img/code.png';  // 이미지 파일 경로에 맞게 수정하세요
import ieum from '../img/ieum.png';  // 이미지 파일 경로에 맞게 수정하세요

const Projects = () => {
  return (
    <section id="projects">
      <div style={containerStyle}>
        {/* Projects Section */}
        <section style={sectionStyle}>
          <h3 style={headingStyle}>프로젝트</h3>

          <div style={projectsContainerStyle}>
            <div style={activityItemStyle}>
              <h4 style={subHeadingStyle}>2021년 대림대 지도 앱 제작 활동 참여</h4>
              <p style={dateStyle}>2021.05 ~ 2021.10</p>
              <p style={detailStyle}>대림대 지도 앱 개발 - 데이터 관리 및 디자인 업무</p>
            </div>

            <div style={activityItemStyle}>
              <h4 style={subHeadingStyle}>2022년 대림대 해커톤</h4>
              <p style={dateStyle}>2022.04 ~ 2022.07</p>
              <p style={detailStyle}>동아리 통합 사이트 개발 - React를 이용하여 프론트 엔드 개발</p>
            </div>
          </div>

          <div style={projectsContainerStyle}>
            <div style={activityItemStyle}>
              <iframe 
                width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/YubAbuHyKdQ" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                style={iframeStyle}
              ></iframe>
              <h4 style={subHeadingStyle}>2022년 대림대 테크 페어 장려상</h4>
              <p style={dateStyle}>2022.08 ~ 2022.11</p>
              <p style={detailStyle}>MBTI 동아리 추천 사이트 개발 - Android Studio 서버 개발</p>
            </div>

            <div style={activityItemStyle}>
              <iframe 
                width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/S62rpAE_94I" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                style={iframeStyle}
              ></iframe>
              <h4 style={subHeadingStyle}>2023년 대림대 해커톤</h4>
              <p style={dateStyle}>2023.04 ~ 2023.07</p>
              <p style={detailStyle}>랜덤 칵테일 추천 - React 프론트 엔드 개발</p>
            </div>
          </div>

          <div style={projectsContainerStyle}>
            <div style={activityItemStyle}>
              <a href="https://www.canva.com/design/DAGJLifg0YI/0ruL7Qk2npEBFaPbBG6IEA/edit?utm_content=DAGJLifg0YI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noopener noreferrer">
                <img src={code} alt="Coding Game Project" style={imageStyle} />
              </a>
              
              <h4 style={subHeadingStyle}>2024년 대림대 해커톤 입상</h4>
              <p style={dateStyle}>2024.04 ~ 2024.07</p>
              <a href="https://www.canva.com/design/DAGJLifg0YI/0ruL7Qk2npEBFaPbBG6IEA/edit?utm_content=DAGJLifg0YI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noopener noreferrer" style={linkStyle}>프로젝트 소개서</a>
              <br />
              <a href="https://www.codeadventure.shop/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Project Link</a>

              <p style={detailStyle}>코린이들을 위한 코딩 게임 개발 - React 프론트 엔드 개발, Node 백엔드 개발</p>
            </div>

            <div style={activityItemStyle}>
              <a href="https://www.miricanvas.com/ko/v/13j287h" target="_blank" rel="noopener noreferrer">
                <img src={ieum} alt="Ieum Project" style={imageStyle} />
              </a>
              
              <h4 style={subHeadingStyle}>2024년 구름톤 트레이닝 프로젝트</h4>
              <p style={dateStyle}>2024.05 ~ 2024.08</p>
              <a href="https://www.miricanvas.com/ko/v/13j287h" target="_blank" rel="noopener noreferrer" style={linkStyle}>프로젝트 소개서</a>
              <p style={detailStyle}>친구와 함께 여행 계획 웹 - React 프론트 엔드 개발</p>
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
  flexDirection: 'row', // 가로로 배치
  gap: '20px',
  flexWrap: 'wrap', // 내용이 길 경우 다음 줄로 넘김
};

const activityItemStyle = {
  flex: '1 1 48%', // 가로로 2개씩 배치되도록 설정
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

const iframeStyle = {
  marginBottom: '20px',
  borderRadius: '8px',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
  marginBottom: '10px',
};

const linkStyle = {
  color: '#007BFF',
  textDecoration: 'none',
  fontWeight: 'bold',
};

export default Projects;
