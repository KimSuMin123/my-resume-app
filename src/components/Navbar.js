import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item"><a href="#Home">홈</a></li>
        <li className="navbar-item"><a href="#skills">기술</a></li>
        <li className="navbar-item"><a href="#education">교육</a></li>
        <li className="navbar-item"><a href="#experience">경력</a></li>
        <li className="navbar-item"><a href="#awards">수상</a></li>
        <li className="navbar-item"><a href="#volunteer">봉사</a></li>
        <li className="navbar-item"><a href="#certifications">자격증</a></li>
        <li className="navbar-item"><a href="#activities">활동</a></li>
        <li className="navbar-item"><a href="#projects">프로젝트</a></li>
      </ul>
    </nav>
  );
}
const navbarStyle = {
    backgroundColor: '#333',
    padding: '10px',
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
  };
  
  const navbarMenuStyle = {
    listStyleType: 'none',
    margin: '0',
    padding: '0',
    display: 'flex',
    justifyContent: 'space-around',
  };
  
  const navbarItemStyle = {
    padding: '10px',
  };
  
  const navbarLinkStyle = {
    textDecoration: 'none',
    color: 'white',
    fontWeight: 'bold',
  };
  
  const navbarLinkHoverStyle = {
    color: '#ddd',
  };
export default Navbar;
