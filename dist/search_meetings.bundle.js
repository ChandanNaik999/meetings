/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/app.js":
/*!**************************!*\
  !*** ./public/js/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./public/js/constants.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function setNavbar() {
  if (localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__.TOKEN) === null) {
    window.location = '/login';
  }

  var profileImage = document.getElementById('navPic');
  profileImage.setAttribute('src', "".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.API_BASE_URL, "/").concat(localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__.ID), ".png"));

  var _localStorage$getItem = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__.NAME).split(' '),
      _localStorage$getItem2 = _slicedToArray(_localStorage$getItem, 1),
      firstName = _localStorage$getItem2[0];

  document.getElementById('nameNav').innerHTML = firstName;
}

function showBodyOnLoad() {
  document.body.classList.remove('hide');
}

showBodyOnLoad();
setNavbar();

/***/ }),

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
});
document.getElementById('presentButton').addEventListener('click', function () {
  resetNav();
  document.getElementById('presentButton').style.background = '#f5f8fa';
  searchDate = 'present';
});
document.getElementById('allButton').addEventListener('click', function () {
  resetNav();
  document.getElementById('allButton').style.background = '#f5f8fa';
  searchDate = 'all';
});
document.getElementById('upcomingButton').addEventListener('click', function () {
  resetNav();
  document.getElementById('upcomingButton').style.background = '#f5f8fa';
  searchDate = 'upcoming';
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
    meetingsListTitle.innerHTML = 'Meetings matching search criteria';
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
    (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)('Please enter a longer meeting name', document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
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

/***/ "./public/js/services/meetings.js":
/*!****************************************!*\
  !*** ./public/js/services/meetings.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchMeetings": () => (/* binding */ fetchMeetings),
/* harmony export */   "searchMeetings": () => (/* binding */ searchMeetings),
/* harmony export */   "addAttendeeToMeeting": () => (/* binding */ addAttendeeToMeeting),
/* harmony export */   "excuseFromMeeting": () => (/* binding */ excuseFromMeeting),
/* harmony export */   "addMeeting": () => (/* binding */ addMeeting)
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







function fetchMeetings(_x) {
  return _fetchMeetings.apply(this, arguments);
}

function _fetchMeetings() {
  _fetchMeetings = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(date) {
    var dateString, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dateString = '';

            if (date instanceof Date) {
              dateString = "".concat(date.getFullYear(), "-").concat(date.getMonth() + 1, "-").concat(date.getDate());
            }

            _context.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(_constants__WEBPACK_IMPORTED_MODULE_1__.API_BASE_URL, "/calendar?date=").concat(dateString), {
              headers: {
                Authorization: "".concat((0,_auth__WEBPACK_IMPORTED_MODULE_2__.getToken)())
              }
            });

          case 4:
            response = _context.sent;
            return _context.abrupt("return", response.data);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchMeetings.apply(this, arguments);
}

function searchMeetings(_x2) {
  return _searchMeetings.apply(this, arguments);
}

function _searchMeetings() {
  _searchMeetings = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(selectedDateOption) {
    var searchText,
        url,
        response,
        _args2 = arguments;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            searchText = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : '';
            url = "".concat(_constants__WEBPACK_IMPORTED_MODULE_1__.API_BASE_URL, "/meetings/?period=").concat(selectedDateOption);

            if (searchText !== '') {
              url += '&search=';
              url += searchText.split(' ').join('%20');
            }

            _context2.next = 5;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, {
              headers: {
                Authorization: "".concat((0,_auth__WEBPACK_IMPORTED_MODULE_2__.getToken)())
              }
            });

          case 5:
            response = _context2.sent;
            return _context2.abrupt("return", response.data);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _searchMeetings.apply(this, arguments);
}

function addAttendeeToMeeting(_x3, _x4) {
  return _addAttendeeToMeeting.apply(this, arguments);
}

function _addAttendeeToMeeting() {
  _addAttendeeToMeeting = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(meeting, email) {
    var response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().patch("".concat(_constants__WEBPACK_IMPORTED_MODULE_1__.API_BASE_URL, "/meetings/").concat(meeting['_id'], "?action=add_attendee&email=").concat(email), {}, {
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
  return _addAttendeeToMeeting.apply(this, arguments);
}

function excuseFromMeeting(_x5) {
  return _excuseFromMeeting.apply(this, arguments);
}

function _excuseFromMeeting() {
  _excuseFromMeeting = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(meeting) {
    var response;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().patch("".concat(_constants__WEBPACK_IMPORTED_MODULE_1__.API_BASE_URL, "/meetings/").concat(meeting['_id'], "?action=remove_attendee"), {}, {
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
  return _excuseFromMeeting.apply(this, arguments);
}

function addMeeting(_x6) {
  return _addMeeting.apply(this, arguments);
} // async function fetchMeetingById( id ) {
//     const response = await axios.get(
//         `${API_BASE_URL}/workshops/${id}`,
//         {
//             headers: {
//                 Authorization: `Bearer ${getToken()}`,
//             },
//         },
//     );
//     return response.data;
// }
// async function deleteMeetingById( id ) {
//     const response = await axios.delete(
//         `${API_BASE_URL}/workshops/${id}`,
//         {
//             headers: {
//                 Authorization: `Bearer ${getToken()}`,
//             },
//         },
//     );
//     return response;
// }


function _addMeeting() {
  _addMeeting = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(submitJSON) {
    var response;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().post("".concat(_constants__WEBPACK_IMPORTED_MODULE_1__.API_BASE_URL, "/meetings/"), submitJSON, {
              headers: {
                Authorization: "".concat((0,_auth__WEBPACK_IMPORTED_MODULE_2__.getToken)())
              }
            });

          case 2:
            response = _context5.sent;
            return _context5.abrupt("return", response.data);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _addMeeting.apply(this, arguments);
}



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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_axios_index_js-node_modules_core-js_stable_index_js-node_modules_regener-157406","public_js_customs_app_js-public_js_services_auth_js-public_css_main_css-data_image_svg_xml_3c-4ea2a1"], () => (__webpack_require__("./public/js/search_meetings.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vbWVldGluZ3MvLi9wdWJsaWMvanMvZGF0YS9hZGRfbWVldGluZ19mb3JtLmpzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2pzL3NlYXJjaF9tZWV0aW5ncy5qcyIsIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9qcy9zZXJ2aWNlcy9tZWV0aW5ncy5qcyIsIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9qcy9zZXJ2aWNlcy90ZWFtcy5qcyIsIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9qcy9zZXJ2aWNlcy91c2VyX21hbmFnZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbWVldGluZ3MvLi9wdWJsaWMvY3NzL2FkZF9tZWV0aW5nLmNzcyIsIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9jc3Mvc2VhcmNoX21lZXRpbmdzLmNzcyIsIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9jc3MvYWRkX21lZXRpbmcuY3NzPzA5YzkiLCJ3ZWJwYWNrOi8vbWVldGluZ3MvLi9wdWJsaWMvY3NzL3NlYXJjaF9tZWV0aW5ncy5jc3M/OWEwYSIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWVldGluZ3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsic2V0TmF2YmFyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIlRPS0VOIiwid2luZG93IiwibG9jYXRpb24iLCJwcm9maWxlSW1hZ2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2V0QXR0cmlidXRlIiwiQVBJX0JBU0VfVVJMIiwiSUQiLCJOQU1FIiwic3BsaXQiLCJmaXJzdE5hbWUiLCJpbm5lckhUTUwiLCJzaG93Qm9keU9uTG9hZCIsImJvZHkiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJBRERfTUVFVElOR19GT1JNIiwic2VhcmNoRGF0ZSIsInJlc2V0TmF2Iiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZvcm1hdFRpbWUiLCJob3VycyIsIm1pbnV0ZXMiLCJyZXN1bHQiLCJwb3B1bGF0ZU1lZXRpbmdzTGlzdCIsIm1lZXRpbmdzIiwidXNlcnMiLCJtZWV0aW5nc0xpc3REaXYiLCJsZW5ndGgiLCJtZWV0aW5nc0xpc3RUaXRsZSIsImRpc3BsYXkiLCJmb3JFYWNoIiwibWVldGluZyIsImF0dGVuZGVlcyIsImF0dGVuZGVlIiwicHVzaCIsImNhcmQiLCJjcmVhdGVFbGVtZW50IiwiY2FyZEJvZHkiLCJjYXJkTWVldGluZ05hbWVEaXYiLCJjYXJkTWVldGluZ05hbWUiLCJjYXJkTWVldGluZ1RpbWUiLCJkYXRlIiwiRGF0ZSIsInN0YXJ0VGltZSIsImVuZFRpbWUiLCJ0b0RhdGVTdHJpbmciLCJhcHBlbmRDaGlsZCIsImNhcmRUZXh0IiwiYnV0dG9uRXhjdXNlIiwiZXhjdXNlRnJvbU1lZXRpbmciLCJ0aGVuIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwiU1VDQ0VTUyIsImFkZFRvYXN0IiwiRVJST1IiLCJlcnJvciIsImRhdGEiLCJkZXNjcmlwdGlvbiIsImhyIiwibWVldGluZ0F0dGVuZGVlcyIsImpvaW4iLCJzZWxlY3RNZW1iZXJEaXYiLCJjb2xTZWxlY3RNZW1iZXIiLCJsYWJlbFNlbGVjdE1lbWJlciIsInNlbGVjdE1lbWJlciIsIm5vbk1lbWJlcnMiLCJ1c2VyIiwiaW5jbHVkZXMiLCJub25NZW1iZXIiLCJjb2xTZWxlY3RNZW1iZXIyIiwiY29sU2VsZWN0QnV0dG9uIiwidmFsdWUiLCJhZGRBdHRlbmRlZVRvTWVldGluZyIsInNlbGVjdGVkRGF0ZU9wdGlvbiIsInNlYXJjaFRleHQiLCJ0cmltIiwic2VhcmNoTWVldGluZ3MiLCJnZXRBbGxVc2VycyIsImluaXQiLCJwaWNrZXIiLCJQaWthZGF5IiwiZmllbGQiLCJ0b1N0cmluZyIsImRheSIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwidmFsaWRhdGVFbWFpbCIsImVtYWlsIiwicmUiLCJ0ZXN0IiwiU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJ2YWxpZGF0ZVRlYW0iLCJ0ZWFtIiwiYXR0ZW5kZWVUeXBlIiwidHlwZSIsInJlc2V0Rm9ybSIsIm15TW9kYWwiLCJib290c3RyYXAiLCJNb2RhbCIsInNob3ciLCJoaWRlIiwic3VibWl0SlNPTiIsIm1lZXRpbmdOYW1lIiwic2VsZWN0ZWREYXRlIiwic2VsZWN0U3RhcnRUaW1lSG91cnMiLCJwYXJzZUludCIsInNlbGVjdEVuZFRpbWVIb3VycyIsInNlbGVjdFN0YXJ0VGltZU1pbnMiLCJzZWxlY3RFbmRUaW1lTWlucyIsInJlcGxhY2UiLCJhdHRlbmRlZXNKU09OIiwiYXR0ZW5kZWVzTGVuZ3RoIiwiZmV0Y2hUZWFtcyIsInRlYW1zIiwiaWR4QXR0IiwiaWR4IiwidXNlcklkIiwidGVhbU1lbWJlckVtYWlscyIsIm1hcCIsIngiLCJtZW1iZXIiLCJhZGRNZWV0aW5nIiwiaW5pdEFkZE1lZXRpbmciLCJ0b2RheSIsInNldERhdGUiLCJpIiwib3B0aW9uIiwiZmV0Y2hNZWV0aW5ncyIsImRhdGVTdHJpbmciLCJheGlvcyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZ2V0VG9rZW4iLCJ1cmwiLCJhZGRUZWFtIiwidGVhbUpTT04iLCJhZGRNZW1iZXJUb1RlYW0iLCJleGN1c2VGcm9tVGVhbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsU0FBVCxHQUFxQjtBQUNqQixNQUFLQyxZQUFZLENBQUNDLE9BQWIsQ0FBc0JDLDZDQUF0QixNQUFrQyxJQUF2QyxFQUE4QztBQUMxQ0MsVUFBTSxDQUFDQyxRQUFQLEdBQWtCLFFBQWxCO0FBQ0g7O0FBRUQsTUFBTUMsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBeUIsUUFBekIsQ0FBckI7QUFDQUYsY0FBWSxDQUFDRyxZQUFiLENBQTJCLEtBQTNCLFlBQXFDQyxvREFBckMsY0FBcURULFlBQVksQ0FBQ0MsT0FBYixDQUFzQlMsMENBQXRCLENBQXJEOztBQUVBLDhCQUFvQlYsWUFBWSxDQUFDQyxPQUFiLENBQXNCVSw0Q0FBdEIsRUFBNkJDLEtBQTdCLENBQW9DLEdBQXBDLENBQXBCO0FBQUE7QUFBQSxNQUFPQyxTQUFQOztBQUNBUCxVQUFRLENBQUNDLGNBQVQsQ0FBeUIsU0FBekIsRUFBcUNPLFNBQXJDLEdBQWlERCxTQUFqRDtBQUNIOztBQUVELFNBQVNFLGNBQVQsR0FBMEI7QUFDdEJULFVBQVEsQ0FBQ1UsSUFBVCxDQUFjQyxTQUFkLENBQXdCQyxNQUF4QixDQUFnQyxNQUFoQztBQUNIOztBQUNESCxjQUFjO0FBQ2RoQixTQUFTLEc7Ozs7Ozs7Ozs7Ozs7O0FDbEJUO0FBQ0EsSUFBTW9CLGdCQUFnQixHQUFHO0FBQ3JCLFVBQVEsMkJBRGE7QUFFckIsaUJBQWUseUVBRk07QUFHckIsVUFBUSxZQUhhO0FBSXJCLGVBQWE7QUFDVCxhQUFTLENBREE7QUFFVCxlQUFXO0FBRkYsR0FKUTtBQVFyQixhQUFXO0FBQ1AsYUFBUyxFQURGO0FBRVAsZUFBVztB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QUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0sb0JBQW9CO1dBQzFCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLDRHOzs7OztVQzlDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6InNlYXJjaF9tZWV0aW5ncy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUElfQkFTRV9VUkwsIElELCBOQU1FLCBUT0tFTiB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmZ1bmN0aW9uIHNldE5hdmJhcigpIHtcclxuICAgIGlmICggbG9jYWxTdG9yYWdlLmdldEl0ZW0oIFRPS0VOICkgPT09IG51bGwgKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJy9sb2dpbic7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvZmlsZUltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICduYXZQaWMnICk7XHJcbiAgICBwcm9maWxlSW1hZ2Uuc2V0QXR0cmlidXRlKCAnc3JjJywgYCR7QVBJX0JBU0VfVVJMfS8ke2xvY2FsU3RvcmFnZS5nZXRJdGVtKCBJRCApfS5wbmdgICk7XHJcblxyXG4gICAgY29uc3QgW2ZpcnN0TmFtZV0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggTkFNRSApLnNwbGl0KCAnICcgKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnbmFtZU5hdicgKS5pbm5lckhUTUwgPSBmaXJzdE5hbWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dCb2R5T25Mb2FkKCkge1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCAnaGlkZScgKTtcclxufVxyXG5zaG93Qm9keU9uTG9hZCgpO1xyXG5zZXROYXZiYXIoKTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cclxuY29uc3QgQUREX01FRVRJTkdfRk9STSA9IHtcclxuICAgIFwibmFtZVwiOiBcIkdvb2dsZSBtYXJrZXRpbmcgY2FtcGFpZ25cIixcclxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJJbmNyZWFzaW5nIGJyYW5kIGF3YXJlbmVzcyBhbmQgc3ByZWFkaW5nIGluZm9ybWF0aW9uIGFib3V0IG5ldyBwcm9kdWN0c1wiLFxyXG4gICAgXCJkYXRlXCI6IFwiMjAyMC0xMC0yOFwiLFxyXG4gICAgXCJzdGFydFRpbWVcIjoge1xyXG4gICAgICAgIFwiaG91cnNcIjogOSxcclxuICAgICAgICBcIm1pbnV0ZXNcIjogMFxyXG4gICAgfSxcclxuICAgIFwiZW5kVGltZVwiOiB7XHJcbiAgICAgICAgXCJob3Vyc1wiOiAxMCxcclxuICAgICAgICBcIm1pbnV0ZXNcIjogMzBcclxuICAgIH0sXHJcbiAgICBcImF0dGVuZGVlc1wiOiBbXVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFERF9NRUVUSU5HX0ZPUk07IiwiaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG5pbXBvcnQgJy4uL2Nzcy9tYWluLmNzcyc7XHJcbmltcG9ydCAnLi4vY3NzL2FkZF9tZWV0aW5nLmNzcyc7XHJcbmltcG9ydCAnLi4vY3NzL3NlYXJjaF9tZWV0aW5ncy5jc3MnO1xyXG5pbXBvcnQgYWRkVG9hc3QgZnJvbSAnLi9jdXN0b21zL2FwcCc7XHJcbmltcG9ydCAnLi9hcHAnO1xyXG5pbXBvcnQgeyBhZGRBdHRlbmRlZVRvTWVldGluZywgc2VhcmNoTWVldGluZ3MsIGV4Y3VzZUZyb21NZWV0aW5nLCBhZGRNZWV0aW5nIH0gZnJvbSAnLi9zZXJ2aWNlcy9tZWV0aW5ncyc7XHJcbmltcG9ydCBnZXRBbGxVc2VycyBmcm9tICcuL3NlcnZpY2VzL3VzZXJfbWFuYWdlbWVudCc7XHJcbmltcG9ydCB7IFRPS0VOLCBTVUNDRVNTLCBFUlJPUiB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgZmV0Y2hUZWFtcyB9IGZyb20gJy4vc2VydmljZXMvdGVhbXMnO1xyXG5pbXBvcnQgQUREX01FRVRJTkdfRk9STSBmcm9tICcuL2RhdGEvYWRkX21lZXRpbmdfZm9ybSc7XHJcblxyXG5sZXQgc2VhcmNoRGF0ZSA9ICd0b2RheSc7XHJcblxyXG5mdW5jdGlvbiByZXNldE5hdigpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAncGFzdEJ1dHRvbicgKS5zdHlsZS5iYWNrZ3JvdW5kID0gJyNmZmYnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdwcmVzZW50QnV0dG9uJyApLnN0eWxlLmJhY2tncm91bmQgPSAnI2ZmZic7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3VwY29taW5nQnV0dG9uJyApLnN0eWxlLmJhY2tncm91bmQgPSAnI2ZmZic7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2FsbEJ1dHRvbicgKS5zdHlsZS5iYWNrZ3JvdW5kID0gJyNmZmYnO1xyXG59XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3Bhc3RCdXR0b24nICkuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCApID0+IHtcclxuICAgIHJlc2V0TmF2KCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3Bhc3RCdXR0b24nICkuc3R5bGUuYmFja2dyb3VuZCA9ICcjZjVmOGZhJztcclxuICAgIHNlYXJjaERhdGUgPSAncGFzdCc7XHJcbn0gKTtcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAncHJlc2VudEJ1dHRvbicgKS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoICkgPT4ge1xyXG4gICAgcmVzZXROYXYoKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAncHJlc2VudEJ1dHRvbicgKS5zdHlsZS5iYWNrZ3JvdW5kID0gJyNmNWY4ZmEnO1xyXG4gICAgc2VhcmNoRGF0ZSA9ICdwcmVzZW50JztcclxufSApO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdhbGxCdXR0b24nICkuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCApID0+IHtcclxuICAgIHJlc2V0TmF2KCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2FsbEJ1dHRvbicgKS5zdHlsZS5iYWNrZ3JvdW5kID0gJyNmNWY4ZmEnO1xyXG4gICAgc2VhcmNoRGF0ZSA9ICdhbGwnO1xyXG59ICk7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3VwY29taW5nQnV0dG9uJyApLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICggKSA9PiB7XHJcbiAgICByZXNldE5hdigpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICd1cGNvbWluZ0J1dHRvbicgKS5zdHlsZS5iYWNrZ3JvdW5kID0gJyNmNWY4ZmEnO1xyXG4gICAgc2VhcmNoRGF0ZSA9ICd1cGNvbWluZyc7XHJcbn0gKTtcclxuXHJcbmZ1bmN0aW9uIGZvcm1hdFRpbWUoIGhvdXJzLCBtaW51dGVzICkge1xyXG4gICAgbGV0IHJlc3VsdCA9ICcnO1xyXG4gICAgaWYgKCBob3VycyA8IDEwICkge1xyXG4gICAgICAgIHJlc3VsdCArPSBgMCR7aG91cnN9YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IGhvdXJzO1xyXG4gICAgfVxyXG4gICAgcmVzdWx0ICs9ICc6JztcclxuICAgIGlmICggbWludXRlcyA8IDEwICkge1xyXG4gICAgICAgIHJlc3VsdCArPSBgMCR7bWludXRlc31gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXN1bHQgKz0gbWludXRlcztcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvcHVsYXRlTWVldGluZ3NMaXN0KCBtZWV0aW5ncywgdXNlcnMgKSB7XHJcbiAgICBjb25zdCBtZWV0aW5nc0xpc3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3NlYXJjaE1lZXRpbmdzTGlzdCcgKTtcclxuICAgIG1lZXRpbmdzTGlzdERpdi5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICBpZiAoIG1lZXRpbmdzICYmIG1lZXRpbmdzLmxlbmd0aCA+IDAgKSB7XHJcbiAgICAgICAgY29uc3QgbWVldGluZ3NMaXN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ21lZXRpbmdzTGlzdFRpdGxlJyApO1xyXG4gICAgICAgIG1lZXRpbmdzTGlzdFRpdGxlLmlubmVySFRNTCA9ICdNZWV0aW5ncyBtYXRjaGluZyBzZWFyY2ggY3JpdGVyaWEnO1xyXG4gICAgICAgIG1lZXRpbmdzTGlzdFRpdGxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgICAgIG1lZXRpbmdzLmZvckVhY2goICggbWVldGluZyApID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYXR0ZW5kZWVzID0gW107XHJcbiAgICAgICAgICAgIG1lZXRpbmdbJ2F0dGVuZGVlcyddLmZvckVhY2goICggYXR0ZW5kZWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhdHRlbmRlZXMucHVzaCggYXR0ZW5kZWVbJ2VtYWlsJ10gKTtcclxuICAgICAgICAgICAgfSApO1xyXG5cclxuICAgICAgICAgICAgLy8gY3JlYXRlIG1lZXRpbmcgY2FyZCBhbmQgYXR0YWNoIGl0IHRvIHRoZSByZXNwZWN0aXZlIHBhcmVudFxyXG4gICAgICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuICAgICAgICAgICAgY2FyZC5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdjYXJkIHAtMyBtYi0zJyApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2FyZEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG4gICAgICAgICAgICBjYXJkQm9keS5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdjYXJkLWJvZHknICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjYXJkTWVldGluZ05hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG4gICAgICAgICAgICBjYXJkTWVldGluZ05hbWVEaXYuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAncm93JyApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2FyZE1lZXRpbmdOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2g0JyApO1xyXG4gICAgICAgICAgICBjYXJkTWVldGluZ05hbWUuc2V0QXR0cmlidXRlKCAnaWQnLCAnY2FyZC1tZWV0aW5nLW5hbWUnICk7XHJcbiAgICAgICAgICAgIGNhcmRNZWV0aW5nTmFtZS5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdjb2wtYXV0byBtZS1hdXRvIGNhcmQtbWVldGluZy1uYW1lJyApO1xyXG4gICAgICAgICAgICBjYXJkTWVldGluZ05hbWUuaW5uZXJIVE1MID0gbWVldGluZ1snbmFtZSddO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2FyZE1lZXRpbmdUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2g1JyApO1xyXG4gICAgICAgICAgICBjYXJkTWVldGluZ1RpbWUuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAnY29sLWF1dG8gY2FyZC1tZWV0aW5nLW5hbWUnICk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSggbWVldGluZ1snZGF0ZSddICk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IGZvcm1hdFRpbWUoIG1lZXRpbmdbJ3N0YXJ0VGltZSddWydob3VycyddLCBtZWV0aW5nWydzdGFydFRpbWUnXVsnbWludXRlcyddICk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVuZFRpbWUgPSBmb3JtYXRUaW1lKCBtZWV0aW5nWydlbmRUaW1lJ11bJ2hvdXJzJ10sIG1lZXRpbmdbJ2VuZFRpbWUnXVsnbWludXRlcyddICk7XHJcbiAgICAgICAgICAgIGNhcmRNZWV0aW5nVGltZS5pbm5lckhUTUwgPSBgJHtkYXRlLnRvRGF0ZVN0cmluZygpfSwgJHtzdGFydFRpbWV9LSR7ZW5kVGltZX1gO1xyXG5cclxuICAgICAgICAgICAgY2FyZE1lZXRpbmdOYW1lRGl2LmFwcGVuZENoaWxkKCBjYXJkTWVldGluZ05hbWUgKTtcclxuICAgICAgICAgICAgY2FyZE1lZXRpbmdOYW1lRGl2LmFwcGVuZENoaWxkKCBjYXJkTWVldGluZ1RpbWUgKTtcclxuICAgICAgICAgICAgLy8gY2FyZE1lZXRpbmdEaXYuYXBwZW5kQ2hpbGQoIGNhcmRNZWV0aW5nTmFtZURpdiApO1xyXG5cclxuICAgICAgICAgICAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQoIGNhcmRNZWV0aW5nTmFtZURpdiApO1xyXG4gICAgICAgICAgICBjb25zdCBjYXJkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdwJyApO1xyXG4gICAgICAgICAgICBjYXJkVGV4dC5pbm5lckhUTUwgPSBtZWV0aW5nWydkZXNjcmlwdGlvbiddO1xyXG4gICAgICAgICAgICBjYXJkQm9keS5hcHBlbmRDaGlsZCggY2FyZFRleHQgKTtcclxuICAgICAgICAgICAgY29uc3QgYnV0dG9uRXhjdXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2J1dHRvbicgKTtcclxuICAgICAgICAgICAgYnV0dG9uRXhjdXNlLmlubmVySFRNTCA9ICdMZWF2ZSBtZWV0aW5nJztcclxuICAgICAgICAgICAgYnV0dG9uRXhjdXNlLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2J1dHRvbi1vdXRsaW5lLXJlZCBweC00JyApO1xyXG4gICAgICAgICAgICBidXR0b25FeGN1c2UuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXhjdXNlRnJvbU1lZXRpbmcoIG1lZXRpbmcgKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCAoIHJlc3BvbnNlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHJlc3BvbnNlLm1lc3NhZ2UgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggJ1lvdSBoYXZlIGJlZW4gcmVtb3ZlZCBmcm9tIHRoZSB0ZWFtJywgZG9jdW1lbnQuYm9keSwgU1VDQ0VTUyApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgcmVtb3Zpbmc6ICR7cmVzcG9uc2UubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCAoIGVycm9yICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciByZW1vdmluZzogJHtlcnJvci5yZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9ufWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciByZW1vdmluZzogJHtlcnJvci5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQoIGJ1dHRvbkV4Y3VzZSApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnaHInICk7XHJcbiAgICAgICAgICAgIGhyLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ215LTMnICk7XHJcbiAgICAgICAgICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKCBociApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbWVldGluZ0F0dGVuZGVlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdwJyApO1xyXG4gICAgICAgICAgICBtZWV0aW5nQXR0ZW5kZWVzLmlubmVySFRNTCA9IGA8c3Ryb25nPkF0dGVuZGVlczogPC9zdHJvbmc+ICR7YXR0ZW5kZWVzLmpvaW4oICcsICcgKX1gO1xyXG4gICAgICAgICAgICBjYXJkQm9keS5hcHBlbmRDaGlsZCggbWVldGluZ0F0dGVuZGVlcyApO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0TWVtYmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuICAgICAgICAgICAgc2VsZWN0TWVtYmVyRGl2LnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ3JvdyBneS0yIGd4LTMgYWxpZ24taXRlbXMtY2VudGVyJyApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY29sU2VsZWN0TWVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuICAgICAgICAgICAgY29sU2VsZWN0TWVtYmVyLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2NvbC1hdXRvJyApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbGFiZWxTZWxlY3RNZW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnbGFiZWwnICk7XHJcbiAgICAgICAgICAgIGxhYmVsU2VsZWN0TWVtYmVyLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ3Zpc3VhbGx5LWhpZGRlbicgKTtcclxuICAgICAgICAgICAgbGFiZWxTZWxlY3RNZW1iZXIuc2V0QXR0cmlidXRlKCAnZm9yJywgJ3NlbGVjdE1lbWJlcicgKTtcclxuICAgICAgICAgICAgY29sU2VsZWN0TWVtYmVyLmFwcGVuZENoaWxkKCBsYWJlbFNlbGVjdE1lbWJlciApO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0TWVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3NlbGVjdCcgKTtcclxuICAgICAgICAgICAgc2VsZWN0TWVtYmVyLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2Zvcm0tc2VsZWN0JyApO1xyXG4gICAgICAgICAgICBzZWxlY3RNZW1iZXIuc2V0QXR0cmlidXRlKCAnaWQnLCAnc2VsZWN0TWVtYmVyJyApO1xyXG4gICAgICAgICAgICBzZWxlY3RNZW1iZXIuc2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcsICdTZWxlY3QgTWVtYmVyJyApO1xyXG4gICAgICAgICAgICBjb25zdCBub25NZW1iZXJzID0gW107XHJcbiAgICAgICAgICAgIHVzZXJzLmZvckVhY2goICggdXNlciApID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICggYXR0ZW5kZWVzLmluY2x1ZGVzKCB1c2VyWydlbWFpbCddICkgPT09IGZhbHNlICkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vbk1lbWJlcnMucHVzaCggdXNlciApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICBzZWxlY3RNZW1iZXIuaW5uZXJIVE1MID0gJzxvcHRpb24gdmFsdWU9XCJub25lXCIgc2VsZWN0ZWQ+U2VsZWN0IG1lbWJlcjwvb3B0aW9uPic7XHJcbiAgICAgICAgICAgIG5vbk1lbWJlcnMuZm9yRWFjaCggKCBub25NZW1iZXIgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RNZW1iZXIuaW5uZXJIVE1MICs9IGA8b3B0aW9uIHZhbHVlPVwiJHtub25NZW1iZXJbJ2VtYWlsJ119XCI+JHtub25NZW1iZXJbJ2VtYWlsJ119PC9vcHRpb24+YDtcclxuICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICBjb2xTZWxlY3RNZW1iZXIuYXBwZW5kQ2hpbGQoIHNlbGVjdE1lbWJlciApO1xyXG5cclxuICAgICAgICAgICAgc2VsZWN0TWVtYmVyRGl2LmFwcGVuZENoaWxkKCBjb2xTZWxlY3RNZW1iZXIgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbFNlbGVjdE1lbWJlcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG4gICAgICAgICAgICBjb2xTZWxlY3RNZW1iZXIyLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2NvbC1hdXRvJyApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY29sU2VsZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2J1dHRvbicgKTtcclxuICAgICAgICAgICAgY29sU2VsZWN0QnV0dG9uLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2J1dHRvbiBteC0yJyApO1xyXG4gICAgICAgICAgICBjb2xTZWxlY3RCdXR0b24uaW5uZXJIVE1MID0gJ0FkZCc7XHJcbiAgICAgICAgICAgIGNvbFNlbGVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHNlbGVjdE1lbWJlci52YWx1ZSAhPT0gJ25vbmUnICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZEF0dGVuZGVlVG9NZWV0aW5nKCBtZWV0aW5nLCBzZWxlY3RNZW1iZXIudmFsdWUgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbiggKCByZXNwb25zZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggcmVzcG9uc2UubWVzc2FnZSA9PT0gU1VDQ0VTUyApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRlbmRlZXMucHVzaCggc2VsZWN0TWVtYmVyLnZhbHVlICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVldGluZ0F0dGVuZGVlcy5pbm5lckhUTUwgPSBgPHN0cm9uZz5BdHRlbmRlZXM6IDwvc3Ryb25nPiAke2F0dGVuZGVlcy5qb2luKCAnLCAnICl9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggJ0F0dGVuZGVlIGhhcyBiZWVuIGFkZGVkIHRvIHRoZSBtZWV0aW5nJywgZG9jdW1lbnQuYm9keSwgU1VDQ0VTUyApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGFkZGluZyBhdHRlbmRlZTogJHtyZXNwb25zZS5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goICggZXJyb3IgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgYWRkaW5nIGF0dGVuZGVlOiAke2Vycm9yLnJlc3BvbnNlLmRhdGEuZGVzY3JpcHRpb259YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgYWRkaW5nIGF0dGVuZGVlOiAke2Vycm9yLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgIGNvbFNlbGVjdE1lbWJlcjIuYXBwZW5kQ2hpbGQoIGNvbFNlbGVjdEJ1dHRvbiApO1xyXG5cclxuICAgICAgICAgICAgc2VsZWN0TWVtYmVyRGl2LmFwcGVuZENoaWxkKCBjb2xTZWxlY3RNZW1iZXIyICk7XHJcbiAgICAgICAgICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKCBzZWxlY3RNZW1iZXJEaXYgKTtcclxuICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZCggY2FyZEJvZHkgKTtcclxuICAgICAgICAgICAgbWVldGluZ3NMaXN0RGl2LmFwcGVuZENoaWxkKCBjYXJkICk7XHJcbiAgICAgICAgfSApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBtZWV0aW5nc0xpc3RUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnbWVldGluZ3NMaXN0VGl0bGUnICk7XHJcbiAgICAgICAgbWVldGluZ3NMaXN0VGl0bGUuaW5uZXJIVE1MID0gJ05vIG1lZXRpbmdzIGZvdW5kIHdpdGggZ2l2ZW4gc2VhcmNoIGNyaXRlcmlhJztcclxuICAgICAgICBtZWV0aW5nc0xpc3RUaXRsZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH1cclxufVxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzZWFyY2gtZm9ybScgKS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoICkgPT4ge1xyXG4gICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAvLyBjb25zdCBzZWxlY3RlZERhdGVPcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2Zvcm1Hcm91cERhdGVJbnB1dCcgKS52YWx1ZTtcclxuICAgIGNvbnN0IHNlbGVjdGVkRGF0ZU9wdGlvbiA9IHNlYXJjaERhdGU7XHJcbiAgICBjb25zdCBzZWFyY2hUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzZWFyY2hUZXh0JyApLnZhbHVlLnRyaW0oKTtcclxuICAgIC8vIGNvbnN0IHNlYXJjaFRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2Zvcm1Hcm91cFNlYXJjaEZvcicgKS52YWx1ZS50cmltKCk7XHJcblxyXG4gICAgaWYgKCBzZWFyY2hUZXh0ID09PSAnJyApIHtcclxuICAgICAgICBzZWFyY2hNZWV0aW5ncyggc2VsZWN0ZWREYXRlT3B0aW9uIClcclxuICAgICAgICAgICAgLnRoZW4oICggbWVldGluZ3MgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIG1lZXRpbmdzLm1lc3NhZ2UgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0QWxsVXNlcnMoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbiggKCB1c2VycyApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggdXNlcnMubWVzc2FnZSA9PT0gU1VDQ0VTUyApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1bGF0ZU1lZXRpbmdzTGlzdCggbWVldGluZ3MuZGF0YSwgdXNlcnMuZGF0YSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGZldGNoaW5nIHVzZXJzOiAke3VzZXJzLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCggKCBlcnJvciApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBmZXRjaGluZyB1c2VyczogJHtlcnJvci5yZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9ufWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGZldGNoaW5nIHVzZXJzOiAke2Vycm9yLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGZldGNoaW5nIG1lZXRpbmdzOiAke21lZXRpbmdzLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgIC5jYXRjaCggKCBlcnJvciApID0+IHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBGZXRjaGluZyB5b3VyIG1lZXRpbmdzOiAke2Vycm9yLnJlc3BvbnNlLmRhdGEuZGVzY3JpcHRpb259YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgRmV0Y2hpbmcgeW91ciBtZWV0aW5nczogJHtlcnJvci5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2VhcmNoTWVldGluZ3MoIHNlbGVjdGVkRGF0ZU9wdGlvbiwgc2VhcmNoVGV4dCApXHJcbiAgICAgICAgICAgIC50aGVuKCAoIG1lZXRpbmdzICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBtZWV0aW5ncy5tZXNzYWdlID09PSBTVUNDRVNTICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdldEFsbFVzZXJzKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oICggdXNlcnMgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHVzZXJzLm1lc3NhZ2UgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdWxhdGVNZWV0aW5nc0xpc3QoIG1lZXRpbmdzLmRhdGEsIHVzZXJzLmRhdGEgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBGZXRjaGluZyB1c2VyczogJHt1c2Vycy5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goICggZXJyb3IgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgRmV0Y2hpbmcgdXNlcnM6ICR7ZXJyb3IucmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbn1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBGZXRjaGluZyB1c2VyczogJHtlcnJvci5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBmZXRjaGluZyBtZWV0aW5nczogJHttZWV0aW5ncy5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAuY2F0Y2goICggZXJyb3IgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgRmV0Y2hpbmcgeW91ciBtZWV0aW5nczogJHtlcnJvci5yZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9ufWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIEZldGNoaW5nIHlvdXIgbWVldGluZ3M6ICR7ZXJyb3IubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICk7XHJcbiAgICB9XHJcbn0gKTtcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3ByZXNlbnRCdXR0b24nICkuc3R5bGUuYmFja2dyb3VuZCA9ICcjZjVmOGZhJztcclxuICAgIHNlYXJjaE1lZXRpbmdzKCAncHJlc2VudCcgKVxyXG4gICAgICAgIC50aGVuKCAoIG1lZXRpbmdzICkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIG1lZXRpbmdzLm1lc3NhZ2UgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgICAgICAgICBnZXRBbGxVc2VycygpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oICggdXNlcnMgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggdXNlcnMubWVzc2FnZSA9PT0gU1VDQ0VTUyApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVsYXRlTWVldGluZ3NMaXN0KCBtZWV0aW5ncy5kYXRhLCB1c2Vycy5kYXRhICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIEZldGNoaW5nIHVzZXJzOiAke3VzZXJzLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCggKCBlcnJvciApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgRmV0Y2hpbmcgdXNlcnM6ICR7ZXJyb3IucmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbn1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgRmV0Y2hpbmcgdXNlcnM6ICR7ZXJyb3IubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBmZXRjaGluZyBtZWV0aW5nczogJHttZWV0aW5ncy5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IClcclxuICAgICAgICAuY2F0Y2goICggZXJyb3IgKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIEZldGNoaW5nIHlvdXIgbWVldGluZ3M6ICR7ZXJyb3IucmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbn1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgRmV0Y2hpbmcgeW91ciBtZWV0aW5nczogJHtlcnJvci5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICk7XHJcbn1cclxuXHJcbmluaXQoKTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PSBBREQgTUVFVElORyA9PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmNvbnN0IHBpY2tlciA9IG5ldyBQaWthZGF5KCB7XHJcbiAgICBmaWVsZDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdmb3JtR3JvdXBEYXRlSW5wdXQnICksXHJcbiAgICB0b1N0cmluZyggZGF0ZSApIHtcclxuICAgICAgICAvLyByZXR1cm4gJ0QvTS9ZWVlZJ1xyXG4gICAgICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcclxuICAgICAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIHJldHVybiBgJHtkYXl9LyR7bW9udGh9LyR7eWVhcn1gO1xyXG4gICAgfSxcclxufSApO1xyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVFbWFpbCggZW1haWwgKSB7XHJcbiAgICBjb25zdCByZSA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuICAgIHJldHVybiByZS50ZXN0KCBTdHJpbmcoIGVtYWlsICkudG9Mb3dlckNhc2UoKSApO1xyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZVRlYW0oIHRlYW0gKSB7XHJcbiAgICBjb25zdCByZSA9IC9AW2EtekEtWlxcLTAtOV0rJC87XHJcbiAgICByZXR1cm4gcmUudGVzdCggU3RyaW5nKCB0ZWFtICkudG9Mb3dlckNhc2UoKSApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhdHRlbmRlZVR5cGUoIGF0dGVuZGVlICkge1xyXG4gICAgbGV0IHR5cGUgPSAnJztcclxuICAgIGlmICggdmFsaWRhdGVFbWFpbCggYXR0ZW5kZWUgKSApIHtcclxuICAgICAgICB0eXBlID0gJ2VtYWlsJztcclxuICAgIH0gZWxzZSBpZiAoIHZhbGlkYXRlVGVhbSggYXR0ZW5kZWUgKSApIHtcclxuICAgICAgICB0eXBlID0gJ3RlYW0nO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0eXBlID0gJ25vbmUnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHR5cGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnaW5wdXRNZWV0aW5nTmFtZScgKS52YWx1ZSA9ICcnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICd0ZXh0YXJlYU1lZXRpbmdEZXNjcmlwdGlvbicgKS52YWx1ZSA9ICcnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzZWxlY3RTdGFydFRpbWVIb3VycycgKS52YWx1ZSA9IDA7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3NlbGVjdEVuZFRpbWVIb3VycycgKS52YWx1ZSA9IDA7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3NlbGVjdFN0YXJ0VGltZU1pbnMnICkudmFsdWUgPSAwO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzZWxlY3RFbmRUaW1lTWlucycgKS52YWx1ZSA9IDA7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2lucHV0UGFydGljaXBhbnRzJyApLnZhbHVlID0gJyc7XHJcbn1cclxuXHJcbmxldCBteU1vZGFsID0gbnVsbDtcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnYWRkTWVldGluZycgKS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoKSA9PiB7XHJcbiAgICBteU1vZGFsID0gbmV3IGJvb3RzdHJhcC5Nb2RhbCggZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdteU1vZGFsJyApICk7XHJcbiAgICBteU1vZGFsLnNob3coKTtcclxufSApO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdtb2RhbERpc21pc3MnICkuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbXlNb2RhbC5oaWRlKCk7XHJcbn0gKTtcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc3VibWl0QWRkTWVldGluZycgKS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoKSA9PiB7XHJcbiAgICBteU1vZGFsLmhpZGUoKTtcclxuXHJcbiAgICBjb25zdCBzdWJtaXRKU09OID0gQUREX01FRVRJTkdfRk9STTtcclxuICAgIGNvbnN0IG1lZXRpbmdOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdpbnB1dE1lZXRpbmdOYW1lJyApLnZhbHVlLnRyaW0oKTtcclxuXHJcbiAgICBpZiAoIG1lZXRpbmdOYW1lLmxlbmd0aCA8PSAzICkge1xyXG4gICAgICAgIGFkZFRvYXN0KCAnUGxlYXNlIGVudGVyIGEgbG9uZ2VyIG1lZXRpbmcgbmFtZScsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3RleHRhcmVhTWVldGluZ0Rlc2NyaXB0aW9uJyApLnZhbHVlLnRyaW0oKTtcclxuICAgIGlmICggZGVzY3JpcHRpb24ubGVuZ3RoIDw9IDEwICkge1xyXG4gICAgICAgIGFkZFRvYXN0KCAnUGxlYXNlIGVudGVyIGEgbG9uZ2VyIG1lZXRpbmcgbmFtZScsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2VsZWN0ZWREYXRlID0gcGlja2VyLmdldERhdGUoKTtcclxuICAgIGNvbnN0IGRhdGUgPSBgJHtzZWxlY3RlZERhdGUuZ2V0RnVsbFllYXIoKX0tJHtzZWxlY3RlZERhdGUuZ2V0TW9udGgoKSArIDF9LSR7c2VsZWN0ZWREYXRlLmdldERhdGUoKX1gO1xyXG4gICAgY29uc3Qgc2VsZWN0U3RhcnRUaW1lSG91cnMgPSBwYXJzZUludCggZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzZWxlY3RTdGFydFRpbWVIb3VycycgKS52YWx1ZSwgMTAgKTtcclxuICAgIGNvbnN0IHNlbGVjdEVuZFRpbWVIb3VycyA9IHBhcnNlSW50KCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3NlbGVjdEVuZFRpbWVIb3VycycgKS52YWx1ZSwgMTAgKTtcclxuICAgIGNvbnN0IHNlbGVjdFN0YXJ0VGltZU1pbnMgPSBwYXJzZUludCggZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzZWxlY3RTdGFydFRpbWVNaW5zJyApLnZhbHVlLCAxMCApO1xyXG4gICAgY29uc3Qgc2VsZWN0RW5kVGltZU1pbnMgPSBwYXJzZUludCggZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzZWxlY3RFbmRUaW1lTWlucycgKS52YWx1ZSwgMTAgKTtcclxuXHJcbiAgICBpZiAoIHNlbGVjdEVuZFRpbWVIb3VycyA8IHNlbGVjdFN0YXJ0VGltZUhvdXJzICkge1xyXG4gICAgICAgIGFkZFRvYXN0KCAnU3RhcnQgdGltZSBoYXMgdG8gYmUgbGVzcyB0aGFuIGVuZCB0aW1lJywgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZWxzZS1yZXR1cm5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXHJcbiAgICB9IGlmICggc2VsZWN0RW5kVGltZUhvdXJzID09PSBzZWxlY3RTdGFydFRpbWVIb3VycyAmJiBzZWxlY3RTdGFydFRpbWVNaW5zID49IHNlbGVjdEVuZFRpbWVNaW5zICkge1xyXG4gICAgICAgIGFkZFRvYXN0KCAnU3RhcnQgdGltZSBoYXMgdG8gYmUgbGVzcyB0aGFuIGVuZCB0aW1lJywgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXR0ZW5kZWVzID0gKCAoIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnaW5wdXRQYXJ0aWNpcGFudHMnICkudmFsdWUgKS5yZXBsYWNlKCAvXFxzKy9nLCAnJyApICkuc3BsaXQoICcsJyApO1xyXG5cclxuICAgIHN1Ym1pdEpTT05bJ25hbWUnXSA9IG1lZXRpbmdOYW1lO1xyXG4gICAgc3VibWl0SlNPTlsnZGVzY3JpcHRpb24nXSA9IGRlc2NyaXB0aW9uO1xyXG4gICAgc3VibWl0SlNPTlsnZGF0ZSddID0gZGF0ZTtcclxuICAgIHN1Ym1pdEpTT05bJ3N0YXJ0VGltZSddWydob3VycyddID0gc2VsZWN0U3RhcnRUaW1lSG91cnM7XHJcbiAgICBzdWJtaXRKU09OWydzdGFydFRpbWUnXVsnbWludXRlcyddID0gc2VsZWN0U3RhcnRUaW1lTWlucztcclxuICAgIHN1Ym1pdEpTT05bJ2VuZFRpbWUnXVsnaG91cnMnXSA9IHNlbGVjdEVuZFRpbWVIb3VycztcclxuICAgIHN1Ym1pdEpTT05bJ2VuZFRpbWUnXVsnbWludXRlcyddID0gc2VsZWN0RW5kVGltZU1pbnM7XHJcblxyXG4gICAgY29uc3QgYXR0ZW5kZWVzSlNPTiA9IFtdO1xyXG4gICAgbGV0IGF0dGVuZGVlc0xlbmd0aCA9IGF0dGVuZGVlcy5sZW5ndGg7XHJcblxyXG4gICAgZ2V0QWxsVXNlcnMoKVxyXG4gICAgICAgIC50aGVuKCAoIHVzZXJzICkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIHVzZXJzLm1lc3NhZ2UgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgICAgICAgICBmZXRjaFRlYW1zKClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbiggKCB0ZWFtcyApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCB0ZWFtcy5tZXNzYWdlID09PSBTVUNDRVNTICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICggbGV0IGlkeEF0dCA9IDA7IGlkeEF0dCA8IGF0dGVuZGVlc0xlbmd0aDsgaWR4QXR0ICs9IDEgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0ZW5kZWUgPSBhdHRlbmRlZXNbaWR4QXR0XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKCBhdHRlbmRlZVR5cGUoIGF0dGVuZGVlc1tpZHhBdHRdICkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZW1haWwnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKCBsZXQgaWR4ID0gMDsgaWR4IDwgdXNlcnMuZGF0YS5sZW5ndGg7IGlkeCArPSAxICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBhdHRlbmRlZS50b0xvd2VyQ2FzZSgpID09PSB1c2Vycy5kYXRhW2lkeF1bJ2VtYWlsJ10udG9Mb3dlckNhc2UoKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRlbmRlZXNKU09OLnB1c2goIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiB1c2Vycy5kYXRhW2lkeF1bJ19pZCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogdXNlcnMuZGF0YVtpZHhdWydlbWFpbCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd0ZWFtJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICggbGV0IGlkeCA9IDA7IGlkeCA8IHRlYW1zLmRhdGEubGVuZ3RoOyBpZHggKz0gMSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggYXR0ZW5kZWUgPT09IGBAJHt0ZWFtcy5kYXRhW2lkeF1bJ3Nob3J0TmFtZSddfWAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVhbU1lbWJlckVtYWlscyA9ICggdGVhbXMuZGF0YVtpZHhdWydtZW1iZXJzJ10gKS5tYXAoICggeCApID0+IHhbJ2VtYWlsJ10gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtTWVtYmVyRW1haWxzLmZvckVhY2goICggbWVtYmVyICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGF0dGVuZGVlcy5pbmNsdWRlcyggbWVtYmVyICkgPT09IGZhbHNlICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZW5kZWVzLnB1c2goIG1lbWJlciApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVuZGVlc0xlbmd0aCArPSB0ZWFtcy5kYXRhW2lkeF1bJ21lbWJlcnMnXS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0SlNPTlsnYXR0ZW5kZWVzJ10gPSBhdHRlbmRlZXNKU09OO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3VibWl0IGNvbnN0cnVjdGVkIG1lZXRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZE1lZXRpbmcoIHN1Ym1pdEpTT04gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCAoIHJlc3BvbnNlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHJlc3BvbnNlLm1lc3NhZ2UgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggJ01lZXRpbmcgYWRkZWQgc3VjY2Vzc2Z1bGx5JywgZG9jdW1lbnQuYm9keSwgU1VDQ0VTUyApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRGb3JtKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGFkZGluZyBtZWV0aW5nOiAke3Jlc3BvbnNlLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCggKCBlcnJvciApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgYWRkaW5nIG1lZXRpbmc6ICR7ZXJyb3IucmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbn1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgYWRkaW5nIG1lZXRpbmc6ICR7ZXJyb3IubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBmZXRjaGluZyB0ZWFtczogJHt0ZWFtcy5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goICggZXJyb3IgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGZldGNoaW5nIHRlYW1zOiAke2Vycm9yLnJlc3BvbnNlLmRhdGEuZGVzY3JpcHRpb259YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGZldGNoaW5nIHRlYW1zOiAke2Vycm9yLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgZmV0Y2hpbmcgdXNlcnM6ICR7dXNlcnMubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSApXHJcbiAgICAgICAgLmNhdGNoKCAoIGVycm9yICkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBmZXRjaGluZyB1c2VyczogJHtlcnJvci5yZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9ufWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBmZXRjaGluZyB1c2VyczogJHtlcnJvci5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICk7XHJcbn0gKTtcclxuXHJcbmZ1bmN0aW9uIGluaXRBZGRNZWV0aW5nKCkge1xyXG4gICAgLy8gcmVkaXJlY3QgdG8gbG9naW4gcGFnZSBpZiBhdXRob3JpemF0aW9uIHRva2VuIGRvZXNudCBleGlzdFxyXG4gICAgaWYgKCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggVE9LRU4gKSA9PT0gbnVsbCApIHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSAnL2xvZ2luJztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICBwaWNrZXIuc2V0RGF0ZSggdG9kYXkgKTtcclxuXHJcbiAgICAvLyBjb25zdHJ1Y3QgaG91cnMgYW5kIG1pbiBvcHRpb25zXHJcbiAgICBjb25zdCBzZWxlY3RTdGFydFRpbWVIb3VycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc2VsZWN0U3RhcnRUaW1lSG91cnMnICk7XHJcbiAgICBjb25zdCBzZWxlY3RFbmRUaW1lSG91cnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3NlbGVjdEVuZFRpbWVIb3VycycgKTtcclxuICAgIGZvciAoIGxldCBpID0gMDsgaSA8IDI0OyBpICs9IDEgKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbiA9ICcnO1xyXG4gICAgICAgIGlmICggaSA9PT0gMCApIHtcclxuICAgICAgICAgICAgb3B0aW9uID0gJzxvcHRpb24gdmFsdWU9XCIwXCIgc2VsZWN0ZWQ+MDwvb3B0aW9uPic7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb3B0aW9uID0gYDxvcHRpb24gdmFsdWU9XCIke2l9XCI+JHtpfTwvb3B0aW9uPmA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGVjdFN0YXJ0VGltZUhvdXJzLmlubmVySFRNTCArPSBvcHRpb247XHJcbiAgICAgICAgc2VsZWN0RW5kVGltZUhvdXJzLmlubmVySFRNTCArPSBvcHRpb247XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0U3RhcnRUaW1lTWlucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc2VsZWN0U3RhcnRUaW1lTWlucycgKTtcclxuICAgIGNvbnN0IHNlbGVjdEVuZFRpbWVNaW5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzZWxlY3RFbmRUaW1lTWlucycgKTtcclxuICAgIGZvciAoIGxldCBpID0gMDsgaSA8IDYwOyBpICs9IDEgKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbiA9ICcnO1xyXG4gICAgICAgIGlmICggaSA9PT0gMCApIHtcclxuICAgICAgICAgICAgb3B0aW9uID0gJzxvcHRpb24gdmFsdWU9XCIwXCIgc2VsZWN0ZWQ+MDwvb3B0aW9uPic7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb3B0aW9uID0gYDxvcHRpb24gdmFsdWU9XCIke2l9XCI+JHtpfTwvb3B0aW9uPmA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGVjdFN0YXJ0VGltZU1pbnMuaW5uZXJIVE1MICs9IG9wdGlvbjtcclxuICAgICAgICBzZWxlY3RFbmRUaW1lTWlucy5pbm5lckhUTUwgKz0gb3B0aW9uO1xyXG4gICAgfVxyXG59XHJcblxyXG5pbml0QWRkTWVldGluZygpO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBBUElfQkFTRV9VUkwgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBnZXRUb2tlbiB9IGZyb20gJy4vYXV0aCc7XHJcbmltcG9ydCAnY29yZS1qcy9zdGFibGUnO1xyXG5pbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZSc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaE1lZXRpbmdzKCBkYXRlICkge1xyXG4gICAgbGV0IGRhdGVTdHJpbmcgPSAnJztcclxuICAgIGlmICggZGF0ZSBpbnN0YW5jZW9mIERhdGUgKSB7XHJcbiAgICAgICAgZGF0ZVN0cmluZyA9IGAke2RhdGUuZ2V0RnVsbFllYXIoKX0tJHtkYXRlLmdldE1vbnRoKCkgKyAxfS0ke2RhdGUuZ2V0RGF0ZSgpfWA7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICBgJHtBUElfQkFTRV9VUkx9L2NhbGVuZGFyP2RhdGU9JHtkYXRlU3RyaW5nfWAsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgJHtnZXRUb2tlbigpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNlYXJjaE1lZXRpbmdzKCBzZWxlY3RlZERhdGVPcHRpb24sIHNlYXJjaFRleHQgPSAnJyApIHtcclxuICAgIGxldCB1cmwgPSBgJHtBUElfQkFTRV9VUkx9L21lZXRpbmdzLz9wZXJpb2Q9JHtzZWxlY3RlZERhdGVPcHRpb259YDtcclxuICAgIGlmICggc2VhcmNoVGV4dCAhPT0gJycgKSB7XHJcbiAgICAgICAgdXJsICs9ICcmc2VhcmNoPSc7XHJcbiAgICAgICAgdXJsICs9ICggc2VhcmNoVGV4dC5zcGxpdCggJyAnICkgKS5qb2luKCAnJTIwJyApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgIHVybCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke2dldFRva2VuKCl9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gYWRkQXR0ZW5kZWVUb01lZXRpbmcoIG1lZXRpbmcsIGVtYWlsICkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wYXRjaChcclxuICAgICAgICBgJHtBUElfQkFTRV9VUkx9L21lZXRpbmdzLyR7bWVldGluZ1snX2lkJ119P2FjdGlvbj1hZGRfYXR0ZW5kZWUmZW1haWw9JHtlbWFpbH1gLFxyXG4gICAgICAgIHt9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7Z2V0VG9rZW4oKX1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBleGN1c2VGcm9tTWVldGluZyggbWVldGluZyApIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucGF0Y2goXHJcbiAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS9tZWV0aW5ncy8ke21lZXRpbmdbJ19pZCddfT9hY3Rpb249cmVtb3ZlX2F0dGVuZGVlYCxcclxuICAgICAgICB7fSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke2dldFRva2VuKCl9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gYWRkTWVldGluZyggc3VibWl0SlNPTiApIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBgJHtBUElfQkFTRV9VUkx9L21lZXRpbmdzL2AsXHJcbiAgICAgICAgc3VibWl0SlNPTixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke2dldFRva2VuKCl9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufVxyXG5cclxuLy8gYXN5bmMgZnVuY3Rpb24gZmV0Y2hNZWV0aW5nQnlJZCggaWQgKSB7XHJcbi8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcclxuLy8gICAgICAgICBgJHtBUElfQkFTRV9VUkx9L3dvcmtzaG9wcy8ke2lkfWAsXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbi8vICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Z2V0VG9rZW4oKX1gLFxyXG4vLyAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICApO1xyXG5cclxuLy8gICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4vLyB9XHJcblxyXG4vLyBhc3luYyBmdW5jdGlvbiBkZWxldGVNZWV0aW5nQnlJZCggaWQgKSB7XHJcbi8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmRlbGV0ZShcclxuLy8gICAgICAgICBgJHtBUElfQkFTRV9VUkx9L3dvcmtzaG9wcy8ke2lkfWAsXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbi8vICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Z2V0VG9rZW4oKX1gLFxyXG4vLyAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICApO1xyXG5cclxuLy8gICAgIHJldHVybiByZXNwb25zZTtcclxuLy8gfVxyXG5cclxuZXhwb3J0IHtcclxuICAgIGZldGNoTWVldGluZ3MsXHJcbiAgICBzZWFyY2hNZWV0aW5ncyxcclxuICAgIGFkZEF0dGVuZGVlVG9NZWV0aW5nLFxyXG4gICAgZXhjdXNlRnJvbU1lZXRpbmcsXHJcbiAgICBhZGRNZWV0aW5nLFxyXG59O1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBBUElfQkFTRV9VUkwgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBnZXRUb2tlbiB9IGZyb20gJy4vYXV0aCc7XHJcbmltcG9ydCAnY29yZS1qcy9zdGFibGUnO1xyXG5pbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZSc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaFRlYW1zKCkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS90ZWFtc2AsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgJHtnZXRUb2tlbigpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGFkZFRlYW0oIHRlYW1KU09OICkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIGAke0FQSV9CQVNFX1VSTH0vdGVhbXMvYCxcclxuICAgICAgICB0ZWFtSlNPTixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke2dldFRva2VuKCl9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gYWRkTWVtYmVyVG9UZWFtKCB0ZWFtLCBlbWFpbCApIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucGF0Y2goXHJcbiAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS90ZWFtcy8ke3RlYW1bJ19pZCddfT9hY3Rpb249YWRkX21lbWJlciZlbWFpbD0ke2VtYWlsfWAsXHJcbiAgICAgICAge30sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgJHtnZXRUb2tlbigpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGV4Y3VzZUZyb21UZWFtKCB0ZWFtICkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wYXRjaChcclxuICAgICAgICBgJHtBUElfQkFTRV9VUkx9L3RlYW1zLyR7dGVhbVsnX2lkJ119P2FjdGlvbj1yZW1vdmVfbWVtYmVyYCxcclxuICAgICAgICB7fSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke2dldFRva2VuKCl9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIGZldGNoVGVhbXMsXHJcbiAgICBhZGRUZWFtLFxyXG4gICAgYWRkTWVtYmVyVG9UZWFtLFxyXG4gICAgZXhjdXNlRnJvbVRlYW0sXHJcbn07XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEFQSV9CQVNFX1VSTCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGdldFRva2VuIH0gZnJvbSAnLi9hdXRoJztcclxuXHJcbmltcG9ydCAnY29yZS1qcy9zdGFibGUnO1xyXG5pbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZSc7XHJcblxyXG4vKipcclxuICogR2V0IHRoZSBsaXN0IG9mIGFsbCByZWdpc3RlcmVkIHVzZXJzLlxyXG4gKiBAcmV0dXJucyBsaXN0IG9mIGFsbCB1c2Vyc1xyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gZ2V0QWxsVXNlcnMoKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICBgJHtBUElfQkFTRV9VUkx9L3VzZXJzYCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke2dldFRva2VuKCl9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0QWxsVXNlcnM7XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBociB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHRleHRhcmVhIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcHVibGljL2Nzcy9hZGRfbWVldGluZy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1Qsd0NBQXdDO0VBQzFDOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsY0FBYztFQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgfVxcclxcblxcclxcbiAgdGV4dGFyZWEge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuaHIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5jYXJkLXRvb2xiYXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm5hdi1waWxscy1jdXN0b20ge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGNvbG9yOiAjN2U4Mjk5O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMC4zcmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4zcmVtO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYtcGlsbHMtY3VzdG9tOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjhmYTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC10ZXh0LWN1c3RvbSB7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAwLjhyZW07XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcHVibGljL2Nzcy9zZWFyY2hfbWVldGluZ3MuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsU0FBUztJQUNULHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGNBQWM7QUFDbEI7OztBQUdBO0lBQ0ksc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCOzs7QUFHQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbmhyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY2FyZC10b29sYmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5uYXYtcGlsbHMtY3VzdG9tIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBjb2xvcjogIzdlODI5OTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDAuM3JlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDAuM3JlbTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXBpbGxzLWN1c3RvbTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY4ZmE7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtdGV4dC1jdXN0b20ge1xcclxcbiAgICBsaW5lLWhlaWdodDogMC44cmVtO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYWRkX21lZXRpbmcuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hZGRfbWVldGluZy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2VhcmNoX21lZXRpbmdzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2VhcmNoX21lZXRpbmdzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcInNlYXJjaF9tZWV0aW5nc1wiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua21lZXRpbmdzXCJdID0gc2VsZltcIndlYnBhY2tDaHVua21lZXRpbmdzXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19heGlvc19pbmRleF9qcy1ub2RlX21vZHVsZXNfY29yZS1qc19zdGFibGVfaW5kZXhfanMtbm9kZV9tb2R1bGVzX3JlZ2VuZXItMTU3NDA2XCIsXCJwdWJsaWNfanNfY3VzdG9tc19hcHBfanMtcHVibGljX2pzX3NlcnZpY2VzX2F1dGhfanMtcHVibGljX2Nzc19tYWluX2Nzcy1kYXRhX2ltYWdlX3N2Z194bWxfM2MtNGVhMmExXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vcHVibGljL2pzL3NlYXJjaF9tZWV0aW5ncy5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==