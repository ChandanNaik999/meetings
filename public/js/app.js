import { NAME } from './constants';
import { logout } from './services/auth';

function setNavbar() {
    document.getElementById( 'logoutLink' ).addEventListener( 'click', () => {
        logout();
        window.location = '/login';
    } );
    const [firstName] = localStorage.getItem( NAME ).split( ' ' );
    document.getElementById( 'nameNav' ).innerHTML = firstName;
}

setNavbar();
