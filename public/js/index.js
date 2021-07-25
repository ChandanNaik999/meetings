import 'bootstrap/dist/css/bootstrap.min.css';
import './app';
import 'pikaday/css/pikaday.css';
import 'pikaday/pikaday'

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
    },
    
});

function setDate(date){

    let selectedDate = document.getElementById( 'selected-date' );
    let selectedDay = document.getElementById( 'selected-day' );

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    selectedDate.innerHTML = `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`
    selectedDay.innerHTML = dayNames[date.getDay()]

}


function init(){
    let today = new Date();
    document.getElementById('datepicker').value = `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`
    setDate(today);
}

init();
