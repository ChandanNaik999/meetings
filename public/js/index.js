import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css';
import '../css/index.css';
import './app';
import addToast from './customs/app';
import { fetchMeetings } from './services/meetings';
import getMeetingDuration from './util/meetings_util';
import { SUCCESS, TOKEN } from './constants';

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
function drawInitialCalendar( date ) {
    const calendarContainer = document.getElementById( 'calendarContainer' );
    calendarContainer.innerHTML = '';
    // add individual hours - am
    for ( let i = 0; i < 12; i += 1 ) {
        let text = '0';
        if ( i <= 9 ) {
            text = `0${i}`;
        } else {
            text = i;
        }
        calendarContainer.innerHTML += `
        <div class="calendar-hour d-flex">
            <div class="calendar-hour-text px-2">${text}:00 am</div>
            <div class="calendar-hour-bg px-2 flex-grow-1" id="calendarHour${i}"></div>
        </div> `;
    }

    for ( let i = 12; i < 24; i += 1 ) {
        let text = '0';
        if ( i <= 9 ) {
            text = `0${i}`;
        } else {
            text = i;
        }
        calendarContainer.innerHTML += `
        <div class="calendar-hour d-flex">
            <div class="calendar-hour-text px-2">${text}:00 pm</div>
            <div class="calendar-hour-bg px-2 flex-grow-1" id="calendarHour${i}"></div>
        </div> `;
    }

    // draw current time
    const today = new Date();
    today.setHours( 0, 0, 0, 0 );
    // eslint-disable-next-line no-use-before-define
    const pickerDate = date;
    pickerDate.setHours( 0, 0, 0, 0 );
    if ( pickerDate.getTime() === today.getTime() ) {
        const now = new Date();
        let time = 'am';
        let hourText = now.getHours();
        if ( now.getHours() >= 12 ) {
            time = 'pm';
            hourText -= 12;
        }
        const timeNow = document.createElement( 'div' );
        timeNow.setAttribute( 'class', 'time-now d-flex' );
        timeNow.style.top = `${now.getHours() * ( 60 + 10 ) + now.getMinutes()}px`;
        timeNow.innerHTML = `<div class="time-now-text px-2">${hourText}:${now.getMinutes()} ${time}</div>
                <div class="flex-grow-1 bg-info time-now-line" id="timeNowHr"></div>`;
        // calendarContainer = document.getElementById( 'calendarContainer' );
        calendarContainer.appendChild( timeNow );
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
            cardMeetingDiv.style.top = `${meeting['startTime']['minutes']}px`;
            const extraHeight = ( meeting['endTime']['hours'] - meeting['startTime']['hours'] ) * 10;
            cardMeetingDiv.style.height = `${meetingDuration + extraHeight}px`;
            const cardMeetingName = document.createElement( 'h5' );
            cardMeetingName.setAttribute( 'id', 'card-meeting-name' );
            cardMeetingName.setAttribute( 'class', 'card-meeting-name' );
            cardMeetingName.innerHTML = meeting['name'];
            cardMeetingDiv.appendChild( cardMeetingName );
            const cardMeetingAttendees = document.createElement( 'p' );
            cardMeetingAttendees.setAttribute( 'id', 'card-meeting-attendees' );
            cardMeetingAttendees.setAttribute( 'class', 'card-meeting-attendees' );
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

    drawInitialCalendar( new Date() );

    // fetch meetings for today and populate the calendar containers
    fetchMeetings( today )
        .then( ( meetings ) => {
            if ( meetings.message === SUCCESS ) {
                populateCalendar( meetings.data );
            } else {
                addToast( `Error Fetching your meetings: ${response.message}`, document.body, ERROR );
            }
        } )
        .catch( ( error ) => {
            try {
                addToast( `Login Error: ${error.response.data.description}`, document.body, ERROR );
            } catch {
                addToast( `Login Error: ${error.message}`, document.body, ERROR );
            }
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
    setDefaultDate: true,
    onSelect: function select() {
        setDate( picker.getDate() );
        drawInitialCalendar( new Date( picker.getDate() ) );
        fetchMeetings( picker.getDate() )
            .then( ( meetings ) => {
                if ( meetings.message === SUCCESS ) {
                    populateCalendar( meetings.data );
                } else {
                    addToast( `Error Fetching your meetings: ${response.message}`, document.body, ERROR );
                }
            } )
            .catch( ( error ) => {
                try {
                    addToast( `Error Fetching your meetings: ${error.response.data.description}`, document.body, ERROR );
                } catch {
                    addToast( `Error Fetching your meetings: ${error.message}`, document.body, ERROR );
                }
            } );
    },
} );

init();
