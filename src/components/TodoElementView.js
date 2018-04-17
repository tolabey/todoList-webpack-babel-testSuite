import React, {Component} from "react";
import {connect} from "react-redux";
import {helper} from "../helper";
import {singleDataAction} from "../action/action";

class TodoElementView extends Component {

  render() {
    const {dispatch, each} = this.props;
    const {handleTodoButtons} = helper;

    return (
      <li>
        <div className="todoText">{each.get("value")}</div>
        <button
            className="todoButton fas fa-edit"
            id={each.get("todoId")}
            onClick={handleTodoButtons(dispatch, singleDataAction, "EDIT_LIST_ELEMENT", each.get("todoId"), null)}
        />
        <button
            className="todoButton fas fa-trash"
            id={each.get("todoId")}
            onClick={handleTodoButtons(dispatch, singleDataAction, "REMOVE_LIST_ELEMENT", each.get("todoId"))}
        />
      </li>);
  }
}

export default connect()(TodoElementView);
