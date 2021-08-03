import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css';
import '../css/teams_list.css';
import addToast from './customs/app';
import { SUCCESS, ERROR, TOKEN } from './constants';
import './app';
import { addMemberToTeam, fetchTeams, excuseFromTeam, addTeam } from './services/teams';
import ADD_TEAM_FORM from './data/add_team_form';
import getAllUsers from './services/user_management';

let users = [];

function populateTeams( teams ) {
    const meetingsListDiv = document.getElementById( 'teamsList' );
    meetingsListDiv.innerHTML = '';

    if ( teams && teams.length > 0 ) {
        const meetingsListTitle = document.getElementById( 'teamsListTitle' );
        meetingsListTitle.innerHTML = 'View and edit the teams that you are part of';
        teams.forEach( ( team ) => {
            const members = [];
            team['members'].forEach( ( member ) => {
                members.push( member['email'] );
            } );

            const card = document.createElement( 'div' );
            card.setAttribute( 'class', 'card my-col p-3 m-2' );

            const cardBody = document.createElement( 'div' );
            cardBody.setAttribute( 'class', 'card-body' );

            const cardTitle = document.createElement( 'h5' );
            cardTitle.setAttribute( 'class', 'card-title' );
            cardTitle.innerHTML = team['name'];
            cardBody.appendChild( cardTitle );

            const cardText = document.createElement( 'p' );
            cardTitle.setAttribute( 'class', 'card-text' );
            cardText.innerHTML = `@${team['shortName']}`;
            cardBody.appendChild( cardText );

            const buttonExcuse = document.createElement( 'button' );
            buttonExcuse.innerHTML = 'Leave team';
            buttonExcuse.setAttribute( 'class', 'button-outline-red px-4' );
            buttonExcuse.addEventListener( 'click', () => {
                excuseFromTeam( team )
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

            const teamMembers = document.createElement( 'p' );
            teamMembers.innerHTML = `<strong>Members: </strong> ${members.join( ', ' )}`;
            cardBody.appendChild( teamMembers );

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
                if ( members.includes( user['email'] ) === false ) {
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
                    addMemberToTeam( team, selectMember.value )
                        .then( ( response ) => {
                            if ( response.message === SUCCESS ) {
                                members.push( selectMember.value );
                                teamMembers.innerHTML = `<strong>Members: </strong> ${members.join( ', ' )}`;
                                addToast( 'Added member successfully', document.body, SUCCESS );
                            } else {
                                addToast( `Error adding member: ${response.message}`, document.body, ERROR );
                            }
                        } )
                        .catch( ( error ) => {
                            try {
                                addToast( `Error adding member: ${error.response.data.description}`, document.body, ERROR );
                            } catch {
                                addToast( `Error adding member: ${error.message}`, document.body, ERROR );
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
        const meetingsListTitle = document.getElementById( 'teamsListTitle' );
        meetingsListTitle.innerHTML = 'Sorry:( you are not part of any team.';
    }
}

function init() {
    // redirect to login page if authorization token doesnt exist
    if ( localStorage.getItem( TOKEN ) === null ) {
        window.location = '/login';
    }

    // fetch your teams
    fetchTeams()
        .then( ( teams ) => {
            if ( teams.message === SUCCESS ) {
                getAllUsers()
                    .then( ( _users ) => {
                        if ( _users.message === SUCCESS ) {
                            users = _users.data;
                            populateTeams( teams.data );
                        } else {
                            addToast( `Error fetching users: ${_users.message}`, document.body, ERROR );
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
}

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
let myModal = null;

document.getElementById( 'addNewTeamButton' ).addEventListener( 'click', () => {
    myModal = new bootstrap.Modal( document.getElementById( 'myModal' ) );
    myModal.show();
} );

document.getElementById( 'modalDismiss' ).addEventListener( 'click', () => {
    // const myModal = new bootstrap.Modal( document.getElementById( 'myModal' ) );
    myModal.hide();
} );

document.getElementById( 'submitAddTeam' ).addEventListener( 'click', () => {
    // const myModal = new bootstrap.Modal( document.getElementById( 'myModal' ) );
    myModal.hide();

    const teamName = document.getElementById( 'inputTeamName' ).value;
    const teamShortName = document.getElementById( 'inputShortName' ).value;
    const teamDescription = document.getElementById( 'teamDescription' ).value;
    const teamMembers = ( ( document.getElementById( 'inputMembers' ).value ).replace( /\s+/g, '' ) ).split( ',' );

    // TODO: Validation
    const submitJSON = ADD_TEAM_FORM;
    submitJSON['name'] = teamName;
    submitJSON['shortName'] = teamShortName;
    submitJSON['description'] = teamDescription;
    const attendeesJSON = [];

    for ( let idxAtt = 0; idxAtt < teamMembers.length; idxAtt += 1 ) {
        const member = teamMembers[idxAtt];
        switch ( attendeeType( member ) ) {
        case 'email':
            for ( let idx = 0; idx < users.length; idx += 1 ) {
                if ( member.toLowerCase() === users[idx]['email'].toLowerCase() ) {
                    attendeesJSON.push( {
                        userId: users[idx]['_id'],
                        email: users[idx]['email'],
                    } );
                    break;
                }
            }
            break;
        default: break;
        }
    }
    submitJSON['members'] = attendeesJSON;

    addTeam( submitJSON )
        .then( ( response ) => {
            if ( response.message === SUCCESS ) {
                myModal.hide();
                addToast( 'Team added successfully', document.body, SUCCESS );
            } else {
                addToast( `Error adding team: ${response.message}`, document.body, ERROR );
            }
        } )
        .catch( ( error ) => {
            myModal.hide();
            try {
                addToast( `Error adding team: ${error.response.data.description}`, document.body, ERROR );
            } catch {
                addToast( `Error adding team: ${error.message}`, document.body, ERROR );
            }
        } );
} );

init();
