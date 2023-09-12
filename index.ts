// Generics

class MyData<T> {
    constructor(public value: T) {
    }
    getArray(): T[] {
        return [this.value, this.value, this.value];
    }
}

let v1 = new MyData<string>("hello");
console.log(v1.getArray());
let v2 = new MyData<number>(234);
console.log(v2.getArray());
