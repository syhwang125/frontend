import NumbersCollection from './NumbersCollection';

interface Sortable {
    length : number;
    compare(leftIndex:number, rightIndex:number) : boolean;
    swap(leftIndex: number, rightIndex: number) : void;
}

class NamooSorter {
    // 1.constructor (private numbers : number[]) {}
    // 2.constructor (private collection : number[] | string) {}   // union type 
    // constructor(private collection : NumbersCollection) {} 

    constructor(private collection : Sortable ) {} 


    get getCollection() {
        return this.collection;
    }

    // 1.NamooSorter() : number[] {
    // 2.sort() : number[] | string {
    sort() : void {
        const { length } = this.collection;    //this.numbers;

        for (let i = 0; i < length; i++) {
            for (let j=0; j < length -i -1; j++) {

                if(this.collection.compare(j, j+1)) {
                    this.collection.swap(j, j+1);
                }
            // 2. union type 인 경우 
                    // if(typeof this.collection === 'string') {
                    //     if(this.collection[j].toLowerCase() > this.collection[j+1].toLowerCase()) {
                    //         const characters = this.collection.split('');
                    //         const temp = characters[j];
                    //         characters[j] = characters[j+1];
                    //         characters[j+1] = temp;
                    //         this.collection = characters.join('');
                    //     }
                    // } 
                    // if (this.collection instanceof Array) {
                    //     if(this.collection[j] > this.collection[j+1]) {
                    //         const temp = this.collection[j];
                    //         this.collection[j] = this.collection[j+1];
                    //         this.collection[j+1] = temp;                          
                    //     }
                    // }

            // 1. number type 인 경우 
                    // if (this.numbers[j] > this.numbers[j+1]) {
                    //     // swap
                    //     const temp = this.numbers[j];
                    //     this.numbers[j] = this.numbers[j+1];
                    //     this.numbers[j+1] = temp;
                    // }
                }
            }
            // return this.collection;
        }

        printCollection() {
            console.log(this.collection);
        }
}

export default NamooSorter;