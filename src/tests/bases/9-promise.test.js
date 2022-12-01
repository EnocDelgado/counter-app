import { getHeroByIdAsync } from "../../bases/9-promise";

describe('test on 9-promise', () => {

    test('getHeroByIdAsync should return a hero', (done) => {
        
        const id = 1;

        getHeroByIdAsync( id )
            .then( hero => {
            
                expect( hero ).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });

                done();
            })
    });

    test('getHeroByIdAsync should return an Error if hero does not exist', (done) => {
        
        const id = 100;

        getHeroByIdAsync( id )
            .catch( err => {
            
                expect( err ).toBe("Wrong, Id not find it!")

                done();
            })
    });
})