import axios from 'axios';
import { API_BASE_URL } from '../constants';
import { getToken } from './auth';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

async function fetchMeetings(date) {
    if( date instanceof Date ){
        date = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
    }
    const response = await axios.get(
        `${API_BASE_URL}/calendar?date=${date}`,
        {
            headers: {
                Authorization: `${getToken()}`
            }
        }
    );

    return response.data;
}

async function fetchMeetingById( id ) {
    const response = await axios.get(
        `${API_BASE_URL}/workshops/${id}`,
        {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        }
    );

    return response.data;
}

async function deleteMeetingById( id ) {
    const response = await axios.delete(
        `${API_BASE_URL}/workshops/${id}`,
        {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        },
    );

    return response;
}

export {
    fetchMeetings,
    fetchMeetingById,
    deleteMeetingById,
};