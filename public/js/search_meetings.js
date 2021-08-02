import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css';
import '../css/search_meetings.css';
import addToast from './customs/app';
import './app';
import { addAttendeeToMeeting, searchMeetings, excuseFromMeeting } from './services/meetings';
import getAllUsers from './services/user_management';
import { SUCCESS, ERROR } from './constants';

function formatTime( hours, minutes ) {
    let result = '';
    if ( hours < 10 ) {
        result += `0${hours}`;
    } else {
        result += hours;
    }
    result += ':';
    if ( minutes < 10 ) {
        result += `0${minutes}`;
    } else {
        result += minutes;
    }
    return result;
}

function populateMeetingsList( meetings, users ) {
    const meetingsListDiv = document.getElementById( 'searchMeetingsList' );
    meetingsListDiv.innerHTML = '';

    if ( meetings && meetings.length > 0 ) {
        const meetingsListTitle = document.getElementById( 'meetingsListTitle' );
        meetingsListTitle.innerHTML = 'Meetings matching search criteria';

        meetings.forEach( ( meeting ) => {
            const attendees = [];
            meeting['attendees'].forEach( ( attendee ) => {
                attendees.push( attendee['email'] );
            } );

            // create meeting card and attach it to the respective parent
            const card = document.createElement( 'div' );
            card.setAttribute( 'class', 'card p-3 mb-3' );

            const cardBody = document.createElement( 'div' );
            cardBody.setAttribute( 'class', 'card-body' );

            const cardTitle = document.createElement( 'h5' );
            const date = new Date( meeting['date'] );
            const startTime = formatTime( meeting['startTime']['hours'], meeting['startTime']['minutes'] );
            const endTime = formatTime( meeting['endTime']['hours'], meeting['endTime']['minutes'] );
            cardTitle.innerHTML = `${date.toDateString()}, ${startTime}-${endTime}`;
            cardBody.appendChild( cardTitle );
            const cardText = document.createElement( 'p' );
            cardText.innerHTML = meeting['name'];
            cardBody.appendChild( cardText );
            const buttonExcuse = document.createElement( 'button' );
            buttonExcuse.innerHTML = 'Excuse Yourself';
            buttonExcuse.setAttribute( 'class', 'btn btn-danger' );
            buttonExcuse.addEventListener( 'click', () => {
                excuseFromMeeting( meeting )
                    .then( ( response ) => {
                        if ( response.message === SUCCESS ) {
                            addToast( 'You have been removed from the team', document.body, SUCCESS );
                            card.remove();
                        } else {
                            addToast( `Error removing: ${response.message}`, document.body, ERROR );
                        }
                    } )
                    .catch( ( error ) => {
                        try {
                            addToast( `Error removing: ${error.response.data.description}`, document.body, ERROR );
                        } catch {
                            addToast( `Error removing: ${error.message}`, document.body, ERROR );
                        }
                    } );
            } );
            cardBody.appendChild( buttonExcuse );

            const hr = document.createElement( 'hr' );
            hr.setAttribute( 'class', 'my-3' );
            cardBody.appendChild( hr );

            const meetingAttendees = document.createElement( 'p' );
            meetingAttendees.innerHTML = `<strong>Attendees: </strong> ${attendees.join( ', ' )}`;
            cardBody.appendChild( meetingAttendees );

            const selectMemberDiv = document.createElement( 'div' );
            selectMemberDiv.setAttribute( 'class', 'row gy-2 gx-3 align-items-center' );

            const colSelectMember = document.createElement( 'div' );
            colSelectMember.setAttribute( 'class', 'col-auto' );

            const labelSelectMember = document.createElement( 'label' );
            labelSelectMember.setAttribute( 'class', 'visually-hidden' );
            labelSelectMember.setAttribute( 'for', 'selectMember' );
            colSelectMember.appendChild( labelSelectMember );

            const selectMember = document.createElement( 'select' );
            selectMember.setAttribute( 'class', 'form-select' );
            selectMember.setAttribute( 'id', 'selectMember' );
            selectMember.setAttribute( 'aria-label', 'Select Member' );
            const nonMembers = [];
            users.forEach( ( user ) => {
                if ( attendees.includes( user['email'] ) === false ) {
                    nonMembers.push( user );
                }
            } );

            selectMember.innerHTML = '<option value="none" selected>Select member</option>';
            nonMembers.forEach( ( nonMember ) => {
                selectMember.innerHTML += `<option value="${nonMember['email']}">${nonMember['email']}</option>`;
            } );
            colSelectMember.appendChild( selectMember );

            selectMemberDiv.appendChild( colSelectMember );

            const colSelectMember2 = document.createElement( 'div' );
            colSelectMember2.setAttribute( 'class', 'col-auto' );

            const colSelectButton = document.createElement( 'button' );
            colSelectButton.setAttribute( 'class', 'btn btn-info text-white' );
            colSelectButton.innerHTML = 'Add';
            colSelectButton.addEventListener( 'click', () => {
                if ( selectMember.value !== 'none' ) {
                    addAttendeeToMeeting( meeting, selectMember.value )
                        .then( ( response ) => {
                            if ( response.message === SUCCESS ) {
                                attendees.push( selectMember.value );
                                meetingAttendees.innerHTML = `<strong>Attendees: </strong> ${attendees.join( ', ' )}`;
                            } else {
                                addToast( `Error adding attendee: ${response.message}`, document.body, ERROR );
                            }
                        } )
                        .catch( ( error ) => {
                            try {
                                addToast( `Error adding attendee: ${error.response.data.description}`, document.body, ERROR );
                            } catch {
                                addToast( `Error adding attendee: ${error.message}`, document.body, ERROR );
                            }
                        } );
                }
            } );
            colSelectMember2.appendChild( colSelectButton );

            selectMemberDiv.appendChild( colSelectMember2 );
            cardBody.appendChild( selectMemberDiv );
            card.appendChild( cardBody );
            meetingsListDiv.appendChild( card );
        } );
    } else {
        const meetingsListTitle = document.getElementById( 'meetingsListTitle' );
        meetingsListTitle.innerHTML = 'No meetings found with given search criteria';
    }
}

