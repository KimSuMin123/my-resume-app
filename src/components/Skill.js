

import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaVuejs, FaNodeJs, FaJava, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiBootstrap, SiMysql, SiFigma, SiPostgresql, SiSpring } from 'react-icons/si';

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
  { name: 'PostgreSQL', icon: <SiPostgresql /> }
];

const skillsCan = [
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'Spring', icon: <SiSpring /> },
  { name: 'Python', icon: <FaPython /> }

];

const Skill = () => {
  return (
    <section id="skills">
    <div style={containerStyle}>
      <h3 style={headingStyle}>나의 스킬</h3>
      
      <h4 style={subHeadingStyle}>잘해요</h4>
      <div style={skillsContainerStyle}>
        {skillsWell.map((skill, index) => (
          <div key={index} style={skillBadgeStyle}>
            {skill.icon}
            <span style={skillTextStyle}>{skill.name}</span>
          </div>
        ))}
      </div>
      
      <h4 style={subHeadingStyle}>할 수 있어요</h4>
      <div style={skillsContainerStyle}>
        {skillsCan.map((skill, index) => (
          <div key={index} style={skillBadgeStyle}>
            {skill.icon}
            <span style={skillTextStyle}>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

const containerStyle = {
  textAlign: 'center',
  padding: '60px',
  background: '#fff',
  borderRadius: '10px',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',

};

const headingStyle = {
  marginBottom: '20px',
  fontSize: '28px',
  color: '#333',
};

const subHeadingStyle = {
  marginBottom: '10px',
  fontSize: '22px',
  fontWeight: 'bold',
  color: '#555',
};

const skillsContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  marginBottom: '20px',
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
};

const skillBadgeHoverStyle = {
  transform: 'translateY(-5px)',
  boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.15)',
};

const skillTextStyle = {
  marginLeft: '8px',
};

export default Skill;
