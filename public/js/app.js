import { API_BASE_URL, ID, NAME, TOKEN } from './constants';

function setNavbar() {
    if ( localStorage.getItem( TOKEN ) === null ) {
        window.location = '/login';
    }

    const profileImage = document.getElementById( 'navPic' );
    profileImage.setAttribute( 'src', `${API_BASE_URL}/${localStorage.getItem( ID )}.png` );

    const [firstName] = localStorage.getItem( NAME ).split( ' ' );
    document.getElementById( 'nameNav' ).innerHTML = firstName;
}

function showBodyOnLoad() {
    document.body.classList.remove( 'hide' );
}

setNavbar();
showBodyOnLoad();
