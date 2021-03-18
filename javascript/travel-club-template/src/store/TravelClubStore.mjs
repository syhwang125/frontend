import MapStorage from './MapStorage.mjs';

import TravelClub from '../entity/TravelClub.mjs';   //imsi

class TravelClubStore {
    constructor() {
        this._clubMap = MapStorage.clubMap;    // get clubMap() 호출 
    }
    // 저장된 TravelClub 수를 반환 
    count() {
        return this._clubMap;
    }

    // club명이 존재하는지 확인 
    exist(name) {
        // Map(key,value) => (travelClub.name, travelClub);
        return this._clubMap.has(name);
    }

    store(newClub) {
        if(this.exist(newClub.name)) {
            return null;
        }
        this._clubMap.set(newClub.name, newClub);
        return newClub.name;
    }

    retrieve(name) {
        return this._clubMap.get(name);
    }

    retrieveAll() {
        return this._clubMap.values();
    }

    update(newClub) {
        this.clubMap.set(newClub.name, newClub);
    }

    delete(name) {
        this._clubMap.delete(name);
    }
}

let newClub = new TravelClub('TestClub', 'test club');
let  travelClubStore = new TravelClubStore();
travelClubStore.store(newClub);
travelClubStore.store(new TravelClub('TestClub02', 'test intro02'))

console.log(travelClubStore.count);
console.log(travelClubStore.retrieve('TestClub'));

console.log(travelClubStore.retrieveAll());