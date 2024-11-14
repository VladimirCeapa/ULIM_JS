/*
Write a JavaScript function
to get the first element of
 an array. Passing a parameter
 'n' will return the first
 'n' elements of the array.
Test Data :
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
Expected Output :
7
[]
[7, 9, 0]
[7, 9, 0, -2]
[] 
*/
function first(arr, n) {
    let arr2 = [];
    if (n == null || n==1) {
        return arr[0]
    }
    if (arr.length == 0 || n < 0) {
        return arr2;
    } else {
        if(n>arr.length){
            n=arr.length;
        }
        for (let i = 0; i < n; i++) {
            arr2.push(arr[i]);
        }
        return arr2;
    }
}
console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));
console.log(first([7, 9, 0, -2], 1));

