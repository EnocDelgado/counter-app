// Promises
import { getHeroById } from "./8-1-promise";

/*
const promise = new Promise( (resolve, reject ) => {

    setTimeout( () => {
        // Task
        // immport getHeroById
        const hero = getHeroById(2)
        console.log(hero)
    }, 2000 )
});


promise.then( (heroe) => {
    console.log('hero', hero )
})
.catch( err => console.warn( err ) );
*/

export const getHeroByIdAsync = ( id ) => {

    return new Promise( (resolve, reject ) => {

        setTimeout( () => {
            // Task
            // immport getHeroById
            const hero = getHeroById(id)
            if ( hero ) {
                resolve(hero)
            } else {
                reject('Wrong, Id not find it!')
            }       
        }, 1000 )
    })
}

/*
getHeroByIdAsync(1)
    .then( hero => console.log('Hero', hero) )
    .catch( err => console.warn(err ) )
*/

// Simplified way
// getHeroByIdAsync(10)
//     .then( console.log )
//     .catch(console.warn )