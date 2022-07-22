import React, {useState} from "react";

function SortDrop(props) {
  const [value, setValue] = useState('relevant');
  //needs a handlechange and handlesubmit
  let handleChange = (event) => {
    event.preventDefault()
    props.sort(event.target.value);
    setValue(()=> event.target.value);
  }


  return (
    // {/* a display should indicate if list is filtered and how */}
    // {/*   options: helpful, newest, relevant */}
    <form className="sortDrop">
      <label> {props.total} Reviews sorted by...
        {/* onChange eventlistener on select */}
        <select value={value} onChange={e => handleChange(e)} >
          <option value="relevant">relevant</option>
          <option value="helpful">helpful</option>
          <option value="newest">newest</option>
        </select>
      </label>
    </form>
  )
}


export default SortDrop;