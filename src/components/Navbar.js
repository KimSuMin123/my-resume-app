import React from 'react';

function Navbar() {
  const navbarStyle = {
    backgroundColor: '#333',
    padding: '10px',
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    position: 'fixed',    // 상단에 고정
    top: '0',             // 화면의 최상단에 위치
    width: '100%',        // 전체 너비 차지
    zIndex: '1000',       // 다른 요소 위에 위치
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

  return (
    <nav style={navbarStyle}>
      <ul style={navbarMenuStyle}>
        <li style={navbarItemStyle}><a style={navbarLinkStyle} href="#Home">홈</a></li>
        <li style={navbarItemStyle}><a style={navbarLinkStyle} href="#skills">기술</a></li>
        <li style={navbarItemStyle}><a style={navbarLinkStyle} href="#education">교육</a></li>
        <li style={navbarItemStyle}><a style={navbarLinkStyle} href="#experience">경력</a></li>
        <li style={navbarItemStyle}><a style={navbarLinkStyle} href="#awards">수상</a></li>
        <li style={navbarItemStyle}><a style={navbarLinkStyle} href="#volunteer">봉사</a></li>
        <li style={navbarItemStyle}><a style={navbarLinkStyle} href="#certifications">자격증</a></li>
        <li style={navbarItemStyle}><a style={navbarLinkStyle} href="#activities">활동</a></li>
        <li style={navbarItemStyle}><a style={navbarLinkStyle} href="#projects">프로젝트</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
