import React, {Component} from "react";
import Related from './Related/Related.jsx';
import RatingsWidget from './Ratings/RatingsWidget.jsx';
const axios = require("axios");
import Overview from './overview/Overview.jsx'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      product: {}
    }
  }
  componentDidMount () {
    axios.get('overview/products/', {params: {id: 40348}})
      .then(response => {
        return this.setState({
          product: response.data
        }, ()=> console.log(this.state.product))
      })
  }
  render(){
    return(
      <div className="App">
        <h1> Rhydon Store </h1>
        <div style={{border: "1px solid black", height: "33em"}}>
          Product Overview Component
          <h2>Product Overview Component</h2>
        </div>
        <div style={{border: "1px solid black", height: "33em"}}>
          <Related />
        </div>
        <div>
          <RatingsWidget product={this.state.product}/>
        </div>
      </div>
    );
  }
}

export default App;