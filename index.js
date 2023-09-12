// Interface
//構造的部分型
var getTotal = function (result) {
    return result.a + result.b + result.final;
};
var result = {
    a: 32, b: 58, final: 82,
};
var answer = getTotal(result);
console.log(answer);
