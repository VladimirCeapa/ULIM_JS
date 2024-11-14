/*
Write a JavaScript program to find duplicate values in a JavaScript array. 
*/
let str = "abbaaffeekfglflto";

function test(str) {
    const obj = {};
    for (let i = 0; i < str.length; i++) {
        obj[str[i]] = 0;
        for (let j = 0; j < str.length; j++) {
            if (str[i] == str[j]) {
                obj[str[i]]++;
            }
        }
    }

    let max = 0;
    let test;
    for (const key in obj) {

        if (obj[key] > max) {
            max = obj[key]
            test = key

        }

    }

    return `letter "${test}" in string ${max},`
}
console.log(test(str));