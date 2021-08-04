/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/data/add_meeting_form.js":
/*!********************************************!*\
  !*** ./public/js/data/add_meeting_form.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable */
var ADD_MEETING_FORM = {
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
  "attendees": []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ADD_MEETING_FORM);

/***/ }),

/***/ "./public/js/search_meetings.js":
/*!**************************************!*\
  !*** ./public/js/search_meetings.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/main.css */ "./public/css/main.css");
/* harmony import */ var _css_add_meeting_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/add_meeting.css */ "./public/css/add_meeting.css");
/* harmony import */ var _css_search_meetings_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/search_meetings.css */ "./public/css/search_meetings.css");
/* harmony import */ var _customs_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customs/app */ "./public/js/customs/app.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app */ "./public/js/app.js");
/* harmony import */ var _services_meetings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/meetings */ "./public/js/services/meetings.js");
/* harmony import */ var _services_user_management__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/user_management */ "./public/js/services/user_management.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants */ "./public/js/constants.js");
/* harmony import */ var _services_teams__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/teams */ "./public/js/services/teams.js");
/* harmony import */ var _data_add_meeting_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./data/add_meeting_form */ "./public/js/data/add_meeting_form.js");











var searchDate = 'today';

function resetNav() {
  document.getElementById('pastButton').style.background = '#fff';
  document.getElementById('presentButton').style.background = '#fff';
  document.getElementById('upcomingButton').style.background = '#fff';
  document.getElementById('allButton').style.background = '#fff';
}

document.getElementById('pastButton').addEventListener('click', function () {
  resetNav();
  document.getElementById('pastButton').style.background = '#f5f8fa';
  searchDate = 'past';
  document.getElementById('search-form').click();
});
document.getElementById('presentButton').addEventListener('click', function () {
  resetNav();
  document.getElementById('presentButton').style.background = '#f5f8fa';
  searchDate = 'present';
  document.getElementById('search-form').click();
});
document.getElementById('allButton').addEventListener('click', function () {
  resetNav();
  document.getElementById('allButton').style.background = '#f5f8fa';
  searchDate = 'all';
  document.getElementById('search-form').click();
});
document.getElementById('upcomingButton').addEventListener('click', function () {
  resetNav();
  document.getElementById('upcomingButton').style.background = '#f5f8fa';
  searchDate = 'upcoming';
  document.getElementById('search-form').click();
});

function formatTime(hours, minutes) {
  var result = '';

  if (hours < 10) {
    result += "0".concat(hours);
  } else {
    result += hours;
  }

  result += ':';

  if (minutes < 10) {
    result += "0".concat(minutes);
  } else {
    result += minutes;
  }

  return result;
}

