import {singleDataAction} from "./action/action";

export const helper = {
  handleAddText(dispatch, action, addInputType, todoType, debounceTimeout, toReset) {
    return e => {
      dispatch(action(addInputType, {value: toReset ? "" : e.target.value}));
      helper.debounce(dispatch, helper.handleSubmit, e.target.value, singleDataAction, todoType, debounceTimeout || null, addInputType);
    };
  },

  handleEditedText(dispatch, action, id, toReset, val) {
    return e => {
      const editingTodo = {};

      editingTodo[id] = toReset ? val : e.target.value;
      dispatch(action("EDIT_TEXT", editingTodo));
    };
  },

  handleSubmit(dispatch, action, type, data, clearType = null) {
    return () => {
      const trimData = data.value.trim();

      if (trimData !== "") {
        // when submit something, editing is over it should reset by using submitted data.
        dispatch(action(clearType, {value: ""}));
        dispatch(action(type, {todoId: data.id || Date.now(), value: trimData, editable: false}));
      }
    };
  },

  handleSearchText(dispatch, action, type) {
    return e => {
      dispatch(action(type, {value: e.target.value}));
    };
  },

  handleTodoButtons(dispatch, action, type, id) {
    return e => {
      if (e.target.type === "submit") {
        dispatch(action(type, id));
      }
    };
  },

  debounce(dispatch, operator, data, action, type, timeout, clearType) {
    clearTimeout(timeout);
    const newTimeout = setTimeout(operator(dispatch, action, type, {value: data}, clearType), 800);

    dispatch(action("DEBOUNCE_TIMEOUT", newTimeout));
  }
};
