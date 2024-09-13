import { Html } from '@react-three/drei';
import React from 'react';

export function DailyTaskScreen() {
  return (
    <Html style={{
      color: 'white',
      textAlign: 'center',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: '32px'
    }}>
      Today's Task: <br />
      - Complete your project report <br />
      - Attend the team meeting at 3 PM <br />
      - Submit timesheet by end of the day
    </Html>
  );
}
