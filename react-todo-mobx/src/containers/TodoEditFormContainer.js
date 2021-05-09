import React, { Component } from 'react';
import TodoEditFormView from '../views/TodoEditFormView';

import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';
import generateId from '../IDGenerator';

@inject('todoStore')
@autobind         // inject 아래에 선언해야 함 
@observer
class TodoEditFormContainer extends Component {

  onSetTodoProps(name, value) {
    this.props.todoStore.setTodoProps(name, value);
  }

  onAddTodo() {
    let { todo } = this.props.todoStore;
    todo = { ...todo, id: generateId(5)}    //전개연산자 
    this.props.todoStore.addTodo(todo);
  }

  onUpdateTodo() {
    this.props.todoStore.updateTodo();
  }

  onRemoveTodo() {
    this.props.todoStore.removeTodo();
  }

  render(){

    const { todoStore } = this.props;    // props 에서 꺼내 씀 

    return(
      <TodoEditFormView 
        todo = { todoStore.todo }
        onSetTodoProps = { this.onSetTodoProps }   // this.onSetTodoProps.bind(this)  - @autobind 로 처리 
        onAddTodo = {this.onAddTodo} 
        onUpdateTodo = { this.onUpdateTodo }
        onRemoveTodo = { this.onRemoveTodo }
      />
    )
  }
}

export default TodoEditFormContainer;