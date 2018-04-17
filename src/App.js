import React, {Component} from "react";
import TodoView from "./components/TodoView.js";
import TodoAdd from "./components/TodoAdd.js";
import TodoSearch from "./components/TodoSearch.js";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {reducer} from "./reducer/reducer.js";


class App extends Component {
  constructor(props) {
    super(props);
    this.store = createStore(reducer);
  }

  render() {
    return (
      <Provider store={this.store}>
        <div className="App">
          <div className={"container"}>
            <div className={"title"}>
              {"Todo"}
            </div>
            <TodoAdd/>
            <TodoSearch/>
            <TodoView/>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
