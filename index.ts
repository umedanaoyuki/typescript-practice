// Generics

interface Result {
    a: number;
    b: number;
}
class MyData<T extends Result> {
    constructor(public value: T) {
    }
    getArray(): T[] {
        return [this.value, this.value, this.value];
    }
}
//
// let v1 = new MyData<string>("hello");
// console.log(v1.getArray());
// let v2 = new MyData<number>(234);
// console.log(v2.getArray());

let v3 = new MyData<Result>({a: 32, b: 40});
console.log(v3.getArray());

