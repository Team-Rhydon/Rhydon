import React from 'react';

import '../../../src/assets/styles.css';

// Properties are color and text
const Button = (props) => {
  return (
    <div >
<<<<<<< HEAD
        <button
        onClick={()=> props.setStatus(props.text === "Yes" ? true : false)}
        className={`Button`}
        >
          {props.text}
        </button>
=======
      <button onClick={()=> props.setStatus(props.text === 'Yes' ? true : false)} className={`Button ${props.color}`}>{props.text}</button>
>>>>>>> main
    </div>
  );
};

export default Button;
