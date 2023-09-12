// Generics
//同じような記述ばかり
// const getStringArray = (value: string): string[] => {
//     return [value, value, value];
// }
//
// const getNumberArray = (value: number): number[] => {
//     return [value, value, value];
// }
//型の箇所を「T」と書くのが慣習的
var getArray = function (value) {
    return [value, value, value];
};
console.log(getArray(3));
console.log(getArray("hello"));
