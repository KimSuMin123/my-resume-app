import React, { useState } from 'react';
import club from '../img/club.png';
import code1 from '../img/code1.png';
import code2 from '../img/code2.png';
import coktail from '../img/coktail.png';
import dealim from '../img/dealim.png';
import map from '../img/map.png';
import mbti1 from '../img/mbti1.png';
import mbti2 from '../img/mbti2.png';
import me from '../img/me.png';
import travel1 from '../img/travel1.png';
import travel2 from '../img/travel2.png';

const Projects = () => {
  const [filter, setFilter] = useState('all'); // 프로젝트 필터 상태

  const handleFilterChange = (type) => {
    setFilter(type); // 버튼 클릭 시 필터 업데이트
  };

  // 팀 프로젝트 목록
  const teamProjects = [
    {
      title: '2021년 대림대 지도 앱 제작 활동 참여',
      date: '2021.05 ~ 2021.10',
      person: '5인',
      projectname: '대림대 지도 앱 ',
      detail: 'Mysql를 이용하여 데이터 관리, Figma를 이용하여 디자인 업무',
      lan: 'Mysql, Figma, Android Studio',
      plus: 'https://tnrn211.tistory.com/146',
      images: [dealim]
    },
    {
      title: '2022년 대림대 해커톤',
      date: '2022.04 ~ 2022.07',
      person: '4인',
      projectname: '동아리 통합 사이트 ',
      detail: 'Figma를 이용한 디자인 작업, React를 이용하여 프론트엔드 개발 (게시판 기능)',
      lan: 'Figma, react.js, VSCode',
      images: [club]
    },
    {
      title: '2022년 대림대 테크 페어 장려상',
      date: '2022.08 ~ 2022.11',
      person: '6인',
      projectname: 'MBTI 동아리 추천 사이트',
      detail: '코틀린을 이용하여 서버 개발하기 (인적사항 조사, MBTI 검사, 지도 기능)',
      lan: 'Android Studio, 코틀린',
      plus: 'https://www.youtube.com/embed/YubAbuHyKdQ',
      images: [mbti1, mbti2]
    },
    {
      title: '2023년 대림대 해커톤',
      date: '2023.04 ~ 2023.07',
      person: '2인',
      projectname: '랜덤 칵테일 추천 사이트',
      detail: 'React를 이용하여 프론트엔드 전체 개발, Figma를 이용한 디자인 작업',
      lan: 'Figma, React.js, VSCode',
      plus: 'https://www.youtube.com/embed/S62rpAE_94I',
      images: [coktail]
    },
    {
      title: '2024년 대림대 해커톤',
      date: '2024.04 ~ 2024.07',
      person: '4인',
      projectname: '코린이들을 위한 코딩 게임 (코드 어드벤처)',
      detail: 'React 프론트엔드 개발 (스테이지 및 문제 풀이 기능), Node 백엔드 개발 (문제 풀이 기능)',
      lan: 'Node.js, react.js, VSCode',
      plus: 'https://www.canva.com/design/DAGJLifg0YI/0ruL7Qk2npEBFaPbBG6IEA/edit?utm_content=DAGJLifg0YI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
      images: [code1, code2]
    },
    {
      title: '2024년 구름톤 트레이닝 프로젝트',
      date: '2024.05 ~ 2024.08',
      person: '6인',
      projectname: '친구와 함께 여행 계획 웹 (이음)',
      detail: 'React 프론트엔드 개발 (일정 생성, 편집 기능, 실시간 채팅 기능), Figma를 이용한 디자인 작업',
      lan: 'React.js, Figma, VSCode',
      plus: 'https://www.miricanvas.com/ko/v/13j287h',
      images: [travel1, travel2]
    },
  ];

  // 개인 프로젝트 목록
  const personalProjects = [
    {
      title: '셔틀 예약 사이트 만들기',
      projectname: '대림대 셔틀 예약 시스템',
      date: '2024.08 ~ 2024.10',
      detail: '효율적인 셔틀 관리를 위한 웹앱 - React 프론트 엔드 개발, Node 백엔드 개발',
      lan: 'React.js, Node.js, VSCode',
      plus: 'https://tnrn211.tistory.com/601',
      person: '개인',
      images: [map],
    },
    {
      title: '이력서 사이트 만들기',
      projectname: '개인 포트폴리오 및 이력서 사이트',
      date: '2024.09 ~ ',
      detail: '개인 포트폴리오와 이력서 사이트 - React 프론트 엔드 개발',
      lan: 'React.js, Figma, VSCode',
      person: '개인',
      images: [me],
    },
  ];

   // 현재 필터에 따라 표시할 프로젝트 리스트
   const filteredProjects = filter === 'personal' ? personalProjects : filter === 'team' ? teamProjects : [...teamProjects, ...personalProjects];

   return (
     <section id="projects" style={containerStyle}>
       <h3 style={headingStyle}>프로젝트</h3>
 
       {/* 필터 버튼 */}
       <div style={buttonContainerStyle}>
         <button onClick={() => handleFilterChange('all')} style={{ ...buttonStyle, backgroundColor: filter === 'all' ? '#0056b3' : '#007BFF' }}>
           모두 보기
         </button>
         <button onClick={() => handleFilterChange('team')} style={{ ...buttonStyle, backgroundColor: filter === 'team' ? '#0056b3' : '#007BFF' }}>
           팀 프로젝트 보기
         </button>
         <button onClick={() => handleFilterChange('personal')} style={{ ...buttonStyle, backgroundColor: filter === 'personal' ? '#0056b3' : '#007BFF' }}>
           개인 프로젝트 보기
         </button>
       </div>
 
       {/* 프로젝트 카드 리스트 */}
       <div style={projectsContainerStyle}>
         {filteredProjects.map((project, index) => (
           <div key={index} style={cardStyle}>
            <h3 style={subHeadingStyle}>{project.title}</h3>
             {project.images.length > 1 ? (
               <div style={imageGridStyle}>
                 {project.images.map((image, i) => (
                   <img key={i} src={image} alt={`${project.title} - image ${i + 1}`} style={imageStyle} />
                 ))}
               </div>
             ) : (
               <img src={project.images[0]} alt={project.title} style={imageStyle} />
             )}
             
             <p style={projectNameStyle}><strong>프로젝트명 : </strong>{project.projectname}</p>
             <p style={dateStyle}><strong>기간 : </strong>{project.date}</p>
             <p style={detailStyle}><strong>팀원 : </strong>{project.person}</p>
             <p style={detailStyle}><strong>기술스택 : </strong>{project.lan}</p>
             <p style={detailStyle}><strong>세부사항 : </strong>{project.detail}</p>
             
             {project.plus && (
               <a href={project.plus} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                 프로젝트 더보기
               </a>
             )}
           </div>
         ))}
       </div>
     </section>
   );
 };
 
 // Styles
 const containerStyle = {
   padding: '40px 20px',
   fontFamily: "'Helvetica Neue', Arial, sans-serif",
   lineHeight: '1.8',
   backgroundColor: '#fff',
   color: '#333',
   maxWidth: '1650px',
   margin: '0 auto',
   borderRadius: '10px',
   boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
 };
 
 const headingStyle = {
   borderBottom: '2px solid #007BFF',
   paddingBottom: '10px',
   marginBottom: '20px',
   fontSize: '28px',
   color: '#333',
   fontWeight: 'bold',
 };

 const buttonContainerStyle = {
   display: 'flex',
   margin:'20px',
   marginBottom: '30px',
 };
 
 const buttonStyle = {
   padding: '10px 20px',
   backgroundColor: '#007BFF',
   color: '#fff',
   border: 'none',
   borderRadius: '20px',
   cursor: 'pointer',
   margin: '0 10px',
   fontSize: '16px',
   transition: 'background-color 0.3s ease',
 };
 
 const projectsContainerStyle = {
   display: 'grid',
   gridTemplateColumns: 'repeat(2, 1fr)',
   gap: '30px',
   padding: '0 20px',
 };
 
 const cardStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  textAlign: 'left',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
 
};

 
 const subHeadingStyle = {
   fontSize: '23px',
   margin: '10px 0',
   fontWeight: '900',
   color: '#007BFF'
 };
 
 const projectNameStyle = {
   fontSize: '18px',
   color: '#555',
   marginBottom: '5px',
 };
 
 const dateStyle = {
   fontSize: '16px',
   color: '#666',
   marginBottom: '10px',
 };
 
 const detailStyle = {
   fontSize: '16px',
   color: '#555',
   marginBottom: '15px',
 };
 
 const linkStyle = {
   color: '#007BFF',
   textDecoration: 'none',
   fontWeight: 'bold',
   display: 'inline-block',
   marginTop: '10px',
 };

 const imageGridStyle = {
   display: 'grid',
   gridTemplateColumns: '1fr 1fr',
   gap: '10px',
   marginBottom: '15px',
 };

 const imageStyle = {
   width: '100%',
   height: '400px',
   objectFit: 'cover',
   borderRadius: '8px',
 };
 
 export default Projects;
