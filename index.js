// Interface
var getTotal = function (result) {
    return result.a + result.b;
};
var result = {
    a: 32, b: 58
};
var answer = getTotal(result);
console.log(answer);
