import React, { Component } from "react";
import Clock from "./Clock";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { deadline: "October, 30, 2021" };
  }
  render() {
    return (
      <div>
        {/* <h1><div className="App-date">{this.state.deadline}</div></h1> */}
        <Clock deadline={this.state.deadline} />
      </div>
    );
  }
}
export default App;
