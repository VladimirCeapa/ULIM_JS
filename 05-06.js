/*
Write a JavaScript program
 which accept a
 number as input and insert
  dashes (-) between
  each two even numbers.
   For example if you accept
   025468 the output should be
    0-254-6-8.
*/
const num = [0, 2, 5, 4, 6, 8, 4, 5]
//debugger
function insertDashes(num) {
    let str = '';
    for (let i = 0; i < num.length; i++) {
        if (num[i - 1] % 2 == 0 && num[i] % 2 == 0) {
            str += '-' + num[i];
        } else {
            str += num[i];
        }
    }
    return str;
}
console.log(insertDashes(num));