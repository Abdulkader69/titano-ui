import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const formatRemainingTime = (time) => {
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return `${minutes}:${seconds}`;
};

const renderTime = ({ remainingTime }) => {
  // if (remainingTime === 0) {
  //   return <div className="timer">Too lale...</div>;
  // }

  return (
    <div className="timer">
      <div className="text">REBASES EVERY 30 MINUTES</div>
      <div className="value">{formatRemainingTime(remainingTime)}</div>
    </div>
  );
};

const GraphCircle = () => {
  return (
    <CountdownCircleTimer
      isPlaying
      duration={1800}
      colors={'#d81384'}
      onComplete={() => [true, 1000]}
    >
      {renderTime}
    </CountdownCircleTimer>
  );
};

export default GraphCircle;
