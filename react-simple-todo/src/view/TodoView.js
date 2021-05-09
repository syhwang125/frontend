import React, {Component} from 'react';
import { observer } from 'mobx-recat';

@observer
class TodoView extends Component {
    render() {
        const { todo } = this.props;
        console.log('rebder - ' + todo.task);

        return (
            <li>
                <input type='checkbox' checked={todo.completed}
                    onChange={ () => todo.completed = !todo.completed } 
                    />
                    {todo.task}
            </li>
        )
    }
}

export default TodoView;