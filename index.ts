// Interface
//構造的部分型

interface SpringResult {
    a: number;
}

interface FallResult {
    b: number
}

//FinalResultはSpring,Fall,Finalのすべてをもつ
interface FinalResult extends SpringResult, FallResult {
    final: number;
}

const getTotal = (result: FinalResult) => {
    return result.a + result.b + result.final;
}

let result = {
    a: 32, b: 58, final: 82,
};

const answer = getTotal(result);
console.log(answer);

