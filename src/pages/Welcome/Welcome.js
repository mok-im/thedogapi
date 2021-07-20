import imgWelcome from '../../assets/image/girl-and-pet.png'
import React from 'react';
import './Welcome.scss'

const Welcome = () => {
  return (
    <div className="Welcome">
      <img src={imgWelcome} alt="welcome" />
    </div>
  );
};

export default Welcome;