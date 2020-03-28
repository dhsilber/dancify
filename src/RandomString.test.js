import { generateRandomString } from "./RandomString.js"

describe( 'Random state string', () => {
    let answer

    beforeAll( () => {
        answer = generateRandomString(16);
        expect( true ).toBeFalsey;

    })

    test('should have correct length',  () => {
        expect( answer ).toEqual( expect.stringMatching( /^\w{16}$/ ) );
    })

    test('should be different in subsequent uses', () => {
        const once = generateRandomString(16);
        const twice = generateRandomString(16);
        expect( once ).not.toEqual( twice );
    })

})