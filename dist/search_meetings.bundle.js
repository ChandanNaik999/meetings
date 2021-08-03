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
  var description = document.getElementById('textareaMeetingDescription').value.trim();
  var selectedDate = picker.getDate();
  var date = "".concat(selectedDate.getFullYear(), "-").concat(selectedDate.getMonth() + 1, "-").concat(selectedDate.getDate());
  var selectStartTimeHours = parseInt(document.getElementById('selectStartTimeHours').value, 10);
  var selectEndTimeHours = parseInt(document.getElementById('selectEndTimeHours').value, 10);
  var selectStartTimeMins = parseInt(document.getElementById('selectStartTimeMins').value, 10);
  var selectEndTimeMins = parseInt(document.getElementById('selectEndTimeMins').value, 10);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vbWVldGluZ3MvLi9wdWJsaWMvanMvZGF0YS9hZGRfbWVldGluZ19mb3JtLmpzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2pzL3NlYXJjaF9tZWV0aW5ncy5qcyIsIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9qcy9zZXJ2aWNlcy9tZWV0aW5ncy5qcyIsIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9qcy9zZXJ2aWNlcy90ZWFtcy5qcyIsIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9qcy9zZXJ2aWNlcy91c2VyX21hbmFnZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbWVldGluZ3MvLi9wdWJsaWMvY3NzL2FkZF9tZWV0aW5nLmNzcyIsIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9jc3Mvc2VhcmNoX21lZXRpbmdzLmNzcyIsIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9jc3MvYWRkX21lZXRpbmcuY3NzPzA5YzkiLCJ3ZWJwYWNrOi8vbWVldGluZ3MvLi9wdWJsaWMvY3NzL3NlYXJjaF9tZWV0aW5ncy5jc3M/OWEwYSIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWVldGluZ3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsic2V0TmF2YmFyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIlRPS0VOIiwid2luZG93IiwibG9jYXRpb24iLCJwcm9maWxlSW1hZ2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2V0QXR0cmlidXRlIiwiQVBJX0JBU0VfVVJMIiwiSUQiLCJOQU1FIiwic3BsaXQiLCJmaXJzdE5hbWUiLCJpbm5lckhUTUwiLCJzaG93Qm9keU9uTG9hZCIsImJvZHkiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJBRERfTUVFVElOR19GT1JNIiwic2VhcmNoRGF0ZSIsInJlc2V0TmF2Iiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZvcm1hdFRpbWUiLCJob3VycyIsIm1pbnV0ZXMiLCJyZXN1bHQiLCJwb3B1bGF0ZU1lZXRpbmdzTGlzdCIsIm1lZXRpbmdzIiwidXNlcnMiLCJtZWV0aW5nc0xpc3REaXYiLCJsZW5ndGgiLCJtZWV0aW5nc0xpc3RUaXRsZSIsImRpc3BsYXkiLCJmb3JFYWNoIiwibWVldGluZyIsImF0dGVuZGVlcyIsImF0dGVuZGVlIiwicHVzaCIsImNhcmQiLCJjcmVhdGVFbGVtZW50IiwiY2FyZEJvZHkiLCJjYXJkTWVldGluZ05hbWVEaXYiLCJjYXJkTWVldGluZ05hbWUiLCJjYXJkTWVldGluZ1RpbWUiLCJkYXRlIiwiRGF0ZSIsInN0YXJ0VGltZSIsImVuZFRpbWUiLCJ0b0RhdGVTdHJpbmciLCJhcHBlbmRDaGlsZCIsImNhcmRUZXh0IiwiYnV0dG9uRXhjdXNlIiwiZXhjdXNlRnJvbU1lZXRpbmciLCJ0aGVuIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwiU1VDQ0VTUyIsImFkZFRvYXN0IiwiRVJST1IiLCJlcnJvciIsImRhdGEiLCJkZXNjcmlwdGlvbiIsImhyIiwibWVldGluZ0F0dGVuZGVlcyIsImpvaW4iLCJzZWxlY3RNZW1iZXJEaXYiLCJjb2xTZWxlY3RNZW1iZXIiLCJsYWJlbFNlbGVjdE1lbWJlciIsInNlbGVjdE1lbWJlciIsIm5vbk1lbWJlcnMiLCJ1c2VyIiwiaW5jbHVkZXMiLCJub25NZW1iZXIiLCJjb2xTZWxlY3RNZW1iZXIyIiwiY29sU2VsZWN0QnV0dG9uIiwidmFsdWUiLCJhZGRBdHRlbmRlZVRvTWVldGluZyIsInNlbGVjdGVkRGF0ZU9wdGlvbiIsInNlYXJjaFRleHQiLCJ0cmltIiwic2VhcmNoTWVldGluZ3MiLCJnZXRBbGxVc2VycyIsImluaXQiLCJwaWNrZXIiLCJQaWthZGF5IiwiZmllbGQiLCJ0b1N0cmluZyIsImRheSIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwidmFsaWRhdGVFbWFpbCIsImVtYWlsIiwicmUiLCJ0ZXN0IiwiU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJ2YWxpZGF0ZVRlYW0iLCJ0ZWFtIiwiYXR0ZW5kZWVUeXBlIiwidHlwZSIsInJlc2V0Rm9ybSIsIm15TW9kYWwiLCJib290c3RyYXAiLCJNb2RhbCIsInNob3ciLCJoaWRlIiwic3VibWl0SlNPTiIsIm1lZXRpbmdOYW1lIiwic2VsZWN0ZWREYXRlIiwic2VsZWN0U3RhcnRUaW1lSG91cnMiLCJwYXJzZUludCIsInNlbGVjdEVuZFRpbWVIb3VycyIsInNlbGVjdFN0YXJ0VGltZU1pbnMiLCJzZWxlY3RFbmRUaW1lTWlucyIsInJlcGxhY2UiLCJhdHRlbmRlZXNKU09OIiwiYXR0ZW5kZWVzTGVuZ3RoIiwiZmV0Y2hUZWFtcyIsInRlYW1zIiwiaWR4QXR0IiwiaWR4IiwidXNlcklkIiwidGVhbU1lbWJlckVtYWlscyIsIm1hcCIsIngiLCJtZW1iZXIiLCJhZGRNZWV0aW5nIiwiaW5pdEFkZE1lZXRpbmciLCJ0b2RheSIsInNldERhdGUiLCJpIiwib3B0aW9uIiwiZmV0Y2hNZWV0aW5ncyIsImRhdGVTdHJpbmciLCJheGlvcyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZ2V0VG9rZW4iLCJ1cmwiLCJhZGRUZWFtIiwidGVhbUpTT04iLCJhZGRNZW1iZXJUb1RlYW0iLCJleGN1c2VGcm9tVGVhbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsU0FBVCxHQUFxQjtBQUNqQixNQUFLQyxZQUFZLENBQUNDLE9BQWIsQ0FBc0JDLDZDQUF0QixNQUFrQyxJQUF2QyxFQUE4QztBQUMxQ0MsVUFBTSxDQUFDQyxRQUFQLEdBQWtCLFFBQWxCO0FBQ0g7O0FBRUQsTUFBTUMsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBeUIsUUFBekIsQ0FBckI7QUFDQUYsY0FBWSxDQUFDRyxZQUFiLENBQTJCLEtBQTNCLFlBQXFDQyxvREFBckMsY0FBcURULFlBQVksQ0FBQ0MsT0FBYixDQUFzQlMsMENBQXRCLENBQXJEOztBQUVBLDhCQUFvQlYsWUFBWSxDQUFDQyxPQUFiLENBQXNCVSw0Q0FBdEIsRUFBNkJDLEtBQTdCLENBQW9DLEdBQXBDLENBQXBCO0FBQUE7QUFBQSxNQUFPQyxTQUFQOztBQUNBUCxVQUFRLENBQUNDLGNBQVQsQ0FBeUIsU0FBekIsRUFBcUNPLFNBQXJDLEdBQWlERCxTQUFqRDtBQUNIOztBQUVELFNBQVNFLGNBQVQsR0FBMEI7QUFDdEJULFVBQVEsQ0FBQ1UsSUFBVCxDQUFjQyxTQUFkLENBQXdCQyxNQUF4QixDQUFnQyxNQUFoQztBQUNIOztBQUNESCxjQUFjO0FBQ2RoQixTQUFTLEc7Ozs7Ozs7Ozs7Ozs7O0FDbEJUO0FBQ0EsSUFBTW9CLGdCQUFnQixHQUFHO0FBQ3JCLFVBQVEsMkJBRGE7QUFFckIsaUJBQWUseUVBRk07QUFHckIsVUFBUSxZQUhhO0FBSXJCLGVBQWE7QUFDVCxhQUFTLENBREE7QUFFVCxlQUFXO0FBRkYsR0FKUTtBQVFyQixhQUFXO0FBQ1AsYUFBUyxFQURGO0FBRVAsZUFBVztB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cUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEU7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQSxDQUFDLEk7Ozs7O1dDUEQsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxvQkFBb0I7V0FDMUI7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsNEc7Ozs7O1VDOUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoic2VhcmNoX21lZXRpbmdzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQSV9CQVNFX1VSTCwgSUQsIE5BTUUsIFRPS0VOIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuZnVuY3Rpb24gc2V0TmF2YmFyKCkge1xyXG4gICAgaWYgKCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggVE9LRU4gKSA9PT0gbnVsbCApIHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSAnL2xvZ2luJztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcm9maWxlSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ25hdlBpYycgKTtcclxuICAgIHByb2ZpbGVJbWFnZS5zZXRBdHRyaWJ1dGUoICdzcmMnLCBgJHtBUElfQkFTRV9VUkx9LyR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oIElEICl9LnBuZ2AgKTtcclxuXHJcbiAgICBjb25zdCBbZmlyc3ROYW1lXSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCBOQU1FICkuc3BsaXQoICcgJyApO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICduYW1lTmF2JyApLmlubmVySFRNTCA9IGZpcnN0TmFtZTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0JvZHlPbkxvYWQoKSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoICdoaWRlJyApO1xyXG59XHJcbnNob3dCb2R5T25Mb2FkKCk7XHJcbnNldE5hdmJhcigpO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG5jb25zdCBBRERfTUVFVElOR19GT1JNID0ge1xyXG4gICAgXCJuYW1lXCI6IFwiR29vZ2xlIG1hcmtldGluZyBjYW1wYWlnblwiLFxyXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkluY3JlYXNpbmcgYnJhbmQgYXdhcmVuZXNzIGFuZCBzcHJlYWRpbmcgaW5mb3JtYXRpb24gYWJvdXQgbmV3IHByb2R1Y3RzXCIsXHJcbiAgICBcImRhdGVcIjogXCIyMDIwLTEwLTI4XCIsXHJcbiAgICBcInN0YXJ0VGltZVwiOiB7XHJcbiAgICAgICAgXCJob3Vyc1wiOiA5LFxyXG4gICAgICAgIFwibWludXRlc1wiOiAwXHJcbiAgICB9LFxyXG4gICAgXCJlbmRUaW1lXCI6IHtcclxuICAgICAgICBcImhvdXJzXCI6IDEwLFxyXG4gICAgICAgIFwibWludXRlc1wiOiAzMFxyXG4gICAgfSxcclxuICAgIFwiYXR0ZW5kZWVzXCI6IFtdXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQUREX01FRVRJTkdfRk9STTsiLCJpbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcbmltcG9ydCAnLi4vY3NzL21haW4uY3NzJztcclxuaW1wb3J0ICcuLi9jc3MvYWRkX21lZXRpbmcuY3NzJztcclxuaW1wb3J0ICcuLi9jc3Mvc2VhcmNoX21lZXRpbmdzLmNzcyc7XHJcbmltcG9ydCBhZGRUb2FzdCBmcm9tICcuL2N1c3RvbXMvYXBwJztcclxuaW1wb3J0ICcuL2FwcCc7XHJcbmltcG9ydCB7IGFkZEF0dGVuZGVlVG9NZWV0aW5nLCBzZWFyY2hNZWV0aW5ncywgZXhjdXNlRnJvbU1lZXRpbmcsIGFkZE1lZXRpbmcgfSBmcm9tICcuL3NlcnZpY2VzL21lZXRpbmdzJztcclxuaW1wb3J0IGdldEFsbFVzZXJzIGZyb20gJy4vc2VydmljZXMvdXNlcl9tYW5hZ2VtZW50JztcclxuaW1wb3J0IHsgVE9LRU4sIFNVQ0NFU1MsIEVSUk9SIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBmZXRjaFRlYW1zIH0gZnJvbSAnLi9zZXJ2aWNlcy90ZWFtcyc7XHJcbmltcG9ydCBBRERfTUVFVElOR19GT1JNIGZyb20gJy4vZGF0YS9hZGRfbWVldGluZ19mb3JtJztcclxuXHJcbmxldCBzZWFyY2hEYXRlID0gJ3RvZGF5JztcclxuXHJcbmZ1bmN0aW9uIHJlc2V0TmF2KCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdwYXN0QnV0dG9uJyApLnN0eWxlLmJhY2tncm91bmQgPSAnI2ZmZic7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3ByZXNlbnRCdXR0b24nICkuc3R5bGUuYmFja2dyb3VuZCA9ICcjZmZmJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAndXBjb21pbmdCdXR0b24nICkuc3R5bGUuYmFja2dyb3VuZCA9ICcjZmZmJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnYWxsQnV0dG9uJyApLnN0eWxlLmJhY2tncm91bmQgPSAnI2ZmZic7XHJcbn1cclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAncGFzdEJ1dHRvbicgKS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoICkgPT4ge1xyXG4gICAgcmVzZXROYXYoKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAncGFzdEJ1dHRvbicgKS5zdHlsZS5iYWNrZ3JvdW5kID0gJyNmNWY4ZmEnO1xyXG4gICAgc2VhcmNoRGF0ZSA9ICdwYXN0JztcclxufSApO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdwcmVzZW50QnV0dG9uJyApLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICggKSA9PiB7XHJcbiAgICByZXNldE5hdigpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdwcmVzZW50QnV0dG9uJyApLnN0eWxlLmJhY2tncm91bmQgPSAnI2Y1ZjhmYSc7XHJcbiAgICBzZWFyY2hEYXRlID0gJ3ByZXNlbnQnO1xyXG59ICk7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2FsbEJ1dHRvbicgKS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoICkgPT4ge1xyXG4gICAgcmVzZXROYXYoKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnYWxsQnV0dG9uJyApLnN0eWxlLmJhY2tncm91bmQgPSAnI2Y1ZjhmYSc7XHJcbiAgICBzZWFyY2hEYXRlID0gJ2FsbCc7XHJcbn0gKTtcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAndXBjb21pbmdCdXR0b24nICkuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCApID0+IHtcclxuICAgIHJlc2V0TmF2KCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3VwY29taW5nQnV0dG9uJyApLnN0eWxlLmJhY2tncm91bmQgPSAnI2Y1ZjhmYSc7XHJcbiAgICBzZWFyY2hEYXRlID0gJ3VwY29taW5nJztcclxufSApO1xyXG5cclxuZnVuY3Rpb24gZm9ybWF0VGltZSggaG91cnMsIG1pbnV0ZXMgKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gJyc7XHJcbiAgICBpZiAoIGhvdXJzIDwgMTAgKSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IGAwJHtob3Vyc31gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXN1bHQgKz0gaG91cnM7XHJcbiAgICB9XHJcbiAgICByZXN1bHQgKz0gJzonO1xyXG4gICAgaWYgKCBtaW51dGVzIDwgMTAgKSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IGAwJHttaW51dGVzfWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlc3VsdCArPSBtaW51dGVzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gcG9wdWxhdGVNZWV0aW5nc0xpc3QoIG1lZXRpbmdzLCB1c2VycyApIHtcclxuICAgIGNvbnN0IG1lZXRpbmdzTGlzdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc2VhcmNoTWVldGluZ3NMaXN0JyApO1xyXG4gICAgbWVldGluZ3NMaXN0RGl2LmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgIGlmICggbWVldGluZ3MgJiYgbWVldGluZ3MubGVuZ3RoID4gMCApIHtcclxuICAgICAgICBjb25zdCBtZWV0aW5nc0xpc3RUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnbWVldGluZ3NMaXN0VGl0bGUnICk7XHJcbiAgICAgICAgbWVldGluZ3NMaXN0VGl0bGUuaW5uZXJIVE1MID0gJ01lZXRpbmdzIG1hdGNoaW5nIHNlYXJjaCBjcml0ZXJpYSc7XHJcbiAgICAgICAgbWVldGluZ3NMaXN0VGl0bGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbiAgICAgICAgbWVldGluZ3MuZm9yRWFjaCggKCBtZWV0aW5nICkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBhdHRlbmRlZXMgPSBbXTtcclxuICAgICAgICAgICAgbWVldGluZ1snYXR0ZW5kZWVzJ10uZm9yRWFjaCggKCBhdHRlbmRlZSApID0+IHtcclxuICAgICAgICAgICAgICAgIGF0dGVuZGVlcy5wdXNoKCBhdHRlbmRlZVsnZW1haWwnXSApO1xyXG4gICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICAvLyBjcmVhdGUgbWVldGluZyBjYXJkIGFuZCBhdHRhY2ggaXQgdG8gdGhlIHJlc3BlY3RpdmUgcGFyZW50XHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG4gICAgICAgICAgICBjYXJkLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2NhcmQgcC0zIG1iLTMnICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjYXJkQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XHJcbiAgICAgICAgICAgIGNhcmRCb2R5LnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2NhcmQtYm9keScgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmRNZWV0aW5nTmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XHJcbiAgICAgICAgICAgIGNhcmRNZWV0aW5nTmFtZURpdi5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdyb3cnICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjYXJkTWVldGluZ05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnaDQnICk7XHJcbiAgICAgICAgICAgIGNhcmRNZWV0aW5nTmFtZS5zZXRBdHRyaWJ1dGUoICdpZCcsICdjYXJkLW1lZXRpbmctbmFtZScgKTtcclxuICAgICAgICAgICAgY2FyZE1lZXRpbmdOYW1lLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2NvbC1hdXRvIG1lLWF1dG8gY2FyZC1tZWV0aW5nLW5hbWUnICk7XHJcbiAgICAgICAgICAgIGNhcmRNZWV0aW5nTmFtZS5pbm5lckhUTUwgPSBtZWV0aW5nWyduYW1lJ107XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjYXJkTWVldGluZ1RpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnaDUnICk7XHJcbiAgICAgICAgICAgIGNhcmRNZWV0aW5nVGltZS5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdjb2wtYXV0byBjYXJkLW1lZXRpbmctbmFtZScgKTtcclxuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCBtZWV0aW5nWydkYXRlJ10gKTtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gZm9ybWF0VGltZSggbWVldGluZ1snc3RhcnRUaW1lJ11bJ2hvdXJzJ10sIG1lZXRpbmdbJ3N0YXJ0VGltZSddWydtaW51dGVzJ10gKTtcclxuICAgICAgICAgICAgY29uc3QgZW5kVGltZSA9IGZvcm1hdFRpbWUoIG1lZXRpbmdbJ2VuZFRpbWUnXVsnaG91cnMnXSwgbWVldGluZ1snZW5kVGltZSddWydtaW51dGVzJ10gKTtcclxuICAgICAgICAgICAgY2FyZE1lZXRpbmdUaW1lLmlubmVySFRNTCA9IGAke2RhdGUudG9EYXRlU3RyaW5nKCl9LCAke3N0YXJ0VGltZX0tJHtlbmRUaW1lfWA7XHJcblxyXG4gICAgICAgICAgICBjYXJkTWVldGluZ05hbWVEaXYuYXBwZW5kQ2hpbGQoIGNhcmRNZWV0aW5nTmFtZSApO1xyXG4gICAgICAgICAgICBjYXJkTWVldGluZ05hbWVEaXYuYXBwZW5kQ2hpbGQoIGNhcmRNZWV0aW5nVGltZSApO1xyXG4gICAgICAgICAgICAvLyBjYXJkTWVldGluZ0Rpdi5hcHBlbmRDaGlsZCggY2FyZE1lZXRpbmdOYW1lRGl2ICk7XHJcblxyXG4gICAgICAgICAgICBjYXJkQm9keS5hcHBlbmRDaGlsZCggY2FyZE1lZXRpbmdOYW1lRGl2ICk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3AnICk7XHJcbiAgICAgICAgICAgIGNhcmRUZXh0LmlubmVySFRNTCA9IG1lZXRpbmdbJ2Rlc2NyaXB0aW9uJ107XHJcbiAgICAgICAgICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKCBjYXJkVGV4dCApO1xyXG4gICAgICAgICAgICBjb25zdCBidXR0b25FeGN1c2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnYnV0dG9uJyApO1xyXG4gICAgICAgICAgICBidXR0b25FeGN1c2UuaW5uZXJIVE1MID0gJ0xlYXZlIG1lZXRpbmcnO1xyXG4gICAgICAgICAgICBidXR0b25FeGN1c2Uuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAnYnV0dG9uLW91dGxpbmUtcmVkIHB4LTQnICk7XHJcbiAgICAgICAgICAgIGJ1dHRvbkV4Y3VzZS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBleGN1c2VGcm9tTWVldGluZyggbWVldGluZyApXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oICggcmVzcG9uc2UgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggcmVzcG9uc2UubWVzc2FnZSA9PT0gU1VDQ0VTUyApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCAnWW91IGhhdmUgYmVlbiByZW1vdmVkIGZyb20gdGhlIHRlYW0nLCBkb2N1bWVudC5ib2R5LCBTVUNDRVNTICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciByZW1vdmluZzogJHtyZXNwb25zZS5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goICggZXJyb3IgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIHJlbW92aW5nOiAke2Vycm9yLnJlc3BvbnNlLmRhdGEuZGVzY3JpcHRpb259YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIHJlbW92aW5nOiAke2Vycm9yLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICBjYXJkQm9keS5hcHBlbmRDaGlsZCggYnV0dG9uRXhjdXNlICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBociA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdocicgKTtcclxuICAgICAgICAgICAgaHIuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAnbXktMycgKTtcclxuICAgICAgICAgICAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQoIGhyICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtZWV0aW5nQXR0ZW5kZWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3AnICk7XHJcbiAgICAgICAgICAgIG1lZXRpbmdBdHRlbmRlZXMuaW5uZXJIVE1MID0gYDxzdHJvbmc+QXR0ZW5kZWVzOiA8L3N0cm9uZz4gJHthdHRlbmRlZXMuam9pbiggJywgJyApfWA7XHJcbiAgICAgICAgICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKCBtZWV0aW5nQXR0ZW5kZWVzICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RNZW1iZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG4gICAgICAgICAgICBzZWxlY3RNZW1iZXJEaXYuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAncm93IGd5LTIgZ3gtMyBhbGlnbi1pdGVtcy1jZW50ZXInICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb2xTZWxlY3RNZW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG4gICAgICAgICAgICBjb2xTZWxlY3RNZW1iZXIuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAnY29sLWF1dG8nICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBsYWJlbFNlbGVjdE1lbWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdsYWJlbCcgKTtcclxuICAgICAgICAgICAgbGFiZWxTZWxlY3RNZW1iZXIuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAndmlzdWFsbHktaGlkZGVuJyApO1xyXG4gICAgICAgICAgICBsYWJlbFNlbGVjdE1lbWJlci5zZXRBdHRyaWJ1dGUoICdmb3InLCAnc2VsZWN0TWVtYmVyJyApO1xyXG4gICAgICAgICAgICBjb2xTZWxlY3RNZW1iZXIuYXBwZW5kQ2hpbGQoIGxhYmVsU2VsZWN0TWVtYmVyICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RNZW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnc2VsZWN0JyApO1xyXG4gICAgICAgICAgICBzZWxlY3RNZW1iZXIuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAnZm9ybS1zZWxlY3QnICk7XHJcbiAgICAgICAgICAgIHNlbGVjdE1lbWJlci5zZXRBdHRyaWJ1dGUoICdpZCcsICdzZWxlY3RNZW1iZXInICk7XHJcbiAgICAgICAgICAgIHNlbGVjdE1lbWJlci5zZXRBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJywgJ1NlbGVjdCBNZW1iZXInICk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vbk1lbWJlcnMgPSBbXTtcclxuICAgICAgICAgICAgdXNlcnMuZm9yRWFjaCggKCB1c2VyICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBhdHRlbmRlZXMuaW5jbHVkZXMoIHVzZXJbJ2VtYWlsJ10gKSA9PT0gZmFsc2UgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9uTWVtYmVycy5wdXNoKCB1c2VyICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdE1lbWJlci5pbm5lckhUTUwgPSAnPG9wdGlvbiB2YWx1ZT1cIm5vbmVcIiBzZWxlY3RlZD5TZWxlY3QgbWVtYmVyPC9vcHRpb24+JztcclxuICAgICAgICAgICAgbm9uTWVtYmVycy5mb3JFYWNoKCAoIG5vbk1lbWJlciApID0+IHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdE1lbWJlci5pbm5lckhUTUwgKz0gYDxvcHRpb24gdmFsdWU9XCIke25vbk1lbWJlclsnZW1haWwnXX1cIj4ke25vbk1lbWJlclsnZW1haWwnXX08L29wdGlvbj5gO1xyXG4gICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgIGNvbFNlbGVjdE1lbWJlci5hcHBlbmRDaGlsZCggc2VsZWN0TWVtYmVyICk7XHJcblxyXG4gICAgICAgICAgICBzZWxlY3RNZW1iZXJEaXYuYXBwZW5kQ2hpbGQoIGNvbFNlbGVjdE1lbWJlciApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY29sU2VsZWN0TWVtYmVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XHJcbiAgICAgICAgICAgIGNvbFNlbGVjdE1lbWJlcjIuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAnY29sLWF1dG8nICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb2xTZWxlY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnYnV0dG9uJyApO1xyXG4gICAgICAgICAgICBjb2xTZWxlY3RCdXR0b24uc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAnYnV0dG9uIG14LTInICk7XHJcbiAgICAgICAgICAgIGNvbFNlbGVjdEJ1dHRvbi5pbm5lckhUTUwgPSAnQWRkJztcclxuICAgICAgICAgICAgY29sU2VsZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICggc2VsZWN0TWVtYmVyLnZhbHVlICE9PSAnbm9uZScgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkQXR0ZW5kZWVUb01lZXRpbmcoIG1lZXRpbmcsIHNlbGVjdE1lbWJlci52YWx1ZSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCAoIHJlc3BvbnNlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCByZXNwb25zZS5tZXNzYWdlID09PSBTVUNDRVNTICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVuZGVlcy5wdXNoKCBzZWxlY3RNZW1iZXIudmFsdWUgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWV0aW5nQXR0ZW5kZWVzLmlubmVySFRNTCA9IGA8c3Ryb25nPkF0dGVuZGVlczogPC9zdHJvbmc+ICR7YXR0ZW5kZWVzLmpvaW4oICcsICcgKX1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCAnQXR0ZW5kZWUgaGFzIGJlZW4gYWRkZWQgdG8gdGhlIG1lZXRpbmcnLCBkb2N1bWVudC5ib2R5LCBTVUNDRVNTICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgYWRkaW5nIGF0dGVuZGVlOiAke3Jlc3BvbnNlLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCggKCBlcnJvciApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBhZGRpbmcgYXR0ZW5kZWU6ICR7ZXJyb3IucmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbn1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBhZGRpbmcgYXR0ZW5kZWU6ICR7ZXJyb3IubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgY29sU2VsZWN0TWVtYmVyMi5hcHBlbmRDaGlsZCggY29sU2VsZWN0QnV0dG9uICk7XHJcblxyXG4gICAgICAgICAgICBzZWxlY3RNZW1iZXJEaXYuYXBwZW5kQ2hpbGQoIGNvbFNlbGVjdE1lbWJlcjIgKTtcclxuICAgICAgICAgICAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQoIHNlbGVjdE1lbWJlckRpdiApO1xyXG4gICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKCBjYXJkQm9keSApO1xyXG4gICAgICAgICAgICBtZWV0aW5nc0xpc3REaXYuYXBwZW5kQ2hpbGQoIGNhcmQgKTtcclxuICAgICAgICB9ICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IG1lZXRpbmdzTGlzdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdtZWV0aW5nc0xpc3RUaXRsZScgKTtcclxuICAgICAgICBtZWV0aW5nc0xpc3RUaXRsZS5pbm5lckhUTUwgPSAnTm8gbWVldGluZ3MgZm91bmQgd2l0aCBnaXZlbiBzZWFyY2ggY3JpdGVyaWEnO1xyXG4gICAgICAgIG1lZXRpbmdzTGlzdFRpdGxlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfVxyXG59XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3NlYXJjaC1mb3JtJyApLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICggKSA9PiB7XHJcbiAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIC8vIGNvbnN0IHNlbGVjdGVkRGF0ZU9wdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnZm9ybUdyb3VwRGF0ZUlucHV0JyApLnZhbHVlO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWREYXRlT3B0aW9uID0gc2VhcmNoRGF0ZTtcclxuICAgIGNvbnN0IHNlYXJjaFRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3NlYXJjaFRleHQnICkudmFsdWUudHJpbSgpO1xyXG4gICAgLy8gY29uc3Qgc2VhcmNoVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnZm9ybUdyb3VwU2VhcmNoRm9yJyApLnZhbHVlLnRyaW0oKTtcclxuXHJcbiAgICBpZiAoIHNlYXJjaFRleHQgPT09ICcnICkge1xyXG4gICAgICAgIHNlYXJjaE1lZXRpbmdzKCBzZWxlY3RlZERhdGVPcHRpb24gKVxyXG4gICAgICAgICAgICAudGhlbiggKCBtZWV0aW5ncyApID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICggbWVldGluZ3MubWVzc2FnZSA9PT0gU1VDQ0VTUyApIHtcclxuICAgICAgICAgICAgICAgICAgICBnZXRBbGxVc2VycygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCAoIHVzZXJzICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCB1c2Vycy5tZXNzYWdlID09PSBTVUNDRVNTICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVsYXRlTWVldGluZ3NMaXN0KCBtZWV0aW5ncy5kYXRhLCB1c2Vycy5kYXRhICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgZmV0Y2hpbmcgdXNlcnM6ICR7dXNlcnMubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCAoIGVycm9yICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGZldGNoaW5nIHVzZXJzOiAke2Vycm9yLnJlc3BvbnNlLmRhdGEuZGVzY3JpcHRpb259YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgZmV0Y2hpbmcgdXNlcnM6ICR7ZXJyb3IubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgZmV0Y2hpbmcgbWVldGluZ3M6ICR7bWVldGluZ3MubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgLmNhdGNoKCAoIGVycm9yICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIEZldGNoaW5nIHlvdXIgbWVldGluZ3M6ICR7ZXJyb3IucmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbn1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBGZXRjaGluZyB5b3VyIG1lZXRpbmdzOiAke2Vycm9yLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBzZWFyY2hNZWV0aW5ncyggc2VsZWN0ZWREYXRlT3B0aW9uLCBzZWFyY2hUZXh0IClcclxuICAgICAgICAgICAgLnRoZW4oICggbWVldGluZ3MgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIG1lZXRpbmdzLm1lc3NhZ2UgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0QWxsVXNlcnMoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbiggKCB1c2VycyApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggdXNlcnMubWVzc2FnZSA9PT0gU1VDQ0VTUyApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1bGF0ZU1lZXRpbmdzTGlzdCggbWVldGluZ3MuZGF0YSwgdXNlcnMuZGF0YSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIEZldGNoaW5nIHVzZXJzOiAke3VzZXJzLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCggKCBlcnJvciApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBGZXRjaGluZyB1c2VyczogJHtlcnJvci5yZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9ufWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIEZldGNoaW5nIHVzZXJzOiAke2Vycm9yLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGZldGNoaW5nIG1lZXRpbmdzOiAke21lZXRpbmdzLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgIC5jYXRjaCggKCBlcnJvciApID0+IHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBGZXRjaGluZyB5b3VyIG1lZXRpbmdzOiAke2Vycm9yLnJlc3BvbnNlLmRhdGEuZGVzY3JpcHRpb259YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgRmV0Y2hpbmcgeW91ciBtZWV0aW5nczogJHtlcnJvci5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gKTtcclxuICAgIH1cclxufSApO1xyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAncHJlc2VudEJ1dHRvbicgKS5zdHlsZS5iYWNrZ3JvdW5kID0gJyNmNWY4ZmEnO1xyXG4gICAgc2VhcmNoTWVldGluZ3MoICdwcmVzZW50JyApXHJcbiAgICAgICAgLnRoZW4oICggbWVldGluZ3MgKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggbWVldGluZ3MubWVzc2FnZSA9PT0gU1VDQ0VTUyApIHtcclxuICAgICAgICAgICAgICAgIGdldEFsbFVzZXJzKClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbiggKCB1c2VycyApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCB1c2Vycy5tZXNzYWdlID09PSBTVUNDRVNTICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdWxhdGVNZWV0aW5nc0xpc3QoIG1lZXRpbmdzLmRhdGEsIHVzZXJzLmRhdGEgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgRmV0Y2hpbmcgdXNlcnM6ICR7dXNlcnMubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCAoIGVycm9yICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBGZXRjaGluZyB1c2VyczogJHtlcnJvci5yZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9ufWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBGZXRjaGluZyB1c2VyczogJHtlcnJvci5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGZldGNoaW5nIG1lZXRpbmdzOiAke21lZXRpbmdzLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gKVxyXG4gICAgICAgIC5jYXRjaCggKCBlcnJvciApID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgRmV0Y2hpbmcgeW91ciBtZWV0aW5nczogJHtlcnJvci5yZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9ufWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBGZXRjaGluZyB5b3VyIG1lZXRpbmdzOiAke2Vycm9yLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gKTtcclxufVxyXG5cclxuaW5pdCgpO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09IEFERCBNRUVUSU5HID09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuY29uc3QgcGlja2VyID0gbmV3IFBpa2FkYXkoIHtcclxuICAgIGZpZWxkOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2Zvcm1Hcm91cERhdGVJbnB1dCcgKSxcclxuICAgIHRvU3RyaW5nKCBkYXRlICkge1xyXG4gICAgICAgIC8vIHJldHVybiAnRC9NL1lZWVknXHJcbiAgICAgICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XHJcbiAgICAgICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xyXG4gICAgICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgcmV0dXJuIGAke2RheX0vJHttb250aH0vJHt5ZWFyfWA7XHJcbiAgICB9LFxyXG59ICk7XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZUVtYWlsKCBlbWFpbCApIHtcclxuICAgIGNvbnN0IHJlID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG4gICAgcmV0dXJuIHJlLnRlc3QoIFN0cmluZyggZW1haWwgKS50b0xvd2VyQ2FzZSgpICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlVGVhbSggdGVhbSApIHtcclxuICAgIGNvbnN0IHJlID0gL0BbYS16QS1aXFwtMC05XSskLztcclxuICAgIHJldHVybiByZS50ZXN0KCBTdHJpbmcoIHRlYW0gKS50b0xvd2VyQ2FzZSgpICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGF0dGVuZGVlVHlwZSggYXR0ZW5kZWUgKSB7XHJcbiAgICBsZXQgdHlwZSA9ICcnO1xyXG4gICAgaWYgKCB2YWxpZGF0ZUVtYWlsKCBhdHRlbmRlZSApICkge1xyXG4gICAgICAgIHR5cGUgPSAnZW1haWwnO1xyXG4gICAgfSBlbHNlIGlmICggdmFsaWRhdGVUZWFtKCBhdHRlbmRlZSApICkge1xyXG4gICAgICAgIHR5cGUgPSAndGVhbSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHR5cGUgPSAnbm9uZSc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHlwZTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdpbnB1dE1lZXRpbmdOYW1lJyApLnZhbHVlID0gJyc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3RleHRhcmVhTWVldGluZ0Rlc2NyaXB0aW9uJyApLnZhbHVlID0gJyc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3NlbGVjdFN0YXJ0VGltZUhvdXJzJyApLnZhbHVlID0gMDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc2VsZWN0RW5kVGltZUhvdXJzJyApLnZhbHVlID0gMDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc2VsZWN0U3RhcnRUaW1lTWlucycgKS52YWx1ZSA9IDA7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3NlbGVjdEVuZFRpbWVNaW5zJyApLnZhbHVlID0gMDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnaW5wdXRQYXJ0aWNpcGFudHMnICkudmFsdWUgPSAnJztcclxufVxyXG5cclxubGV0IG15TW9kYWwgPSBudWxsO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdhZGRNZWV0aW5nJyApLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IHtcclxuICAgIG15TW9kYWwgPSBuZXcgYm9vdHN0cmFwLk1vZGFsKCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ215TW9kYWwnICkgKTtcclxuICAgIG15TW9kYWwuc2hvdygpO1xyXG59ICk7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ21vZGFsRGlzbWlzcycgKS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoKSA9PiB7XHJcbiAgICBteU1vZGFsLmhpZGUoKTtcclxufSApO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzdWJtaXRBZGRNZWV0aW5nJyApLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IHtcclxuICAgIG15TW9kYWwuaGlkZSgpO1xyXG5cclxuICAgIGNvbnN0IHN1Ym1pdEpTT04gPSBBRERfTUVFVElOR19GT1JNO1xyXG4gICAgY29uc3QgbWVldGluZ05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2lucHV0TWVldGluZ05hbWUnICkudmFsdWUudHJpbSgpO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3RleHRhcmVhTWVldGluZ0Rlc2NyaXB0aW9uJyApLnZhbHVlLnRyaW0oKTtcclxuICAgIGNvbnN0IHNlbGVjdGVkRGF0ZSA9IHBpY2tlci5nZXREYXRlKCk7XHJcbiAgICBjb25zdCBkYXRlID0gYCR7c2VsZWN0ZWREYXRlLmdldEZ1bGxZZWFyKCl9LSR7c2VsZWN0ZWREYXRlLmdldE1vbnRoKCkgKyAxfS0ke3NlbGVjdGVkRGF0ZS5nZXREYXRlKCl9YDtcclxuICAgIGNvbnN0IHNlbGVjdFN0YXJ0VGltZUhvdXJzID0gcGFyc2VJbnQoIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc2VsZWN0U3RhcnRUaW1lSG91cnMnICkudmFsdWUsIDEwICk7XHJcbiAgICBjb25zdCBzZWxlY3RFbmRUaW1lSG91cnMgPSBwYXJzZUludCggZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzZWxlY3RFbmRUaW1lSG91cnMnICkudmFsdWUsIDEwICk7XHJcbiAgICBjb25zdCBzZWxlY3RTdGFydFRpbWVNaW5zID0gcGFyc2VJbnQoIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc2VsZWN0U3RhcnRUaW1lTWlucycgKS52YWx1ZSwgMTAgKTtcclxuICAgIGNvbnN0IHNlbGVjdEVuZFRpbWVNaW5zID0gcGFyc2VJbnQoIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc2VsZWN0RW5kVGltZU1pbnMnICkudmFsdWUsIDEwICk7XHJcbiAgICBjb25zdCBhdHRlbmRlZXMgPSAoICggZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdpbnB1dFBhcnRpY2lwYW50cycgKS52YWx1ZSApLnJlcGxhY2UoIC9cXHMrL2csICcnICkgKS5zcGxpdCggJywnICk7XHJcblxyXG4gICAgc3VibWl0SlNPTlsnbmFtZSddID0gbWVldGluZ05hbWU7XHJcbiAgICBzdWJtaXRKU09OWydkZXNjcmlwdGlvbiddID0gZGVzY3JpcHRpb247XHJcbiAgICBzdWJtaXRKU09OWydkYXRlJ10gPSBkYXRlO1xyXG4gICAgc3VibWl0SlNPTlsnc3RhcnRUaW1lJ11bJ2hvdXJzJ10gPSBzZWxlY3RTdGFydFRpbWVIb3VycztcclxuICAgIHN1Ym1pdEpTT05bJ3N0YXJ0VGltZSddWydtaW51dGVzJ10gPSBzZWxlY3RTdGFydFRpbWVNaW5zO1xyXG4gICAgc3VibWl0SlNPTlsnZW5kVGltZSddWydob3VycyddID0gc2VsZWN0RW5kVGltZUhvdXJzO1xyXG4gICAgc3VibWl0SlNPTlsnZW5kVGltZSddWydtaW51dGVzJ10gPSBzZWxlY3RFbmRUaW1lTWlucztcclxuXHJcbiAgICBjb25zdCBhdHRlbmRlZXNKU09OID0gW107XHJcbiAgICBsZXQgYXR0ZW5kZWVzTGVuZ3RoID0gYXR0ZW5kZWVzLmxlbmd0aDtcclxuXHJcbiAgICBnZXRBbGxVc2VycygpXHJcbiAgICAgICAgLnRoZW4oICggdXNlcnMgKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggdXNlcnMubWVzc2FnZSA9PT0gU1VDQ0VTUyApIHtcclxuICAgICAgICAgICAgICAgIGZldGNoVGVhbXMoKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCAoIHRlYW1zICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHRlYW1zLm1lc3NhZ2UgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKCBsZXQgaWR4QXR0ID0gMDsgaWR4QXR0IDwgYXR0ZW5kZWVzTGVuZ3RoOyBpZHhBdHQgKz0gMSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRlbmRlZSA9IGF0dGVuZGVlc1tpZHhBdHRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoIGF0dGVuZGVlVHlwZSggYXR0ZW5kZWVzW2lkeEF0dF0gKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlbWFpbCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoIGxldCBpZHggPSAwOyBpZHggPCB1c2Vycy5kYXRhLmxlbmd0aDsgaWR4ICs9IDEgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGF0dGVuZGVlLnRvTG93ZXJDYXNlKCkgPT09IHVzZXJzLmRhdGFbaWR4XVsnZW1haWwnXS50b0xvd2VyQ2FzZSgpICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVuZGVlc0pTT04ucHVzaCgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IHVzZXJzLmRhdGFbaWR4XVsnX2lkJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiB1c2Vycy5kYXRhW2lkeF1bJ2VtYWlsJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RlYW0nOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKCBsZXQgaWR4ID0gMDsgaWR4IDwgdGVhbXMuZGF0YS5sZW5ndGg7IGlkeCArPSAxICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBhdHRlbmRlZSA9PT0gYEAke3RlYW1zLmRhdGFbaWR4XVsnc2hvcnROYW1lJ119YCApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZWFtTWVtYmVyRW1haWxzID0gKCB0ZWFtcy5kYXRhW2lkeF1bJ21lbWJlcnMnXSApLm1hcCggKCB4ICkgPT4geFsnZW1haWwnXSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1NZW1iZXJFbWFpbHMuZm9yRWFjaCggKCBtZW1iZXIgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggYXR0ZW5kZWVzLmluY2x1ZGVzKCBtZW1iZXIgKSA9PT0gZmFsc2UgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRlbmRlZXMucHVzaCggbWVtYmVyICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZW5kZWVzTGVuZ3RoICs9IHRlYW1zLmRhdGFbaWR4XVsnbWVtYmVycyddLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRKU09OWydhdHRlbmRlZXMnXSA9IGF0dGVuZGVlc0pTT047XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdWJtaXQgY29uc3RydWN0ZWQgbWVldGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkTWVldGluZyggc3VibWl0SlNPTiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oICggcmVzcG9uc2UgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggcmVzcG9uc2UubWVzc2FnZSA9PT0gU1VDQ0VTUyApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCAnTWVldGluZyBhZGRlZCBzdWNjZXNzZnVsbHknLCBkb2N1bWVudC5ib2R5LCBTVUNDRVNTICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNldEZvcm0oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgYWRkaW5nIG1lZXRpbmc6ICR7cmVzcG9uc2UubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCAoIGVycm9yICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBhZGRpbmcgbWVldGluZzogJHtlcnJvci5yZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9ufWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBhZGRpbmcgbWVldGluZzogJHtlcnJvci5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGZldGNoaW5nIHRlYW1zOiAke3RlYW1zLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCggKCBlcnJvciApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgZmV0Y2hpbmcgdGVhbXM6ICR7ZXJyb3IucmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbn1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgZmV0Y2hpbmcgdGVhbXM6ICR7ZXJyb3IubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBmZXRjaGluZyB1c2VyczogJHt1c2Vycy5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IClcclxuICAgICAgICAuY2F0Y2goICggZXJyb3IgKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGZldGNoaW5nIHVzZXJzOiAke2Vycm9yLnJlc3BvbnNlLmRhdGEuZGVzY3JpcHRpb259YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGZldGNoaW5nIHVzZXJzOiAke2Vycm9yLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gKTtcclxufSApO1xyXG5cclxuZnVuY3Rpb24gaW5pdEFkZE1lZXRpbmcoKSB7XHJcbiAgICAvLyByZWRpcmVjdCB0byBsb2dpbiBwYWdlIGlmIGF1dGhvcml6YXRpb24gdG9rZW4gZG9lc250IGV4aXN0XHJcbiAgICBpZiAoIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCBUT0tFTiApID09PSBudWxsICkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICcvbG9naW4nO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgIHBpY2tlci5zZXREYXRlKCB0b2RheSApO1xyXG5cclxuICAgIC8vIGNvbnN0cnVjdCBob3VycyBhbmQgbWluIG9wdGlvbnNcclxuICAgIGNvbnN0IHNlbGVjdFN0YXJ0VGltZUhvdXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzZWxlY3RTdGFydFRpbWVIb3VycycgKTtcclxuICAgIGNvbnN0IHNlbGVjdEVuZFRpbWVIb3VycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc2VsZWN0RW5kVGltZUhvdXJzJyApO1xyXG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgMjQ7IGkgKz0gMSApIHtcclxuICAgICAgICBsZXQgb3B0aW9uID0gJyc7XHJcbiAgICAgICAgaWYgKCBpID09PSAwICkge1xyXG4gICAgICAgICAgICBvcHRpb24gPSAnPG9wdGlvbiB2YWx1ZT1cIjBcIiBzZWxlY3RlZD4wPC9vcHRpb24+JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvcHRpb24gPSBgPG9wdGlvbiB2YWx1ZT1cIiR7aX1cIj4ke2l9PC9vcHRpb24+YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZWN0U3RhcnRUaW1lSG91cnMuaW5uZXJIVE1MICs9IG9wdGlvbjtcclxuICAgICAgICBzZWxlY3RFbmRUaW1lSG91cnMuaW5uZXJIVE1MICs9IG9wdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZWxlY3RTdGFydFRpbWVNaW5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzZWxlY3RTdGFydFRpbWVNaW5zJyApO1xyXG4gICAgY29uc3Qgc2VsZWN0RW5kVGltZU1pbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3NlbGVjdEVuZFRpbWVNaW5zJyApO1xyXG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgNjA7IGkgKz0gMSApIHtcclxuICAgICAgICBsZXQgb3B0aW9uID0gJyc7XHJcbiAgICAgICAgaWYgKCBpID09PSAwICkge1xyXG4gICAgICAgICAgICBvcHRpb24gPSAnPG9wdGlvbiB2YWx1ZT1cIjBcIiBzZWxlY3RlZD4wPC9vcHRpb24+JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvcHRpb24gPSBgPG9wdGlvbiB2YWx1ZT1cIiR7aX1cIj4ke2l9PC9vcHRpb24+YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZWN0U3RhcnRUaW1lTWlucy5pbm5lckhUTUwgKz0gb3B0aW9uO1xyXG4gICAgICAgIHNlbGVjdEVuZFRpbWVNaW5zLmlubmVySFRNTCArPSBvcHRpb247XHJcbiAgICB9XHJcbn1cclxuXHJcbmluaXRBZGRNZWV0aW5nKCk7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEFQSV9CQVNFX1VSTCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGdldFRva2VuIH0gZnJvbSAnLi9hdXRoJztcclxuaW1wb3J0ICdjb3JlLWpzL3N0YWJsZSc7XHJcbmltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoTWVldGluZ3MoIGRhdGUgKSB7XHJcbiAgICBsZXQgZGF0ZVN0cmluZyA9ICcnO1xyXG4gICAgaWYgKCBkYXRlIGluc3RhbmNlb2YgRGF0ZSApIHtcclxuICAgICAgICBkYXRlU3RyaW5nID0gYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfS0ke2RhdGUuZ2V0TW9udGgoKSArIDF9LSR7ZGF0ZS5nZXREYXRlKCl9YDtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgIGAke0FQSV9CQVNFX1VSTH0vY2FsZW5kYXI/ZGF0ZT0ke2RhdGVTdHJpbmd9YCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke2dldFRva2VuKCl9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2VhcmNoTWVldGluZ3MoIHNlbGVjdGVkRGF0ZU9wdGlvbiwgc2VhcmNoVGV4dCA9ICcnICkge1xyXG4gICAgbGV0IHVybCA9IGAke0FQSV9CQVNFX1VSTH0vbWVldGluZ3MvP3BlcmlvZD0ke3NlbGVjdGVkRGF0ZU9wdGlvbn1gO1xyXG4gICAgaWYgKCBzZWFyY2hUZXh0ICE9PSAnJyApIHtcclxuICAgICAgICB1cmwgKz0gJyZzZWFyY2g9JztcclxuICAgICAgICB1cmwgKz0gKCBzZWFyY2hUZXh0LnNwbGl0KCAnICcgKSApLmpvaW4oICclMjAnICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7Z2V0VG9rZW4oKX1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBhZGRBdHRlbmRlZVRvTWVldGluZyggbWVldGluZywgZW1haWwgKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBhdGNoKFxyXG4gICAgICAgIGAke0FQSV9CQVNFX1VSTH0vbWVldGluZ3MvJHttZWV0aW5nWydfaWQnXX0/YWN0aW9uPWFkZF9hdHRlbmRlZSZlbWFpbD0ke2VtYWlsfWAsXHJcbiAgICAgICAge30sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgJHtnZXRUb2tlbigpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGV4Y3VzZUZyb21NZWV0aW5nKCBtZWV0aW5nICkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wYXRjaChcclxuICAgICAgICBgJHtBUElfQkFTRV9VUkx9L21lZXRpbmdzLyR7bWVldGluZ1snX2lkJ119P2FjdGlvbj1yZW1vdmVfYXR0ZW5kZWVgLFxyXG4gICAgICAgIHt9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7Z2V0VG9rZW4oKX1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBhZGRNZWV0aW5nKCBzdWJtaXRKU09OICkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIGAke0FQSV9CQVNFX1VSTH0vbWVldGluZ3MvYCxcclxuICAgICAgICBzdWJtaXRKU09OLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7Z2V0VG9rZW4oKX1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG59XHJcblxyXG4vLyBhc3luYyBmdW5jdGlvbiBmZXRjaE1lZXRpbmdCeUlkKCBpZCApIHtcclxuLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4vLyAgICAgICAgIGAke0FQSV9CQVNFX1VSTH0vd29ya3Nob3BzLyR7aWR9YCxcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuLy8gICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtnZXRUb2tlbigpfWAsXHJcbi8vICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICk7XHJcblxyXG4vLyAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbi8vIH1cclxuXHJcbi8vIGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU1lZXRpbmdCeUlkKCBpZCApIHtcclxuLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZGVsZXRlKFxyXG4vLyAgICAgICAgIGAke0FQSV9CQVNFX1VSTH0vd29ya3Nob3BzLyR7aWR9YCxcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuLy8gICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtnZXRUb2tlbigpfWAsXHJcbi8vICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICk7XHJcblxyXG4vLyAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4vLyB9XHJcblxyXG5leHBvcnQge1xyXG4gICAgZmV0Y2hNZWV0aW5ncyxcclxuICAgIHNlYXJjaE1lZXRpbmdzLFxyXG4gICAgYWRkQXR0ZW5kZWVUb01lZXRpbmcsXHJcbiAgICBleGN1c2VGcm9tTWVldGluZyxcclxuICAgIGFkZE1lZXRpbmcsXHJcbn07XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEFQSV9CQVNFX1VSTCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGdldFRva2VuIH0gZnJvbSAnLi9hdXRoJztcclxuaW1wb3J0ICdjb3JlLWpzL3N0YWJsZSc7XHJcbmltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoVGVhbXMoKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICBgJHtBUElfQkFTRV9VUkx9L3RlYW1zYCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke2dldFRva2VuKCl9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gYWRkVGVhbSggdGVhbUpTT04gKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS90ZWFtcy9gLFxyXG4gICAgICAgIHRlYW1KU09OLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7Z2V0VG9rZW4oKX1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBhZGRNZW1iZXJUb1RlYW0oIHRlYW0sIGVtYWlsICkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wYXRjaChcclxuICAgICAgICBgJHtBUElfQkFTRV9VUkx9L3RlYW1zLyR7dGVhbVsnX2lkJ119P2FjdGlvbj1hZGRfbWVtYmVyJmVtYWlsPSR7ZW1haWx9YCxcclxuICAgICAgICB7fSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke2dldFRva2VuKCl9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZXhjdXNlRnJvbVRlYW0oIHRlYW0gKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBhdGNoKFxyXG4gICAgICAgIGAke0FQSV9CQVNFX1VSTH0vdGVhbXMvJHt0ZWFtWydfaWQnXX0/YWN0aW9uPXJlbW92ZV9tZW1iZXJgLFxyXG4gICAgICAgIHt9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7Z2V0VG9rZW4oKX1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgZmV0Y2hUZWFtcyxcclxuICAgIGFkZFRlYW0sXHJcbiAgICBhZGRNZW1iZXJUb1RlYW0sXHJcbiAgICBleGN1c2VGcm9tVGVhbSxcclxufTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgQVBJX0JBU0VfVVJMIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgZ2V0VG9rZW4gfSBmcm9tICcuL2F1dGgnO1xyXG5cclxuaW1wb3J0ICdjb3JlLWpzL3N0YWJsZSc7XHJcbmltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lJztcclxuXHJcbi8qKlxyXG4gKiBHZXQgdGhlIGxpc3Qgb2YgYWxsIHJlZ2lzdGVyZWQgdXNlcnMuXHJcbiAqIEByZXR1cm5zIGxpc3Qgb2YgYWxsIHVzZXJzXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBnZXRBbGxVc2VycygpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgIGAke0FQSV9CQVNFX1VSTH0vdXNlcnNgLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7Z2V0VG9rZW4oKX1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRBbGxVc2VycztcclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgfVxcclxcblxcclxcbiAgdGV4dGFyZWEge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9wdWJsaWMvY3NzL2FkZF9tZWV0aW5nLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCx3Q0FBd0M7RUFDMUM7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxjQUFjO0VBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgaHIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0ZXh0YXJlYSB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5ociB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmNhcmQtdG9vbGJhciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ubmF2LXBpbGxzLWN1c3RvbSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgY29sb3I6ICM3ZTgyOTk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAwLjNyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1waWxscy1jdXN0b206aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmOGZhO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXRleHQtY3VzdG9tIHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDAuOHJlbTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9wdWJsaWMvY3NzL3NlYXJjaF9tZWV0aW5ncy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1Qsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsY0FBYztBQUNsQjs7O0FBR0E7SUFDSSxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7OztBQUdBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuaHIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5jYXJkLXRvb2xiYXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm5hdi1waWxscy1jdXN0b20ge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGNvbG9yOiAjN2U4Mjk5O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMC4zcmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4zcmVtO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYtcGlsbHMtY3VzdG9tOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjhmYTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC10ZXh0LWN1c3RvbSB7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAwLjhyZW07XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hZGRfbWVldGluZy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FkZF9tZWV0aW5nLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zZWFyY2hfbWVldGluZ3MuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zZWFyY2hfbWVldGluZ3MuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwic2VhcmNoX21lZXRpbmdzXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rbWVldGluZ3NcIl0gPSBzZWxmW1wid2VicGFja0NodW5rbWVldGluZ3NcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2F4aW9zX2luZGV4X2pzLW5vZGVfbW9kdWxlc19jb3JlLWpzX3N0YWJsZV9pbmRleF9qcy1ub2RlX21vZHVsZXNfcmVnZW5lci0xNTc0MDZcIixcInB1YmxpY19qc19jdXN0b21zX2FwcF9qcy1wdWJsaWNfanNfc2VydmljZXNfYXV0aF9qcy1wdWJsaWNfY3NzX21haW5fY3NzLWRhdGFfaW1hZ2Vfc3ZnX3htbF8zYy00ZWEyYTFcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9wdWJsaWMvanMvc2VhcmNoX21lZXRpbmdzLmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iXSwic291cmNlUm9vdCI6IiJ9