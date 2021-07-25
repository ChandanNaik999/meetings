import { logout } from './services/auth';

function setNavbar() {
    document.getElementById( 'logoutLink' ).addEventListener( 'click', function() {
        logout();
        window.location = '/login';
    });
}

setNavbar();