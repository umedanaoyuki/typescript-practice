//関数
/*
void: 返り値がない場合
 */

// function add(a: number, b: number): number {
//     return a + b;
// }

function add(a: number, b?: number): number {
    if (b) {
        return a + b;
    } else {
        return a + a;
    }
}

// console.log(add(5,3));
//型が決まっているので、コンパイルエラーになる
// console.log(add(5, "hello"))

console.log(add(5,3));
console.log(add(5));