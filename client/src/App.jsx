import React, { Component} from "react";
import "./app.css";
import RatingsWidget from "./Ratings/Widget.jsx";
import Related from './Related/Related.jsx';

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Rhydon Store </h1>
        {/* <div style={{border: "1px solid black", height: "33em"}}> */}
          {/* Product Overview Component */}
          {/* <h2>Product Overview Component</h2> */}
        {/* </div> */}
        {/* <div style={{border: "1px solid black", height: "33em"}}> */}
          {/* <Related /> */}
        {/* </div> */}
        <div>
          <RatingsWidget />
        </div>
      </div>
    );
  }
}

export default App;