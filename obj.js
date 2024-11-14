// obj1 = {
//     name: 'alex',
//     age: 19,
//     test: {
//         color: 'red',
//         hobby: 'footbol',
//         wer: {
//             sex: 'M'
//         },
//         s: [1, 8, 9, 5]
//     },
// }

// obj2 = {
//     name: 'alex',
//     age: 19,
//     test: {

//         hobby: 'footbol',
//         color: 'red',
//         wer: {
//             sex: 'M'
//         },
//         s: [1, 8, 9, 5]
//     },
// }

// Defining Lodash variable 
var _ = require('lodash');

let val1 = "gfg"

let val2 = "gfg"

// Checking for Equal Value 
console.log("The Values are Equal : "
    + _.isEqual(val1, val2));


// console.log(JSON.stringify(obj1) === JSON.stringify(obj2));


// Object.compare = function (obj1, obj2) {
//     // Цикл через свойства объекта obj1
//     for (var p in obj1) {
//         //Проверка на то, что оба объекта существуют
//         if (obj1.hasOwnProperty(p) !== obj2.hasOwnProperty(p)) return false;

//         switch (typeof (obj1[p])) {
//             // Глубокое сравнение объектов по ключам и значения:
//             case 'object':
//                 //Нужно добавить что бы была еще проверка на дату внутри
//                 if (
//                     obj1[p] instanceof Date &&
//                     obj2[p] instanceof Date &&
//                     String(obj1[p]) !== String(obj2[p])
//                 )
//                     return false
//                 if (!Object.compare(obj1[p], obj2[p])) return false;
//                 break;
//             // Сравнение данных типа function:
//             case 'function':
//                 if (typeof (obj2[p]) == 'undefined' || (p != 'compare' && obj1[p].toString() != obj2[p].toString())) return false;
//                 break;
//             // Сравнение значений:
//             default:
//                 if (obj1[p] != obj2[p]) return false;
//         }
//     }

//     // Проверка объекта obj2 на дополнительные свойства:
//     for (var p in obj2) {
//         if (typeof (obj1[p]) == 'undefined') return false;
//     }
//     return true;
// }