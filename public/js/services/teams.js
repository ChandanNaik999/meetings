import axios from 'axios';
import { API_BASE_URL } from '../constants';
import { getToken } from './auth';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

async function fetchTeams() {
    const response = await axios.get(
        `${API_BASE_URL}/teams`,
        {
            headers: {
                Authorization: `${getToken()}`,
            },
        },
    );

    return response.data;
}

async function addTeam( teamJSON ) {
    const response = await axios.post(
        `${API_BASE_URL}/teams/`,
        teamJSON,
        {
            headers: {
                Authorization: `${getToken()}`,
            },
        },
    );

    return response.data;
}

async function addMemberToTeam( team, email ) {
    const response = await axios.patch(
        `${API_BASE_URL}/teams/${team['_id']}?action=add_member&email=${email}`,
        {},
        {
            headers: {
                Authorization: `${getToken()}`,
            },
        },
    );

    return response.data;
}

async function excuseFromTeam( team ) {
    const response = await axios.patch(
        `${API_BASE_URL}/teams/${team['_id']}?action=remove_member`,
        {},
        {
            headers: {
                Authorization: `${getToken()}`,
            },
        },
    );

    return response.data;
}

export {
    fetchTeams,
    addTeam,
    addMemberToTeam,
    excuseFromTeam,
};
