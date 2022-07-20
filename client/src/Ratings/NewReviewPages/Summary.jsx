import React, {useState} from "react";

const Summary = props => {
  const [value, setValue] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    props.setSum(value);
  }

  return (
    <form className="New-Review-Summary" onSubmit={handleSubmit} >
      <input
        placeholder="(Optional) Example: Best purchase ever!"
        value={value}
        maxLength={60}
        onChange={(e)=>setValue(e.target.value)}
      />
      <br></br>
      <div className="container-btn">
        <input className="submit-btn" type="submit" value="Submit" />
      </div>
    </form>
  )
}

export default Summary;