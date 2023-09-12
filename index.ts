// Interface

interface Result {
    a: number;
    b: number;
}
const getTotal = (result: Result) => {
    return result.a + result.b;
}

let result = {
    a: 32, b: 58
};

const answer = getTotal(result);
console.log(answer);

