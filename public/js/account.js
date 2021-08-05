import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css';
import '../css/account.css';
import addToast from './customs/app';
import './app';
import { logout } from './services/auth';
import { SUCCESS, ERROR, ID, API_BASE_URL, NAME, EMAIL } from './constants';
import { setProfilePic, updateUserDetails, getTotalTeams, getTotalMeetings } from './services/profile';

document.getElementById( 'editImage' ).addEventListener( 'change', ( ) => {
    const formData = new FormData();
    const image = document.getElementById( 'editImage' ).files[0];
    if ( image === undefined ) {
        return;
    }
    formData.append( 'profilepic', image );
    formData.append( 'userId', localStorage.getItem( ID ) );
    setProfilePic( formData )
        .then( ( response ) => {
            if ( response.message === SUCCESS ) {
                const reader = new FileReader();
                reader.onload = ( e ) => {
                    const profileImage = document.getElementById( 'profileImage' );
                    profileImage.setAttribute( 'src', e.target.result );
                };
                reader.readAsDataURL( image );
                addToast( 'Profile pic updated successfully', document.body, SUCCESS );
                setTimeout( () => {
                    window.location.reload();
                }, 1500 );
            } else {
                addToast( `Error adding profile pic: ${response.message}`, document.body, ERROR );
            }
        } )
        .catch( ( error ) => {
            try {
                addToast( `Error adding profile pic: ${error.response.data.description}`, document.body, ERROR );
            } catch {
                addToast( `Error adding profile pic: ${error.message}`, document.body, ERROR );
            }
        } );
} );

document.getElementById( 'logoutButton' ).addEventListener( 'click', () => {
    logout();
    window.location = '/login';
} );

function init() {
    const profileImage = document.getElementById( 'profileImage' );
    profileImage.setAttribute( 'src', `${API_BASE_URL}/${localStorage.getItem( ID )}.png` );

    const inputFullName = document.getElementById( 'inputName' );
    inputFullName.value = localStorage.getItem( NAME );

    const inputEmail = document.getElementById( 'inputEmail' );
    inputEmail.value = localStorage.getItem( EMAIL );

    const fullName = document.getElementById( 'profileName' );
    fullName.innerHTML = localStorage.getItem( NAME );

    getTotalTeams( )
        .then( ( response ) => {
            if ( response.message === SUCCESS ) {
                document.getElementById( 'stat1Value' ).innerHTML = response.data;
            }
        } )
        .catch( ( ) => {
            document.getElementById( 'stat1Value' ).innerHTML = ' - ';
        } );

    getTotalMeetings( )
        .then( ( response ) => {
            if ( response.message === SUCCESS ) {
                document.getElementById( 'stat2Value' ).innerHTML = response.data;
            }
        } )
        .catch( ( ) => {
            document.getElementById( 'stat2Value' ).innerHTML = ' - ';
        } );
}

document.getElementById( 'saveChanges' ).addEventListener( 'click', () => {
    const inputFullName = document.getElementById( 'inputName' ).value;
    const inputEmail = document.getElementById( 'inputEmail' ).value;
    const userData = {
        email: inputEmail,
        name: inputFullName,
    };
    const currentEmail = localStorage.getItem( EMAIL );
    let loginAgain = false;
    if ( currentEmail !== inputEmail ) {
        loginAgain = true;
    }
    updateUserDetails( userData, 'update_user' )
        .then( ( response ) => {
            if ( response.message === SUCCESS ) {
                localStorage.setItem( EMAIL, response.data.email );
                localStorage.setItem( NAME, response.data.name );
                addToast( 'Your details have been updated successfully', document.body, SUCCESS );
                if ( loginAgain ) {
                    addToast( 'You will be logged out. Log in again.', document.body, SUCCESS );
                    setTimeout( () => {
                        logout();
                        window.location = '/login';
                    }, 2000 );
                } else {
                    setTimeout( () => {
                        window.location.reload();
                    }, 1500 );
                }
            } else {
                addToast( `Error updating your details: ${response.message}`, document.body, ERROR );
            }
        } )
        .catch( ( error ) => {
            try {
                addToast( `Error updating your details: ${error.response.data.description}`, document.body, ERROR );
            } catch {
                addToast( `Error updating your details: ${error.message}`, document.body, ERROR );
            }
        } );
} );

document.getElementById( 'updatePassword' ).addEventListener( 'click', () => {
    const inputOldPassword = document.getElementById( 'inputOldPassword' ).value;
    const inputNewPassword1 = document.getElementById( 'inputNewPassword1' ).value;
    const inputNewPassword2 = document.getElementById( 'inputNewPassword2' ).value;

    if ( inputNewPassword1 === '' || inputNewPassword2 === '' || inputOldPassword === '' ) {
        addToast( 'Dont enter empty fields 😞', document.body, ERROR );
        return;
    }

    if ( inputNewPassword1 !== inputNewPassword2 ) {
        addToast( 'Your new passwords dont match', document.body, ERROR );
        return;
    }

    const userData = {
        oldPassword: inputOldPassword,
        newPassword: inputNewPassword1,
    };

    updateUserDetails( userData, 'update_password' )
        .then( ( response ) => {
            if ( response.message === SUCCESS ) {
                localStorage.setItem( EMAIL, response.data.email );
                localStorage.setItem( NAME, response.data.name );
                addToast( 'Your password has been updated', document.body, SUCCESS );
            } else {
                addToast( `Error updating password ${response.message}`, document.body, ERROR );
            }
        } )
        .catch( ( error ) => {
            try {
                addToast( `Error updating password: ${error.response.data.description}`, document.body, ERROR );
            } catch {
                addToast( `Error updating password: ${error.message}`, document.body, ERROR );
            }
        } );
} );

init();
