/*
There are two arrays with individual values, write a 
JavaScript program to compute the sum of each individual 
index value from the given arrays. 
Sample array :
array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];
Expected Output :
[4, 5, 8, 10, 12, 13] 
*/
array1 = [1, 0, 2, 3, 4];
array2 = [3, 5, 6, 7, 4, 12];
const sumOfEachElements = (arr1, arr2) => {
    let arr3 = [];
    let length = arr1 > arr2 ? arr1.length : arr2.length;
    for (let i = 0; i < length; i++) {
        if (arr1[i] == undefined) {
            arr1[i] = 0;
        }
        arr3.push(arr1[i] + arr2[i]);
    }
    return arr3;
}

console.log(sumOfEachElements(array1, array2));