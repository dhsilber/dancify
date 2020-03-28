const querystring = require('querystring')

/*
    swiped mockRequest & initial version of mockResponse from
    https://github.com/HugoDF/mock-express-request-response/blob/master/express-handlers.jest-test.js
 */
const mockRequest = ( sessionData, body ) => ({
    session: { data: sessionData },
    body
});

const mockResponse = () => {
    const response = {};
    response.status = jest.fn().mockReturnValue( response );
    response.json = jest.fn().mockReturnValue( response );
    response.redirect = jest.fn().mockReturnValue( response );
    return response;
}

const { SPOTIFY_AUTHORIZE, login } = require('./Authorize');

describe( 'login should respond', () => {
    let request, response, redirectURL, url, query, authorizeData
    let redirectAnswer

    beforeAll( async () => {
        request = mockRequest( {}, {} );
        response = mockResponse();
    
        await login( request, response );

        redirectAnswer = response.redirect.mock.calls[0][0];
        [url, query] = redirectAnswer.split('?')
        authorizeData = querystring.parse( query );
    })

    // test('should respond with code 302', async () => {
    //     expect(response.status).toBe(302);
    // })

    test('with redirect URL',  () => {
        expect( url ).toEqual( SPOTIFY_AUTHORIZE );
    })

    test('with authorization data containing a response type field', () => {
        expect( authorizeData.response_type ).not.toBeUndefined();
    })

    test('with authorization data response type containing "code"', () => {
        expect( authorizeData.response_type ).toEqual( 'code' );
    })

    test('with authorization data containing a client_id field', () => {
        expect( authorizeData.client_id ).not.toBeUndefined();
    })

    test('with authorization data client_id containing client id', () => {
        expect( authorizeData.client_id ).toEqual( 'TEST_CLIENT_ID' );
    })

    test('with authorization data containing a scope field', () => {
        expect( authorizeData.scope ).not.toBeUndefined();
    })

    test('with authorization data scope containing correct requirements', () => {
        expect( authorizeData.scope ).toEqual( 'user-read-private user-read-email' );
    })

    test('with authorization data containing a redirect_uri field', () => {
        expect( authorizeData.redirect_uri ).not.toBeUndefined();
    })

    test('with authorization data redirect_uri containing URI to redirect to', () => {
        expect( authorizeData.redirect_uri ).toEqual( 'TEST_REDIRECT_URI' );
    })

    test('with authorization data containing a state field', () => {
        expect( authorizeData.state ).not.toBeUndefined();
    })

    test('with authorization data state containing a correctly-sized (random) alphanumeric string', () => {
        expect( authorizeData.state ).toEqual( expect.stringMatching( /^\w{16}$/ ) );
    })
})
