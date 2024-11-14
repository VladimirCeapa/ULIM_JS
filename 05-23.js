/* Write a JavaScript function to find the difference of two arrays.
Test Data :
console.log(difference([1, 2, 3], [100, 2, 1, 10])); 
["3", "10", "100"]
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]])); 
["6"]
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
["3", "10", "100"] */

function deepArr(arr) {
    const newArray = [];
    for (const key of arr) {
        Array.isArray(key) ? deepArr(key) : newArray.push(key)
    }
    return newArray;
}

const difference = (...arr) => {
    const newArray = [];

    for (const key of arr) {
        Array.isArray(key) ? newArray.push(...deepArr(key)) : newArray.push(key)
    }
    return newArray;
}

console.log(difference([1, 2, 3], [100, 2, 1, 10]));
//["3", "10", "100"]