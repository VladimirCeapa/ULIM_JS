/*
Find the leap years in a given range of years.
*/

const year = 2001;

function leapYears(year) {

    return year % 4 == 0 || year % 4 === 0 && !year % 100 === 0;

}

console.log(leapYears(year));