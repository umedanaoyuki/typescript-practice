// 関数

//昔ながらの書き方
/*
var add = function (a: number,b: number): number {
    return a+b;
}
*/

//アロー関数
/*
var add = (a: number, b: number): number => {
    return a + b;
}
*/

//上記の省略形
var add = (a: number, b:number): number => a + b;

console.log(add(5,3));