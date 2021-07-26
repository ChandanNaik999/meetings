import 'bootstrap/dist/css/bootstrap.min.css';
import './app';
import 'pikaday/css/pikaday.css';
import 'pikaday/pikaday';
import { EMAIL, TOKEN } from './constants';
import { getAllUsers } from './services/user_management';
import { addMeeting } from './services/meetings';

var picker = new Pikaday({
    field: document.getElementById('formGroupDateInput'),
    toString(date, format) {
        // return 'D/M/YYYY'
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    },
    onSelect: function() {
        console.log(picker.getDate());
    },
    
});

function attendeeType(input){
    return 'email';
}

document.getElementById( 'addMeetingForm' ).addEventListener( 'submit', function( event ) {
    event.preventDefault();

    let submitJSON = {
        "name": "Google marketing campaign",
        "description": "Increasing brand awareness and spreading information about new products",
        "date": "2020-10-28",
        "startTime": {
            "hours": 9,
            "minutes": 0
        },
        "endTime": {
            "hours": 10,
            "minutes": 30
        },
        "attendees": [
            {
                "userId": "123456789012345678901249",
                "email": "aravind@example.com"
            }
        ]
    }
    const meetingName = document.getElementById('inputMeetingName').value.trim()
    const description = document.getElementById('textareaMeetingDescription').value.trim();
    const selectedDate = picker.getDate();
    const date = `${selectedDate.getFullYear()}-${selectedDate.getMonth()+1}-${selectedDate.getDate()}`;
    const selectStartTimeHours = parseInt(document.getElementById( 'selectStartTimeHours' ).value);
    const selectEndTimeHours = parseInt(document.getElementById( 'selectEndTimeHours' ).value);
    const selectStartTimeMins = parseInt(document.getElementById( 'selectStartTimeMins' ).value);
    const selectEndTimeMins = parseInt(document.getElementById( 'selectEndTimeMins' ).value);
    const attendees = ((document.getElementById('inputParticipants').value).replace(/\s+/g, '')).split(",");

    submitJSON['name'] = meetingName;
    submitJSON['description'] = description;
    submitJSON['date'] = date;
    submitJSON['startTime']['hours'] = selectStartTimeHours;
    submitJSON['startTime']['minutes'] = selectStartTimeMins;
    submitJSON['endTime']['hours'] = selectEndTimeHours;
    submitJSON['endTime']['minutes'] = selectEndTimeMins;
    // submitJSON['attends'] = attendees;

    const attendeesJSON = []

    //by default add yourself to the meeting
    attendees.push(localStorage.getItem(EMAIL));

    getAllUsers()
        .then( ( users ) => {
            attendees.forEach( (attendee) => {
                if(attendeeType(attendee) === 'email'){
                    for (let idx = 0; idx < users.length; idx++){
                        if( attendee.toLowerCase() === users[idx]['email'].toLowerCase()){
                            attendeesJSON.push({
                                "userId": users[idx]['_id'],
                                "email": users[idx]['email']
                            });
                        }
                    }
                }
            });
            submitJSON['attendees'] = attendeesJSON;

            //submit constructed meeting
            addMeeting(submitJSON)
                .then((response) => {
                    // TODO: Confirmation message
                    console.log("Add meeting response: ", response);
                })
                .catch((error) => {
                    alert(error.message);
                });
        })
        .catch( (error) => {
            alert(error.message)
        });
    
});


function init(){
    // redirect to login page if authorization token doesnt exist
    if(localStorage.getItem(TOKEN) === null){
        window.location = '/login';
    }

    let today = new Date();
    picker.setDate(today)

    // construct hours and min options
    const selectStartTimeHours = document.getElementById( 'selectStartTimeHours' );
    const selectEndTimeHours = document.getElementById( 'selectEndTimeHours' );
    for( let i = 0; i < 24; i++){
        let option = '';
        if(i === 0){
            option = `<option value="0" selected>0</option>`;
        }
        else{
            option = `<option value="${i}">${i}</option>`
        }
        selectStartTimeHours.innerHTML += option;
        selectEndTimeHours.innerHTML += option;
    }


    const selectStartTimeMins = document.getElementById( 'selectStartTimeMins' );
    const selectEndTimeMins = document.getElementById( 'selectEndTimeMins' );
    for( let i = 0; i < 60; i++){
        let option = '';
        if(i === 0){
            option = `<option value="0" selected>0</option>`;
        }
        else{
            option = `<option value="${i}">${i}</option>`
        }
        selectStartTimeMins.innerHTML += option;
        selectEndTimeMins.innerHTML += option;
    }
    
}

init();
