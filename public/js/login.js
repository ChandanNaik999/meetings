import 'bootstrap/dist/css/bootstrap.min.css';
import { LOGIN_SUCCESS, TOKEN, EMAIL, NAME } from './constants'

import "core-js/stable";
import "regenerator-runtime/runtime"; 

import { login } from './services/auth';

function init() {
    const loginForm = document.getElementById( 'login-form' );

    loginForm.addEventListener( 'submit', function( event ) {

        event.preventDefault();

        const emailEl = document.querySelector( '#emailInput' );
        const passwordEl = document.querySelector( '#passwordInput' );

    
        const email = emailEl.value, password = passwordEl.value;

        login( {email, password} )
            .then((response) => {
                console.log("Server Login response: ", response);
                if ( response.message === LOGIN_SUCCESS){
                    localStorage.setItem( TOKEN, response.token );
                    localStorage.setItem( EMAIL, response.email );
                    localStorage.setItem( NAME, response.name);
                    window.location = '/';
                }
                else{
                    window.location = '/login';
                    alert( response.message );
                }
            })
            .catch((error) => {
                alert(error.message);
            });

    });
}

init();