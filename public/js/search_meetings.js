import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css';
import '../css/add_meeting.css';
import '../css/search_meetings.css';
import addToast from './customs/app';
import './app';
import { addAttendeeToMeeting, searchMeetings, excuseFromMeeting, addMeeting } from './services/meetings';
import getAllUsers from './services/user_management';
import { TOKEN, SUCCESS, ERROR } from './constants';
import { fetchTeams } from './services/teams';
import ADD_MEETING_FORM from './data/add_meeting_form';

let searchDate = 'today';

function resetNav() {
    document.getElementById( 'pastButton' ).style.background = '#fff';
    document.getElementById( 'presentButton' ).style.background = '#fff';
    document.getElementById( 'upcomingButton' ).style.background = '#fff';
    document.getElementById( 'allButton' ).style.background = '#fff';
}

document.getElementById( 'pastButton' ).addEventListener( 'click', ( ) => {
    resetNav();
    document.getElementById( 'pastButton' ).style.background = '#f5f8fa';
    searchDate = 'past';
} );

document.getElementById( 'presentButton' ).addEventListener( 'click', ( ) => {
    resetNav();
    document.getElementById( 'presentButton' ).style.background = '#f5f8fa';
    searchDate = 'present';
} );

document.getElementById( 'allButton' ).addEventListener( 'click', ( ) => {
    resetNav();
    document.getElementById( 'allButton' ).style.background = '#f5f8fa';
    searchDate = 'all';
} );

