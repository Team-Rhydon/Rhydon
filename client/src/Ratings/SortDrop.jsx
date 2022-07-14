import React from "react";

class SortDrop extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: 'relevant'
    }
    this.handleChange= this.handleChange.bind(this);
  }

  //needs a handlechange and handlesubmit
  handleChange(event){
    event.preventDefault();
    this.setState({
      value: event.target.value
    }, this.props.sort(event.target.value))
  }

  render() {
    return (
      // {/* a display should indicate if list is filtered and how */}
      // {/*   options: helpful, newest, relevant */}
      <form>
        <label> {this.props.total} Reviews sorted by...
          {/* onChange eventlistener on select */}
          <select value={this.state.value} onChange={this.handleChange} >
            <option value="relevant">relevant</option>
            <option value="helpful">helpful</option>
            <option value="newest">newest</option>
          </select>
        </label>
      </form>
    )
  }
}

export default SortDrop;