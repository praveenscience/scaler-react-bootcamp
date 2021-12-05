import React, { Component } from "react";
import Header from "./Bootstrap/Header";

class App extends Component {
  state = {
    Dark: true
  };
  toggleHeader = () => {
    this.setState({
      Dark: !this.state.Dark
    });
  };
  render() {
    return (
      <div className="App">
        <Header dark={this.state.Dark} className="Header">
          <span>Scaler Portfolio Generator</span>
          <button
            className="btn btn-sm btn-outline-primary rounded-circle"
            onClick={this.toggleHeader}
          >
            <i
              className={"fa fa-" + (this.state.Dark ? "sun" : "moon") + "-o"}
            ></i>
          </button>
        </Header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-6">Form</div>
            <div className="col-12 col-sm-6">Code</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
