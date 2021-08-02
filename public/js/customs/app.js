import { SUCCESS } from '../constants';

function addToast( message, element, state ) {
    const duration = Math.max( Math.ceil( ( message.length * 1000 ) / 25 ), 1100 );

    const wrapper = document.createElement( 'div' );
    wrapper.setAttribute( 'class', 'mytoast-wrapper' );

    const mytoast = document.createElement( 'div' );
    if ( state === SUCCESS ) {
        mytoast.setAttribute( 'class', 'mytoast mytoast-success' );
    } else {
        mytoast.setAttribute( 'class', 'mytoast mytoast-error' );
    }
    wrapper.appendChild( mytoast );

    const content = document.createElement( 'div' );
    content.setAttribute( 'class', 'content' );
    mytoast.appendChild( content );

    const p = document.createElement( 'p' );
    p.style.marginBottom = 0;
    p.innerHTML = message;
    content.appendChild( p );

    element.appendChild( wrapper );

    wrapper.classList.remove( 'hide' );
    wrapper.classList.add( 'show' );
    setTimeout( ( ) => {
        wrapper.classList.add( 'hide' );
        setTimeout( () => {
            wrapper.remove();
        }, 1000 );
    }, duration );
}

export default addToast;
