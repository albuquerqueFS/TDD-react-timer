import React, { useState } from 'react';
import './Timer.css';

const Timer = () => {
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  const [isOn, setIsOn] = useState();

  const startTimer = () => {
    console.log('Starting timer');
  }

  const stopTimer = () => {
    console.log('Stop timer');
  }

  const resetTimer = () => {
    console.log('Reseting Timer');
  }

  return (
    <div className="timer-container"></div>
  )
}

export default Timer;