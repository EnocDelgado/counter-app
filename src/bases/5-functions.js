// Functions

function greeting( name ) {
    return `Hello, ${name}`;
}

// Lambda functions
const greetings = ( name ) => {
    return `Hello, ${name}`;
}

console.log(greetings("Lao"))


const greeting1 = ( name ) => `Hello, ${name}`;

export const getUser = () => {
    return {
        uid: 'ASD345',
        username: 'El papi 234567'
    }
}

const user = getUser();
console.log(user)



//Task
// 1. Transforn to lanbda function
// 2. return a splicit object
// 3. run it
 /*
  function getActiveUser( name ) {
    return {
        uid: 'ABS123',
        username: name
    }
 }

 const activeUser = getActiveUser('Nando');
 console.log( activeUser )

 */

 export const getActiveUser = ( name ) => {
    return {
        uid: 'ABS123',
        username: name
    }
 }

 const activeUser = getActiveUser('Nando');
 console.log( activeUser )