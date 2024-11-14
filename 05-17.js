/*
Write a JavaScript program to shuffle an array.
*/


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function shuffleArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        let num = Math.floor(Math.random() * arr.length);
        let temp = arr[i];
        arr[i] = arr[num];
        arr[num] = temp;
    }
    return arr;
}
shuffleArray(arr);