let uniqueInstance;

class MapStorage {
    constructor(){
        if(uniqueInstance) {
            return uniqueInstance;
        }
        this._clubMap = new Map();
        uniqueInstance = this;
    }    

    get clubMap() {
        return this._clubMap;
    }
}

let map01 = new MapStorage();
let map02 = new MapStorage();

console.log(map01 === map02);   // true
console.log(map02.clubMap == map02.clubMap);  // true

export default new MapStorage();    // 생성해서 줌 