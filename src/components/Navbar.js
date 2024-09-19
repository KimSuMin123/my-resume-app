import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // 메뉴가 열렸는지 여부를 관리하는 상태

  // 메뉴 열기/닫기 토글 함수
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // 메뉴가 열리면 페이지 이동 후 메뉴를 닫기 위한 함수
  const handleLinkClick = () => {
    setIsOpen(false); // 링크 클릭 시 메뉴 닫기
  };

  const navbarStyle = {
    backgroundColor: '#333',
    height: '100vh',
    width: isOpen ? '250px' : '0', // 열리면 250px, 닫히면 0px
    position: 'fixed',
    top: '0', // 전체 네비게이션 바의 위치를 조정
    left: '0', // 화면 왼쪽에 붙음
    transition: '0.3s', // 슬라이드 애니메이션
    zIndex: '1000',
    overflowX: 'hidden', // 사이즈가 작을 때 내용 숨김
    padding: isOpen ? '10px' : '0', // 열리면 padding 적용
  };

  const hamburgerStyle = {
    position: 'fixed',
    top: '10px',
    fontSize: '30px',
    color: isOpen ? 'white' : 'black', // 메뉴가 열렸을 때만 흰색 글씨
    backgroundColor: isOpen ? '#333' : 'transparent', // 메뉴가 열렸을 때만 배경색 적용
    cursor: 'pointer',
    zIndex: '1100', // 네비게이션보다 위에 표시
    padding: '10px', // 버튼의 크기를 늘려서 X가 더 잘 보이게 함
  };

  const navbarMenuStyle = {
    listStyleType: 'none',
    padding: '0',
    marginTop: '55px', // 메뉴 시작 위치를 조정하여 X와 겹치지 않게 함
  };

  const navbarItemStyle = {
    padding: '10px',
  };

 
  const navbarLinkStyle = {
    textDecoration: 'none',
    color: 'white', // 확실히 보이도록 밝은 색상 사용
    fontWeight: 'bold'
  };
  
  return (
    <nav style={navbarStyle}>
      {/* 햄버거 버튼, 메뉴 열렸을 때는 X 표시 */}
      <span style={hamburgerStyle} onClick={toggleNavbar}>
        {isOpen ? '✕' : '☰'}
      </span>
      {/* 네비게이션 메뉴 */}
      <ul style={navbarMenuStyle}>
        <li style={navbarItemStyle}><a style={navbarLinkStyle} href="#Home" onClick={handleLinkClick}>홈</a></li>
        <li style={navbarItemStyle}><a style={navbarLinkStyle} href="#skills" onClick={handleLinkClick}>기술</a></li>
        <li style={navbarItemStyle}><a style={navbarLinkStyle} href="#education" onClick={handleLinkClick}>교육</a></li>
        <li style={navbarItemStyle}><a style={navbarLinkStyle} href="#experience" onClick={handleLinkClick}>경력</a></li>
        <li style={navbarItemStyle}><a style={navbarLinkStyle} href="#awards" onClick={handleLinkClick}>수상</a></li>
        <li style={navbarItemStyle}><a style={navbarLinkStyle} href="#volunteer" onClick={handleLinkClick}>봉사</a></li>
        <li style={navbarItemStyle}><a style={navbarLinkStyle} href="#certifications" onClick={handleLinkClick}>자격증</a></li>
        <li style={navbarItemStyle}><a style={navbarLinkStyle} href="#activities" onClick={handleLinkClick}>활동</a></li>
        <li style={navbarItemStyle}><a style={navbarLinkStyle} href="#projects" onClick={handleLinkClick}>프로젝트</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
