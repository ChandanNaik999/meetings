import 'bootstrap/dist/css/bootstrap.min.css';
import './app';
import 'pikaday/css/pikaday.css';
import 'pikaday/pikaday'
import { fetchMeetings, fetchWorkshops } from './services/meetings';
import { getMeetingDuration } from './util/meetings_util';

var picker = new Pikaday({
    field: document.getElementById('datepicker'),
    toString(date, format) {
        // return 'D/M/YYYY'
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    },
    onSelect: function() {
        setDate(picker.getDate());
        drawInitialCalendar();
        fetchMeetings(picker.getDate())
            .then((meetings) => {
                populateCalendar(meetings);
            })
            .catch((error) => {
                alert(error.message);
            });
    },
    
});

function setDate(date){

    const selectedDate = document.getElementById( 'selectedDate' );
    const selectedDay = document.getElementById( 'selectedDay' );

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    selectedDate.innerHTML = `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`
    selectedDay.innerHTML = dayNames[date.getDay()]

}


/**
 * function to draw the layout of the 24 hours of calendar
 */
function drawInitialCalendar(){

    const calendarContainer = document.getElementById( 'calendarContainer' );
    calendarContainer.innerHTML = ""
    
    //add individual hours
    for( let i =0; i < 24; i+= 1){
        let text = '0';
        if(i <= 9)
            text = `0${i}`;
        else
            text = i;
        calendarContainer.innerHTML += `
        <div class="calendar-hour d-flex">
            <div class="calendar-hour-text px-2">${text}:00</div>
            <div class="calendar-hour-bg px-2 flex-grow-1 bg-info" id="calendarHour${i}"></div>
        </div> `
    }

}

function populateCalendar( meetings ){
    if( meetings ){
        meetings.forEach( ( meeting ) => {
            
            const meetingDuration = getMeetingDuration( meeting['startTime'], meeting['endTime'] );
            const attendees = [];
            meeting['attendees'].forEach( ( attendee ) => {
                attendees.push(attendee['email']);
            });

            // create meeting card and attach it to the respective hour container
            const cardMeetingDiv = document.createElement( 'div' );
            cardMeetingDiv.setAttribute( 'class', 'card-meeting' );
            cardMeetingDiv.setAttribute( 'id', `card-meeting-${meeting['_id']}` );
            const extraHeight = (meeting['endTime']['hours'] - meeting['startTime']['hours']) * 10;
            cardMeetingDiv.style.height = `${meetingDuration + extraHeight}px`;
            const cardMeetingName = document.createElement( 'h5' );
            cardMeetingName.setAttribute( 'id', 'card-meeting-name' );
            cardMeetingName.innerHTML = meeting['name'];
            cardMeetingDiv.appendChild( cardMeetingName );
            const cardMeetingAttendees = document.createElement( 'p' );
            cardMeetingAttendees.setAttribute( 'id', 'card-meeting-attendees' );
            cardMeetingAttendees.innerHTML = attendees.join(', ');
            cardMeetingDiv.appendChild( cardMeetingAttendees );
            const startTimeHours = meeting['startTime']['hours'];
            const hourContainer = document.getElementById( `calendarHour${startTimeHours}` );
            hourContainer.appendChild( cardMeetingDiv );
            

        });
    }
}


const test_meeting = [
    {
        "startTime": {
            "hours": 0,
            "minutes": 0
        },
        "endTime": {
            "hours": 0,
            "minutes": 30
        },
        "_id": "60fd091b102d3c001526c130",
        "name": "Google marketing campaign",
        "description": "Increasing brand awareness and spreading information about new products",
        "date": "2020-10-28T00:00:00.000Z",
        "attendees": [
            {
                "userId": "123456789012345678901249",
                "email": "aravind@example.com"
            },
            {
                "userId": "123456789012345678901250",
                "email": "asmita@example.com"
            },
            {
                "userId": "60faf491b460050015c40837",
                "email": "purani20@example.com"
            }
        ],
        "__v": 0
    }
];



function init(){
    let today = new Date();
    document.getElementById('datepicker').value = `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`
    setDate(today);

    drawInitialCalendar();

    // fetch meetings for today and populate the calendar containers
    fetchMeetings(today)
            .then((meetings) => {
                populateCalendar(meetings);
            })
            .catch((error) => {
                alert(error.message);
            });
    // let meetings = test_meeting;
    
}

init();


