// Generics
var MyData = /** @class */ (function () {
    function MyData(value) {
        this.value = value;
    }
    MyData.prototype.getArray = function () {
        return [this.value, this.value, this.value];
    };
    return MyData;
}());
//
// let v1 = new MyData<string>("hello");
// console.log(v1.getArray());
// let v2 = new MyData<number>(234);
// console.log(v2.getArray());
var v3 = new MyData({ a: 32, b: 40 });
console.log(v3.getArray());
