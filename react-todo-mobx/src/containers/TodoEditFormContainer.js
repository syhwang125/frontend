import React, { Component } from 'react';
import TodoEditFormView from '../views/TodoEditFormView';

import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';

@inject('todoStore')
@autobind         // inject 이전에 선언해야 함 
@observer
class TodoEditFormContainer extends Component {

  onSetTodoProps(name, value) {
    this.props.todoStore.setTodoProps(name, value);
  }

  render(){

    const { todoStore } = this.props;

    return(
      <TodoEditFormView 
        todo = { todoStore.todo }
        onSetTodoProps = { this.onSetTodoProps }
      />
    )
  }
}

export default TodoEditFormContainer;