document.getElementById( 'upcomingButton' ).addEventListener( 'click', ( ) => {
    resetNav();
    document.getElementById( 'upcomingButton' ).style.background = '#f5f8fa';
    searchDate = 'upcoming';
} );

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
            buttonExcuse.setAttribute( 'class', 'button-outline-red px-4' );
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
            colSelectButton.setAttribute( 'class', 'button mx-2' );
            colSelectButton.innerHTML = 'Add';
            colSelectButton.addEventListener( 'click', () => {
                if ( selectMember.value !== 'none' ) {
                    addAttendeeToMeeting( meeting, selectMember.value )
                        .then( ( response ) => {
                            if ( response.message === SUCCESS ) {
                                attendees.push( selectMember.value );
                                meetingAttendees.innerHTML = `<strong>Attendees: </strong> ${attendees.join( ', ' )}`;
                                addToast( 'Attendee has been added to the meeting', document.body, SUCCESS );
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

document.getElementById( 'search-form' ).addEventListener( 'click', ( ) => {
    // event.preventDefault();

    // const selectedDateOption = document.getElementById( 'formGroupDateInput' ).value;
    const selectedDateOption = searchDate;
    const searchText = document.getElementById( 'searchText' ).value.trim();
    // const searchText = document.getElementById( 'formGroupSearchFor' ).value.trim();

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
    document.getElementById( 'presentButton' ).style.background = '#f5f8fa';
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

// ================== ADD MEETING =====================

const picker = new Pikaday( {
    field: document.getElementById( 'formGroupDateInput' ),
    toString( date ) {
        // return 'D/M/YYYY'
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    },
} );

function validateEmail( email ) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test( String( email ).toLowerCase() );
}

function validateTeam( team ) {
    const re = /@[a-zA-Z\-0-9]+$/;
    return re.test( String( team ).toLowerCase() );
}

function attendeeType( attendee ) {
    let type = '';
    if ( validateEmail( attendee ) ) {
        type = 'email';
    } else if ( validateTeam( attendee ) ) {
        type = 'team';
    } else {
        type = 'none';
    }
    return type;
}

function resetForm() {
    document.getElementById( 'inputMeetingName' ).value = '';
    document.getElementById( 'textareaMeetingDescription' ).value = '';
    document.getElementById( 'selectStartTimeHours' ).value = 0;
    document.getElementById( 'selectEndTimeHours' ).value = 0;
    document.getElementById( 'selectStartTimeMins' ).value = 0;
    document.getElementById( 'selectEndTimeMins' ).value = 0;
    document.getElementById( 'inputParticipants' ).value = '';
}

let myModal = null;

document.getElementById( 'addMeeting' ).addEventListener( 'click', () => {
    myModal = new bootstrap.Modal( document.getElementById( 'myModal' ) );
    myModal.show();
} );

document.getElementById( 'modalDismiss' ).addEventListener( 'click', () => {
    myModal.hide();
} );

document.getElementById( 'submitAddMeeting' ).addEventListener( 'click', () => {
    myModal.hide();

    const submitJSON = ADD_MEETING_FORM;
    const meetingName = document.getElementById( 'inputMeetingName' ).value.trim();
    const description = document.getElementById( 'textareaMeetingDescription' ).value.trim();
    const selectedDate = picker.getDate();
    const date = `${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${selectedDate.getDate()}`;
    const selectStartTimeHours = parseInt( document.getElementById( 'selectStartTimeHours' ).value, 10 );
    const selectEndTimeHours = parseInt( document.getElementById( 'selectEndTimeHours' ).value, 10 );
    const selectStartTimeMins = parseInt( document.getElementById( 'selectStartTimeMins' ).value, 10 );
    const selectEndTimeMins = parseInt( document.getElementById( 'selectEndTimeMins' ).value, 10 );
    const attendees = ( ( document.getElementById( 'inputParticipants' ).value ).replace( /\s+/g, '' ) ).split( ',' );

    submitJSON['name'] = meetingName;
    submitJSON['description'] = description;
    submitJSON['date'] = date;
    submitJSON['startTime']['hours'] = selectStartTimeHours;
    submitJSON['startTime']['minutes'] = selectStartTimeMins;
    submitJSON['endTime']['hours'] = selectEndTimeHours;
    submitJSON['endTime']['minutes'] = selectEndTimeMins;

    const attendeesJSON = [];
    let attendeesLength = attendees.length;

    getAllUsers()
        .then( ( users ) => {
            if ( users.message === SUCCESS ) {
                fetchTeams()
                    .then( ( teams ) => {
                        if ( teams.message === SUCCESS ) {
                            for ( let idxAtt = 0; idxAtt < attendeesLength; idxAtt += 1 ) {
                                const attendee = attendees[idxAtt];
                                switch ( attendeeType( attendees[idxAtt] ) ) {
                                case 'email':
                                    for ( let idx = 0; idx < users.data.length; idx += 1 ) {
                                        if ( attendee.toLowerCase() === users.data[idx]['email'].toLowerCase() ) {
                                            attendeesJSON.push( {
                                                userId: users.data[idx]['_id'],
                                                email: users.data[idx]['email'],
                                            } );
                                            break;
                                        }
                                    }
                                    break;
                                case 'team':
                                    for ( let idx = 0; idx < teams.data.length; idx += 1 ) {
                                        if ( attendee === `@${teams.data[idx]['shortName']}` ) {
                                            const teamMemberEmails = ( teams.data[idx]['members'] ).map( ( x ) => x['email'] );
                                            teamMemberEmails.forEach( ( member ) => {
                                                if ( attendees.includes( member ) === false ) {
                                                    attendees.push( member );
                                                }
                                            } );
                                            attendeesLength += teams.data[idx]['members'].length;
                                            break;
                                        }
                                    }
                                    break;
                                default: break;
                                }
                            }
                            submitJSON['attendees'] = attendeesJSON;
                            // submit constructed meeting
                            addMeeting( submitJSON )
                                .then( ( response ) => {
                                    if ( response.message === SUCCESS ) {
                                        addToast( 'Meeting added successfully', document.body, SUCCESS );
                                        resetForm();
                                    } else {
                                        addToast( `Error adding meeting: ${response.message}`, document.body, ERROR );
                                    }
                                } )
                                .catch( ( error ) => {
                                    try {
                                        addToast( `Error adding meeting: ${error.response.data.description}`, document.body, ERROR );
                                    } catch {
                                        addToast( `Error adding meeting: ${error.message}`, document.body, ERROR );
                                    }
                                } );
                        } else {
                            addToast( `Error fetching teams: ${teams.message}`, document.body, ERROR );
                        }
                    } )
                    .catch( ( error ) => {
                        try {
                            addToast( `Error fetching teams: ${error.response.data.description}`, document.body, ERROR );
                        } catch {
                            addToast( `Error fetching teams: ${error.message}`, document.body, ERROR );
                        }
                    } );
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
} );

function initAddMeeting() {
    // redirect to login page if authorization token doesnt exist
    if ( localStorage.getItem( TOKEN ) === null ) {
        window.location = '/login';
    }

    const today = new Date();
    picker.setDate( today );

    // construct hours and min options
    const selectStartTimeHours = document.getElementById( 'selectStartTimeHours' );
    const selectEndTimeHours = document.getElementById( 'selectEndTimeHours' );
    for ( let i = 0; i < 24; i += 1 ) {
        let option = '';
        if ( i === 0 ) {
            option = '<option value="0" selected>0</option>';
        } else {
            option = `<option value="${i}">${i}</option>`;
        }
        selectStartTimeHours.innerHTML += option;
        selectEndTimeHours.innerHTML += option;
    }

    const selectStartTimeMins = document.getElementById( 'selectStartTimeMins' );
    const selectEndTimeMins = document.getElementById( 'selectEndTimeMins' );
    for ( let i = 0; i < 60; i += 1 ) {
        let option = '';
        if ( i === 0 ) {
            option = '<option value="0" selected>0</option>';
        } else {
            option = `<option value="${i}">${i}</option>`;
        }
        selectStartTimeMins.innerHTML += option;
        selectEndTimeMins.innerHTML += option;
    }
}

initAddMeeting();