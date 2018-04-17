import React, {Component} from "react";
import {helper} from "../helper.js";
import {connect} from "react-redux";
import {singleDataAction} from "../action/action.js";

class TodoAdd extends Component {

  render() {
    const {dispatch, addInput, debounceTimeout} = this.props;
    const {handleAddText} = helper;

    return (
      <div className="todoAdd">
        <div className="icon"><i className="far fa-plus-square" /></div>
        <input
            autoFocus
            type="text"
            onChange={handleAddText(dispatch, singleDataAction, "ADD_TEXT", "ADD_TODO", debounceTimeout)}
            value={addInput}
            placeholder="Add Todo"
        />
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    addInput: store.get("addInput", ""),
    debounceTimeout: store.get("debounceTimeout")
  };
}

export default connect(mapStateToProps)(TodoAdd);
