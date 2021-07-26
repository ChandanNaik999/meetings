import axios from 'axios';
import { API_BASE_URL } from '../constants';
import { getToken } from './auth';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

/**
 * Get the list of all registered users.
 * @returns list of all users
 */
async function getAllUsers() {
    const response = await axios.get(
        `${API_BASE_URL}/users`,
        {
            headers: {
                Authorization: `${getToken()}`,
            },
        },
    );

    return response.data;
}

export default getAllUsers;
