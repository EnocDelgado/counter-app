import { getImage } from "../../bases/11-async-await"

describe('test on 11-async-await', () => {

    test("getImage should return an error if we do not have an Api_key", async() => {

        const url = await getImage();
        // console.log(url)
        expect( typeof url ).toBe( 'string' );
    })
})