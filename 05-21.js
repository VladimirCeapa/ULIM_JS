/*
Write a JavaScript program to flatten a nested (any depth) array. 
If you pass shallow, the array will only be flattened a single level.
Sample Data :
console.log(flatten([1, [2], [3, [[4]]],[5,6]])); 
[1, 2, 3, 4, 5, 6]
console.log(flatten([1, [2], [3, [[4]]],[5,6]], true)); 
[1, 2, 3, [[4]], 5, 6]
*/

function deepArr(arr, shallow) {
    const newArray = [];
    for (const key of arr) {
        if (shallow) {
            newArray.push(key)
        } else {
            Array.isArray(key) ? deepArr(key) : newArray.push(key)
        }
    }
    return newArray;
}

const flatten = (arr, shallow) => {
    const newArray = [];
    if (shallow == undefined) {
        shallow = false;
    }
    for (const key of arr) {
        Array.isArray(key) ? newArray.push(...deepArr(key, shallow)) : newArray.push(key)
    }
    return newArray;
}
console.log(flatten([1, [2], [3, [[4]]], [5, 6]], true))