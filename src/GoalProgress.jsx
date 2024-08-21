import React from 'react';
import './App.css'; 

const GoalProgress = ({ percentage }) => {
  const strokeDashoffset = 440 - (440 * percentage) / 100;

  return (
    <div className="goal-progress">
      <svg className="circle-svg" width="150" height="150">
        <circle cx="75" cy="75" r="70" strokeDasharray="440" />
        <circle
          cx="75"
          cy="75"
          r="70"
          strokeDasharray="440"
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      <p>{percentage}%</p>
    </div>
  );
};

export default GoalProgress;
