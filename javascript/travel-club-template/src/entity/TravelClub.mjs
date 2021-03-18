class TravelClub {
    // 구성요소
    // 1.데이터 속성  (name, intro, foundedDate)
    // 2.메소드
    // 3.초기화 메소드 -> 생성자 

    constructor(name, intro) {
        this._name = name;
        this._intro = intro;
        this._foundedDate = new Date();
    }

    get name() {
        return this._name; 
    }
    set name(name) {
        this._name = name;
    }

    get intro() {
        return this._intro; 
    }
    set name(intro) {
        this._intro = intro;
    }
}

let newClub = new TravelClub('Jeju club', 'Go jeju Island');

console.log(newClub._name);    //get할때 () 안함
console.log(newClub);

newClub.name = 'New name';
console.log(newClub);

export default TravelClub;

// $node --experimental-json-modules src/entity/TravelClub.mjs 
