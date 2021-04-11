import { observable, action, computed, makeObservable , toJS} from 'mobx';

class TodoStore {

    constructor() {
        makeObservable(this);   //mobx5 버전이후 mobx6에서는 반드시 정의해야, 데이터 변경시 반영됨. 
    }

    @observable 
    _todo = {
       // title : 'test', 
    }   // id, title, date 

    @observable
    _todos = [];

    get todo() {
        return this._todo;
    }

    get todos() {
        return this._todos ? this._todos.slice() : [];
        // return toJS(this._todos);
    }

    get searchText() {
        return this._searchText;
    }

    @action
    setTodoProps(name, value) {
        this._todo = {
            ...this._todo,    // ... 전개 연산자로 전체 객체르르 그대로 넘겨줌 
            [name] : value
        }
    }

    @action
    setSearchText(searchText) {
        this._searchText = searchText;
    }

    @action 
    addTodo(todo) {
        this._todos.push(todo);
    }

    @action
    selectedTodo(todo) {
        this._todo = todo;
    }

    @action
    updateTodo() {
        let foundTodo = this._todos.find( (todo) => todo.id === this._todo.id ) ;
        foundTodo.title = this._todo.title;
        foundTodo.date = this._todo.date;

        this._todo = {};
    }


    @action
    removeTodo() {
        let index = this._todos.findIndex( todo => todo.id === this._todo.id );
        if(index > -1) {   //found
            this._todos.splice(index, 1);
        }

        this._todo = {};
    }
}


export default new TodoStore();