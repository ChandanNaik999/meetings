import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import addToast from './customs/app';

import { register } from './services/auth';
import { ERROR, SUCCESS } from './constants';

function init() {
    const loginForm = document.getElementById( 'register-form' );

    loginForm.addEventListener( 'submit', ( event ) => {
        event.preventDefault();

        const nameEl = document.querySelector( '#nameInput' );
        const emailEl = document.querySelector( '#emailInput' );
        const passwordEl = document.querySelector( '#passwordInput' );

        const name = nameEl.value;
        const email = emailEl.value;
        const password = passwordEl.value;

        register( { name, email, password } )
            .then( ( response ) => {
                if ( response.message === SUCCESS ) {
                    addToast( 'Registration Successful', document.body, SUCCESS );
                    setTimeout( () => {
                        window.location = '/login';
                    }, 2000 );
                } else {
                    addToast( `Registration Error: ${response.message}`, document.body, ERROR );
                }
            } )
            .catch( ( error ) => {
                try {
                    addToast( `Registration Error: ${error.response.data.description}`, document.body, ERROR );
                } catch {
                    addToast( `Registration Error: ${error.message}`, document.body, ERROR );
                }
            } );
    } );
}

init();
