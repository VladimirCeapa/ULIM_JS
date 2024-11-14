/*
 We have the following arrays :
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"]
Write a JavaScript program to display the colors in the following way :
"1st choice is Blue ."
"2nd choice is Green."
"3rd choice is Red."
- - - - - - - - - - - - -
Note : Use ordinal numbers to tell their position.
*/
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

for (const key in color) {

    switch (key) {
        case '0':
            console.log(`1st choice is ${color[key]}`);
            break;
        case '1':
            console.log(`2nd choice is ${color[key]}`);
            break;
        case '2':
            console.log(`3rd choice is ${color[key]}`);
            break;
        default:
            console.log(`${key}th choice is ${color[key]}`);
    }
}