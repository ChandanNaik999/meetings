import axios from 'axios';
import { getToken } from './auth';
import { API_BASE_URL } from '../constants';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

async function setProfilePic( formData ) {
    const response = await axios.post(
        `${API_BASE_URL}/profile`,
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `${getToken()}`,
            },
        },
    );
    return response.data;
}

async function getProfilePic( id ) {
    const response = await axios.get(
        `${API_BASE_URL}/profile/pic/${id}`,
        {
            headers: {
                Authorization: `${getToken()}`,
            },
        },
    );

    return response.data;
}

async function updateUserDetails( userData, action ) {
    const response = await axios.patch(
        `${API_BASE_URL}/account?action=${action}`,
        userData,
        {
            headers: {
                Authorization: `${getToken()}`,
            },
        },
    );

    return response.data;
}

export {
    setProfilePic,
    getProfilePic,
    updateUserDetails,
};
