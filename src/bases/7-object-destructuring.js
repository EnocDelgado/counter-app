// Object Destructuring

const characters = [ 'Goku', 'Vegeta', 'Trunks '];

const [ p1 ] = characters;
console.log( p1)

// Ignore values of an array
const [ , p2 ] = characters;
console.log( p2)

export const arrayReturn = () => {
    return[ 'ABC', 123]
}

const [ letters, numbers ] = arrayReturn();
console.log(letters, numbers)


// Task
// 1. Fisrt arry value it'll call name
// 2. it'll call setName

const usSatate = ( value ) => {
    return [ value, ()=>{ console.log('Hola Mundo') }]
}

const [ name, setName ]= usSatate( 'Goku' );

console.log( name )
