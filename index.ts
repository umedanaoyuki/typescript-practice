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
const getArray = <T>(value: T): T[] => {
    return [value,value,value];
};

console.log(getArray<number>(3));
console.log(getArray<string>("hello"));