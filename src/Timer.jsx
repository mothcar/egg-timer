import { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(3538); // 58:58 in seconds
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime(time => time - 1);
      }, 1000);
    } else if (time === 0) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStart = () => setIsActive(true);
  const handleReset = () => {
    setTime(3538);
    setIsActive(false);
  };
  const handleEdit = () => {
    const newTime = prompt('Enter new time in MM:SS format');
    if (newTime) {
      const [mins, secs] = newTime.split(':').map(Number);
      setTime(mins * 60 + secs);
    }
  };

  return (
    <div className="timer">
      <div className="timer-display">{formatTime(time)}</div>
      <div className="controls">
        <button className="edit" onClick={handleEdit}>Edit Timer</button>
        <button className="reset" onClick={handleReset}>Reset</button>
        <button className="start" onClick={handleStart}>Start</button>
      </div>
    </div>
  );
}

export default Timer;