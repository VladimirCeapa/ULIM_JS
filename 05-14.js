/*
Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
*/
let newArr = [2, 'a', '1', 2, 'b', 'a', '1', 'b'];
debugger
function removeDuplicate(arr) {
    for (let i = 0; i < arr.length; i++) {

        for (let j = 1; j < arr.length; j++) {
            // console.log(arr[i], arr[j])
            if (arr[i] == arr[j]) {
                arr.splice(i, 1)
                console.log(arr);
            }
        }
    }

}
removeDuplicate(newArr);

console.log(newArr);
