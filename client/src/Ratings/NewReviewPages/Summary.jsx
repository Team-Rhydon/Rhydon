import React, {useState} from "react";

const Summary = props => {
  const [value, setValue] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    props.setSum(value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <textarea
          className="New-Review-Summary"
          placeholder="Example: Best purchase ever!"
          value={value}
          onChange={(e)=>setValue(e.target.value)}
          required >
        </textarea>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Summary;