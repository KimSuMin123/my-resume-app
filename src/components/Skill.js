import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaVuejs, FaNodeJs, FaJava, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiBootstrap, SiMysql, SiFigma, SiPostgresql, SiSpring, SiNotion } from 'react-icons/si';

const skillsWell = [
  { name: '웹개발', icon: <FaHtml5 /> },
  { name: '프론트엔드', icon: <FaReact /> },
  { name: 'React.js', icon: <FaReact /> },
  { name: 'Vue.js', icon: <FaVuejs /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'Bootstrap', icon: <SiBootstrap /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'Figma', icon: <SiFigma /> },
  { name: 'Mysql', icon: <SiMysql /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'Notion', icon: <SiNotion /> }
];

const skillsCan = [
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'Spring', icon: <SiSpring /> },
  { name: 'Python', icon: <FaPython /> },
  
];

const Skill = () => {
  return (
    <section id="skills">
      <div style={containerStyle}>
        <section style={sectionStyle}>
          <h2 style={headingStyle}>나의 스킬</h2>
          
          <div style={skillsCategoryStyle}>
            <h3 style={subHeadingStyle}>잘해요</h3>
            <div style={skillsContainerStyle}>
              {skillsWell.map((skill, index) => (
                <div key={index} style={skillBadgeStyle} className="skill-badge">
                  {skill.icon}
                  <span style={skillTextStyle}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div style={skillsCategoryStyle}>
            <h3 style={subHeadingStyle}>할 수 있어요</h3>
            <div style={skillsContainerStyle}>
              {skillsCan.map((skill, index) => (
                <div key={index} style={skillBadgeStyle} className="skill-badge">
                  {skill.icon}
                  <span style={skillTextStyle}>{skill.name}</span>
                </div>
              ))}
            </div>
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

const skillsCategoryStyle = {
  marginBottom: '20px',
};

const skillsContainerStyle = {
  display: 'flex',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
  
  margin: '0 auto',
};

const skillBadgeStyle = {
  backgroundColor: '#ffffff',
  border: '1px solid #b0c4de',
  borderRadius: '20px',
  padding: '10px 20px',
  margin: '8px',
  fontSize: '16px',
  display: 'flex',
  alignItems: 'center',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.2s, box-shadow 0.2s',
  cursor: 'pointer',
  maxWidth: '120px',
};

const skillTextStyle = {
  marginLeft: '8px',
};

export default Skill;

