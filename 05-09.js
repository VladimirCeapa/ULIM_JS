/*
Write a JavaScript program which accept a 
string as input and swap the case of each character. 
For example if you input 'The Quick Brown Fox' 
the output should be 'tHE qUICK bROWN fOX'.
*/

let str = 'tHE qUICK bROWN fOX';
let str2 = '';
for (const key of str) {
    key === key.toLowerCase() ? str2 += key.toUpperCase() : str2 += key.toLowerCase()
}
console.log(str2);