function populateMeetingsList(meetings, users) {
  var meetingsListDiv = document.getElementById('searchMeetingsList');
  meetingsListDiv.innerHTML = '';

  if (meetings && meetings.length > 0) {
    var meetingsListTitle = document.getElementById('meetingsListTitle');
    meetingsListTitle.style.display = 'none';
    meetings.forEach(function (meeting) {
      var attendees = [];
      meeting['attendees'].forEach(function (attendee) {
        attendees.push(attendee['email']);
      }); // create meeting card and attach it to the respective parent

      var card = document.createElement('div');
      card.setAttribute('class', 'card p-3 mb-3');
      var cardBody = document.createElement('div');
      cardBody.setAttribute('class', 'card-body');
      var cardMeetingNameDiv = document.createElement('div');
      cardMeetingNameDiv.setAttribute('class', 'row');
      var cardMeetingName = document.createElement('h4');
      cardMeetingName.setAttribute('id', 'card-meeting-name');
      cardMeetingName.setAttribute('class', 'col-auto me-auto card-meeting-name');
      cardMeetingName.innerHTML = meeting['name'];
      var cardMeetingTime = document.createElement('h5');
      cardMeetingTime.setAttribute('class', 'col-auto card-meeting-name');
      var date = new Date(meeting['date']);
      var startTime = formatTime(meeting['startTime']['hours'], meeting['startTime']['minutes']);
      var endTime = formatTime(meeting['endTime']['hours'], meeting['endTime']['minutes']);
      cardMeetingTime.innerHTML = "".concat(date.toDateString(), ", ").concat(startTime, "-").concat(endTime);
      cardMeetingNameDiv.appendChild(cardMeetingName);
      cardMeetingNameDiv.appendChild(cardMeetingTime); // cardMeetingDiv.appendChild( cardMeetingNameDiv );

      cardBody.appendChild(cardMeetingNameDiv);
      var cardText = document.createElement('p');
      cardText.innerHTML = meeting['description'];
      cardBody.appendChild(cardText);
      var buttonExcuse = document.createElement('button');
      buttonExcuse.innerHTML = 'Leave meeting';
      buttonExcuse.setAttribute('class', 'button-outline-red px-4');
      buttonExcuse.addEventListener('click', function () {
        (0,_services_meetings__WEBPACK_IMPORTED_MODULE_6__.excuseFromMeeting)(meeting).then(function (response) {
          if (response.message === _constants__WEBPACK_IMPORTED_MODULE_8__.SUCCESS) {
            (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)('You have been removed from the team', document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.SUCCESS);
            card.remove();
          } else {
            (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error removing: ".concat(response.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
          }
        })["catch"](function (error) {
          try {
            (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error removing: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
          } catch (_unused) {
            (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error removing: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
          }
        });
      });
      cardBody.appendChild(buttonExcuse);
      var hr = document.createElement('hr');
      hr.setAttribute('class', 'my-3');
      cardBody.appendChild(hr);
      var meetingAttendees = document.createElement('p');
      meetingAttendees.innerHTML = "<strong>Attendees: </strong> ".concat(attendees.join(', '));
      cardBody.appendChild(meetingAttendees);
      var selectMemberDiv = document.createElement('div');
      selectMemberDiv.setAttribute('class', 'row gy-2 gx-3 align-items-center');
      var colSelectMember = document.createElement('div');
      colSelectMember.setAttribute('class', 'col-auto');
      var labelSelectMember = document.createElement('label');
      labelSelectMember.setAttribute('class', 'visually-hidden');
      labelSelectMember.setAttribute('for', 'selectMember');
      colSelectMember.appendChild(labelSelectMember);
      var selectMember = document.createElement('select');
      selectMember.setAttribute('class', 'form-select');
      selectMember.setAttribute('id', 'selectMember');
      selectMember.setAttribute('aria-label', 'Select Member');
      var nonMembers = [];
      users.forEach(function (user) {
        if (attendees.includes(user['email']) === false) {
          nonMembers.push(user);
        }
      });
      selectMember.innerHTML = '<option value="none" selected>Select member</option>';
      nonMembers.forEach(function (nonMember) {
        selectMember.innerHTML += "<option value=\"".concat(nonMember['email'], "\">").concat(nonMember['email'], "</option>");
      });
      colSelectMember.appendChild(selectMember);
      selectMemberDiv.appendChild(colSelectMember);
      var colSelectMember2 = document.createElement('div');
      colSelectMember2.setAttribute('class', 'col-auto');
      var colSelectButton = document.createElement('button');
      colSelectButton.setAttribute('class', 'button mx-2');
      colSelectButton.innerHTML = 'Add';
      colSelectButton.addEventListener('click', function () {
        if (selectMember.value !== 'none') {
          (0,_services_meetings__WEBPACK_IMPORTED_MODULE_6__.addAttendeeToMeeting)(meeting, selectMember.value).then(function (response) {
            if (response.message === _constants__WEBPACK_IMPORTED_MODULE_8__.SUCCESS) {
              attendees.push(selectMember.value);
              meetingAttendees.innerHTML = "<strong>Attendees: </strong> ".concat(attendees.join(', '));
              (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)('Attendee has been added to the meeting', document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.SUCCESS);
            } else {
              (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error adding attendee: ".concat(response.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
            }
          })["catch"](function (error) {
            try {
              (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error adding attendee: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
            } catch (_unused2) {
              (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error adding attendee: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
            }
          });
        }
      });
      colSelectMember2.appendChild(colSelectButton);
      selectMemberDiv.appendChild(colSelectMember2);
      cardBody.appendChild(selectMemberDiv);
      card.appendChild(cardBody);
      meetingsListDiv.appendChild(card);
    });
  } else {
    var _meetingsListTitle = document.getElementById('meetingsListTitle');

    _meetingsListTitle.innerHTML = 'No meetings found with given search criteria';
    _meetingsListTitle.style.display = 'block';
  }
}

document.getElementById('search-form').addEventListener('click', function () {
  // event.preventDefault();
  // const selectedDateOption = document.getElementById( 'formGroupDateInput' ).value;
  var selectedDateOption = searchDate;
  var searchText = document.getElementById('searchText').value.trim(); // const searchText = document.getElementById( 'formGroupSearchFor' ).value.trim();

  if (searchText === '') {
    (0,_services_meetings__WEBPACK_IMPORTED_MODULE_6__.searchMeetings)(selectedDateOption).then(function (meetings) {
      if (meetings.message === _constants__WEBPACK_IMPORTED_MODULE_8__.SUCCESS) {
        (0,_services_user_management__WEBPACK_IMPORTED_MODULE_7__.default)().then(function (users) {
          if (users.message === _constants__WEBPACK_IMPORTED_MODULE_8__.SUCCESS) {
            populateMeetingsList(meetings.data, users.data);
          } else {
            (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error fetching users: ".concat(users.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
          }
        })["catch"](function (error) {
          try {
            (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error fetching users: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
          } catch (_unused3) {
            (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error fetching users: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
          }
        });
      } else {
        (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error fetching meetings: ".concat(meetings.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
      }
    })["catch"](function (error) {
      try {
        (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error Fetching your meetings: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
      } catch (_unused4) {
        (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error Fetching your meetings: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
      }
    });
  } else {
    (0,_services_meetings__WEBPACK_IMPORTED_MODULE_6__.searchMeetings)(selectedDateOption, searchText).then(function (meetings) {
      if (meetings.message === _constants__WEBPACK_IMPORTED_MODULE_8__.SUCCESS) {
        (0,_services_user_management__WEBPACK_IMPORTED_MODULE_7__.default)().then(function (users) {
          if (users.message === _constants__WEBPACK_IMPORTED_MODULE_8__.SUCCESS) {
            populateMeetingsList(meetings.data, users.data);
          } else {
            (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error Fetching users: ".concat(users.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
          }
        })["catch"](function (error) {
          try {
            (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error Fetching users: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
          } catch (_unused5) {
            (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error Fetching users: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
          }
        });
      } else {
        (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error fetching meetings: ".concat(meetings.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
      }
    })["catch"](function (error) {
      try {
        (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error Fetching your meetings: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
      } catch (_unused6) {
        (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error Fetching your meetings: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
      }
    });
  }
});

function init() {
  document.getElementById('presentButton').style.background = '#f5f8fa';
  (0,_services_meetings__WEBPACK_IMPORTED_MODULE_6__.searchMeetings)('present').then(function (meetings) {
    if (meetings.message === _constants__WEBPACK_IMPORTED_MODULE_8__.SUCCESS) {
      (0,_services_user_management__WEBPACK_IMPORTED_MODULE_7__.default)().then(function (users) {
        if (users.message === _constants__WEBPACK_IMPORTED_MODULE_8__.SUCCESS) {
          populateMeetingsList(meetings.data, users.data);
        } else {
          (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error Fetching users: ".concat(users.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
        }
      })["catch"](function (error) {
        try {
          (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error Fetching users: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
        } catch (_unused7) {
          (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error Fetching users: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
        }
      });
    } else {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error fetching meetings: ".concat(meetings.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
    }
  })["catch"](function (error) {
    try {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error Fetching your meetings: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
    } catch (_unused8) {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error Fetching your meetings: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
    }
  });
}

init(); // ================== ADD MEETING =====================

var picker = new Pikaday({
  field: document.getElementById('formGroupDateInput'),
  toString: function toString(date) {
    // return 'D/M/YYYY'
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    return "".concat(day, "/").concat(month, "/").concat(year);
  }
});

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validateTeam(team) {
  var re = /@[a-zA-Z\-0-9]+$/;
  return re.test(String(team).toLowerCase());
}

function attendeeType(attendee) {
  var type = '';

  if (validateEmail(attendee)) {
    type = 'email';
  } else if (validateTeam(attendee)) {
    type = 'team';
  } else {
    type = 'none';
  }

  return type;
}

function resetForm() {
  document.getElementById('inputMeetingName').value = '';
  document.getElementById('textareaMeetingDescription').value = '';
  document.getElementById('selectStartTimeHours').value = 0;
  document.getElementById('selectEndTimeHours').value = 0;
  document.getElementById('selectStartTimeMins').value = 0;
  document.getElementById('selectEndTimeMins').value = 0;
  document.getElementById('inputParticipants').value = '';
}

var myModal = null;
document.getElementById('addMeeting').addEventListener('click', function () {
  myModal = new bootstrap.Modal(document.getElementById('myModal'));
  myModal.show();
});
document.getElementById('modalDismiss').addEventListener('click', function () {
  myModal.hide();
});
document.getElementById('submitAddMeeting').addEventListener('click', function () {
  myModal.hide();
  var submitJSON = _data_add_meeting_form__WEBPACK_IMPORTED_MODULE_10__.default;
  var meetingName = document.getElementById('inputMeetingName').value.trim();

  if (meetingName.length <= 3) {
    (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)('Please enter a longer meeting name', document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
    return;
  }

  var description = document.getElementById('textareaMeetingDescription').value.trim();

  if (description.length <= 10) {
    (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)('Please enter a longer meeting name  ( 10 characters min )', document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
    return;
  }

  var selectedDate = picker.getDate();
  var date = "".concat(selectedDate.getFullYear(), "-").concat(selectedDate.getMonth() + 1, "-").concat(selectedDate.getDate());
  var selectStartTimeHours = parseInt(document.getElementById('selectStartTimeHours').value, 10);
  var selectEndTimeHours = parseInt(document.getElementById('selectEndTimeHours').value, 10);
  var selectStartTimeMins = parseInt(document.getElementById('selectStartTimeMins').value, 10);
  var selectEndTimeMins = parseInt(document.getElementById('selectEndTimeMins').value, 10);

  if (selectEndTimeHours < selectStartTimeHours) {
    (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)('Start time has to be less than end time', document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
    return; // eslint-disable-next-line no-else-return
    // eslint-disable-next-line max-len
  }

  if (selectEndTimeHours === selectStartTimeHours && selectStartTimeMins >= selectEndTimeMins) {
    (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)('Start time has to be less than end time', document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
    return;
  }

  var attendees = document.getElementById('inputParticipants').value.replace(/\s+/g, '').split(',');
  submitJSON['name'] = meetingName;
  submitJSON['description'] = description;
  submitJSON['date'] = date;
  submitJSON['startTime']['hours'] = selectStartTimeHours;
  submitJSON['startTime']['minutes'] = selectStartTimeMins;
  submitJSON['endTime']['hours'] = selectEndTimeHours;
  submitJSON['endTime']['minutes'] = selectEndTimeMins;
  var attendeesJSON = [];
  var attendeesLength = attendees.length;
  (0,_services_user_management__WEBPACK_IMPORTED_MODULE_7__.default)().then(function (users) {
    if (users.message === _constants__WEBPACK_IMPORTED_MODULE_8__.SUCCESS) {
      (0,_services_teams__WEBPACK_IMPORTED_MODULE_9__.fetchTeams)().then(function (teams) {
        if (teams.message === _constants__WEBPACK_IMPORTED_MODULE_8__.SUCCESS) {
          for (var idxAtt = 0; idxAtt < attendeesLength; idxAtt += 1) {
            var attendee = attendees[idxAtt];

            switch (attendeeType(attendees[idxAtt])) {
              case 'email':
                for (var idx = 0; idx < users.data.length; idx += 1) {
                  if (attendee.toLowerCase() === users.data[idx]['email'].toLowerCase()) {
                    attendeesJSON.push({
                      userId: users.data[idx]['_id'],
                      email: users.data[idx]['email']
                    });
                    break;
                  }
                }

                break;

              case 'team':
                for (var _idx = 0; _idx < teams.data.length; _idx += 1) {
                  if (attendee === "@".concat(teams.data[_idx]['shortName'])) {
                    var teamMemberEmails = teams.data[_idx]['members'].map(function (x) {
                      return x['email'];
                    });

                    teamMemberEmails.forEach(function (member) {
                      if (attendees.includes(member) === false) {
                        attendees.push(member);
                      }
                    });
                    attendeesLength += teams.data[_idx]['members'].length;
                    break;
                  }
                }

                break;

              default:
                break;
            }
          }

          submitJSON['attendees'] = attendeesJSON; // submit constructed meeting

          (0,_services_meetings__WEBPACK_IMPORTED_MODULE_6__.addMeeting)(submitJSON).then(function (response) {
            if (response.message === _constants__WEBPACK_IMPORTED_MODULE_8__.SUCCESS) {
              (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)('Meeting added successfully', document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.SUCCESS);
              resetForm();
              setTimeout(function () {
                window.location.reload();
              }, 1500);
            } else {
              (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error adding meeting: ".concat(response.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
            }
          })["catch"](function (error) {
            try {
              (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error adding meeting: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
            } catch (_unused9) {
              (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error adding meeting: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
            }
          });
        } else {
          (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error fetching teams: ".concat(teams.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
        }
      })["catch"](function (error) {
        try {
          (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error fetching teams: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
        } catch (_unused10) {
          (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error fetching teams: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
        }
      });
    } else {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error fetching users: ".concat(users.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
    }
  })["catch"](function (error) {
    try {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error fetching users: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
    } catch (_unused11) {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error fetching users: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
    }
  });
});

function initAddMeeting() {
  // redirect to login page if authorization token doesnt exist
  if (localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_8__.TOKEN) === null) {
    window.location = '/login';
  }

  var today = new Date();
  picker.setDate(today); // construct hours and min options

  var selectStartTimeHours = document.getElementById('selectStartTimeHours');
  var selectEndTimeHours = document.getElementById('selectEndTimeHours');

  for (var i = 0; i < 24; i += 1) {
    var option = '';

    if (i === 0) {
      option = '<option value="0" selected>0</option>';
    } else {
      option = "<option value=\"".concat(i, "\">").concat(i, "</option>");
    }

    selectStartTimeHours.innerHTML += option;
    selectEndTimeHours.innerHTML += option;
  }

  var selectStartTimeMins = document.getElementById('selectStartTimeMins');
  var selectEndTimeMins = document.getElementById('selectEndTimeMins');

  for (var _i = 0; _i < 60; _i += 1) {
    var _option = '';

    if (_i === 0) {
      _option = '<option value="0" selected>0</option>';
    } else {
      _option = "<option value=\"".concat(_i, "\">").concat(_i, "</option>");
    }

    selectStartTimeMins.innerHTML += _option;
    selectEndTimeMins.innerHTML += _option;
  }
}

initAddMeeting();

/***/ }),

/***/ "./public/js/services/teams.js":
/*!*************************************!*\
  !*** ./public/js/services/teams.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchTeams": () => (/* binding */ fetchTeams),
/* harmony export */   "addTeam": () => (/* binding */ addTeam),
/* harmony export */   "addMemberToTeam": () => (/* binding */ addMemberToTeam),
/* harmony export */   "excuseFromTeam": () => (/* binding */ excuseFromTeam)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./public/js/constants.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ "./public/js/services/auth.js");
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/stable */ "./node_modules/core-js/stable/index.js");
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







function fetchTeams() {
  return _fetchTeams.apply(this, arguments);
}

function _fetchTeams() {
  _fetchTeams = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(_constants__WEBPACK_IMPORTED_MODULE_1__.API_BASE_URL, "/teams"), {
              headers: {
                Authorization: "".concat((0,_auth__WEBPACK_IMPORTED_MODULE_2__.getToken)())
              }
            });

          case 2:
            response = _context.sent;
            return _context.abrupt("return", response.data);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchTeams.apply(this, arguments);
}

function addTeam(_x) {
  return _addTeam.apply(this, arguments);
}

function _addTeam() {
  _addTeam = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(teamJSON) {
    var response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().post("".concat(_constants__WEBPACK_IMPORTED_MODULE_1__.API_BASE_URL, "/teams/"), teamJSON, {
              headers: {
                Authorization: "".concat((0,_auth__WEBPACK_IMPORTED_MODULE_2__.getToken)())
              }
            });

          case 2:
            response = _context2.sent;
            return _context2.abrupt("return", response.data);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _addTeam.apply(this, arguments);
}

function addMemberToTeam(_x2, _x3) {
  return _addMemberToTeam.apply(this, arguments);
}

function _addMemberToTeam() {
  _addMemberToTeam = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(team, email) {
    var response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().patch("".concat(_constants__WEBPACK_IMPORTED_MODULE_1__.API_BASE_URL, "/teams/").concat(team['_id'], "?action=add_member&email=").concat(email), {}, {
              headers: {
                Authorization: "".concat((0,_auth__WEBPACK_IMPORTED_MODULE_2__.getToken)())
              }
            });

          case 2:
            response = _context3.sent;
            return _context3.abrupt("return", response.data);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _addMemberToTeam.apply(this, arguments);
}

function excuseFromTeam(_x4) {
  return _excuseFromTeam.apply(this, arguments);
}

function _excuseFromTeam() {
  _excuseFromTeam = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(team) {
    var response;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().patch("".concat(_constants__WEBPACK_IMPORTED_MODULE_1__.API_BASE_URL, "/teams/").concat(team['_id'], "?action=remove_member"), {}, {
              headers: {
                Authorization: "".concat((0,_auth__WEBPACK_IMPORTED_MODULE_2__.getToken)())
              }
            });

          case 2:
            response = _context4.sent;
            return _context4.abrupt("return", response.data);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _excuseFromTeam.apply(this, arguments);
}



/***/ }),

/***/ "./public/js/services/user_management.js":
/*!***********************************************!*\
  !*** ./public/js/services/user_management.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./public/js/constants.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ "./public/js/services/auth.js");
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/stable */ "./node_modules/core-js/stable/index.js");
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






/**
 * Get the list of all registered users.
 * @returns list of all users
 */

function getAllUsers() {
  return _getAllUsers.apply(this, arguments);
}

function _getAllUsers() {
  _getAllUsers = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(_constants__WEBPACK_IMPORTED_MODULE_1__.API_BASE_URL, "/users"), {
              headers: {
                Authorization: "".concat((0,_auth__WEBPACK_IMPORTED_MODULE_2__.getToken)())
              }
            });

          case 2:
            response = _context.sent;
            return _context.abrupt("return", response.data);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getAllUsers.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAllUsers);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./public/css/add_meeting.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./public/css/add_meeting.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    font-size: 16px;\r\n  }\r\n\r\n  hr {\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n    border: 0;\r\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\r\n  }\r\n\r\n  textarea {\r\n    padding-top: 10px;\r\n    padding-bottom: 25px;\r\n    width: 100%;\r\n    display: block;\r\n  }", "",{"version":3,"sources":["webpack://./public/css/add_meeting.css"],"names":[],"mappings":"AAAA;IACI,eAAe;EACjB;;EAEA;IACE,gBAAgB;IAChB,mBAAmB;IACnB,SAAS;IACT,wCAAwC;EAC1C;;EAEA;IACE,iBAAiB;IACjB,oBAAoB;IACpB,WAAW;IACX,cAAc;EAChB","sourcesContent":[":root {\r\n    font-size: 16px;\r\n  }\r\n\r\n  hr {\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n    border: 0;\r\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\r\n  }\r\n\r\n  textarea {\r\n    padding-top: 10px;\r\n    padding-bottom: 25px;\r\n    width: 100%;\r\n    display: block;\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./public/css/search_meetings.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./public/css/search_meetings.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    font-size: 16px;\r\n}\r\n\r\nhr {\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n    border: 0;\r\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\ntextarea {\r\n    padding-top: 10px;\r\n    padding-bottom: 25px;\r\n    width: 100%;\r\n    display: block;\r\n}\r\n\r\n\r\n.card-toolbar {\r\n    background-color: #fff;\r\n    background-clip: border-box;\r\n    border: 0;\r\n    border-radius: 4px;\r\n    margin-bottom: 1.5rem;\r\n    margin-bottom: 1.5rem;\r\n    box-shadow: none;\r\n}\r\n\r\n\r\n.nav-pills-custom {\r\n    font-size: 1rem;\r\n    color: #7e8299;\r\n    background-color: white;\r\n    font-weight: 600;\r\n    display: inline;\r\n    border: none;\r\n    border-radius: 0.5rem;\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n    padding-top: 0.3rem;\r\n    padding-bottom: 0.3rem;\r\n    margin-right: 1rem;\r\n}\r\n\r\n.nav-pills-custom:hover {\r\n    background-color: #f5f8fa;\r\n}\r\n\r\n.search-text-custom {\r\n    line-height: 0.8rem;\r\n    border: none;\r\n}", "",{"version":3,"sources":["webpack://./public/css/search_meetings.css"],"names":[],"mappings":"AAAA;IACI,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,SAAS;IACT,wCAAwC;AAC5C;;AAEA;IACI,iBAAiB;IACjB,oBAAoB;IACpB,WAAW;IACX,cAAc;AAClB;;;AAGA;IACI,sBAAsB;IACtB,2BAA2B;IAC3B,SAAS;IACT,kBAAkB;IAClB,qBAAqB;IACrB,qBAAqB;IACrB,gBAAgB;AACpB;;;AAGA;IACI,eAAe;IACf,cAAc;IACd,uBAAuB;IACvB,gBAAgB;IAChB,eAAe;IACf,YAAY;IACZ,qBAAqB;IACrB,kBAAkB;IAClB,mBAAmB;IACnB,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,mBAAmB;IACnB,YAAY;AAChB","sourcesContent":[":root {\r\n    font-size: 16px;\r\n}\r\n\r\nhr {\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n    border: 0;\r\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\ntextarea {\r\n    padding-top: 10px;\r\n    padding-bottom: 25px;\r\n    width: 100%;\r\n    display: block;\r\n}\r\n\r\n\r\n.card-toolbar {\r\n    background-color: #fff;\r\n    background-clip: border-box;\r\n    border: 0;\r\n    border-radius: 4px;\r\n    margin-bottom: 1.5rem;\r\n    margin-bottom: 1.5rem;\r\n    box-shadow: none;\r\n}\r\n\r\n\r\n.nav-pills-custom {\r\n    font-size: 1rem;\r\n    color: #7e8299;\r\n    background-color: white;\r\n    font-weight: 600;\r\n    display: inline;\r\n    border: none;\r\n    border-radius: 0.5rem;\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n    padding-top: 0.3rem;\r\n    padding-bottom: 0.3rem;\r\n    margin-right: 1rem;\r\n}\r\n\r\n.nav-pills-custom:hover {\r\n    background-color: #f5f8fa;\r\n}\r\n\r\n.search-text-custom {\r\n    line-height: 0.8rem;\r\n    border: none;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./public/css/add_meeting.css":
/*!************************************!*\
  !*** ./public/css/add_meeting.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_add_meeting_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./add_meeting.css */ "./node_modules/css-loader/dist/cjs.js!./public/css/add_meeting.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_add_meeting_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_add_meeting_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_add_meeting_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_add_meeting_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./public/css/search_meetings.css":
/*!****************************************!*\
  !*** ./public/css/search_meetings.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_search_meetings_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./search_meetings.css */ "./node_modules/css-loader/dist/cjs.js!./public/css/search_meetings.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_search_meetings_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_search_meetings_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_search_meetings_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_search_meetings_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"search_meetings": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmeetings"] = self["webpackChunkmeetings"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_bootstrap_dist_css_bootstrap_min_css","vendors-node_modules_axios_index_js-node_modules_core-js_stable_index_js-node_modules_regener-efddf7","public_css_main_css-data_image_svg_xml_3csvg_xmlns_27http_www_w3_org_2000_svg_27_viewBox_27-4-b01be0","public_js_app_js-public_js_customs_app_js-public_js_services_meetings_js"], () => (__webpack_require__("./public/js/search_meetings.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9qcy9kYXRhL2FkZF9tZWV0aW5nX2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbWVldGluZ3MvLi9wdWJsaWMvanMvc2VhcmNoX21lZXRpbmdzLmpzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2pzL3NlcnZpY2VzL3RlYW1zLmpzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2pzL3NlcnZpY2VzL3VzZXJfbWFuYWdlbWVudC5qcyIsIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9jc3MvYWRkX21lZXRpbmcuY3NzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2Nzcy9zZWFyY2hfbWVldGluZ3MuY3NzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2Nzcy9hZGRfbWVldGluZy5jc3M/MDljOSIsIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9jc3Mvc2VhcmNoX21lZXRpbmdzLmNzcz85YTBhIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vbWVldGluZ3Mvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbWVldGluZ3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbWVldGluZ3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJBRERfTUVFVElOR19GT1JNIiwic2VhcmNoRGF0ZSIsInJlc2V0TmF2IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiYmFja2dyb3VuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGljayIsImZvcm1hdFRpbWUiLCJob3VycyIsIm1pbnV0ZXMiLCJyZXN1bHQiLCJwb3B1bGF0ZU1lZXRpbmdzTGlzdCIsIm1lZXRpbmdzIiwidXNlcnMiLCJtZWV0aW5nc0xpc3REaXYiLCJpbm5lckhUTUwiLCJsZW5ndGgiLCJtZWV0aW5nc0xpc3RUaXRsZSIsImRpc3BsYXkiLCJmb3JFYWNoIiwibWVldGluZyIsImF0dGVuZGVlcyIsImF0dGVuZGVlIiwicHVzaCIsImNhcmQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiY2FyZEJvZHkiLCJjYXJkTWVldGluZ05hbWVEaXYiLCJjYXJkTWVldGluZ05hbWUiLCJjYXJkTWVldGluZ1RpbWUiLCJkYXRlIiwiRGF0ZSIsInN0YXJ0VGltZSIsImVuZFRpbWUiLCJ0b0RhdGVTdHJpbmciLCJhcHBlbmRDaGlsZCIsImNhcmRUZXh0IiwiYnV0dG9uRXhjdXNlIiwiZXhjdXNlRnJvbU1lZXRpbmciLCJ0aGVuIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwiU1VDQ0VTUyIsImFkZFRvYXN0IiwiYm9keSIsInJlbW92ZSIsIkVSUk9SIiwiZXJyb3IiLCJkYXRhIiwiZGVzY3JpcHRpb24iLCJociIsIm1lZXRpbmdBdHRlbmRlZXMiLCJqb2luIiwic2VsZWN0TWVtYmVyRGl2IiwiY29sU2VsZWN0TWVtYmVyIiwibGFiZWxTZWxlY3RNZW1iZXIiLCJzZWxlY3RNZW1iZXIiLCJub25NZW1iZXJzIiwidXNlciIsImluY2x1ZGVzIiwibm9uTWVtYmVyIiwiY29sU2VsZWN0TWVtYmVyMiIsImNvbFNlbGVjdEJ1dHRvbiIsInZhbHVlIiwiYWRkQXR0ZW5kZWVUb01lZXRpbmciLCJzZWxlY3RlZERhdGVPcHRpb24iLCJzZWFyY2hUZXh0IiwidHJpbSIsInNlYXJjaE1lZXRpbmdzIiwiZ2V0QWxsVXNlcnMiLCJpbml0IiwicGlja2VyIiwiUGlrYWRheSIsImZpZWxkIiwidG9TdHJpbmciLCJkYXkiLCJnZXREYXRlIiwibW9udGgiLCJnZXRNb250aCIsInllYXIiLCJnZXRGdWxsWWVhciIsInZhbGlkYXRlRW1haWwiLCJlbWFpbCIsInJlIiwidGVzdCIsIlN0cmluZyIsInRvTG93ZXJDYXNlIiwidmFsaWRhdGVUZWFtIiwidGVhbSIsImF0dGVuZGVlVHlwZSIsInR5cGUiLCJyZXNldEZvcm0iLCJteU1vZGFsIiwiYm9vdHN0cmFwIiwiTW9kYWwiLCJzaG93IiwiaGlkZSIsInN1Ym1pdEpTT04iLCJtZWV0aW5nTmFtZSIsInNlbGVjdGVkRGF0ZSIsInNlbGVjdFN0YXJ0VGltZUhvdXJzIiwicGFyc2VJbnQiLCJzZWxlY3RFbmRUaW1lSG91cnMiLCJzZWxlY3RTdGFydFRpbWVNaW5zIiwic2VsZWN0RW5kVGltZU1pbnMiLCJyZXBsYWNlIiwic3BsaXQiLCJhdHRlbmRlZXNKU09OIiwiYXR0ZW5kZWVzTGVuZ3RoIiwiZmV0Y2hUZWFtcyIsInRlYW1zIiwiaWR4QXR0IiwiaWR4IiwidXNlcklkIiwidGVhbU1lbWJlckVtYWlscyIsIm1hcCIsIngiLCJtZW1iZXIiLCJhZGRNZWV0aW5nIiwic2V0VGltZW91dCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiaW5pdEFkZE1lZXRpbmciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiVE9LRU4iLCJ0b2RheSIsInNldERhdGUiLCJpIiwib3B0aW9uIiwiYXhpb3MiLCJBUElfQkFTRV9VUkwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImdldFRva2VuIiwiYWRkVGVhbSIsInRlYW1KU09OIiwiYWRkTWVtYmVyVG9UZWFtIiwiZXhjdXNlRnJvbVRlYW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxJQUFNQSxn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d0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxvQkFBb0I7V0FDMUI7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsNEc7Ozs7O1VDOUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoic2VhcmNoX21lZXRpbmdzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXHJcbmNvbnN0IEFERF9NRUVUSU5HX0ZPUk0gPSB7XHJcbiAgICBcIm5hbWVcIjogXCJHb29nbGUgbWFya2V0aW5nIGNhbXBhaWduXCIsXHJcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiSW5jcmVhc2luZyBicmFuZCBhd2FyZW5lc3MgYW5kIHNwcmVhZGluZyBpbmZvcm1hdGlvbiBhYm91dCBuZXcgcHJvZHVjdHNcIixcclxuICAgIFwiZGF0ZVwiOiBcIjIwMjAtMTAtMjhcIixcclxuICAgIFwic3RhcnRUaW1lXCI6IHtcclxuICAgICAgICBcImhvdXJzXCI6IDksXHJcbiAgICAgICAgXCJtaW51dGVzXCI6IDBcclxuICAgIH0sXHJcbiAgICBcImVuZFRpbWVcIjoge1xyXG4gICAgICAgIFwiaG91cnNcIjogMTAsXHJcbiAgICAgICAgXCJtaW51dGVzXCI6IDMwXHJcbiAgICB9LFxyXG4gICAgXCJhdHRlbmRlZXNcIjogW11cclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBRERfTUVFVElOR19GT1JNOyIsImltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuaW1wb3J0ICcuLi9jc3MvbWFpbi5jc3MnO1xyXG5pbXBvcnQgJy4uL2Nzcy9hZGRfbWVldGluZy5jc3MnO1xyXG5pbXBvcnQgJy4uL2Nzcy9zZWFyY2hfbWVldGluZ3MuY3NzJztcclxuaW1wb3J0IGFkZFRvYXN0IGZyb20gJy4vY3VzdG9tcy9hcHAnO1xyXG5pbXBvcnQgJy4vYXBwJztcclxuaW1wb3J0IHsgYWRkQXR0ZW5kZWVUb01lZXRpbmcsIHNlYXJjaE1lZXRpbmdzLCBleGN1c2VGcm9tTWVldGluZywgYWRkTWVldGluZyB9IGZyb20gJy4vc2VydmljZXMvbWVldGluZ3MnO1xyXG5pbXBvcnQgZ2V0QWxsVXNlcnMgZnJvbSAnLi9zZXJ2aWNlcy91c2VyX21hbmFnZW1lbnQnO1xyXG5pbXBvcnQgeyBUT0tFTiwgU1VDQ0VTUywgRVJST1IgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGZldGNoVGVhbXMgfSBmcm9tICcuL3NlcnZpY2VzL3RlYW1zJztcclxuaW1wb3J0IEFERF9NRUVUSU5HX0ZPUk0gZnJvbSAnLi9kYXRhL2FkZF9tZWV0aW5nX2Zvcm0nO1xyXG5cclxubGV0IHNlYXJjaERhdGUgPSAndG9kYXknO1xyXG5cclxuZnVuY3Rpb24gcmVzZXROYXYoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3Bhc3RCdXR0b24nICkuc3R5bGUuYmFja2dyb3VuZCA9ICcjZmZmJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAncHJlc2VudEJ1dHRvbicgKS5zdHlsZS5iYWNrZ3JvdW5kID0gJyNmZmYnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICd1cGNvbWluZ0J1dHRvbicgKS5zdHlsZS5iYWNrZ3JvdW5kID0gJyNmZmYnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdhbGxCdXR0b24nICkuc3R5bGUuYmFja2dyb3VuZCA9ICcjZmZmJztcclxufVxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdwYXN0QnV0dG9uJyApLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICggKSA9PiB7XHJcbiAgICByZXNldE5hdigpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdwYXN0QnV0dG9uJyApLnN0eWxlLmJhY2tncm91bmQgPSAnI2Y1ZjhmYSc7XHJcbiAgICBzZWFyY2hEYXRlID0gJ3Bhc3QnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzZWFyY2gtZm9ybScgKS5jbGljaygpO1xyXG59ICk7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3ByZXNlbnRCdXR0b24nICkuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCApID0+IHtcclxuICAgIHJlc2V0TmF2KCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3ByZXNlbnRCdXR0b24nICkuc3R5bGUuYmFja2dyb3VuZCA9ICcjZjVmOGZhJztcclxuICAgIHNlYXJjaERhdGUgPSAncHJlc2VudCc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3NlYXJjaC1mb3JtJyApLmNsaWNrKCk7XHJcbn0gKTtcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnYWxsQnV0dG9uJyApLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICggKSA9PiB7XHJcbiAgICByZXNldE5hdigpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdhbGxCdXR0b24nICkuc3R5bGUuYmFja2dyb3VuZCA9ICcjZjVmOGZhJztcclxuICAgIHNlYXJjaERhdGUgPSAnYWxsJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc2VhcmNoLWZvcm0nICkuY2xpY2soKTtcclxufSApO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICd1cGNvbWluZ0J1dHRvbicgKS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoICkgPT4ge1xyXG4gICAgcmVzZXROYXYoKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAndXBjb21pbmdCdXR0b24nICkuc3R5bGUuYmFja2dyb3VuZCA9ICcjZjVmOGZhJztcclxuICAgIHNlYXJjaERhdGUgPSAndXBjb21pbmcnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzZWFyY2gtZm9ybScgKS5jbGljaygpO1xyXG59ICk7XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRUaW1lKCBob3VycywgbWludXRlcyApIHtcclxuICAgIGxldCByZXN1bHQgPSAnJztcclxuICAgIGlmICggaG91cnMgPCAxMCApIHtcclxuICAgICAgICByZXN1bHQgKz0gYDAke2hvdXJzfWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlc3VsdCArPSBob3VycztcclxuICAgIH1cclxuICAgIHJlc3VsdCArPSAnOic7XHJcbiAgICBpZiAoIG1pbnV0ZXMgPCAxMCApIHtcclxuICAgICAgICByZXN1bHQgKz0gYDAke21pbnV0ZXN9YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IG1pbnV0ZXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBwb3B1bGF0ZU1lZXRpbmdzTGlzdCggbWVldGluZ3MsIHVzZXJzICkge1xyXG4gICAgY29uc3QgbWVldGluZ3NMaXN0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzZWFyY2hNZWV0aW5nc0xpc3QnICk7XHJcbiAgICBtZWV0aW5nc0xpc3REaXYuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgaWYgKCBtZWV0aW5ncyAmJiBtZWV0aW5ncy5sZW5ndGggPiAwICkge1xyXG4gICAgICAgIGNvbnN0IG1lZXRpbmdzTGlzdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdtZWV0aW5nc0xpc3RUaXRsZScgKTtcclxuICAgICAgICBtZWV0aW5nc0xpc3RUaXRsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICAgICAgICBtZWV0aW5ncy5mb3JFYWNoKCAoIG1lZXRpbmcgKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGF0dGVuZGVlcyA9IFtdO1xyXG4gICAgICAgICAgICBtZWV0aW5nWydhdHRlbmRlZXMnXS5mb3JFYWNoKCAoIGF0dGVuZGVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYXR0ZW5kZWVzLnB1c2goIGF0dGVuZGVlWydlbWFpbCddICk7XHJcbiAgICAgICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBtZWV0aW5nIGNhcmQgYW5kIGF0dGFjaCBpdCB0byB0aGUgcmVzcGVjdGl2ZSBwYXJlbnRcclxuICAgICAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XHJcbiAgICAgICAgICAgIGNhcmQuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAnY2FyZCBwLTMgbWItMycgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmRCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuICAgICAgICAgICAgY2FyZEJvZHkuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAnY2FyZC1ib2R5JyApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2FyZE1lZXRpbmdOYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuICAgICAgICAgICAgY2FyZE1lZXRpbmdOYW1lRGl2LnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ3JvdycgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmRNZWV0aW5nTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdoNCcgKTtcclxuICAgICAgICAgICAgY2FyZE1lZXRpbmdOYW1lLnNldEF0dHJpYnV0ZSggJ2lkJywgJ2NhcmQtbWVldGluZy1uYW1lJyApO1xyXG4gICAgICAgICAgICBjYXJkTWVldGluZ05hbWUuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAnY29sLWF1dG8gbWUtYXV0byBjYXJkLW1lZXRpbmctbmFtZScgKTtcclxuICAgICAgICAgICAgY2FyZE1lZXRpbmdOYW1lLmlubmVySFRNTCA9IG1lZXRpbmdbJ25hbWUnXTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmRNZWV0aW5nVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdoNScgKTtcclxuICAgICAgICAgICAgY2FyZE1lZXRpbmdUaW1lLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2NvbC1hdXRvIGNhcmQtbWVldGluZy1uYW1lJyApO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoIG1lZXRpbmdbJ2RhdGUnXSApO1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydFRpbWUgPSBmb3JtYXRUaW1lKCBtZWV0aW5nWydzdGFydFRpbWUnXVsnaG91cnMnXSwgbWVldGluZ1snc3RhcnRUaW1lJ11bJ21pbnV0ZXMnXSApO1xyXG4gICAgICAgICAgICBjb25zdCBlbmRUaW1lID0gZm9ybWF0VGltZSggbWVldGluZ1snZW5kVGltZSddWydob3VycyddLCBtZWV0aW5nWydlbmRUaW1lJ11bJ21pbnV0ZXMnXSApO1xyXG4gICAgICAgICAgICBjYXJkTWVldGluZ1RpbWUuaW5uZXJIVE1MID0gYCR7ZGF0ZS50b0RhdGVTdHJpbmcoKX0sICR7c3RhcnRUaW1lfS0ke2VuZFRpbWV9YDtcclxuXHJcbiAgICAgICAgICAgIGNhcmRNZWV0aW5nTmFtZURpdi5hcHBlbmRDaGlsZCggY2FyZE1lZXRpbmdOYW1lICk7XHJcbiAgICAgICAgICAgIGNhcmRNZWV0aW5nTmFtZURpdi5hcHBlbmRDaGlsZCggY2FyZE1lZXRpbmdUaW1lICk7XHJcbiAgICAgICAgICAgIC8vIGNhcmRNZWV0aW5nRGl2LmFwcGVuZENoaWxkKCBjYXJkTWVldGluZ05hbWVEaXYgKTtcclxuXHJcbiAgICAgICAgICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKCBjYXJkTWVldGluZ05hbWVEaXYgKTtcclxuICAgICAgICAgICAgY29uc3QgY2FyZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAncCcgKTtcclxuICAgICAgICAgICAgY2FyZFRleHQuaW5uZXJIVE1MID0gbWVldGluZ1snZGVzY3JpcHRpb24nXTtcclxuICAgICAgICAgICAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQoIGNhcmRUZXh0ICk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbkV4Y3VzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdidXR0b24nICk7XHJcbiAgICAgICAgICAgIGJ1dHRvbkV4Y3VzZS5pbm5lckhUTUwgPSAnTGVhdmUgbWVldGluZyc7XHJcbiAgICAgICAgICAgIGJ1dHRvbkV4Y3VzZS5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdidXR0b24tb3V0bGluZS1yZWQgcHgtNCcgKTtcclxuICAgICAgICAgICAgYnV0dG9uRXhjdXNlLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGV4Y3VzZUZyb21NZWV0aW5nKCBtZWV0aW5nIClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbiggKCByZXNwb25zZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCByZXNwb25zZS5tZXNzYWdlID09PSBTVUNDRVNTICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoICdZb3UgaGF2ZSBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgdGVhbScsIGRvY3VtZW50LmJvZHksIFNVQ0NFU1MgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIHJlbW92aW5nOiAke3Jlc3BvbnNlLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCggKCBlcnJvciApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgcmVtb3Zpbmc6ICR7ZXJyb3IucmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbn1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgcmVtb3Zpbmc6ICR7ZXJyb3IubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKCBidXR0b25FeGN1c2UgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2hyJyApO1xyXG4gICAgICAgICAgICBoci5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdteS0zJyApO1xyXG4gICAgICAgICAgICBjYXJkQm9keS5hcHBlbmRDaGlsZCggaHIgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1lZXRpbmdBdHRlbmRlZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAncCcgKTtcclxuICAgICAgICAgICAgbWVldGluZ0F0dGVuZGVlcy5pbm5lckhUTUwgPSBgPHN0cm9uZz5BdHRlbmRlZXM6IDwvc3Ryb25nPiAke2F0dGVuZGVlcy5qb2luKCAnLCAnICl9YDtcclxuICAgICAgICAgICAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQoIG1lZXRpbmdBdHRlbmRlZXMgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdE1lbWJlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XHJcbiAgICAgICAgICAgIHNlbGVjdE1lbWJlckRpdi5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdyb3cgZ3ktMiBneC0zIGFsaWduLWl0ZW1zLWNlbnRlcicgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbFNlbGVjdE1lbWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XHJcbiAgICAgICAgICAgIGNvbFNlbGVjdE1lbWJlci5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdjb2wtYXV0bycgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsU2VsZWN0TWVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2xhYmVsJyApO1xyXG4gICAgICAgICAgICBsYWJlbFNlbGVjdE1lbWJlci5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICd2aXN1YWxseS1oaWRkZW4nICk7XHJcbiAgICAgICAgICAgIGxhYmVsU2VsZWN0TWVtYmVyLnNldEF0dHJpYnV0ZSggJ2ZvcicsICdzZWxlY3RNZW1iZXInICk7XHJcbiAgICAgICAgICAgIGNvbFNlbGVjdE1lbWJlci5hcHBlbmRDaGlsZCggbGFiZWxTZWxlY3RNZW1iZXIgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdE1lbWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdzZWxlY3QnICk7XHJcbiAgICAgICAgICAgIHNlbGVjdE1lbWJlci5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdmb3JtLXNlbGVjdCcgKTtcclxuICAgICAgICAgICAgc2VsZWN0TWVtYmVyLnNldEF0dHJpYnV0ZSggJ2lkJywgJ3NlbGVjdE1lbWJlcicgKTtcclxuICAgICAgICAgICAgc2VsZWN0TWVtYmVyLnNldEF0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnLCAnU2VsZWN0IE1lbWJlcicgKTtcclxuICAgICAgICAgICAgY29uc3Qgbm9uTWVtYmVycyA9IFtdO1xyXG4gICAgICAgICAgICB1c2Vycy5mb3JFYWNoKCAoIHVzZXIgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGF0dGVuZGVlcy5pbmNsdWRlcyggdXNlclsnZW1haWwnXSApID09PSBmYWxzZSApIHtcclxuICAgICAgICAgICAgICAgICAgICBub25NZW1iZXJzLnB1c2goIHVzZXIgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSApO1xyXG5cclxuICAgICAgICAgICAgc2VsZWN0TWVtYmVyLmlubmVySFRNTCA9ICc8b3B0aW9uIHZhbHVlPVwibm9uZVwiIHNlbGVjdGVkPlNlbGVjdCBtZW1iZXI8L29wdGlvbj4nO1xyXG4gICAgICAgICAgICBub25NZW1iZXJzLmZvckVhY2goICggbm9uTWVtYmVyICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0TWVtYmVyLmlubmVySFRNTCArPSBgPG9wdGlvbiB2YWx1ZT1cIiR7bm9uTWVtYmVyWydlbWFpbCddfVwiPiR7bm9uTWVtYmVyWydlbWFpbCddfTwvb3B0aW9uPmA7XHJcbiAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgY29sU2VsZWN0TWVtYmVyLmFwcGVuZENoaWxkKCBzZWxlY3RNZW1iZXIgKTtcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdE1lbWJlckRpdi5hcHBlbmRDaGlsZCggY29sU2VsZWN0TWVtYmVyICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb2xTZWxlY3RNZW1iZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuICAgICAgICAgICAgY29sU2VsZWN0TWVtYmVyMi5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdjb2wtYXV0bycgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbFNlbGVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdidXR0b24nICk7XHJcbiAgICAgICAgICAgIGNvbFNlbGVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdidXR0b24gbXgtMicgKTtcclxuICAgICAgICAgICAgY29sU2VsZWN0QnV0dG9uLmlubmVySFRNTCA9ICdBZGQnO1xyXG4gICAgICAgICAgICBjb2xTZWxlY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBzZWxlY3RNZW1iZXIudmFsdWUgIT09ICdub25lJyApIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRBdHRlbmRlZVRvTWVldGluZyggbWVldGluZywgc2VsZWN0TWVtYmVyLnZhbHVlIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oICggcmVzcG9uc2UgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHJlc3BvbnNlLm1lc3NhZ2UgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZW5kZWVzLnB1c2goIHNlbGVjdE1lbWJlci52YWx1ZSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZXRpbmdBdHRlbmRlZXMuaW5uZXJIVE1MID0gYDxzdHJvbmc+QXR0ZW5kZWVzOiA8L3N0cm9uZz4gJHthdHRlbmRlZXMuam9pbiggJywgJyApfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoICdBdHRlbmRlZSBoYXMgYmVlbiBhZGRlZCB0byB0aGUgbWVldGluZycsIGRvY3VtZW50LmJvZHksIFNVQ0NFU1MgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBhZGRpbmcgYXR0ZW5kZWU6ICR7cmVzcG9uc2UubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCAoIGVycm9yICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGFkZGluZyBhdHRlbmRlZTogJHtlcnJvci5yZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9ufWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGFkZGluZyBhdHRlbmRlZTogJHtlcnJvci5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICBjb2xTZWxlY3RNZW1iZXIyLmFwcGVuZENoaWxkKCBjb2xTZWxlY3RCdXR0b24gKTtcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdE1lbWJlckRpdi5hcHBlbmRDaGlsZCggY29sU2VsZWN0TWVtYmVyMiApO1xyXG4gICAgICAgICAgICBjYXJkQm9keS5hcHBlbmRDaGlsZCggc2VsZWN0TWVtYmVyRGl2ICk7XHJcbiAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoIGNhcmRCb2R5ICk7XHJcbiAgICAgICAgICAgIG1lZXRpbmdzTGlzdERpdi5hcHBlbmRDaGlsZCggY2FyZCApO1xyXG4gICAgICAgIH0gKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgbWVldGluZ3NMaXN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ21lZXRpbmdzTGlzdFRpdGxlJyApO1xyXG4gICAgICAgIG1lZXRpbmdzTGlzdFRpdGxlLmlubmVySFRNTCA9ICdObyBtZWV0aW5ncyBmb3VuZCB3aXRoIGdpdmVuIHNlYXJjaCBjcml0ZXJpYSc7XHJcbiAgICAgICAgbWVldGluZ3NMaXN0VGl0bGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc2VhcmNoLWZvcm0nICkuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCApID0+IHtcclxuICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgLy8gY29uc3Qgc2VsZWN0ZWREYXRlT3B0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdmb3JtR3JvdXBEYXRlSW5wdXQnICkudmFsdWU7XHJcbiAgICBjb25zdCBzZWxlY3RlZERhdGVPcHRpb24gPSBzZWFyY2hEYXRlO1xyXG4gICAgY29uc3Qgc2VhcmNoVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc2VhcmNoVGV4dCcgKS52YWx1ZS50cmltKCk7XHJcbiAgICAvLyBjb25zdCBzZWFyY2hUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdmb3JtR3JvdXBTZWFyY2hGb3InICkudmFsdWUudHJpbSgpO1xyXG5cclxuICAgIGlmICggc2VhcmNoVGV4dCA9PT0gJycgKSB7XHJcbiAgICAgICAgc2VhcmNoTWVldGluZ3MoIHNlbGVjdGVkRGF0ZU9wdGlvbiApXHJcbiAgICAgICAgICAgIC50aGVuKCAoIG1lZXRpbmdzICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBtZWV0aW5ncy5tZXNzYWdlID09PSBTVUNDRVNTICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdldEFsbFVzZXJzKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oICggdXNlcnMgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHVzZXJzLm1lc3NhZ2UgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdWxhdGVNZWV0aW5nc0xpc3QoIG1lZXRpbmdzLmRhdGEsIHVzZXJzLmRhdGEgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBmZXRjaGluZyB1c2VyczogJHt1c2Vycy5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goICggZXJyb3IgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgZmV0Y2hpbmcgdXNlcnM6ICR7ZXJyb3IucmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbn1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBmZXRjaGluZyB1c2VyczogJHtlcnJvci5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBmZXRjaGluZyBtZWV0aW5nczogJHttZWV0aW5ncy5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAuY2F0Y2goICggZXJyb3IgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgRmV0Y2hpbmcgeW91ciBtZWV0aW5nczogJHtlcnJvci5yZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9ufWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIEZldGNoaW5nIHlvdXIgbWVldGluZ3M6ICR7ZXJyb3IubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNlYXJjaE1lZXRpbmdzKCBzZWxlY3RlZERhdGVPcHRpb24sIHNlYXJjaFRleHQgKVxyXG4gICAgICAgICAgICAudGhlbiggKCBtZWV0aW5ncyApID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICggbWVldGluZ3MubWVzc2FnZSA9PT0gU1VDQ0VTUyApIHtcclxuICAgICAgICAgICAgICAgICAgICBnZXRBbGxVc2VycygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCAoIHVzZXJzICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCB1c2Vycy5tZXNzYWdlID09PSBTVUNDRVNTICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVsYXRlTWVldGluZ3NMaXN0KCBtZWV0aW5ncy5kYXRhLCB1c2Vycy5kYXRhICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgRmV0Y2hpbmcgdXNlcnM6ICR7dXNlcnMubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCAoIGVycm9yICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIEZldGNoaW5nIHVzZXJzOiAke2Vycm9yLnJlc3BvbnNlLmRhdGEuZGVzY3JpcHRpb259YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgRmV0Y2hpbmcgdXNlcnM6ICR7ZXJyb3IubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgZmV0Y2hpbmcgbWVldGluZ3M6ICR7bWVldGluZ3MubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgLmNhdGNoKCAoIGVycm9yICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIEZldGNoaW5nIHlvdXIgbWVldGluZ3M6ICR7ZXJyb3IucmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbn1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBGZXRjaGluZyB5b3VyIG1lZXRpbmdzOiAke2Vycm9yLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSApO1xyXG4gICAgfVxyXG59ICk7XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdwcmVzZW50QnV0dG9uJyApLnN0eWxlLmJhY2tncm91bmQgPSAnI2Y1ZjhmYSc7XHJcbiAgICBzZWFyY2hNZWV0aW5ncyggJ3ByZXNlbnQnIClcclxuICAgICAgICAudGhlbiggKCBtZWV0aW5ncyApID0+IHtcclxuICAgICAgICAgICAgaWYgKCBtZWV0aW5ncy5tZXNzYWdlID09PSBTVUNDRVNTICkge1xyXG4gICAgICAgICAgICAgICAgZ2V0QWxsVXNlcnMoKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCAoIHVzZXJzICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHVzZXJzLm1lc3NhZ2UgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1bGF0ZU1lZXRpbmdzTGlzdCggbWVldGluZ3MuZGF0YSwgdXNlcnMuZGF0YSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBGZXRjaGluZyB1c2VyczogJHt1c2Vycy5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goICggZXJyb3IgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIEZldGNoaW5nIHVzZXJzOiAke2Vycm9yLnJlc3BvbnNlLmRhdGEuZGVzY3JpcHRpb259YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIEZldGNoaW5nIHVzZXJzOiAke2Vycm9yLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgZmV0Y2hpbmcgbWVldGluZ3M6ICR7bWVldGluZ3MubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSApXHJcbiAgICAgICAgLmNhdGNoKCAoIGVycm9yICkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBGZXRjaGluZyB5b3VyIG1lZXRpbmdzOiAke2Vycm9yLnJlc3BvbnNlLmRhdGEuZGVzY3JpcHRpb259YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIEZldGNoaW5nIHlvdXIgbWVldGluZ3M6ICR7ZXJyb3IubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSApO1xyXG59XHJcblxyXG5pbml0KCk7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT0gQUREIE1FRVRJTkcgPT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5jb25zdCBwaWNrZXIgPSBuZXcgUGlrYWRheSgge1xyXG4gICAgZmllbGQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnZm9ybUdyb3VwRGF0ZUlucHV0JyApLFxyXG4gICAgdG9TdHJpbmcoIGRhdGUgKSB7XHJcbiAgICAgICAgLy8gcmV0dXJuICdEL00vWVlZWSdcclxuICAgICAgICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKTtcclxuICAgICAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcbiAgICAgICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICByZXR1cm4gYCR7ZGF5fS8ke21vbnRofS8ke3llYXJ9YDtcclxuICAgIH0sXHJcbn0gKTtcclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlRW1haWwoIGVtYWlsICkge1xyXG4gICAgY29uc3QgcmUgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XHJcbiAgICByZXR1cm4gcmUudGVzdCggU3RyaW5nKCBlbWFpbCApLnRvTG93ZXJDYXNlKCkgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVUZWFtKCB0ZWFtICkge1xyXG4gICAgY29uc3QgcmUgPSAvQFthLXpBLVpcXC0wLTldKyQvO1xyXG4gICAgcmV0dXJuIHJlLnRlc3QoIFN0cmluZyggdGVhbSApLnRvTG93ZXJDYXNlKCkgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXR0ZW5kZWVUeXBlKCBhdHRlbmRlZSApIHtcclxuICAgIGxldCB0eXBlID0gJyc7XHJcbiAgICBpZiAoIHZhbGlkYXRlRW1haWwoIGF0dGVuZGVlICkgKSB7XHJcbiAgICAgICAgdHlwZSA9ICdlbWFpbCc7XHJcbiAgICB9IGVsc2UgaWYgKCB2YWxpZGF0ZVRlYW0oIGF0dGVuZGVlICkgKSB7XHJcbiAgICAgICAgdHlwZSA9ICd0ZWFtJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdHlwZSA9ICdub25lJztcclxuICAgIH1cclxuICAgIHJldHVybiB0eXBlO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldEZvcm0oKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2lucHV0TWVldGluZ05hbWUnICkudmFsdWUgPSAnJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAndGV4dGFyZWFNZWV0aW5nRGVzY3JpcHRpb24nICkudmFsdWUgPSAnJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc2VsZWN0U3RhcnRUaW1lSG91cnMnICkudmFsdWUgPSAwO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzZWxlY3RFbmRUaW1lSG91cnMnICkudmFsdWUgPSAwO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzZWxlY3RTdGFydFRpbWVNaW5zJyApLnZhbHVlID0gMDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc2VsZWN0RW5kVGltZU1pbnMnICkudmFsdWUgPSAwO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdpbnB1dFBhcnRpY2lwYW50cycgKS52YWx1ZSA9ICcnO1xyXG59XHJcblxyXG5sZXQgbXlNb2RhbCA9IG51bGw7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2FkZE1lZXRpbmcnICkuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbXlNb2RhbCA9IG5ldyBib290c3RyYXAuTW9kYWwoIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnbXlNb2RhbCcgKSApO1xyXG4gICAgbXlNb2RhbC5zaG93KCk7XHJcbn0gKTtcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnbW9kYWxEaXNtaXNzJyApLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IHtcclxuICAgIG15TW9kYWwuaGlkZSgpO1xyXG59ICk7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3N1Ym1pdEFkZE1lZXRpbmcnICkuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbXlNb2RhbC5oaWRlKCk7XHJcblxyXG4gICAgY29uc3Qgc3VibWl0SlNPTiA9IEFERF9NRUVUSU5HX0ZPUk07XHJcbiAgICBjb25zdCBtZWV0aW5nTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnaW5wdXRNZWV0aW5nTmFtZScgKS52YWx1ZS50cmltKCk7XHJcblxyXG4gICAgaWYgKCBtZWV0aW5nTmFtZS5sZW5ndGggPD0gMyApIHtcclxuICAgICAgICBhZGRUb2FzdCggJ1BsZWFzZSBlbnRlciBhIGxvbmdlciBtZWV0aW5nIG5hbWUnLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICd0ZXh0YXJlYU1lZXRpbmdEZXNjcmlwdGlvbicgKS52YWx1ZS50cmltKCk7XHJcbiAgICBpZiAoIGRlc2NyaXB0aW9uLmxlbmd0aCA8PSAxMCApIHtcclxuICAgICAgICBhZGRUb2FzdCggJ1BsZWFzZSBlbnRlciBhIGxvbmdlciBtZWV0aW5nIG5hbWUgICggMTAgY2hhcmFjdGVycyBtaW4gKScsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2VsZWN0ZWREYXRlID0gcGlja2VyLmdldERhdGUoKTtcclxuICAgIGNvbnN0IGRhdGUgPSBgJHtzZWxlY3RlZERhdGUuZ2V0RnVsbFllYXIoKX0tJHtzZWxlY3RlZERhdGUuZ2V0TW9udGgoKSArIDF9LSR7c2VsZWN0ZWREYXRlLmdldERhdGUoKX1gO1xyXG4gICAgY29uc3Qgc2VsZWN0U3RhcnRUaW1lSG91cnMgPSBwYXJzZUludCggZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzZWxlY3RTdGFydFRpbWVIb3VycycgKS52YWx1ZSwgMTAgKTtcclxuICAgIGNvbnN0IHNlbGVjdEVuZFRpbWVIb3VycyA9IHBhcnNlSW50KCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3NlbGVjdEVuZFRpbWVIb3VycycgKS52YWx1ZSwgMTAgKTtcclxuICAgIGNvbnN0IHNlbGVjdFN0YXJ0VGltZU1pbnMgPSBwYXJzZUludCggZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzZWxlY3RTdGFydFRpbWVNaW5zJyApLnZhbHVlLCAxMCApO1xyXG4gICAgY29uc3Qgc2VsZWN0RW5kVGltZU1pbnMgPSBwYXJzZUludCggZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzZWxlY3RFbmRUaW1lTWlucycgKS52YWx1ZSwgMTAgKTtcclxuXHJcbiAgICBpZiAoIHNlbGVjdEVuZFRpbWVIb3VycyA8IHNlbGVjdFN0YXJ0VGltZUhvdXJzICkge1xyXG4gICAgICAgIGFkZFRvYXN0KCAnU3RhcnQgdGltZSBoYXMgdG8gYmUgbGVzcyB0aGFuIGVuZCB0aW1lJywgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZWxzZS1yZXR1cm5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXHJcbiAgICB9IGlmICggc2VsZWN0RW5kVGltZUhvdXJzID09PSBzZWxlY3RTdGFydFRpbWVIb3VycyAmJiBzZWxlY3RTdGFydFRpbWVNaW5zID49IHNlbGVjdEVuZFRpbWVNaW5zICkge1xyXG4gICAgICAgIGFkZFRvYXN0KCAnU3RhcnQgdGltZSBoYXMgdG8gYmUgbGVzcyB0aGFuIGVuZCB0aW1lJywgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXR0ZW5kZWVzID0gKCAoIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnaW5wdXRQYXJ0aWNpcGFudHMnICkudmFsdWUgKS5yZXBsYWNlKCAvXFxzKy9nLCAnJyApICkuc3BsaXQoICcsJyApO1xyXG5cclxuICAgIHN1Ym1pdEpTT05bJ25hbWUnXSA9IG1lZXRpbmdOYW1lO1xyXG4gICAgc3VibWl0SlNPTlsnZGVzY3JpcHRpb24nXSA9IGRlc2NyaXB0aW9uO1xyXG4gICAgc3VibWl0SlNPTlsnZGF0ZSddID0gZGF0ZTtcclxuICAgIHN1Ym1pdEpTT05bJ3N0YXJ0VGltZSddWydob3VycyddID0gc2VsZWN0U3RhcnRUaW1lSG91cnM7XHJcbiAgICBzdWJtaXRKU09OWydzdGFydFRpbWUnXVsnbWludXRlcyddID0gc2VsZWN0U3RhcnRUaW1lTWlucztcclxuICAgIHN1Ym1pdEpTT05bJ2VuZFRpbWUnXVsnaG91cnMnXSA9IHNlbGVjdEVuZFRpbWVIb3VycztcclxuICAgIHN1Ym1pdEpTT05bJ2VuZFRpbWUnXVsnbWludXRlcyddID0gc2VsZWN0RW5kVGltZU1pbnM7XHJcblxyXG4gICAgY29uc3QgYXR0ZW5kZWVzSlNPTiA9IFtdO1xyXG4gICAgbGV0IGF0dGVuZGVlc0xlbmd0aCA9IGF0dGVuZGVlcy5sZW5ndGg7XHJcblxyXG4gICAgZ2V0QWxsVXNlcnMoKVxyXG4gICAgICAgIC50aGVuKCAoIHVzZXJzICkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIHVzZXJzLm1lc3NhZ2UgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgICAgICAgICBmZXRjaFRlYW1zKClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbiggKCB0ZWFtcyApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCB0ZWFtcy5tZXNzYWdlID09PSBTVUNDRVNTICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICggbGV0IGlkeEF0dCA9IDA7IGlkeEF0dCA8IGF0dGVuZGVlc0xlbmd0aDsgaWR4QXR0ICs9IDEgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0ZW5kZWUgPSBhdHRlbmRlZXNbaWR4QXR0XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKCBhdHRlbmRlZVR5cGUoIGF0dGVuZGVlc1tpZHhBdHRdICkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZW1haWwnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKCBsZXQgaWR4ID0gMDsgaWR4IDwgdXNlcnMuZGF0YS5sZW5ndGg7IGlkeCArPSAxICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBhdHRlbmRlZS50b0xvd2VyQ2FzZSgpID09PSB1c2Vycy5kYXRhW2lkeF1bJ2VtYWlsJ10udG9Mb3dlckNhc2UoKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRlbmRlZXNKU09OLnB1c2goIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiB1c2Vycy5kYXRhW2lkeF1bJ19pZCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogdXNlcnMuZGF0YVtpZHhdWydlbWFpbCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd0ZWFtJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICggbGV0IGlkeCA9IDA7IGlkeCA8IHRlYW1zLmRhdGEubGVuZ3RoOyBpZHggKz0gMSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggYXR0ZW5kZWUgPT09IGBAJHt0ZWFtcy5kYXRhW2lkeF1bJ3Nob3J0TmFtZSddfWAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVhbU1lbWJlckVtYWlscyA9ICggdGVhbXMuZGF0YVtpZHhdWydtZW1iZXJzJ10gKS5tYXAoICggeCApID0+IHhbJ2VtYWlsJ10gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtTWVtYmVyRW1haWxzLmZvckVhY2goICggbWVtYmVyICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGF0dGVuZGVlcy5pbmNsdWRlcyggbWVtYmVyICkgPT09IGZhbHNlICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZW5kZWVzLnB1c2goIG1lbWJlciApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVuZGVlc0xlbmd0aCArPSB0ZWFtcy5kYXRhW2lkeF1bJ21lbWJlcnMnXS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0SlNPTlsnYXR0ZW5kZWVzJ10gPSBhdHRlbmRlZXNKU09OO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3VibWl0IGNvbnN0cnVjdGVkIG1lZXRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZE1lZXRpbmcoIHN1Ym1pdEpTT04gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCAoIHJlc3BvbnNlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHJlc3BvbnNlLm1lc3NhZ2UgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggJ01lZXRpbmcgYWRkZWQgc3VjY2Vzc2Z1bGx5JywgZG9jdW1lbnQuYm9keSwgU1VDQ0VTUyApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRGb3JtKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTUwMCApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBhZGRpbmcgbWVldGluZzogJHtyZXNwb25zZS5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goICggZXJyb3IgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGFkZGluZyBtZWV0aW5nOiAke2Vycm9yLnJlc3BvbnNlLmRhdGEuZGVzY3JpcHRpb259YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGFkZGluZyBtZWV0aW5nOiAke2Vycm9yLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgZmV0Y2hpbmcgdGVhbXM6ICR7dGVhbXMubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCAoIGVycm9yICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBmZXRjaGluZyB0ZWFtczogJHtlcnJvci5yZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9ufWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBmZXRjaGluZyB0ZWFtczogJHtlcnJvci5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGZldGNoaW5nIHVzZXJzOiAke3VzZXJzLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gKVxyXG4gICAgICAgIC5jYXRjaCggKCBlcnJvciApID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgZmV0Y2hpbmcgdXNlcnM6ICR7ZXJyb3IucmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbn1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgZmV0Y2hpbmcgdXNlcnM6ICR7ZXJyb3IubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSApO1xyXG59ICk7XHJcblxyXG5mdW5jdGlvbiBpbml0QWRkTWVldGluZygpIHtcclxuICAgIC8vIHJlZGlyZWN0IHRvIGxvZ2luIHBhZ2UgaWYgYXV0aG9yaXphdGlvbiB0b2tlbiBkb2VzbnQgZXhpc3RcclxuICAgIGlmICggbG9jYWxTdG9yYWdlLmdldEl0ZW0oIFRPS0VOICkgPT09IG51bGwgKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJy9sb2dpbic7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgcGlja2VyLnNldERhdGUoIHRvZGF5ICk7XHJcblxyXG4gICAgLy8gY29uc3RydWN0IGhvdXJzIGFuZCBtaW4gb3B0aW9uc1xyXG4gICAgY29uc3Qgc2VsZWN0U3RhcnRUaW1lSG91cnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3NlbGVjdFN0YXJ0VGltZUhvdXJzJyApO1xyXG4gICAgY29uc3Qgc2VsZWN0RW5kVGltZUhvdXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzZWxlY3RFbmRUaW1lSG91cnMnICk7XHJcbiAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCAyNDsgaSArPSAxICkge1xyXG4gICAgICAgIGxldCBvcHRpb24gPSAnJztcclxuICAgICAgICBpZiAoIGkgPT09IDAgKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbiA9ICc8b3B0aW9uIHZhbHVlPVwiMFwiIHNlbGVjdGVkPjA8L29wdGlvbj4nO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG9wdGlvbiA9IGA8b3B0aW9uIHZhbHVlPVwiJHtpfVwiPiR7aX08L29wdGlvbj5gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZWxlY3RTdGFydFRpbWVIb3Vycy5pbm5lckhUTUwgKz0gb3B0aW9uO1xyXG4gICAgICAgIHNlbGVjdEVuZFRpbWVIb3Vycy5pbm5lckhUTUwgKz0gb3B0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNlbGVjdFN0YXJ0VGltZU1pbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3NlbGVjdFN0YXJ0VGltZU1pbnMnICk7XHJcbiAgICBjb25zdCBzZWxlY3RFbmRUaW1lTWlucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc2VsZWN0RW5kVGltZU1pbnMnICk7XHJcbiAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCA2MDsgaSArPSAxICkge1xyXG4gICAgICAgIGxldCBvcHRpb24gPSAnJztcclxuICAgICAgICBpZiAoIGkgPT09IDAgKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbiA9ICc8b3B0aW9uIHZhbHVlPVwiMFwiIHNlbGVjdGVkPjA8L29wdGlvbj4nO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG9wdGlvbiA9IGA8b3B0aW9uIHZhbHVlPVwiJHtpfVwiPiR7aX08L29wdGlvbj5gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZWxlY3RTdGFydFRpbWVNaW5zLmlubmVySFRNTCArPSBvcHRpb247XHJcbiAgICAgICAgc2VsZWN0RW5kVGltZU1pbnMuaW5uZXJIVE1MICs9IG9wdGlvbjtcclxuICAgIH1cclxufVxyXG5cclxuaW5pdEFkZE1lZXRpbmcoKTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgQVBJX0JBU0VfVVJMIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgZ2V0VG9rZW4gfSBmcm9tICcuL2F1dGgnO1xyXG5pbXBvcnQgJ2NvcmUtanMvc3RhYmxlJztcclxuaW1wb3J0ICdyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUnO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hUZWFtcygpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgIGAke0FQSV9CQVNFX1VSTH0vdGVhbXNgLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7Z2V0VG9rZW4oKX1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBhZGRUZWFtKCB0ZWFtSlNPTiApIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBgJHtBUElfQkFTRV9VUkx9L3RlYW1zL2AsXHJcbiAgICAgICAgdGVhbUpTT04sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgJHtnZXRUb2tlbigpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGFkZE1lbWJlclRvVGVhbSggdGVhbSwgZW1haWwgKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBhdGNoKFxyXG4gICAgICAgIGAke0FQSV9CQVNFX1VSTH0vdGVhbXMvJHt0ZWFtWydfaWQnXX0/YWN0aW9uPWFkZF9tZW1iZXImZW1haWw9JHtlbWFpbH1gLFxyXG4gICAgICAgIHt9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7Z2V0VG9rZW4oKX1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBleGN1c2VGcm9tVGVhbSggdGVhbSApIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucGF0Y2goXHJcbiAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS90ZWFtcy8ke3RlYW1bJ19pZCddfT9hY3Rpb249cmVtb3ZlX21lbWJlcmAsXHJcbiAgICAgICAge30sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgJHtnZXRUb2tlbigpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBmZXRjaFRlYW1zLFxyXG4gICAgYWRkVGVhbSxcclxuICAgIGFkZE1lbWJlclRvVGVhbSxcclxuICAgIGV4Y3VzZUZyb21UZWFtLFxyXG59O1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBBUElfQkFTRV9VUkwgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBnZXRUb2tlbiB9IGZyb20gJy4vYXV0aCc7XHJcblxyXG5pbXBvcnQgJ2NvcmUtanMvc3RhYmxlJztcclxuaW1wb3J0ICdyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUnO1xyXG5cclxuLyoqXHJcbiAqIEdldCB0aGUgbGlzdCBvZiBhbGwgcmVnaXN0ZXJlZCB1c2Vycy5cclxuICogQHJldHVybnMgbGlzdCBvZiBhbGwgdXNlcnNcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEFsbFVzZXJzKCkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS91c2Vyc2AsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgJHtnZXRUb2tlbigpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldEFsbFVzZXJzO1xyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgaHIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0ZXh0YXJlYSB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3B1YmxpYy9jc3MvYWRkX21lZXRpbmcuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsU0FBUztJQUNULHdDQUF3QztFQUMxQzs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGNBQWM7RUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBociB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHRleHRhcmVhIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbmhyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY2FyZC10b29sYmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5uYXYtcGlsbHMtY3VzdG9tIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBjb2xvcjogIzdlODI5OTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDAuM3JlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDAuM3JlbTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXBpbGxzLWN1c3RvbTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY4ZmE7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtdGV4dC1jdXN0b20ge1xcclxcbiAgICBsaW5lLWhlaWdodDogMC44cmVtO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3B1YmxpYy9jc3Mvc2VhcmNoX21lZXRpbmdzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOzs7QUFHQTtJQUNJLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsU0FBUztJQUNULGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5ociB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmNhcmQtdG9vbGJhciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ubmF2LXBpbGxzLWN1c3RvbSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgY29sb3I6ICM3ZTgyOTk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAwLjNyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1waWxscy1jdXN0b206aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmOGZhO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXRleHQtY3VzdG9tIHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDAuOHJlbTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FkZF9tZWV0aW5nLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYWRkX21lZXRpbmcuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NlYXJjaF9tZWV0aW5ncy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NlYXJjaF9tZWV0aW5ncy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJzZWFyY2hfbWVldGluZ3NcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmttZWV0aW5nc1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmttZWV0aW5nc1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfYm9vdHN0cmFwX2Rpc3RfY3NzX2Jvb3RzdHJhcF9taW5fY3NzXCIsXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19heGlvc19pbmRleF9qcy1ub2RlX21vZHVsZXNfY29yZS1qc19zdGFibGVfaW5kZXhfanMtbm9kZV9tb2R1bGVzX3JlZ2VuZXItZWZkZGY3XCIsXCJwdWJsaWNfY3NzX21haW5fY3NzLWRhdGFfaW1hZ2Vfc3ZnX3htbF8zY3N2Z194bWxuc18yN2h0dHBfd3d3X3czX29yZ18yMDAwX3N2Z18yN192aWV3Qm94XzI3LTQtYjAxYmUwXCIsXCJwdWJsaWNfanNfYXBwX2pzLXB1YmxpY19qc19jdXN0b21zX2FwcF9qcy1wdWJsaWNfanNfc2VydmljZXNfbWVldGluZ3NfanNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9wdWJsaWMvanMvc2VhcmNoX21lZXRpbmdzLmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iXSwic291cmNlUm9vdCI6IiJ9