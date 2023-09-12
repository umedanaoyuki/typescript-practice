// Interface
//構造的部分型
// const getTotal = (result: FinalResult) => {
//     return result.a + result.b + result.final;
// }
var getTotal = function (result) {
    if (result.final) {
        return result.a + result.b + result.final;
    }
    else {
        return result.a + result.b;
    }
};
var result = {
    a: 32, b: 58, final: 10,
};
var answer = getTotal(result);
console.log(answer);
