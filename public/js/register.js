import 'bootstrap/dist/css/bootstrap.min.css';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { register } from './services/auth';

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
            .then( () => {
                window.location = '/login';
                // TODO: Registration successful message
            } )
            .catch( ( error ) => {
                alert( error.message );
            } );
    } );
}

init();
