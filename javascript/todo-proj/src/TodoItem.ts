class TodoItem {
    // id : number;        // private, public, protected 
    // task : string;
    // complete : boolean;

    constructor( 
        public id : number, 
        public task : string, 
        public complete : boolean = false
    ) {
        this.id = id;
        this.task = task;
        this.complete = complete; 
    }

    printDetails() {
        console.log(`${this.id}\t${this.task}\t${this.complete ? "\t(complete)" : ""}`
        );
    }

}

export default TodoItem;