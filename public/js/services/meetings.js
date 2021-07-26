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


async function searchMeetings(selectedDateOption, searchText="") {
    
    let url = `${API_BASE_URL}/meetings/?period=${selectedDateOption}`
    if(searchText !== ""){
        url += '&search='
        url += (searchText.split(" ")).join('%20');
    }
    console.log(url);

    const response = await axios.get(
        url,
        {
            headers: {
                Authorization: `${getToken()}`
            }
        }
    );

    return response.data;
}

async function addAttendeeToMeeting(meeting, email) {
    
    const response = await axios.patch(
        `${API_BASE_URL}/meetings/${meeting['_id']}?action=add_attendee&email=${email}`,
        {},
        {
            headers: {
                Authorization: `${getToken()}`
            }
        }
    );

    return response.data;
}

async function excuseFromMeeting(meeting) {
    
    const response = await axios.patch(
        `${API_BASE_URL}/meetings/${meeting['_id']}?action=remove_attendee`,
        {},
        {
            headers: {
                Authorization: `${getToken()}`
            }
        }
    );

    return response.data;
}


async function addMeeting(submitJSON) {
    
    const response = await axios.post(
        `${API_BASE_URL}/meetings/`,
        submitJSON,
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
    searchMeetings,
    addAttendeeToMeeting,
    excuseFromMeeting,
    addMeeting,
    fetchMeetingById,
    deleteMeetingById,
};