import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Preloader from "./Preloader";

class App extends Component {
  /**
   * both defining a constructor or
   * using state as a variable work the same way
   */
  // constructor(props) {
  //   super(props);
  //   this.state = { lat: null, errorMessage: "" };
  // }
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Preloader message="Please allow loaction access" />;
  }
  render() {
    return (
      <form name="contact" netlify>
        <p>
          <label>
            Name <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Email <input type="email" name="email" />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
