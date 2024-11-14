/*
Write a JavaScript program to compute the sum and product of an array of integers. 
*/
let arr = [2, 5, 8, 9, 6, 4, 7];
function sumOfArr(arr) {
    return arr.reduce((e, value) => e + value * value, 0)
}
console.log(sumOfArr(arr));