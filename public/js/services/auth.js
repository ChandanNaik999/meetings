import axios from 'axios';
import { API_BASE_URL, TOKEN, EMAIL, NAME } from '../constants';



/**
 * @param {object} credentials An object with name, email and password
 * @returns A promise that resolves with the register response data, or rejects if requests to register fails
 * * @example credentials
 * {
 *  "name": "Prashanth Puranik",
 *  "email": "purani2@example.com",
 *  "password": "Purani@2"
 * }
 */
async function register( credentials ) {
    // console.log(credentials);
    const response = await axios.post(
        `${API_BASE_URL}/auth/register`,
        credentials,
        {
            headers: {
                'Content-Type': 'application/json',
            },
        },
    );
    return response.data;
}


/**
 * @param {object} credentials An object with email and password
 * @returns A promise that resolves with the login response data, or rejects if requests to login fails
 * 
 * @example credentials
 * {
 *  "email": "purani20@example.com",
 *  "password": "Purani@2"
 * }
 */
 async function login( credentials ) {

    const response =  await axios.post(
        `${API_BASE_URL}/auth/login`,
        credentials,
        {
            headers: {
                'Content-Type': 'application/json',
            },
        },
    );
    return response.data;
    
}

/**
 * Removes the auth token and email from the local storage.
 */
function logout() {
    localStorage.removeItem( TOKEN );
    localStorage.removeItem( NAME );
    localStorage.removeItem( EMAIL );
}

/**
 * Returns the authorization token for logged in user, or null if no one is logged in
 * @returns The authorization token for logged in user, or null if no one is logged in
 */
function getToken() {
    return localStorage.getItem( TOKEN );
}

export {
    register,
    logout,
    getToken,
    login,
};