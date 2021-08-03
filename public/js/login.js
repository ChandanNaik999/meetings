import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css';
import '../css/login.css';
import { SUCCESS, TOKEN, EMAIL, NAME, ERROR, ID } from './constants';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { login } from './services/auth';

import addToast from './customs/app';

function init() {
    const loginForm = document.getElementById( 'login-form' );

    loginForm.addEventListener( 'submit', ( event ) => {
        event.preventDefault();

        const emailEl = document.querySelector( '#emailInput' );
        const passwordEl = document.querySelector( '#passwordInput' );
        const email = emailEl.value;
        const password = passwordEl.value;

        login( { email, password } )
            .then( ( response ) => {
                if ( response.message === SUCCESS ) {
                    localStorage.setItem( TOKEN, response.data.token );
                    localStorage.setItem( EMAIL, response.data.email );
                    localStorage.setItem( NAME, response.data.name );
                    localStorage.setItem( ID, response.data['_id'] );
                    window.location = '/';
                } else {
                    addToast( `Login Error: ${response.message}`, document.body, ERROR );
                    setTimeout( () => {
                        window.location = '/login';
                    }, 1000 );
                }
            } )
            .catch( ( error ) => {
                try {
                    addToast( `Login Error: ${error.response.data.description}`, document.body, ERROR );
                } catch {
                    addToast( `Login Error: ${error.message}`, document.body, ERROR );
                }
            } );
    } );
}

init();
