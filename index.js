// Interface
//構造的部分型
var getTotal = function (result) {
    return result.a + result.b;
};
var result = {
    a: 32, b: 58, c: "hello"
};
var answer = getTotal(result);
console.log(answer);
