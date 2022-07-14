import React, {useState} from "react";

const Body = props => {
  const [value, setValue] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    props.setBody(value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <textarea
          className="New-Review-Body"
          style={{height: "33vh", width: "25vw"}}
          placeholder="Why did you like the product or not?"
          value={value}
          onChange={(e)=>setValue(e.target.value)}
          required>
        </textarea>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Body;