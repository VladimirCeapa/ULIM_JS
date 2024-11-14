/*
Write a JavaScript function
to clone an array.
Test Data :
console.log(arrayClone([1, 2, 4, 0]));
console.log(arrayClone([1, 2, [4, 0]]));
[1, 2, 4, 0]
[1, 2, [4, 0]]
*/
let arr=[1, 2, 4, 0]
function arrayClone(arr){
    return [...arr];
}
let arr2=arrayClone(arr);
arr2.push(23);
console.log(arr);
console.log(arr2);