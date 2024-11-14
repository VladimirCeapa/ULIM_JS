/*
Write a JavaScript program to find the sum of squares of a numeric vector.
*/
let arr = [6, 6, 8, 8]
function squaresOfNumericVector(arr) {
    let sumSquares = 0;
    for (const key of arr) {
        sumSquares += Math.sqrt(key);
    }
    return sumSquares.toFixed(2);
}
console.log(squaresOfNumericVector(arr));