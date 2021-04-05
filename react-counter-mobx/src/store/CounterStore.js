import { action, makeObservable, observable } from 'mobx';
import { version } from 'react-dom';


class CounterStore {

    constructor (){                     //mobx 6 이후 추가됨. 
        makeObservable(this);
    }

    @observable     // decorator 를 이용하면 바벨에 의해 인식 
    _count = 4;

    get count() {
        return this._count;
    }

    @action
    increment() {
        this._count ++;
        console.log(this._count);
    }

    @action
    decrement() {
        this._count --; 
        console.log(this._count);
    }
   
}

export default new CounterStore(); 