import { getHeroById, getHeroByOwner } from "../../bases/8-0-import-export-functions";
import { heroes as sheroes } from "../../data/heroes";

describe('test on 8-0-import-xport-funtions', () => {

    test('getHeroById should  return a hero by Id', () => {

        const id = 1;
        const hero = getHeroById( id );

        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC'});
    });

    test('getHeroById should  return undefined if does not exist', () => {

        const id = 100;
        const hero = getHeroById( id );

        expect( hero ).toBeFalsy();

        // other way

    })

    // task:
    // should to return an object with DC heroes
    // length === 3
    // toEqual to filer array

    test('should return an object with DC heroes', () => {

        const owner = 'DC';
        const heroes = getHeroByOwner( owner )

        // console.log( heroes )
        expect( heroes.length ).toBe( 3 );
        expect( heroes ).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);
        // This is the best method cause our array may change in the future
        expect( heroes ).toEqual( sheroes.filter(hero => hero.owner === owner) )
    })

    // should retrun an object with Marvel heroes
    // length === 2
    test('should return an object with Marvel heroes', () => {

        const owner = 'Marvel';
        const heroes = getHeroByOwner( owner)

        // console.log( heroes )
        expect( heroes.length ).toBe( 2 );
        expect( heroes ).toEqual( [
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
        ]);
        
        // This is the best method cause our array may change in the future
        expect( heroes ).toEqual( sheroes.filter(hero => hero.owner === owner) )
    })

})