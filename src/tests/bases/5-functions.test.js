import { getActiveUser, getUser } from '../../bases/5-functions';

describe('test on 05-functions', () => {

    test('should return an object', () => {

        const testUser = {
            uid: 'ASD345',
            username: 'El papi 234567'
        }

        const user = getUser();

        expect( testUser ).toStrictEqual( user );
    });


    test('getActiveUser should to return an object', () => { 

        const name = 'Enoc';

        const user = getActiveUser( name );

        expect( user ).toStrictEqual({
            uid: 'ABS123',
            username: name
        });
    })
})