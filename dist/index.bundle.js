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

/***/ "./public/js/index.js":
/*!****************************!*\
  !*** ./public/js/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/main.css */ "./public/css/main.css");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/index.css */ "./public/css/index.css");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app */ "./public/js/app.js");
/* harmony import */ var _customs_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customs/app */ "./public/js/customs/app.js");
/* harmony import */ var _services_meetings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/meetings */ "./public/js/services/meetings.js");
/* harmony import */ var _util_meetings_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util/meetings_util */ "./public/js/util/meetings_util.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ "./public/js/constants.js");









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

function setDate(date) {
  var selectedDate = document.getElementById('selectedDate');
  var selectedDay = document.getElementById('selectedDay');
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  selectedDate.innerHTML = "".concat(date.getDate(), " ").concat(monthNames[date.getMonth()], " ").concat(date.getFullYear());
  selectedDay.innerHTML = dayNames[date.getDay()];
}
/**
 * function to draw the layout of the 24 hours of calendar
 */


function drawInitialCalendar(date) {
  var calendarContainer = document.getElementById('calendarContainer');
  calendarContainer.innerHTML = ''; // add individual hours - am

  for (var i = 0; i < 12; i += 1) {
    var text = '0';

    if (i <= 9) {
      text = "0".concat(i);
    } else {
      text = i;
    }

    calendarContainer.innerHTML += "\n        <div class=\"calendar-hour d-flex\">\n            <div class=\"calendar-hour-text px-2\">".concat(text, ":00 am</div>\n            <div class=\"calendar-hour-bg px-2 flex-grow-1\" id=\"calendarHour").concat(i, "\"></div>\n        </div> ");
  }

  for (var _i = 12; _i < 24; _i += 1) {
    var _text = '0';

    if (_i <= 9) {
      _text = "0".concat(_i);
    } else {
      _text = _i;
    }

    calendarContainer.innerHTML += "\n        <div class=\"calendar-hour d-flex\">\n            <div class=\"calendar-hour-text px-2\">".concat(_text, ":00 pm</div>\n            <div class=\"calendar-hour-bg px-2 flex-grow-1\" id=\"calendarHour").concat(_i, "\"></div>\n        </div> ");
  } // draw current time


  var today = new Date();
  today.setHours(0, 0, 0, 0); // eslint-disable-next-line no-use-before-define

  var pickerDate = date;
  pickerDate.setHours(0, 0, 0, 0);

  if (pickerDate.getTime() === today.getTime()) {
    var now = new Date();
    var time = 'am';
    var hourText = now.getHours();

    if (now.getHours() >= 12) {
      time = 'pm';
      hourText -= 12;
    }

    var timeNow = document.createElement('div');
    timeNow.setAttribute('class', 'time-now d-flex');
    timeNow.style.top = "".concat(now.getHours() * (60 + 10) + now.getMinutes(), "px");
    timeNow.innerHTML = "<div class=\"time-now-text px-2\">".concat(hourText, ":").concat(now.getMinutes(), " ").concat(time, "</div>\n                <div class=\"flex-grow-1 bg-info time-now-line\" id=\"timeNowHr\"></div>"); // calendarContainer = document.getElementById( 'calendarContainer' );

    calendarContainer.appendChild(timeNow);
  }
}

function populateCalendar(meetings) {
  if (meetings) {
    meetings.forEach(function (meeting) {
      var meetingDuration = (0,_util_meetings_util__WEBPACK_IMPORTED_MODULE_6__.default)(meeting['startTime'], meeting['endTime']);
      var attendees = [];
      meeting['attendees'].forEach(function (attendee) {
        attendees.push(attendee['email']);
      }); // create meeting card and attach it to the respective hour container

      var cardMeetingDiv = document.createElement('div');
      cardMeetingDiv.setAttribute('class', 'card-meeting');
      cardMeetingDiv.setAttribute('id', "card-meeting-".concat(meeting['_id']));
      cardMeetingDiv.style.top = "".concat(meeting['startTime']['minutes'], "px");
      var extraHeight = (meeting['endTime']['hours'] - meeting['startTime']['hours']) * 10;
      cardMeetingDiv.style.height = "".concat(meetingDuration + extraHeight, "px");
      var cardMeetingNameDiv = document.createElement('div');
      cardMeetingNameDiv.setAttribute('class', 'row');
      var cardMeetingName = document.createElement('h5');
      cardMeetingName.setAttribute('id', 'card-meeting-name');
      cardMeetingName.setAttribute('class', 'col-auto me-auto card-meeting-name');
      cardMeetingName.innerHTML = meeting['name'];
      var cardMeetingTime = document.createElement('h5');
      cardMeetingTime.setAttribute('id', 'card-meeting-time');
      cardMeetingTime.setAttribute('class', 'col-auto card-meeting-name');
      var startTime = formatTime(meeting['startTime']['hours'], meeting['startTime']['minutes']);
      var endTime = formatTime(meeting['endTime']['hours'], meeting['endTime']['minutes']);
      cardMeetingTime.innerHTML = "".concat(startTime, "-").concat(endTime, " (").concat(meetingDuration, " mins)");
      cardMeetingNameDiv.appendChild(cardMeetingName);
      cardMeetingNameDiv.appendChild(cardMeetingTime);
      cardMeetingDiv.appendChild(cardMeetingNameDiv);
      var cardMeetingAttendees = document.createElement('p');
      cardMeetingAttendees.setAttribute('id', 'card-meeting-attendees');
      cardMeetingAttendees.setAttribute('class', 'card-meeting-attendees');
      cardMeetingAttendees.innerHTML = attendees.join(', ');
      cardMeetingDiv.appendChild(cardMeetingAttendees);
      var startTimeHours = meeting['startTime']['hours'];
      var hourContainer = document.getElementById("calendarHour".concat(startTimeHours));
      hourContainer.appendChild(cardMeetingDiv);
    });
  }
}

