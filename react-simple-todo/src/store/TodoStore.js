import { observable, makeObservable } from 'mobx';


class TodoStore {

    constructor () {
        makeObservable(this);
    }

    @observable
    _todos = [
        { id : 1, task : 'Study', completed : false },
        { id : 2, task : 'Reading', completed : true },
    ]

    get todos() {
        return this._todos;
    }
}

export default new TodoStore();