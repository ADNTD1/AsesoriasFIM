// src/components/HomeAnim.jsx
import React from 'react';
import Lottie from 'lottie-react';
import homeAnimation from '../animations/HomeAnim.json';

const HomeAnim = () => {
  return (
    <div style={{ width: '100%', maxWidth: 300, margin: '0 auto' }}>
      <Lottie animationData={homeAnimation} loop={true} />
    </div>
  );
};

export default HomeAnim;
