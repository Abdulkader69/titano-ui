import React from 'react';

const GraphCircle = () => {
  return (
    <svg viewBox="0 0 56 56">
      <defs>
        <linearGradient id="_f177b3aim" x1="50%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgb(203,0,127)"></stop>
          <stop offset="90%" stopColor="rgb(204,12,138)"></stop>
        </linearGradient>
        <linearGradient id="_ctq2ywk93" x1="0%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="rgb(204,85,200)"></stop>
          <stop offset="90%" stopColor="rgb(204,12,138)"></stop>
        </linearGradient>
      </defs>
      <path
        className="rebase-hide hidden"
        fill="none"
        d="
              M 3 28
              a 25 25 0 1 1 50 0
              a 25 25 0 1 1 -50 0
            "
        strokeWidth="6"
      ></path>
      <path
        className=""
        fill="none"
        stroke="url(#_f177b3aim)"
        strokeDasharray="78.53981633974483,78.53981633974483"
        strokeLinecap="round"
        d="
              M 28 3
              a 25 25 0 1 1 0 50
            "
        strokeWidth="6"
      ></path>
      <path
        className=""
        fill="none"
        stroke="url(#_ctq2ywk93)"
        strokeDasharray="191.37125096342814,78.53981633974483"
        strokeLinecap="round"
        d="
              M 28 53
              a 25 25 0 0 1 0 -50
            "
        strokeWidth="6"
      ></path>
    </svg>
  );
};

export default GraphCircle;
