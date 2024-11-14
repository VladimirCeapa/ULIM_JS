/*
Write a JavaScript program to compute the union of two arrays.
Sample Data :
console.log(union([1, 2, 3], [100, 2, 1, 10]));
[1, 2, 3, 10, 100]
*/
const arr = [1, 2, 3, 100, 3]
const arr2 = [100, 2, 1, 10];

function unionNumbers(...arr) {
    arr = [...arr2]
    const obj = {}
    let newArray = [];
    for (const e of arr) {
        obj[e] = 1
    }

    for (const e in obj) {
        newArray.push(e)
    }
    return newArray;
}

console.log(unionNumbers(arr, arr2));