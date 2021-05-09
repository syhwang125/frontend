
import { inject, observer } from 'mobx-react';
import TodoView from './TodoView';

@inject('todoStore')
@observer 
class TodoListContainer extends Component {

    render() {
        const { todos } = this.props.todoStore;
        console.log("list-render")

        return(
            <ul>
                { todos.map( todo => {
                    return <TodoView todo={todo} key={todo.id} />
                })}
            </ul>
        )
    }
}

export default TodoListContainer ; 