import React, { useState } from 'react';
import desktopBackground from './desktop-background.jpg';
import notepadBackground from './notepad-background.jpg';

import './DailyTaskScreen.css';

export function DailyTaskScreen({ onLogout }) {
  const screenStyle = {
    backgroundImage: `url(${desktopBackground})`,
    backgroundSize: '95% 90%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  const notepadStyle = {
    backgroundImage: `url(${notepadBackground})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <div className="daily-task-screen" style={screenStyle}>
      <div className="notepad" style={notepadStyle}>
        <h2>Today's Tasks:</h2>
        <ul>
          <li>Complete your project report</li>
          <li>Attend the team meeting at 3 PM</li>
          <li>Submit timesheet by end of the day</li>
        </ul>
        <button onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
}
