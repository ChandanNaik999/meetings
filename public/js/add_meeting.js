import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css';
import '../css/add_meeting.css';
import './app';
import addToast from './customs/app';
import { TOKEN, SUCCESS, ERROR } from './constants';
import getAllUsers from './services/user_management';
import { addMeeting } from './services/meetings';
import { fetchTeams } from './services/teams';
import ADD_MEETING_FORM from './data/add_meeting_form';

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

document.getElementById( 'addMeetingForm' ).addEventListener( 'submit', ( event ) => {
    event.preventDefault();

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

function init() {
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

init();
