import { observable, action, computed, makeObservable , toJS} from 'mobx';

class TodoStore {

    constructor() {
        makeObservable(this);   //mobx5 버전이후 
    }

    @observable 
    _todo = {}   // id, title, date 

    @observable
    _todos = [];

    get todo() {
        return this._todo;
    }

    get todos() {
        return this._todos ? this._todos.slice() : [];
        // return toJS(this._todos);
    }

    @action
    setTodoProps(name, value) {
        this._todo = {
            ...this._todo,
            [name] : value
        }
    }

    @action 
    addTodo(todo) {
        this._todos.push(todo);
    }
}


export default new TodoStore();