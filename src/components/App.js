import React, { Component } from "react";
import Header from "./Bootstrap/Header";

class App extends Component {
  state = {
    Dark: false,
    Name: ""
  };
  toggleHeader = () => {
    this.setState({
      Dark: !this.state.Dark
    });
  };
  changeHandler = e => {
    this.setState({
      Name: e.target.value
    });
  };
  render() {
    return (
      <div className="App">
        <Header dark={this.state.Dark} className="mb-5">
          Scaler Portfolio Generator Lite
        </Header>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-3">
              <input
                type="text"
                className="form-control"
                value={this.state.Name}
                onChange={this.changeHandler}
              />
            </div>
            <div className="col-12 text-center mb-3">
              <input
                type="text"
                className="form-control"
                value={this.state.Name}
                onChange={this.changeHandler}
              />
            </div>
            <div className="col-12 text-center">
              <button
                className={`btn btn${
                  this.state.Dark ? "-outline" : ""
                }-primary`}
                onClick={this.toggleHeader}
              >
                Toggle Dark Mode
              </button>
              <button
                className={`ml-4 btn btn${
                  this.state.Dark ? "-outline" : ""
                }-primary`}
                onClick={this.toggleHeader}
              >
                Toggle Dark Mode
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
