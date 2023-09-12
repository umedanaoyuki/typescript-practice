// Interface

const getTotal = (result: {a: number, b: number}) => {
    return result.a + result.b;
}

let result = {
    a: 32, b: 58
};

const answer = getTotal(result);
console.log(answer);

