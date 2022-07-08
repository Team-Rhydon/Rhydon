import React from "react";

class SortDrop extends React.Component{
  constructor(props){
    super(props);
    this.state = {value: "relevance"}
  }

  //needs a handlechange and handlesubmit
  render() {
    return (
      // {/* a display should indicate if list is filtered and how */}
      // {/*   options: helpful, newest, relevant */}
      <form>
        <label> Reviews sorted by...
          {/* onChange eventlistener on select */}
          <select value={this.state.value}  >
            <option value="relevance">relevance</option>
            <option value="helpful">helpful</option>
            <option value="newest">newest</option>
          </select>
        </label>
      </form>
    )
  }
}

export default SortDrop;