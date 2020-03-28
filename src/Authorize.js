const express = require( 'express' );
const querystring = require('querystring')
import { generateRandomString } from "./RandomString.js"


const SPOTIFY_AUTHORIZE = "https://accounts.spotify.com/authorize";

async function login( request, response ) {
    let url = SPOTIFY_AUTHORIZE + '?' +
        querystring.stringify( {
            response_type: 'code',
            client_id: process.env.REACT_APP_CLIENT_ID,
            scope: 'user-read-private user-read-email',
            redirect_uri: process.env.REACT_APP_REDIRECT_URI,
            state: generateRandomString(16)
        })
    response.redirect( url );
}

module.exports = {
    SPOTIFY_AUTHORIZE,
    login,
};
