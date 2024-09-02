import React, { useState } from 'react';
import pic from '../img/pic.jpg';
import Review from './Review';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="Home">
    <header style={headerStyle}>
      <div style={containerStyle}>
        <div style={imageContainerStyle}>
          <img
            src={pic}
            alt="김수민 프로필"
            style={imageStyle}
          />
        </div>
        <div style={infoStyle}>
          <h1 style={nameStyle}>김수민 | Portfolio</h1>
          <p style={descriptionStyle}>
            👋 새로운 작업 환경을 두려워하지 않고 학습하는 개발자, 김수민입니다.
          </p>
          <div style={contactContainerStyle}>
            <p>
              ✉️ <a href="mailto:tntn211@naver.com" style={linkStyle}>tntn211@naver.com</a>
              &nbsp;|&nbsp;
              📱 <a href="tel:010-8028-7565" style={linkStyle}>010-8028-7565</a>
            </p>
          </div>
          <div style={linksContainerStyle}>
            <p>
              🐙 <a href="https://github.com/KimSuMin123" target="_blank" rel="noopener noreferrer" style={linkStyle}>GitHub</a>
              &nbsp;|&nbsp;
              📝 <a href="https://tnrn211.tistory.com/" target="_blank" rel="noopener noreferrer" style={linkStyle}>블로그</a>
            </p>
            <p>
              📍 주소: (14243) 경기 광명시 디지털로 64
            </p>
            <button style={buttonStyle} onClick={openModal}>
              팀원 리뷰 보기
            </button>
            {isModalOpen && (
              <div style={modalOverlayStyle} onClick={closeModal}>
                <div style={modalContentStyle} onClick={e => e.stopPropagation()}>
                  <div style={reviewsContainerStyle}>
                    <Review closeModal={closeModal} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
    </section>
  );
};

const headerStyle = {
  padding: '100px 20px',
  textAlign: 'left',
  backgroundColor: '#f7f7f7',
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '40px',
  flexWrap: 'wrap',  // Allows wrapping in smaller screens
};

const imageContainerStyle = {
  flexShrink: 0,
  padding: '0px',
  textAlign: 'center',  // Center the image in smaller screens
};

const imageStyle = {
  width: '200px',
  height: '200px',
  borderRadius: '50%',
  objectFit: 'cover',
  border: '4px solid #ddd',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const infoStyle = {
  maxWidth: '600px',
  textAlign: 'center',  // Center the text in smaller screens
};

const nameStyle = {
  margin: '0 0 10px 0',
  fontSize: '36px',
  fontWeight: 'bold',
  color: '#333',
};

const descriptionStyle = {
  fontSize: '18px',
  color: '#555',
  lineHeight: '1.6',
  marginBottom: '20px',
};

const contactContainerStyle = {
  fontSize: '16px',
  color: '#555',
  marginBottom: '20px',
};

const linksContainerStyle = {
  fontSize: '16px',
  color: '#555',
};

const linkStyle = {
  color: '#007bff',
  textDecoration: 'none',
  fontWeight: 'bold',
};

const buttonStyle = {
  marginTop: '20px',
  padding: '12px 24px',
  fontSize: '16px',
  color: '#fff',
  backgroundColor: '#007bff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const modalOverlayStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: '1000',
};

const modalContentStyle = {
  backgroundColor: '#333',
  padding: '20px',
  borderRadius: '10px',
  maxWidth: '90%',
  maxHeight: '80%',
  overflowY: 'auto',
  position: 'relative',
};

const reviewsContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '20px',
  marginTop: '20px',
};

export default Header;
