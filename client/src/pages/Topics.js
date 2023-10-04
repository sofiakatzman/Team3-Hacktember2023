import React from 'react';
import { useNavigate } from 'react-router-dom';

const Topics = () => {
  const navigate = useNavigate();

  const handleButtonClick = (topic) => {
    // Use the `navigate` function to change the URL
    navigate(`/videos/${topic}`);
  };

  return (
    <div>
      <button onClick={() => handleButtonClick('math')}>MATH</button>
      <button onClick={() => handleButtonClick('science')}>SCIENCE</button>
      <button onClick={() => handleButtonClick('english')}>ENGLISH</button>
      <button onClick={() => handleButtonClick('history')}>HISTORY</button>
    </div>
  );
};

export default Topics;


