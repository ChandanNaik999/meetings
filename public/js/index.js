import 'bootstrap/dist/css/bootstrap.min.css';
import './app';
import { fetchMeetings } from './services/meetings';
import getMeetingDuration from './util/meetings_util';
import { TOKEN } from './constants';

function setDate( date ) {
    const selectedDate = document.getElementById( 'selectedDate' );
    const selectedDay = document.getElementById( 'selectedDay' );

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];

    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    selectedDate.innerHTML = `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
    selectedDay.innerHTML = dayNames[date.getDay()];
}

/**
 * function to draw the layout of the 24 hours of calendar
 */
function drawInitialCalendar() {
    const calendarContainer = document.getElementById( 'calendarContainer' );
    calendarContainer.innerHTML = '';
    // add individual hours
    for ( let i = 0; i < 24; i += 1 ) {
        let text = '0';
        if ( i <= 9 ) {
            text = `0${i}`;
        } else {
            text = i;
        }
        calendarContainer.innerHTML += `
        <div class="calendar-hour d-flex">
            <div class="calendar-hour-text px-2">${text}:00</div>
            <div class="calendar-hour-bg px-2 flex-grow-1 bg-info" id="calendarHour${i}"></div>
        </div> `;
    }
}

function populateCalendar( meetings ) {
    if ( meetings ) {
        meetings.forEach( ( meeting ) => {
            const meetingDuration = getMeetingDuration( meeting['startTime'], meeting['endTime'] );
            const attendees = [];
            meeting['attendees'].forEach( ( attendee ) => {
                attendees.push( attendee['email'] );
            } );

            // create meeting card and attach it to the respective hour container
            const cardMeetingDiv = document.createElement( 'div' );
            cardMeetingDiv.setAttribute( 'class', 'card-meeting' );
            cardMeetingDiv.setAttribute( 'id', `card-meeting-${meeting['_id']}` );
            const extraHeight = ( meeting['endTime']['hours'] - meeting['startTime']['hours'] ) * 10;
            cardMeetingDiv.style.height = `${meetingDuration + extraHeight}px`;
            const cardMeetingName = document.createElement( 'h5' );
            cardMeetingName.setAttribute( 'id', 'card-meeting-name' );
            cardMeetingName.innerHTML = meeting['name'];
            cardMeetingDiv.appendChild( cardMeetingName );
            const cardMeetingAttendees = document.createElement( 'p' );
            cardMeetingAttendees.setAttribute( 'id', 'card-meeting-attendees' );
            cardMeetingAttendees.innerHTML = attendees.join( ', ' );
            cardMeetingDiv.appendChild( cardMeetingAttendees );
            const startTimeHours = meeting['startTime']['hours'];
            const hourContainer = document.getElementById( `calendarHour${startTimeHours}` );
            hourContainer.appendChild( cardMeetingDiv );
        } );
    }
}

function init() {
    // redirect to login page if authorization token doesnt exist
    if ( localStorage.getItem( TOKEN ) === null ) {
        window.location = '/login';
    }

    const today = new Date();
    document.getElementById( 'datepicker' ).value = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
    setDate( today );

    drawInitialCalendar();

    // fetch meetings for today and populate the calendar containers
    fetchMeetings( today )
        .then( ( meetings ) => {
            populateCalendar( meetings );
        } )
        .catch( ( error ) => {
            alert( error.message );
        } );
}

const picker = new Pikaday( {
    field: document.getElementById( 'datepicker' ),
    toString( date ) {
        // return 'D/M/YYYY'
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    },
    onSelect: function select() {
        setDate( picker.getDate() );
        drawInitialCalendar();
        fetchMeetings( picker.getDate() )
            .then( ( meetings ) => {
                populateCalendar( meetings );
            } )
            .catch( ( error ) => {
                alert( error.message );
            } );
    },
} );

init();
