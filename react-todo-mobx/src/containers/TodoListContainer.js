import React, { Component } from 'react';
import TodoListView from '../views/TodoListView';

import { inject, observer } from 'mobx-react';

@inject('todoStore')
@observer
class TodoListContainer extends Component {
  render(){

    const { todos } = this.props.todoStore;
    console.log(todos)

    return (
      <TodoListView
        todos = { todos }
      />
    )
  }
}

export default TodoListContainer;