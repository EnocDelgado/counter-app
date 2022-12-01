// Variables and Constatnts

const name = 'Enoc';
let lastName = 'Delgado';

let givenValue = 5;
givenValue = 4;

console.log( name, lastName, givenValue )

// SCOPE
if ( true ) {
    let name = 'Peter';
    let givenValue = 6;

    console.log(givenValue)
}


console.log( givenValue )