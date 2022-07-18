import React, {useState} from "react";

const Summary = props => {
  const [value, setValue] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    props.setSum(value);
  }

  return (
    <form className="New-Review-Summary" onSubmit={handleSubmit} >
      <textarea
        placeholder="Example: Best purchase ever!"
        value={value}
        maxLength={60}
        onChange={(e)=>setValue(e.target.value)}
      >
      </textarea>
      <br></br>
      <div className="container-btn">
        <input type="submit" value="Submit" />
      </div>
    </form>
  )
}

export default Summary;