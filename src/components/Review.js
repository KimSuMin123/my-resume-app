import React, { useState, useEffect } from 'react';
import reviewData from '../review.json';

const Review = ({ closeModal }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // 리뷰 데이터를 설정
    setReviews(reviewData);
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div style={containerStyle}>
      <div style={headingContainerStyle}>
        <h2 style={headingStyle}>동료들이 본 나의 활동</h2>
        <button style={closeButtonStyle} onClick={closeModal}>
          X
        </button>
      </div>

      <ul style={listStyle}>
        {reviews.map((review, index) => (
          <li
            key={index}
            style={{
              ...reviewItemStyle,
              backgroundColor: hoveredIndex === index ? '#666' : '#444',
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {review.text}
            <br /> {review.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Styles
const containerStyle = {
  padding: '40px 20px',
  fontFamily: 'Arial, sans-serif',
  lineHeight: '1.6',
  backgroundColor: '#333',
  color: '#fff',
  maxWidth: '1300px',
  margin: '0 auto',
  borderRadius: '10px',
};

const headingContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '30px',
};

const headingStyle = {
  fontSize: '28px',
  fontWeight: 'bold',
  color: '#ffffff',
};

const closeButtonStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#ffffff',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
};

const listStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '20px',
  paddingLeft: '0px',
  listStyleType: 'none',
};

const reviewItemStyle = {
  padding: '20px',
  backgroundColor: '#444',
  borderRadius: '10px',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  color: '#ffffff',
  textAlign: 'center',
  cursor: 'pointer',
};

export default Review;
