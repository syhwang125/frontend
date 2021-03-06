import React, { Component } from 'react';
import TodoListView from '../views/TodoListView';

import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';

@inject('todoStore')
@autobind
@observer
class TodoListContainer extends Component {

  onSelectedTodo(todo) {
    this.props.todoStore.selectedTodo(todo);
  }

  render(){

    // const { todos } = this.props.todoStore;
    // searchText는 변경할 데이터이므로 const -> let 으로 변경 
    let { todos, searchText } = this.props.todoStore;

    todos = todos.filter( (todo) => todo.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);

    // console.log(todos)

    return (
      <TodoListView
        todos = { todos }
        onSelectedTodo = { this.onSelectedTodo }
      />
    )
  }
}

export default TodoListContainer;