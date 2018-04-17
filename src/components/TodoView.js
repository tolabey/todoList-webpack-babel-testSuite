import React, {Component} from "react";
import I from "immutable";
import {connect} from "react-redux";
import TodoElementView from "./TodoElementView.js";
import TodoElementEdit from "./TodoElementEdit.js";

class TodoView extends Component {

  render() {
    const {todoList, searchText} = this.props;
    const todoItemsTbShown = todoList.filter(each => each.get("value", "").includes(searchText));

    return (
      <div className="todo">
        <ul className="todoUl">
          {
            todoItemsTbShown.map(each => (
              each.get("editable") ? <TodoElementEdit key={each.get("todoId")} each={each}/> : <TodoElementView key={each.get("todoId")} each={each}/>
            ))
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    todoList: store.get("todoList", I.List()),
    searchText: store.get("searchText", "")
  };
}

export default connect(mapStateToProps)(TodoView);
