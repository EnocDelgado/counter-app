import { greeting } from "../../bases/2-template-strings";

describe('test on 02-template-string', () => { 

    test('should to return  "Hello name"', () => {

        const name = 'Enoc';
        const message = greeting( name );

        expect( message ).toBe(`Hello, ${name}`)
    });

 });