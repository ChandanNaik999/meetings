import 'bootstrap/dist/css/bootstrap.min.css';
import './app';
import 'pikaday/css/pikaday.css';
import 'pikaday/pikaday';
import { TOKEN } from './constants';

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
