import { arrayReturn } from "../../bases/7-object-destructuring"

describe('test on 07-object-destructuring', () => { 

    test('should return a string and a number', () => {

        const [letters, numbers ]= arrayReturn();

        expect( letters ).toBe('ABC');
        expect( numbers ).toBe( 123 );

        // console.log(typeof letters)
        expect( typeof letters ).toBe( 'string' );
        expect( typeof numbers ).toBe( 'number' );

        // we expect this value to be any type of string
        expect( letters ).toEqual( expect.any( String ) );
    });

 })