document.getElementById( 'search-form' ).addEventListener( 'submit', ( event ) => {
    event.preventDefault();

    const selectedDateOption = document.getElementById( 'formGroupDateInput' ).value;
    const searchText = document.getElementById( 'formGroupSearchFor' ).value.trim();

    if ( searchText === '' ) {
        searchMeetings( selectedDateOption )
            .then( ( meetings ) => {
                if ( meetings.message === SUCCESS ) {
                    getAllUsers()
                        .then( ( users ) => {
                            if ( users.message === SUCCESS ) {
                                populateMeetingsList( meetings.data, users.data );
                            } else {
                                addToast( `Error fetching users: ${users.message}`, document.body, ERROR );
                            }
                        } )
                        .catch( ( error ) => {
                            try {
                                addToast( `Error fetching users: ${error.response.data.description}`, document.body, ERROR );
                            } catch {
                                addToast( `Error fetching users: ${error.message}`, document.body, ERROR );
                            }
                        } );
                } else {
                    addToast( `Error fetching meetings: ${meetings.message}`, document.body, ERROR );
                }
            } )
            .catch( ( error ) => {
                try {
                    addToast( `Error Fetching your meetings: ${error.response.data.description}`, document.body, ERROR );
                } catch {
                    addToast( `Error Fetching your meetings: ${error.message}`, document.body, ERROR );
                }
            } );
    } else {
        searchMeetings( selectedDateOption, searchText )
            .then( ( meetings ) => {
                if ( meetings.message === SUCCESS ) {
                    getAllUsers()
                        .then( ( users ) => {
                            if ( users.message === SUCCESS ) {
                                populateMeetingsList( meetings.data, users.data );
                            } else {
                                addToast( `Error Fetching users: ${users.message}`, document.body, ERROR );
                            }
                        } )
                        .catch( ( error ) => {
                            try {
                                addToast( `Error Fetching users: ${error.response.data.description}`, document.body, ERROR );
                            } catch {
                                addToast( `Error Fetching users: ${error.message}`, document.body, ERROR );
                            }
                        } );
                } else {
                    addToast( `Error fetching meetings: ${meetings.message}`, document.body, ERROR );
                }
            } )
            .catch( ( error ) => {
                try {
                    addToast( `Error Fetching your meetings: ${error.response.data.description}`, document.body, ERROR );
                } catch {
                    addToast( `Error Fetching your meetings: ${error.message}`, document.body, ERROR );
                }
            } );
    }
} );

function init() {
    searchMeetings( 'present' )
        .then( ( meetings ) => {
            if ( meetings.message === SUCCESS ) {
                getAllUsers()
                    .then( ( users ) => {
                        if ( users.message === SUCCESS ) {
                            populateMeetingsList( meetings.data, users.data );
                        } else {
                            addToast( `Error Fetching users: ${users.message}`, document.body, ERROR );
                        }
                    } )
                    .catch( ( error ) => {
                        try {
                            addToast( `Error Fetching users: ${error.response.data.description}`, document.body, ERROR );
                        } catch {
                            addToast( `Error Fetching users: ${error.message}`, document.body, ERROR );
                        }
                    } );
            } else {
                addToast( `Error fetching meetings: ${meetings.message}`, document.body, ERROR );
            }
        } )
        .catch( ( error ) => {
            try {
                addToast( `Error Fetching your meetings: ${error.response.data.description}`, document.body, ERROR );
            } catch {
                addToast( `Error Fetching your meetings: ${error.message}`, document.body, ERROR );
            }
        } );
}

init();
