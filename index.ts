// Interface
//構造的部分型

interface Result {
    a: number;
    b: number;
}
const getTotal = (result: Result) => {
    return result.a + result.b;
}

let result = {
    a: 32, b: 58, c:"hello"
};

const answer = getTotal(result);
console.log(answer);

