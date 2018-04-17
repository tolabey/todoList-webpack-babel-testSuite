import React, {Component} from "react";
import {connect} from "react-redux";
import I from "immutable";
import {helper} from "../helper.js";
import {singleDataAction} from "../action/action.js";

class TodoElementEdit extends Component {


  render() {
    const {dispatch, each, editText} = this.props;
    const {handleEditedText, handleSubmit} = helper;


    return (
      <li>
        <input
            autoFocus
            className="todoText"
            value={editText.get(`${each.get("todoId", "")}`, each.get("value", ""))}
            onChange={handleEditedText(dispatch, singleDataAction, each.get("todoId", I.Map()))}
        />
        <button
            className="todoButton fas fa-check"
            id={each.get("todoId")}
            onClick={
              handleSubmit(dispatch, singleDataAction, "EDIT_TODO",
                {value:
                    editText.get(`${each.get("todoId", "")}`),
                  id: each.get("todoId")}
              )
            }
        />
        <button className="todoButton fas fa-ban" id={each.get("todoId")}
            onClick={
              handleSubmit(dispatch, singleDataAction, "CANCEL_EDIT_TODO",
              {value: each.get("value", "-"), id: each.get("todoId")})
            }
        />
      </li>);
  }
}


function mapStateToProps(store) {
  return {
    editText: store.get("editText", I.Map())
  };
}

export default connect(mapStateToProps)(TodoElementEdit);
