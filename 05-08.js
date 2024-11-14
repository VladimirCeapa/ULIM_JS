/*
Write a JavaScript program
to find the most frequent item
 of an array.
Sample array :
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times ) 
*/
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let a = arr1.filter(e => e === 'a');
console.log(` a ( ${a.length} times )`);