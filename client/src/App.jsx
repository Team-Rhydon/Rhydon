import React, {Component} from "react";
import Related from './Related/Related.jsx';
import Overview from './overview/Overview.jsx'

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Rhydon Store </h1>
        <Overview />
      </div>
    );
  }
}

export default App;