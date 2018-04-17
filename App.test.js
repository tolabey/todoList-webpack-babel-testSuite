import React from "react";
import ReactDOM from "react-dom";
import App from "./src/"

var chai = require("chai");
var assert = chai.assert;

const div = document.createElement("div");

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
