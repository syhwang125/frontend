import { observable, action, computed, makeObservable } from 'mobx';

class TodoStore {

    constructor() {
        makeObservable(this);   //mobx5 버전이후 
    }

    @observable 
    _todo = {}   // id, title, date 

    get todo() {
        return this._todo;
    }

    @action
    setTodoProps(name, value) {
        this._todo = {
            ...this._todo,
            [name] : value
        }
    }
}


export default new TodoStore();