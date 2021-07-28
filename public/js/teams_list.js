import 'bootstrap/dist/css/bootstrap.min.css';
import './app';
import { addMemberToTeam, fetchTeams, excuseFromTeam, addTeam } from './services/teams';
import ADD_TEAM_FORM from './data/add_team_form';
import getAllUsers from './services/user_management';
import { TOKEN } from './constants';

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
            buttonExcuse.innerHTML = 'Excuse Yourself';
            buttonExcuse.setAttribute( 'class', 'btn btn-danger' );
            buttonExcuse.addEventListener( 'click', () => {
                excuseFromTeam( team )
                    .then( () => {
                        card.remove();
                    } )
                    .catch( ( error ) => {
                        alert( error.message );
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
            colSelectButton.setAttribute( 'class', 'btn btn-info text-white' );
            colSelectButton.innerHTML = 'Add';
            colSelectButton.addEventListener( 'click', () => {
                if ( selectMember.value !== 'none' ) {
                    addMemberToTeam( team, selectMember.value )
                        .then( () => {
                            members.push( selectMember.value );
                            teamMembers.innerHTML = `<strong>Attendees: </strong> ${members.join( ', ' )}`;
                        } )
                        .catch( ( error ) => {
                            alert( error.message );
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
            getAllUsers()
                .then( ( _users ) => {
                    users = _users;
                    populateTeams( teams );
                } )
                .catch( ( error ) => {
                    alert( error.message );
                } );
        } )
        .catch( ( error ) => {
            alert( error.message );
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
        .then( () => {
            // TODO: Confirmation message
            myModal.hide();
        } )
        .catch( ( error ) => {
            alert( error.message );
        } );
} );

init();
