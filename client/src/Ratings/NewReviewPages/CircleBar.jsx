import React, {useState} from 'react';

const CircleBar = (props) => {

  return (
    <div >
      <svg
        style={{position: 'absolute'}}
        height="128px"
        width="128"
        viewbox="0 0 128 128"
      >
        <circle
        cx="64"
        cy="64"
        r="64"
        strokeWidth="8px"
        >

        </circle>
      </svg>
      <svg className="conic-gradient"
        style={{position: 'relative'}}
        height="96px" width="96" viewbox="0 0 96 96"
          left="16"
          top="16"
        >
          <circle
            cx="48"
            cy="48"
            r="40"
            >
        </circle>
      </svg>
    </div>
  )
}

export default CircleBar;