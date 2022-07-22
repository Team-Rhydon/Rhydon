import React from "react"

import "../../../src/assets/styles.css";

// Properties are color and text
const Button = (props) => {
   return (
    <div >
        <button
        onClick={()=> props.setStatus(props.text === "Yes" ? true : false)}
        className={`Button`}
        >
          {props.text}
        </button>
    </div>
   )
}

export default Button