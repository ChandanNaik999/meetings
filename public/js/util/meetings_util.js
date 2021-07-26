/**
 * Return the meeting duration in minutes provided the start and end time of same day
 * @param {JSON} startTime The format for start time is { "hours": 9, "minutes": 0 }
 * @param {JSON} EndTime The format for end time is { "hours": 9, "minutes": 0 }
 */
function getMeetingDuration( startTime, endTime ) {
    return ( endTime['minutes'] + endTime['hours'] * 60 ) - ( startTime['minutes'] + startTime['hours'] * 60 );
}

export default getMeetingDuration;
