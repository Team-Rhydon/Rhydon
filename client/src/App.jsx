import React, { Component} from "react";
import "./App.css";
import RatingsWidget from "./Ratings/Widget.jsx";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> App test </h1>
        <div></div>
        <div></div>
        <div>
          <RatingsWidget />
        </div>
      </div>
    );
  }
}

export default App;