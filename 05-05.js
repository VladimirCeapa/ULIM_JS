/*
 Write a simple JavaScript program to join all elements of the following array into a string. 
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output :
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"
*/
const myColor = ["Red", "Green", "White", "Black"];
function arrToString(arr,sep){
    let str='';
return str=arr.join(`${sep}`);
}
console.log(arrToString(myColor,','));