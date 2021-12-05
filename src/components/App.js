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
        <Header dark={this.state.Dark} className="mb-5 justify-content-center">
          <span>Scaler Portfolio Generator</span>
          <button
            className="btn btn-sm btn-outline-primary ml-3 rounded-circle"
            onClick={this.toggleHeader}
          >
            <i
              className={"fa fa-" + (this.state.Dark ? "sun" : "moon") + "-o"}
            ></i>
          </button>
        </Header>
      </div>
    );
  }
}

export default App;
