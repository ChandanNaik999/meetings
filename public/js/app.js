import { logout } from './services/auth';

function setNavbar() {
    document.getElementById( 'logoutLink' ).addEventListener( 'click', () => {
        logout();
        window.location = '/login';
    } );
}

setNavbar();
