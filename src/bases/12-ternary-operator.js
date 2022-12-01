// Ternaryb Operators
 
const active = true;

let message = '';

if ( !active ) {
    message = 'Active'
} else {
    message = 'Inactive'
}

const messag = (active) ? 'Active' : 'Inactive';
const sms = (active) ? 'Active' : null;

const mensaje = ( active && 'Active');

console.log( mensaje )