function init() {
  // redirect to login page if authorization token doesnt exist
  if (localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_7__.TOKEN) === null) {
    window.location = '/login';
  }

  var today = new Date();
  document.getElementById('datepicker').value = "".concat(today.getDate(), "/").concat(today.getMonth() + 1, "/").concat(today.getFullYear());
  setDate(today);
  drawInitialCalendar(new Date()); // fetch meetings for today and populate the calendar containers

  (0,_services_meetings__WEBPACK_IMPORTED_MODULE_5__.fetchMeetings)(today).then(function (meetings) {
    if (meetings.message === _constants__WEBPACK_IMPORTED_MODULE_7__.SUCCESS) {
      populateCalendar(meetings.data);
    } else {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error Fetching your meetings: ".concat(response.message), document.body, ERROR);
    }
  })["catch"](function (error) {
    try {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Login Error: ".concat(error.response.data.description), document.body, ERROR);
    } catch (_unused) {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Login Error: ".concat(error.message), document.body, ERROR);
    }
  });
}

var picker = new Pikaday({
  field: document.getElementById('datepicker'),
  toString: function toString(date) {
    // return 'D/M/YYYY'
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    return "".concat(day, "/").concat(month, "/").concat(year);
  },
  setDefaultDate: true,
  onSelect: function select() {
    setDate(picker.getDate());
    drawInitialCalendar(new Date(picker.getDate()));
    (0,_services_meetings__WEBPACK_IMPORTED_MODULE_5__.fetchMeetings)(picker.getDate()).then(function (meetings) {
      if (meetings.message === _constants__WEBPACK_IMPORTED_MODULE_7__.SUCCESS) {
        populateCalendar(meetings.data);
      } else {
        (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error Fetching your meetings: ".concat(response.message), document.body, ERROR);
      }
    })["catch"](function (error) {
      try {
        (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error Fetching your meetings: ".concat(error.response.data.description), document.body, ERROR);
      } catch (_unused2) {
        (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error Fetching your meetings: ".concat(error.message), document.body, ERROR);
      }
    });
  }
});
init();

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

/***/ "./public/js/util/meetings_util.js":
/*!*****************************************!*\
  !*** ./public/js/util/meetings_util.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Return the meeting duration in minutes provided the start and end time of same day
 * @param {JSON} startTime The format for start time is { "hours": 9, "minutes": 0 }
 * @param {JSON} EndTime The format for end time is { "hours": 9, "minutes": 0 }
 */
function getMeetingDuration(startTime, endTime) {
  return endTime['minutes'] + endTime['hours'] * 60 - (startTime['minutes'] + startTime['hours'] * 60);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMeetingDuration);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./public/css/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./public/css/index.css ***!
  \********************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    font-size: 16px;\r\n}\r\n\r\nhr {\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n    border: 0;\r\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.calendar-container {\r\n    position: relative;\r\n}\r\n\r\n.calendar-hour {\r\n    position: relative;\r\n    height: 60px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.calendar-hour-bg {\r\n    position: relative;\r\n    background: white;\r\n}\r\n\r\n.card-meeting {\r\n    position: absolute;\r\n    width: auto;\r\n    right: 10px;\r\n    left: 10px;\r\n    z-index: 2;\r\n    padding: 10px;\r\n    background-color: hsla(145, 45%, 60%, 0.438);\r\n    border-left: 4px solid #2ecc71;\r\n    box-shadow: 1px 7px 14px -5px rgba(0,0,0,0.25);\r\n    overflow: hidden;\r\n    border-radius: 4px;\r\n    min-height: 40px;\r\n}\r\n\r\n.card-meeting:hover {\r\n    z-index: 3;\r\n    background: rgb(46,204,113);\r\n    background: linear-gradient(90deg, rgba(46,204,113,1) 0%, rgba(43,190,114,1) 100%);\r\n    border-left: none;\r\n    overflow: visible;\r\n    height: max-content !important;\r\n    transform: scale(1.1);\r\n    transition: .2s ease-in-out;\r\n}\r\n\r\n.card-meeting-name {\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    color: #2ecc71;\r\n}\r\n.card-meeting:hover .card-meeting-name{\r\n    color: white;\r\n}\r\n.card-meeting-attendees {\r\n    font-size: 16px;\r\n    font-weight: 300;\r\n    color: #2ecc71;\r\n}\r\n.card-meeting:hover .card-meeting-attendees {\r\n    color: white;\r\n}\r\n\r\n.time-now {\r\n    position: absolute;\r\n    width: 100%;\r\n}\r\n\r\n\r\n.time-now-text {\r\n    color: hsl(202, 98%, 58%)\r\n}\r\n\r\n.time-now-line {\r\n    height: 3px;\r\n    align-self: center;\r\n}\r\n\r\n.date-input{\r\n    border-width: 1px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./public/css/index.css"],"names":[],"mappings":"AAAA;IACI,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,SAAS;IACT,wCAAwC;AAC5C;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,UAAU;IACV,UAAU;IACV,aAAa;IACb,4CAA4C;IAC5C,8BAA8B;IAC9B,8CAA8C;IAC9C,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,UAAU;IACV,2BAA2B;IAC3B,kFAAkF;IAClF,iBAAiB;IACjB,iBAAiB;IACjB,8BAA8B;IAC9B,qBAAqB;IACrB,2BAA2B;AAC/B;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,cAAc;AAClB;AACA;IACI,YAAY;AAChB;AACA;IACI,eAAe;IACf,gBAAgB;IAChB,cAAc;AAClB;AACA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,WAAW;AACf;;;AAGA;IACI;AACJ;;AAEA;IACI,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB","sourcesContent":[":root {\r\n    font-size: 16px;\r\n}\r\n\r\nhr {\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n    border: 0;\r\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.calendar-container {\r\n    position: relative;\r\n}\r\n\r\n.calendar-hour {\r\n    position: relative;\r\n    height: 60px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.calendar-hour-bg {\r\n    position: relative;\r\n    background: white;\r\n}\r\n\r\n.card-meeting {\r\n    position: absolute;\r\n    width: auto;\r\n    right: 10px;\r\n    left: 10px;\r\n    z-index: 2;\r\n    padding: 10px;\r\n    background-color: hsla(145, 45%, 60%, 0.438);\r\n    border-left: 4px solid #2ecc71;\r\n    box-shadow: 1px 7px 14px -5px rgba(0,0,0,0.25);\r\n    overflow: hidden;\r\n    border-radius: 4px;\r\n    min-height: 40px;\r\n}\r\n\r\n.card-meeting:hover {\r\n    z-index: 3;\r\n    background: rgb(46,204,113);\r\n    background: linear-gradient(90deg, rgba(46,204,113,1) 0%, rgba(43,190,114,1) 100%);\r\n    border-left: none;\r\n    overflow: visible;\r\n    height: max-content !important;\r\n    transform: scale(1.1);\r\n    transition: .2s ease-in-out;\r\n}\r\n\r\n.card-meeting-name {\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    color: #2ecc71;\r\n}\r\n.card-meeting:hover .card-meeting-name{\r\n    color: white;\r\n}\r\n.card-meeting-attendees {\r\n    font-size: 16px;\r\n    font-weight: 300;\r\n    color: #2ecc71;\r\n}\r\n.card-meeting:hover .card-meeting-attendees {\r\n    color: white;\r\n}\r\n\r\n.time-now {\r\n    position: absolute;\r\n    width: 100%;\r\n}\r\n\r\n\r\n.time-now-text {\r\n    color: hsl(202, 98%, 58%)\r\n}\r\n\r\n.time-now-line {\r\n    height: 3px;\r\n    align-self: center;\r\n}\r\n\r\n.date-input{\r\n    border-width: 1px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./public/css/index.css":
/*!******************************!*\
  !*** ./public/css/index.css ***!
  \******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./public/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


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
/******/ 			"index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_axios_index_js-node_modules_core-js_stable_index_js-node_modules_regener-157406","public_js_customs_app_js-public_js_services_auth_js-public_css_main_css-data_image_svg_xml_3c-4ea2a1"], () => (__webpack_require__("./public/js/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vbWVldGluZ3MvLi9wdWJsaWMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWVldGluZ3MvLi9wdWJsaWMvanMvc2VydmljZXMvbWVldGluZ3MuanMiLCJ3ZWJwYWNrOi8vbWVldGluZ3MvLi9wdWJsaWMvanMvdXRpbC9tZWV0aW5nc191dGlsLmpzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vbWVldGluZ3MvLi9wdWJsaWMvY3NzL2luZGV4LmNzcz9mZjU2Iiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vbWVldGluZ3Mvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbWVldGluZ3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbWVldGluZ3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJzZXROYXZiYXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiVE9LRU4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInByb2ZpbGVJbWFnZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXRBdHRyaWJ1dGUiLCJBUElfQkFTRV9VUkwiLCJJRCIsIk5BTUUiLCJzcGxpdCIsImZpcnN0TmFtZSIsImlubmVySFRNTCIsInNob3dCb2R5T25Mb2FkIiwiYm9keSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImZvcm1hdFRpbWUiLCJob3VycyIsIm1pbnV0ZXMiLCJyZXN1bHQiLCJzZXREYXRlIiwiZGF0ZSIsInNlbGVjdGVkRGF0ZSIsInNlbGVjdGVkRGF5IiwibW9udGhOYW1lcyIsImRheU5hbWVzIiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJnZXREYXkiLCJkcmF3SW5pdGlhbENhbGVuZGFyIiwiY2FsZW5kYXJDb250YWluZXIiLCJpIiwidGV4dCIsInRvZGF5IiwiRGF0ZSIsInNldEhvdXJzIiwicGlja2VyRGF0ZSIsImdldFRpbWUiLCJub3ciLCJ0aW1lIiwiaG91clRleHQiLCJnZXRIb3VycyIsInRpbWVOb3ciLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJ0b3AiLCJnZXRNaW51dGVzIiwiYXBwZW5kQ2hpbGQiLCJwb3B1bGF0ZUNhbGVuZGFyIiwibWVldGluZ3MiLCJmb3JFYWNoIiwibWVldGluZyIsIm1lZXRpbmdEdXJhdGlvbiIsImdldE1lZXRpbmdEdXJhdGlvbiIsImF0dGVuZGVlcyIsImF0dGVuZGVlIiwicHVzaCIsImNhcmRNZWV0aW5nRGl2IiwiZXh0cmFIZWlnaHQiLCJoZWlnaHQiLCJjYXJkTWVldGluZ05hbWVEaXYiLCJjYXJkTWVldGluZ05hbWUiLCJjYXJkTWVldGluZ1RpbWUiLCJzdGFydFRpbWUiLCJlbmRUaW1lIiwiY2FyZE1lZXRpbmdBdHRlbmRlZXMiLCJqb2luIiwic3RhcnRUaW1lSG91cnMiLCJob3VyQ29udGFpbmVyIiwiaW5pdCIsInZhbHVlIiwiZmV0Y2hNZWV0aW5ncyIsInRoZW4iLCJtZXNzYWdlIiwiU1VDQ0VTUyIsImRhdGEiLCJhZGRUb2FzdCIsInJlc3BvbnNlIiwiRVJST1IiLCJlcnJvciIsImRlc2NyaXB0aW9uIiwicGlja2VyIiwiUGlrYWRheSIsImZpZWxkIiwidG9TdHJpbmciLCJkYXkiLCJtb250aCIsInllYXIiLCJzZXREZWZhdWx0RGF0ZSIsIm9uU2VsZWN0Iiwic2VsZWN0IiwiZGF0ZVN0cmluZyIsImF4aW9zIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJnZXRUb2tlbiIsInNlYXJjaE1lZXRpbmdzIiwic2VsZWN0ZWREYXRlT3B0aW9uIiwic2VhcmNoVGV4dCIsInVybCIsImFkZEF0dGVuZGVlVG9NZWV0aW5nIiwiZW1haWwiLCJleGN1c2VGcm9tTWVldGluZyIsImFkZE1lZXRpbmciLCJzdWJtaXRKU09OIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxTQUFULEdBQXFCO0FBQ2pCLE1BQUtDLFlBQVksQ0FBQ0MsT0FBYixDQUFzQkMsNkNBQXRCLE1BQWtDLElBQXZDLEVBQThDO0FBQzFDQyxVQUFNLENBQUNDLFFBQVAsR0FBa0IsUUFBbEI7QUFDSDs7QUFFRCxNQUFNQyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF5QixRQUF6QixDQUFyQjtBQUNBRixjQUFZLENBQUNHLFlBQWIsQ0FBMkIsS0FBM0IsWUFBcUNDLG9EQUFyQyxjQUFxRFQsWUFBWSxDQUFDQyxPQUFiLENBQXNCUywwQ0FBdEIsQ0FBckQ7O0FBRUEsOEJBQW9CVixZQUFZLENBQUNDLE9BQWIsQ0FBc0JVLDRDQUF0QixFQUE2QkMsS0FBN0IsQ0FBb0MsR0FBcEMsQ0FBcEI7QUFBQTtBQUFBLE1BQU9DLFNBQVA7O0FBQ0FQLFVBQVEsQ0FBQ0MsY0FBVCxDQUF5QixTQUF6QixFQUFxQ08sU0FBckMsR0FBaURELFNBQWpEO0FBQ0g7O0FBRUQsU0FBU0UsY0FBVCxHQUEwQjtBQUN0QlQsVUFBUSxDQUFDVSxJQUFULENBQWNDLFNBQWQsQ0FBd0JDLE1BQXhCLENBQWdDLE1BQWhDO0FBQ0g7O0FBQ0RILGNBQWM7QUFDZGhCLFNBQVMsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCVDtBQUNBO0FB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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsOEJBQThCLHdDQUF3QztXQUN0RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdCQUFnQixxQkFBcUI7V0FDckM7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLElBQUk7V0FDSjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLG9CQUFvQjtXQUMxQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQSw0Rzs7Ozs7VUM5Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUElfQkFTRV9VUkwsIElELCBOQU1FLCBUT0tFTiB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmZ1bmN0aW9uIHNldE5hdmJhcigpIHtcclxuICAgIGlmICggbG9jYWxTdG9yYWdlLmdldEl0ZW0oIFRPS0VOICkgPT09IG51bGwgKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJy9sb2dpbic7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvZmlsZUltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICduYXZQaWMnICk7XHJcbiAgICBwcm9maWxlSW1hZ2Uuc2V0QXR0cmlidXRlKCAnc3JjJywgYCR7QVBJX0JBU0VfVVJMfS8ke2xvY2FsU3RvcmFnZS5nZXRJdGVtKCBJRCApfS5wbmdgICk7XHJcblxyXG4gICAgY29uc3QgW2ZpcnN0TmFtZV0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggTkFNRSApLnNwbGl0KCAnICcgKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnbmFtZU5hdicgKS5pbm5lckhUTUwgPSBmaXJzdE5hbWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dCb2R5T25Mb2FkKCkge1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCAnaGlkZScgKTtcclxufVxyXG5zaG93Qm9keU9uTG9hZCgpO1xyXG5zZXROYXZiYXIoKTtcclxuIiwiaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG5pbXBvcnQgJy4uL2Nzcy9tYWluLmNzcyc7XHJcbmltcG9ydCAnLi4vY3NzL2luZGV4LmNzcyc7XHJcbmltcG9ydCAnLi9hcHAnO1xyXG5pbXBvcnQgYWRkVG9hc3QgZnJvbSAnLi9jdXN0b21zL2FwcCc7XHJcbmltcG9ydCB7IGZldGNoTWVldGluZ3MgfSBmcm9tICcuL3NlcnZpY2VzL21lZXRpbmdzJztcclxuaW1wb3J0IGdldE1lZXRpbmdEdXJhdGlvbiBmcm9tICcuL3V0aWwvbWVldGluZ3NfdXRpbCc7XHJcbmltcG9ydCB7IFNVQ0NFU1MsIFRPS0VOIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuZnVuY3Rpb24gZm9ybWF0VGltZSggaG91cnMsIG1pbnV0ZXMgKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gJyc7XHJcbiAgICBpZiAoIGhvdXJzIDwgMTAgKSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IGAwJHtob3Vyc31gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXN1bHQgKz0gaG91cnM7XHJcbiAgICB9XHJcbiAgICByZXN1bHQgKz0gJzonO1xyXG4gICAgaWYgKCBtaW51dGVzIDwgMTAgKSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IGAwJHttaW51dGVzfWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlc3VsdCArPSBtaW51dGVzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RGF0ZSggZGF0ZSApIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc2VsZWN0ZWREYXRlJyApO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWREYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3NlbGVjdGVkRGF5JyApO1xyXG5cclxuICAgIGNvbnN0IG1vbnRoTmFtZXMgPSBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLFxyXG4gICAgICAgICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddO1xyXG5cclxuICAgIGNvbnN0IGRheU5hbWVzID0gWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddO1xyXG5cclxuICAgIHNlbGVjdGVkRGF0ZS5pbm5lckhUTUwgPSBgJHtkYXRlLmdldERhdGUoKX0gJHttb250aE5hbWVzW2RhdGUuZ2V0TW9udGgoKV19ICR7ZGF0ZS5nZXRGdWxsWWVhcigpfWA7XHJcbiAgICBzZWxlY3RlZERheS5pbm5lckhUTUwgPSBkYXlOYW1lc1tkYXRlLmdldERheSgpXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIGZ1bmN0aW9uIHRvIGRyYXcgdGhlIGxheW91dCBvZiB0aGUgMjQgaG91cnMgb2YgY2FsZW5kYXJcclxuICovXHJcbmZ1bmN0aW9uIGRyYXdJbml0aWFsQ2FsZW5kYXIoIGRhdGUgKSB7XHJcbiAgICBjb25zdCBjYWxlbmRhckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnY2FsZW5kYXJDb250YWluZXInICk7XHJcbiAgICBjYWxlbmRhckNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgIC8vIGFkZCBpbmRpdmlkdWFsIGhvdXJzIC0gYW1cclxuICAgIGZvciAoIGxldCBpID0gMDsgaSA8IDEyOyBpICs9IDEgKSB7XHJcbiAgICAgICAgbGV0IHRleHQgPSAnMCc7XHJcbiAgICAgICAgaWYgKCBpIDw9IDkgKSB7XHJcbiAgICAgICAgICAgIHRleHQgPSBgMCR7aX1gO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRleHQgPSBpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYWxlbmRhckNvbnRhaW5lci5pbm5lckhUTUwgKz0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci1ob3VyIGQtZmxleFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItaG91ci10ZXh0IHB4LTJcIj4ke3RleHR9OjAwIGFtPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci1ob3VyLWJnIHB4LTIgZmxleC1ncm93LTFcIiBpZD1cImNhbGVuZGFySG91ciR7aX1cIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj4gYDtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKCBsZXQgaSA9IDEyOyBpIDwgMjQ7IGkgKz0gMSApIHtcclxuICAgICAgICBsZXQgdGV4dCA9ICcwJztcclxuICAgICAgICBpZiAoIGkgPD0gOSApIHtcclxuICAgICAgICAgICAgdGV4dCA9IGAwJHtpfWA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGV4dCA9IGk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhbGVuZGFyQ29udGFpbmVyLmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyLWhvdXIgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci1ob3VyLXRleHQgcHgtMlwiPiR7dGV4dH06MDAgcG08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyLWhvdXItYmcgcHgtMiBmbGV4LWdyb3ctMVwiIGlkPVwiY2FsZW5kYXJIb3VyJHtpfVwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiBgO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGRyYXcgY3VycmVudCB0aW1lXHJcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICB0b2RheS5zZXRIb3VycyggMCwgMCwgMCwgMCApO1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXHJcbiAgICBjb25zdCBwaWNrZXJEYXRlID0gZGF0ZTtcclxuICAgIHBpY2tlckRhdGUuc2V0SG91cnMoIDAsIDAsIDAsIDAgKTtcclxuICAgIGlmICggcGlja2VyRGF0ZS5nZXRUaW1lKCkgPT09IHRvZGF5LmdldFRpbWUoKSApIHtcclxuICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGxldCB0aW1lID0gJ2FtJztcclxuICAgICAgICBsZXQgaG91clRleHQgPSBub3cuZ2V0SG91cnMoKTtcclxuICAgICAgICBpZiAoIG5vdy5nZXRIb3VycygpID49IDEyICkge1xyXG4gICAgICAgICAgICB0aW1lID0gJ3BtJztcclxuICAgICAgICAgICAgaG91clRleHQgLT0gMTI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRpbWVOb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG4gICAgICAgIHRpbWVOb3cuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAndGltZS1ub3cgZC1mbGV4JyApO1xyXG4gICAgICAgIHRpbWVOb3cuc3R5bGUudG9wID0gYCR7bm93LmdldEhvdXJzKCkgKiAoIDYwICsgMTAgKSArIG5vdy5nZXRNaW51dGVzKCl9cHhgO1xyXG4gICAgICAgIHRpbWVOb3cuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJ0aW1lLW5vdy10ZXh0IHB4LTJcIj4ke2hvdXJUZXh0fToke25vdy5nZXRNaW51dGVzKCl9ICR7dGltZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LWdyb3ctMSBiZy1pbmZvIHRpbWUtbm93LWxpbmVcIiBpZD1cInRpbWVOb3dIclwiPjwvZGl2PmA7XHJcbiAgICAgICAgLy8gY2FsZW5kYXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2NhbGVuZGFyQ29udGFpbmVyJyApO1xyXG4gICAgICAgIGNhbGVuZGFyQ29udGFpbmVyLmFwcGVuZENoaWxkKCB0aW1lTm93ICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvcHVsYXRlQ2FsZW5kYXIoIG1lZXRpbmdzICkge1xyXG4gICAgaWYgKCBtZWV0aW5ncyApIHtcclxuICAgICAgICBtZWV0aW5ncy5mb3JFYWNoKCAoIG1lZXRpbmcgKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lZXRpbmdEdXJhdGlvbiA9IGdldE1lZXRpbmdEdXJhdGlvbiggbWVldGluZ1snc3RhcnRUaW1lJ10sIG1lZXRpbmdbJ2VuZFRpbWUnXSApO1xyXG4gICAgICAgICAgICBjb25zdCBhdHRlbmRlZXMgPSBbXTtcclxuICAgICAgICAgICAgbWVldGluZ1snYXR0ZW5kZWVzJ10uZm9yRWFjaCggKCBhdHRlbmRlZSApID0+IHtcclxuICAgICAgICAgICAgICAgIGF0dGVuZGVlcy5wdXNoKCBhdHRlbmRlZVsnZW1haWwnXSApO1xyXG4gICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICAvLyBjcmVhdGUgbWVldGluZyBjYXJkIGFuZCBhdHRhY2ggaXQgdG8gdGhlIHJlc3BlY3RpdmUgaG91ciBjb250YWluZXJcclxuICAgICAgICAgICAgY29uc3QgY2FyZE1lZXRpbmdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG4gICAgICAgICAgICBjYXJkTWVldGluZ0Rpdi5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdjYXJkLW1lZXRpbmcnICk7XHJcbiAgICAgICAgICAgIGNhcmRNZWV0aW5nRGl2LnNldEF0dHJpYnV0ZSggJ2lkJywgYGNhcmQtbWVldGluZy0ke21lZXRpbmdbJ19pZCddfWAgKTtcclxuICAgICAgICAgICAgY2FyZE1lZXRpbmdEaXYuc3R5bGUudG9wID0gYCR7bWVldGluZ1snc3RhcnRUaW1lJ11bJ21pbnV0ZXMnXX1weGA7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4dHJhSGVpZ2h0ID0gKCBtZWV0aW5nWydlbmRUaW1lJ11bJ2hvdXJzJ10gLSBtZWV0aW5nWydzdGFydFRpbWUnXVsnaG91cnMnXSApICogMTA7XHJcbiAgICAgICAgICAgIGNhcmRNZWV0aW5nRGl2LnN0eWxlLmhlaWdodCA9IGAke21lZXRpbmdEdXJhdGlvbiArIGV4dHJhSGVpZ2h0fXB4YDtcclxuICAgICAgICAgICAgY29uc3QgY2FyZE1lZXRpbmdOYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuICAgICAgICAgICAgY2FyZE1lZXRpbmdOYW1lRGl2LnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ3JvdycgKTtcclxuICAgICAgICAgICAgY29uc3QgY2FyZE1lZXRpbmdOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2g1JyApO1xyXG4gICAgICAgICAgICBjYXJkTWVldGluZ05hbWUuc2V0QXR0cmlidXRlKCAnaWQnLCAnY2FyZC1tZWV0aW5nLW5hbWUnICk7XHJcbiAgICAgICAgICAgIGNhcmRNZWV0aW5nTmFtZS5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdjb2wtYXV0byBtZS1hdXRvIGNhcmQtbWVldGluZy1uYW1lJyApO1xyXG4gICAgICAgICAgICBjYXJkTWVldGluZ05hbWUuaW5uZXJIVE1MID0gbWVldGluZ1snbmFtZSddO1xyXG4gICAgICAgICAgICBjb25zdCBjYXJkTWVldGluZ1RpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnaDUnICk7XHJcbiAgICAgICAgICAgIGNhcmRNZWV0aW5nVGltZS5zZXRBdHRyaWJ1dGUoICdpZCcsICdjYXJkLW1lZXRpbmctdGltZScgKTtcclxuICAgICAgICAgICAgY2FyZE1lZXRpbmdUaW1lLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2NvbC1hdXRvIGNhcmQtbWVldGluZy1uYW1lJyApO1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydFRpbWUgPSBmb3JtYXRUaW1lKCBtZWV0aW5nWydzdGFydFRpbWUnXVsnaG91cnMnXSwgbWVldGluZ1snc3RhcnRUaW1lJ11bJ21pbnV0ZXMnXSApO1xyXG4gICAgICAgICAgICBjb25zdCBlbmRUaW1lID0gZm9ybWF0VGltZSggbWVldGluZ1snZW5kVGltZSddWydob3VycyddLCBtZWV0aW5nWydlbmRUaW1lJ11bJ21pbnV0ZXMnXSApO1xyXG4gICAgICAgICAgICBjYXJkTWVldGluZ1RpbWUuaW5uZXJIVE1MID0gYCR7c3RhcnRUaW1lfS0ke2VuZFRpbWV9ICgke21lZXRpbmdEdXJhdGlvbn0gbWlucylgO1xyXG4gICAgICAgICAgICBjYXJkTWVldGluZ05hbWVEaXYuYXBwZW5kQ2hpbGQoIGNhcmRNZWV0aW5nTmFtZSApO1xyXG4gICAgICAgICAgICBjYXJkTWVldGluZ05hbWVEaXYuYXBwZW5kQ2hpbGQoIGNhcmRNZWV0aW5nVGltZSApO1xyXG4gICAgICAgICAgICBjYXJkTWVldGluZ0Rpdi5hcHBlbmRDaGlsZCggY2FyZE1lZXRpbmdOYW1lRGl2ICk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmRNZWV0aW5nQXR0ZW5kZWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3AnICk7XHJcbiAgICAgICAgICAgIGNhcmRNZWV0aW5nQXR0ZW5kZWVzLnNldEF0dHJpYnV0ZSggJ2lkJywgJ2NhcmQtbWVldGluZy1hdHRlbmRlZXMnICk7XHJcbiAgICAgICAgICAgIGNhcmRNZWV0aW5nQXR0ZW5kZWVzLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2NhcmQtbWVldGluZy1hdHRlbmRlZXMnICk7XHJcbiAgICAgICAgICAgIGNhcmRNZWV0aW5nQXR0ZW5kZWVzLmlubmVySFRNTCA9IGF0dGVuZGVlcy5qb2luKCAnLCAnICk7XHJcbiAgICAgICAgICAgIGNhcmRNZWV0aW5nRGl2LmFwcGVuZENoaWxkKCBjYXJkTWVldGluZ0F0dGVuZGVlcyApO1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydFRpbWVIb3VycyA9IG1lZXRpbmdbJ3N0YXJ0VGltZSddWydob3VycyddO1xyXG4gICAgICAgICAgICBjb25zdCBob3VyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIGBjYWxlbmRhckhvdXIke3N0YXJ0VGltZUhvdXJzfWAgKTtcclxuICAgICAgICAgICAgaG91ckNvbnRhaW5lci5hcHBlbmRDaGlsZCggY2FyZE1lZXRpbmdEaXYgKTtcclxuICAgICAgICB9ICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAvLyByZWRpcmVjdCB0byBsb2dpbiBwYWdlIGlmIGF1dGhvcml6YXRpb24gdG9rZW4gZG9lc250IGV4aXN0XHJcbiAgICBpZiAoIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCBUT0tFTiApID09PSBudWxsICkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICcvbG9naW4nO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnZGF0ZXBpY2tlcicgKS52YWx1ZSA9IGAke3RvZGF5LmdldERhdGUoKX0vJHt0b2RheS5nZXRNb250aCgpICsgMX0vJHt0b2RheS5nZXRGdWxsWWVhcigpfWA7XHJcbiAgICBzZXREYXRlKCB0b2RheSApO1xyXG5cclxuICAgIGRyYXdJbml0aWFsQ2FsZW5kYXIoIG5ldyBEYXRlKCkgKTtcclxuXHJcbiAgICAvLyBmZXRjaCBtZWV0aW5ncyBmb3IgdG9kYXkgYW5kIHBvcHVsYXRlIHRoZSBjYWxlbmRhciBjb250YWluZXJzXHJcbiAgICBmZXRjaE1lZXRpbmdzKCB0b2RheSApXHJcbiAgICAgICAgLnRoZW4oICggbWVldGluZ3MgKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggbWVldGluZ3MubWVzc2FnZSA9PT0gU1VDQ0VTUyApIHtcclxuICAgICAgICAgICAgICAgIHBvcHVsYXRlQ2FsZW5kYXIoIG1lZXRpbmdzLmRhdGEgKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgRmV0Y2hpbmcgeW91ciBtZWV0aW5nczogJHtyZXNwb25zZS5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IClcclxuICAgICAgICAuY2F0Y2goICggZXJyb3IgKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhZGRUb2FzdCggYExvZ2luIEVycm9yOiAke2Vycm9yLnJlc3BvbnNlLmRhdGEuZGVzY3JpcHRpb259YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICBhZGRUb2FzdCggYExvZ2luIEVycm9yOiAke2Vycm9yLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gKTtcclxufVxyXG5cclxuY29uc3QgcGlja2VyID0gbmV3IFBpa2FkYXkoIHtcclxuICAgIGZpZWxkOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2RhdGVwaWNrZXInICksXHJcbiAgICB0b1N0cmluZyggZGF0ZSApIHtcclxuICAgICAgICAvLyByZXR1cm4gJ0QvTS9ZWVlZJ1xyXG4gICAgICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcclxuICAgICAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIHJldHVybiBgJHtkYXl9LyR7bW9udGh9LyR7eWVhcn1gO1xyXG4gICAgfSxcclxuICAgIHNldERlZmF1bHREYXRlOiB0cnVlLFxyXG4gICAgb25TZWxlY3Q6IGZ1bmN0aW9uIHNlbGVjdCgpIHtcclxuICAgICAgICBzZXREYXRlKCBwaWNrZXIuZ2V0RGF0ZSgpICk7XHJcbiAgICAgICAgZHJhd0luaXRpYWxDYWxlbmRhciggbmV3IERhdGUoIHBpY2tlci5nZXREYXRlKCkgKSApO1xyXG4gICAgICAgIGZldGNoTWVldGluZ3MoIHBpY2tlci5nZXREYXRlKCkgKVxyXG4gICAgICAgICAgICAudGhlbiggKCBtZWV0aW5ncyApID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICggbWVldGluZ3MubWVzc2FnZSA9PT0gU1VDQ0VTUyApIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3B1bGF0ZUNhbGVuZGFyKCBtZWV0aW5ncy5kYXRhICk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgRmV0Y2hpbmcgeW91ciBtZWV0aW5nczogJHtyZXNwb25zZS5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAuY2F0Y2goICggZXJyb3IgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgRmV0Y2hpbmcgeW91ciBtZWV0aW5nczogJHtlcnJvci5yZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9ufWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIEZldGNoaW5nIHlvdXIgbWVldGluZ3M6ICR7ZXJyb3IubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICk7XHJcbiAgICB9LFxyXG59ICk7XHJcblxyXG5pbml0KCk7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEFQSV9CQVNFX1VSTCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGdldFRva2VuIH0gZnJvbSAnLi9hdXRoJztcclxuaW1wb3J0ICdjb3JlLWpzL3N0YWJsZSc7XHJcbmltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoTWVldGluZ3MoIGRhdGUgKSB7XHJcbiAgICBsZXQgZGF0ZVN0cmluZyA9ICcnO1xyXG4gICAgaWYgKCBkYXRlIGluc3RhbmNlb2YgRGF0ZSApIHtcclxuICAgICAgICBkYXRlU3RyaW5nID0gYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfS0ke2RhdGUuZ2V0TW9udGgoKSArIDF9LSR7ZGF0ZS5nZXREYXRlKCl9YDtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgIGAke0FQSV9CQVNFX1VSTH0vY2FsZW5kYXI/ZGF0ZT0ke2RhdGVTdHJpbmd9YCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke2dldFRva2VuKCl9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2VhcmNoTWVldGluZ3MoIHNlbGVjdGVkRGF0ZU9wdGlvbiwgc2VhcmNoVGV4dCA9ICcnICkge1xyXG4gICAgbGV0IHVybCA9IGAke0FQSV9CQVNFX1VSTH0vbWVldGluZ3MvP3BlcmlvZD0ke3NlbGVjdGVkRGF0ZU9wdGlvbn1gO1xyXG4gICAgaWYgKCBzZWFyY2hUZXh0ICE9PSAnJyApIHtcclxuICAgICAgICB1cmwgKz0gJyZzZWFyY2g9JztcclxuICAgICAgICB1cmwgKz0gKCBzZWFyY2hUZXh0LnNwbGl0KCAnICcgKSApLmpvaW4oICclMjAnICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7Z2V0VG9rZW4oKX1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBhZGRBdHRlbmRlZVRvTWVldGluZyggbWVldGluZywgZW1haWwgKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBhdGNoKFxyXG4gICAgICAgIGAke0FQSV9CQVNFX1VSTH0vbWVldGluZ3MvJHttZWV0aW5nWydfaWQnXX0/YWN0aW9uPWFkZF9hdHRlbmRlZSZlbWFpbD0ke2VtYWlsfWAsXHJcbiAgICAgICAge30sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgJHtnZXRUb2tlbigpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGV4Y3VzZUZyb21NZWV0aW5nKCBtZWV0aW5nICkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wYXRjaChcclxuICAgICAgICBgJHtBUElfQkFTRV9VUkx9L21lZXRpbmdzLyR7bWVldGluZ1snX2lkJ119P2FjdGlvbj1yZW1vdmVfYXR0ZW5kZWVgLFxyXG4gICAgICAgIHt9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7Z2V0VG9rZW4oKX1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBhZGRNZWV0aW5nKCBzdWJtaXRKU09OICkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIGAke0FQSV9CQVNFX1VSTH0vbWVldGluZ3MvYCxcclxuICAgICAgICBzdWJtaXRKU09OLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7Z2V0VG9rZW4oKX1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG59XHJcblxyXG4vLyBhc3luYyBmdW5jdGlvbiBmZXRjaE1lZXRpbmdCeUlkKCBpZCApIHtcclxuLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4vLyAgICAgICAgIGAke0FQSV9CQVNFX1VSTH0vd29ya3Nob3BzLyR7aWR9YCxcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuLy8gICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtnZXRUb2tlbigpfWAsXHJcbi8vICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICk7XHJcblxyXG4vLyAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbi8vIH1cclxuXHJcbi8vIGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU1lZXRpbmdCeUlkKCBpZCApIHtcclxuLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZGVsZXRlKFxyXG4vLyAgICAgICAgIGAke0FQSV9CQVNFX1VSTH0vd29ya3Nob3BzLyR7aWR9YCxcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuLy8gICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtnZXRUb2tlbigpfWAsXHJcbi8vICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICk7XHJcblxyXG4vLyAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4vLyB9XHJcblxyXG5leHBvcnQge1xyXG4gICAgZmV0Y2hNZWV0aW5ncyxcclxuICAgIHNlYXJjaE1lZXRpbmdzLFxyXG4gICAgYWRkQXR0ZW5kZWVUb01lZXRpbmcsXHJcbiAgICBleGN1c2VGcm9tTWVldGluZyxcclxuICAgIGFkZE1lZXRpbmcsXHJcbn07XHJcbiIsIi8qKlxyXG4gKiBSZXR1cm4gdGhlIG1lZXRpbmcgZHVyYXRpb24gaW4gbWludXRlcyBwcm92aWRlZCB0aGUgc3RhcnQgYW5kIGVuZCB0aW1lIG9mIHNhbWUgZGF5XHJcbiAqIEBwYXJhbSB7SlNPTn0gc3RhcnRUaW1lIFRoZSBmb3JtYXQgZm9yIHN0YXJ0IHRpbWUgaXMgeyBcImhvdXJzXCI6IDksIFwibWludXRlc1wiOiAwIH1cclxuICogQHBhcmFtIHtKU09OfSBFbmRUaW1lIFRoZSBmb3JtYXQgZm9yIGVuZCB0aW1lIGlzIHsgXCJob3Vyc1wiOiA5LCBcIm1pbnV0ZXNcIjogMCB9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRNZWV0aW5nRHVyYXRpb24oIHN0YXJ0VGltZSwgZW5kVGltZSApIHtcclxuICAgIHJldHVybiAoIGVuZFRpbWVbJ21pbnV0ZXMnXSArIGVuZFRpbWVbJ2hvdXJzJ10gKiA2MCApIC0gKCBzdGFydFRpbWVbJ21pbnV0ZXMnXSArIHN0YXJ0VGltZVsnaG91cnMnXSAqIDYwICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldE1lZXRpbmdEdXJhdGlvbjtcclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuaHIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbi5jYWxlbmRhci1jb250YWluZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5jYWxlbmRhci1ob3VyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYWxlbmRhci1ob3VyLWJnIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtbWVldGluZyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIHJpZ2h0OiAxMHB4O1xcclxcbiAgICBsZWZ0OiAxMHB4O1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDE0NSwgNDUlLCA2MCUsIDAuNDM4KTtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMmVjYzcxO1xcclxcbiAgICBib3gtc2hhZG93OiAxcHggN3B4IDE0cHggLTVweCByZ2JhKDAsMCwwLDAuMjUpO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLW1lZXRpbmc6aG92ZXIge1xcclxcbiAgICB6LWluZGV4OiAzO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNDYsMjA0LDExMyk7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSg0NiwyMDQsMTEzLDEpIDAlLCByZ2JhKDQzLDE5MCwxMTQsMSkgMTAwJSk7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcclxcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXHJcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudCAhaW1wb3J0YW50O1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICAgIHRyYW5zaXRpb246IC4ycyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtbWVldGluZy1uYW1lIHtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBjb2xvcjogIzJlY2M3MTtcXHJcXG59XFxyXFxuLmNhcmQtbWVldGluZzpob3ZlciAuY2FyZC1tZWV0aW5nLW5hbWV7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLmNhcmQtbWVldGluZy1hdHRlbmRlZXMge1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgIGNvbG9yOiAjMmVjYzcxO1xcclxcbn1cXHJcXG4uY2FyZC1tZWV0aW5nOmhvdmVyIC5jYXJkLW1lZXRpbmctYXR0ZW5kZWVzIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4udGltZS1ub3cge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udGltZS1ub3ctdGV4dCB7XFxyXFxuICAgIGNvbG9yOiBoc2woMjAyLCA5OCUsIDU4JSlcXHJcXG59XFxyXFxuXFxyXFxuLnRpbWUtbm93LWxpbmUge1xcclxcbiAgICBoZWlnaHQ6IDNweDtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0ZS1pbnB1dHtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3B1YmxpYy9jc3MvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsU0FBUztJQUNULHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLFVBQVU7SUFDVixVQUFVO0lBQ1YsYUFBYTtJQUNiLDRDQUE0QztJQUM1Qyw4QkFBOEI7SUFDOUIsOENBQThDO0lBQzlDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLDJCQUEyQjtJQUMzQixrRkFBa0Y7SUFDbEYsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQiw4QkFBOEI7SUFDOUIscUJBQXFCO0lBQ3JCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7O0FBR0E7SUFDSTtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuaHIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbi5jYWxlbmRhci1jb250YWluZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5jYWxlbmRhci1ob3VyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYWxlbmRhci1ob3VyLWJnIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtbWVldGluZyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIHJpZ2h0OiAxMHB4O1xcclxcbiAgICBsZWZ0OiAxMHB4O1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDE0NSwgNDUlLCA2MCUsIDAuNDM4KTtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMmVjYzcxO1xcclxcbiAgICBib3gtc2hhZG93OiAxcHggN3B4IDE0cHggLTVweCByZ2JhKDAsMCwwLDAuMjUpO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLW1lZXRpbmc6aG92ZXIge1xcclxcbiAgICB6LWluZGV4OiAzO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNDYsMjA0LDExMyk7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSg0NiwyMDQsMTEzLDEpIDAlLCByZ2JhKDQzLDE5MCwxMTQsMSkgMTAwJSk7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcclxcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXHJcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudCAhaW1wb3J0YW50O1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICAgIHRyYW5zaXRpb246IC4ycyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtbWVldGluZy1uYW1lIHtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBjb2xvcjogIzJlY2M3MTtcXHJcXG59XFxyXFxuLmNhcmQtbWVldGluZzpob3ZlciAuY2FyZC1tZWV0aW5nLW5hbWV7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLmNhcmQtbWVldGluZy1hdHRlbmRlZXMge1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgIGNvbG9yOiAjMmVjYzcxO1xcclxcbn1cXHJcXG4uY2FyZC1tZWV0aW5nOmhvdmVyIC5jYXJkLW1lZXRpbmctYXR0ZW5kZWVzIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4udGltZS1ub3cge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udGltZS1ub3ctdGV4dCB7XFxyXFxuICAgIGNvbG9yOiBoc2woMjAyLCA5OCUsIDU4JSlcXHJcXG59XFxyXFxuXFxyXFxuLnRpbWUtbm93LWxpbmUge1xcclxcbiAgICBoZWlnaHQ6IDNweDtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0ZS1pbnB1dHtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua21lZXRpbmdzXCJdID0gc2VsZltcIndlYnBhY2tDaHVua21lZXRpbmdzXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19heGlvc19pbmRleF9qcy1ub2RlX21vZHVsZXNfY29yZS1qc19zdGFibGVfaW5kZXhfanMtbm9kZV9tb2R1bGVzX3JlZ2VuZXItMTU3NDA2XCIsXCJwdWJsaWNfanNfY3VzdG9tc19hcHBfanMtcHVibGljX2pzX3NlcnZpY2VzX2F1dGhfanMtcHVibGljX2Nzc19tYWluX2Nzcy1kYXRhX2ltYWdlX3N2Z194bWxfM2MtNGVhMmExXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vcHVibGljL2pzL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iXSwic291cmNlUm9vdCI6IiJ9