import React, {Component} from "react";
import {helper} from "../helper.js";
import {connect} from "react-redux";
import {singleDataAction} from "../action/action.js";

class TodoSearch extends Component {

  render() {
    const {dispatch, searchText} = this.props;
    const {handleSearchText} = helper;

    return (
      <div className="todoSearch">
        <div className="icon">
          <i className="fas fa-search" />
        </div>
        <input
            type="text"
            onChange={handleSearchText(dispatch, singleDataAction, "SEARCH_TEXT")}
            value={searchText}
            placeholder="Search Todo"
        />
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    searchText: store.get("searchText", ""),
    debounceTimeout: store.get("debounceTimeout")
  };
}

export default connect(mapStateToProps)(TodoSearch);
