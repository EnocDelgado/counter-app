// Import, export and common array functions

import { heroes } from '../data/heroes';
/*
const getHeroBy_Id = ( id ) => {
    return heroes.find( hero => {
        if ( hero == id ) {
            true
        } else {
            false
        }
    });
};
*/
export const getHeroById = ( id ) => heroes.find( (hero) => hero.id === id )
           
// console.log( getHeroById(1) )


export const getHeroByOwner = ( owner ) => heroes.filter( hero => hero.owner === owner ) 
// console.log( getHeroByOwner('DC') )