import React, { Component } from "react";
import User18Button from "./components/User18Button";
import User12Button from "./components/User12Button";

class MainPage extends Component {
  render() {
    return (
      <div>
        <User18Button />
        <User12Button />
      </div>
    );
  }
}

export default MainPage;