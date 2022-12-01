// Arrays

// This ins no the most used
// const arr = new Array( 100 );

const arr = [1,2,3,4];

// Don use putsh method couse change the array
// arr.push(1)


// spred operator, this help us to reference a variable with some values
let arr2 = [...arr, 5]

// Evrey create a new array
const arr3 = arr2.map( function(number) {
    return number * 2;
})