(self["webpackChunkmeetings"] = self["webpackChunkmeetings"] || []).push([["public_js_app_js-public_js_customs_app_js-public_js_services_meetings_js"],{

/***/ "./public/js/app.js":
/*!**************************!*\
  !*** ./public/js/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

setNavbar();
showBodyOnLoad();

/***/ }),

/***/ "./public/js/constants.js":
/*!********************************!*\
  !*** ./public/js/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_BASE_URL": () => (/* binding */ API_BASE_URL),
/* harmony export */   "TOKEN": () => (/* binding */ TOKEN),
/* harmony export */   "EMAIL": () => (/* binding */ EMAIL),
/* harmony export */   "NAME": () => (/* binding */ NAME),
/* harmony export */   "ID": () => (/* binding */ ID),
/* harmony export */   "SUCCESS": () => (/* binding */ SUCCESS),
/* harmony export */   "ERROR": () => (/* binding */ ERROR)
/* harmony export */ });
// const API_BASE_URL = 'http://mymeetingsapp.herokuapp.com/api';
var API_BASE_URL = "http://localhost:3000/api";
var TOKEN = 'token';
var EMAIL = 'email';
var NAME = 'name';
var ID = 'id';
var SUCCESS = 'success';
var ERROR = 'error';


/***/ }),

/***/ "./public/js/customs/app.js":
/*!**********************************!*\
  !*** ./public/js/customs/app.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./public/js/constants.js");


function addToast(message, element, state) {
  var duration = Math.max(Math.ceil(message.length * 1000 / 25), 1100);
  var wrapper = document.createElement('div');
  wrapper.setAttribute('class', 'mytoast-wrapper');
  var mytoast = document.createElement('div');

  if (state === _constants__WEBPACK_IMPORTED_MODULE_0__.SUCCESS) {
    mytoast.setAttribute('class', 'mytoast mytoast-success');
  } else {
    mytoast.setAttribute('class', 'mytoast mytoast-error');
  }

  wrapper.appendChild(mytoast);
  var content = document.createElement('div');
  content.setAttribute('class', 'content');
  mytoast.appendChild(content);
  var p = document.createElement('p');
  p.style.marginBottom = 0;
  p.innerHTML = message;
  content.appendChild(p);
  element.appendChild(wrapper);
  wrapper.classList.remove('hide');
  wrapper.classList.add('show');
  setTimeout(function () {
    wrapper.classList.add('hide');
    setTimeout(function () {
      wrapper.remove();
    }, 1000);
  }, duration);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addToast);

/***/ }),

/***/ "./public/js/services/auth.js":
/*!************************************!*\
  !*** ./public/js/services/auth.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "register": () => (/* binding */ register),
/* harmony export */   "logout": () => (/* binding */ logout),
/* harmony export */   "getToken": () => (/* binding */ getToken),
/* harmony export */   "login": () => (/* binding */ login)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./public/js/constants.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/**
 * @param {object} credentials An object with name, email and password
 * @returns A promise that resolves with the register response data, or rejects if requests
 * to register fails
 * * @example credentials
 * {
 *  "name": "Prashanth Puranik",
 *  "email": "purani2@example.com",
 *  "password": "Purani@2"
 * }
 */

function register(_x) {
  return _register.apply(this, arguments);
}
/**
 * @param {object} credentials An object with email and password
 * @returns A promise that resolves with the login response data, or rejects if requests to
 * login fails
 * @example credentials
 * {
 *  "email": "purani20@example.com",
 *  "password": "Purani@2"
 * }
 */


function _register() {
  _register = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(credentials) {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().post("".concat(_constants__WEBPACK_IMPORTED_MODULE_1__.API_BASE_URL, "/auth/register"), credentials, {
              headers: {
                'Content-Type': 'application/json'
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
  return _register.apply(this, arguments);
}

function login(_x2) {
  return _login.apply(this, arguments);
}
/**
 * Removes the auth token and email from the local storage.
 */


function _login() {
  _login = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(credentials) {
    var response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().post("".concat(_constants__WEBPACK_IMPORTED_MODULE_1__.API_BASE_URL, "/auth/login"), credentials, {
              headers: {
                'Content-Type': 'application/json'
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
  return _login.apply(this, arguments);
}

function logout() {
  localStorage.removeItem(_constants__WEBPACK_IMPORTED_MODULE_1__.TOKEN);
  localStorage.removeItem(_constants__WEBPACK_IMPORTED_MODULE_1__.NAME);
  localStorage.removeItem(_constants__WEBPACK_IMPORTED_MODULE_1__.EMAIL);
}
/**
 * Returns the authorization token for logged in user, or null if no one is logged in
 * @returns The authorization token for logged in user, or null if no one is logged in
 */


function getToken() {
  return localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_1__.TOKEN);
}



/***/ }),

/***/ "./public/js/services/meetings.js":
/*!****************************************!*\
  !*** ./public/js/services/meetings.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vbWVldGluZ3MvLi9wdWJsaWMvanMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2pzL2N1c3RvbXMvYXBwLmpzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2pzL3NlcnZpY2VzL2F1dGguanMiLCJ3ZWJwYWNrOi8vbWVldGluZ3MvLi9wdWJsaWMvanMvc2VydmljZXMvbWVldGluZ3MuanMiXSwibmFtZXMiOlsic2V0TmF2YmFyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIlRPS0VOIiwid2luZG93IiwibG9jYXRpb24iLCJwcm9maWxlSW1hZ2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2V0QXR0cmlidXRlIiwiQVBJX0JBU0VfVVJMIiwiSUQiLCJOQU1FIiwic3BsaXQiLCJmaXJzdE5hbWUiLCJpbm5lckhUTUwiLCJzaG93Qm9keU9uTG9hZCIsImJvZHkiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJwcm9jZXNzIiwiRU1BSUwiLCJTVUNDRVNTIiwiRVJST1IiLCJhZGRUb2FzdCIsIm1lc3NhZ2UiLCJlbGVtZW50Iiwic3RhdGUiLCJkdXJhdGlvbiIsIk1hdGgiLCJtYXgiLCJjZWlsIiwibGVuZ3RoIiwid3JhcHBlciIsImNyZWF0ZUVsZW1lbnQiLCJteXRvYXN0IiwiYXBwZW5kQ2hpbGQiLCJjb250ZW50IiwicCIsInN0eWxlIiwibWFyZ2luQm90dG9tIiwiYWRkIiwic2V0VGltZW91dCIsInJlZ2lzdGVyIiwiY3JlZGVudGlhbHMiLCJheGlvcyIsImhlYWRlcnMiLCJyZXNwb25zZSIsImRhdGEiLCJsb2dpbiIsImxvZ291dCIsInJlbW92ZUl0ZW0iLCJnZXRUb2tlbiIsImZldGNoTWVldGluZ3MiLCJkYXRlIiwiZGF0ZVN0cmluZyIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsIkF1dGhvcml6YXRpb24iLCJzZWFyY2hNZWV0aW5ncyIsInNlbGVjdGVkRGF0ZU9wdGlvbiIsInNlYXJjaFRleHQiLCJ1cmwiLCJqb2luIiwiYWRkQXR0ZW5kZWVUb01lZXRpbmciLCJtZWV0aW5nIiwiZW1haWwiLCJleGN1c2VGcm9tTWVldGluZyIsImFkZE1lZXRpbmciLCJzdWJtaXRKU09OIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLFNBQVQsR0FBcUI7QUFDakIsTUFBS0MsWUFBWSxDQUFDQyxPQUFiLENBQXNCQyw2Q0FBdEIsTUFBa0MsSUFBdkMsRUFBOEM7QUFDMUNDLFVBQU0sQ0FBQ0MsUUFBUCxHQUFrQixRQUFsQjtBQUNIOztBQUVELE1BQU1DLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXlCLFFBQXpCLENBQXJCO0FBQ0FGLGNBQVksQ0FBQ0csWUFBYixDQUEyQixLQUEzQixZQUFxQ0Msb0RBQXJDLGNBQXFEVCxZQUFZLENBQUNDLE9BQWIsQ0FBc0JTLDBDQUF0QixDQUFyRDs7QUFFQSw4QkFBb0JWLFlBQVksQ0FBQ0MsT0FBYixDQUFzQlUsNENBQXRCLEVBQTZCQyxLQUE3QixDQUFvQyxHQUFwQyxDQUFwQjtBQUFBO0FBQUEsTUFBT0MsU0FBUDs7QUFDQVAsVUFBUSxDQUFDQyxjQUFULENBQXlCLFNBQXpCLEVBQXFDTyxTQUFyQyxHQUFpREQsU0FBakQ7QUFDSDs7QUFFRCxTQUFTRSxjQUFULEdBQTBCO0FBQ3RCVCxVQUFRLENBQUNVLElBQVQsQ0FBY0MsU0FBZCxDQUF3QkMsTUFBeEIsQ0FBZ0MsTUFBaEM7QUFDSDs7QUFFRG5CLFNBQVM7QUFDVGdCLGNBQWMsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJkO0FBQ0EsSUFBUU4sWUFBUixHQUF5QlUsMkJBQXpCO0FBQ0EsSUFBTWpCLEtBQUssR0FBRyxPQUFkO0FBQ0EsSUFBTWtCLEtBQUssR0FBRyxPQUFkO0FBQ0EsSUFBTVQsSUFBSSxHQUFHLE1BQWI7QUFDQSxJQUFN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aEJuQyxvREFEZ0IsdUJBQ1N5RCxPQUFPLENBQUMsS0FBRCxDQURoQiw4QkFFbkIsRUFGbUIsRUFHbkI7QUFDSXJCLHFCQUFPLEVBQUU7QUFDTGMsNkJBQWEsWUFBS1IsK0NBQVEsRUFBYjtBQURSO0FBRGIsYUFIbUIsQ0FEM0I7O0FBQUE7QUFDVUwsb0JBRFY7QUFBQSw4Q0FXV0EsUUFBUSxDQUFDQyxJQVhwQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O1NBY2VzQixVOztFQWNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7O3dFQXRDQSxrQkFBMkJDLFVBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQzJCMUIsaURBQUEsV0FDaEJuQyxvREFEZ0IsaUJBRW5CNkQsVUFGbUIsRUFHbkI7QUFDSXpCLHFCQUFPLEVBQUU7QUFDTGMsNkJBQWEsWUFBS1IsK0NBQVEsRUFBYjtBQURSO0FBRGIsYUFIbUIsQ0FEM0I7O0FBQUE7QUFDVUwsb0JBRFY7QUFBQSw4Q0FXV0EsUUFBUSxDQUFDQyxJQVhwQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwiZmlsZSI6InB1YmxpY19qc19hcHBfanMtcHVibGljX2pzX2N1c3RvbXNfYXBwX2pzLXB1YmxpY19qc19zZXJ2aWNlc19tZWV0aW5nc19qcy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUElfQkFTRV9VUkwsIElELCBOQU1FLCBUT0tFTiB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmZ1bmN0aW9uIHNldE5hdmJhcigpIHtcclxuICAgIGlmICggbG9jYWxTdG9yYWdlLmdldEl0ZW0oIFRPS0VOICkgPT09IG51bGwgKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJy9sb2dpbic7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvZmlsZUltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICduYXZQaWMnICk7XHJcbiAgICBwcm9maWxlSW1hZ2Uuc2V0QXR0cmlidXRlKCAnc3JjJywgYCR7QVBJX0JBU0VfVVJMfS8ke2xvY2FsU3RvcmFnZS5nZXRJdGVtKCBJRCApfS5wbmdgICk7XHJcblxyXG4gICAgY29uc3QgW2ZpcnN0TmFtZV0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggTkFNRSApLnNwbGl0KCAnICcgKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnbmFtZU5hdicgKS5pbm5lckhUTUwgPSBmaXJzdE5hbWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dCb2R5T25Mb2FkKCkge1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCAnaGlkZScgKTtcclxufVxyXG5cclxuc2V0TmF2YmFyKCk7XHJcbnNob3dCb2R5T25Mb2FkKCk7XHJcbiIsIi8vIGNvbnN0IEFQSV9CQVNFX1VSTCA9ICdodHRwOi8vbXltZWV0aW5nc2FwcC5oZXJva3VhcHAuY29tL2FwaSc7XHJcbmNvbnN0IHsgQVBJX0JBU0VfVVJMIH0gPSBwcm9jZXNzLmVudjtcclxuY29uc3QgVE9LRU4gPSAndG9rZW4nO1xyXG5jb25zdCBFTUFJTCA9ICdlbWFpbCc7XHJcbmNvbnN0IE5BTUUgPSAnbmFtZSc7XHJcbmNvbnN0IElEID0gJ2lkJztcclxuXHJcbmNvbnN0IFNVQ0NFU1MgPSAnc3VjY2Vzcyc7XHJcbmNvbnN0IEVSUk9SID0gJ2Vycm9yJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBBUElfQkFTRV9VUkwsXHJcbiAgICBUT0tFTixcclxuICAgIEVNQUlMLFxyXG4gICAgTkFNRSxcclxuICAgIElELFxyXG4gICAgU1VDQ0VTUyxcclxuICAgIEVSUk9SLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBTVUNDRVNTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuXHJcbmZ1bmN0aW9uIGFkZFRvYXN0KCBtZXNzYWdlLCBlbGVtZW50LCBzdGF0ZSApIHtcclxuICAgIGNvbnN0IGR1cmF0aW9uID0gTWF0aC5tYXgoIE1hdGguY2VpbCggKCBtZXNzYWdlLmxlbmd0aCAqIDEwMDAgKSAvIDI1ICksIDExMDAgKTtcclxuXHJcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAnbXl0b2FzdC13cmFwcGVyJyApO1xyXG5cclxuICAgIGNvbnN0IG15dG9hc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG4gICAgaWYgKCBzdGF0ZSA9PT0gU1VDQ0VTUyApIHtcclxuICAgICAgICBteXRvYXN0LnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ215dG9hc3QgbXl0b2FzdC1zdWNjZXNzJyApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBteXRvYXN0LnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ215dG9hc3QgbXl0b2FzdC1lcnJvcicgKTtcclxuICAgIH1cclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoIG15dG9hc3QgKTtcclxuXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAnY29udGVudCcgKTtcclxuICAgIG15dG9hc3QuYXBwZW5kQ2hpbGQoIGNvbnRlbnQgKTtcclxuXHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3AnICk7XHJcbiAgICBwLnN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XHJcbiAgICBwLmlubmVySFRNTCA9IG1lc3NhZ2U7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKCBwICk7XHJcblxyXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZCggd3JhcHBlciApO1xyXG5cclxuICAgIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSggJ2hpZGUnICk7XHJcbiAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoICdzaG93JyApO1xyXG4gICAgc2V0VGltZW91dCggKCApID0+IHtcclxuICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoICdoaWRlJyApO1xyXG4gICAgICAgIHNldFRpbWVvdXQoICgpID0+IHtcclxuICAgICAgICAgICAgd3JhcHBlci5yZW1vdmUoKTtcclxuICAgICAgICB9LCAxMDAwICk7XHJcbiAgICB9LCBkdXJhdGlvbiApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRUb2FzdDtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgQVBJX0JBU0VfVVJMLCBUT0tFTiwgRU1BSUwsIE5BTUUgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBjcmVkZW50aWFscyBBbiBvYmplY3Qgd2l0aCBuYW1lLCBlbWFpbCBhbmQgcGFzc3dvcmRcclxuICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgcmVnaXN0ZXIgcmVzcG9uc2UgZGF0YSwgb3IgcmVqZWN0cyBpZiByZXF1ZXN0c1xyXG4gKiB0byByZWdpc3RlciBmYWlsc1xyXG4gKiAqIEBleGFtcGxlIGNyZWRlbnRpYWxzXHJcbiAqIHtcclxuICogIFwibmFtZVwiOiBcIlByYXNoYW50aCBQdXJhbmlrXCIsXHJcbiAqICBcImVtYWlsXCI6IFwicHVyYW5pMkBleGFtcGxlLmNvbVwiLFxyXG4gKiAgXCJwYXNzd29yZFwiOiBcIlB1cmFuaUAyXCJcclxuICogfVxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXIoIGNyZWRlbnRpYWxzICkge1xyXG4gICAgLy8gY29uc29sZS5sb2coY3JlZGVudGlhbHMpO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIGAke0FQSV9CQVNFX1VSTH0vYXV0aC9yZWdpc3RlcmAsXHJcbiAgICAgICAgY3JlZGVudGlhbHMsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gY3JlZGVudGlhbHMgQW4gb2JqZWN0IHdpdGggZW1haWwgYW5kIHBhc3N3b3JkXHJcbiAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGxvZ2luIHJlc3BvbnNlIGRhdGEsIG9yIHJlamVjdHMgaWYgcmVxdWVzdHMgdG9cclxuICogbG9naW4gZmFpbHNcclxuICogQGV4YW1wbGUgY3JlZGVudGlhbHNcclxuICoge1xyXG4gKiAgXCJlbWFpbFwiOiBcInB1cmFuaTIwQGV4YW1wbGUuY29tXCIsXHJcbiAqICBcInBhc3N3b3JkXCI6IFwiUHVyYW5pQDJcIlxyXG4gKiB9XHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBsb2dpbiggY3JlZGVudGlhbHMgKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS9hdXRoL2xvZ2luYCxcclxuICAgICAgICBjcmVkZW50aWFscyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICk7XHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZXMgdGhlIGF1dGggdG9rZW4gYW5kIGVtYWlsIGZyb20gdGhlIGxvY2FsIHN0b3JhZ2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBsb2dvdXQoKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSggVE9LRU4gKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCBOQU1FICk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSggRU1BSUwgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGF1dGhvcml6YXRpb24gdG9rZW4gZm9yIGxvZ2dlZCBpbiB1c2VyLCBvciBudWxsIGlmIG5vIG9uZSBpcyBsb2dnZWQgaW5cclxuICogQHJldHVybnMgVGhlIGF1dGhvcml6YXRpb24gdG9rZW4gZm9yIGxvZ2dlZCBpbiB1c2VyLCBvciBudWxsIGlmIG5vIG9uZSBpcyBsb2dnZWQgaW5cclxuICovXHJcbmZ1bmN0aW9uIGdldFRva2VuKCkge1xyXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCBUT0tFTiApO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgcmVnaXN0ZXIsXHJcbiAgICBsb2dvdXQsXHJcbiAgICBnZXRUb2tlbixcclxuICAgIGxvZ2luLFxyXG59O1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBBUElfQkFTRV9VUkwgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBnZXRUb2tlbiB9IGZyb20gJy4vYXV0aCc7XHJcbmltcG9ydCAnY29yZS1qcy9zdGFibGUnO1xyXG5pbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZSc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaE1lZXRpbmdzKCBkYXRlICkge1xyXG4gICAgbGV0IGRhdGVTdHJpbmcgPSAnJztcclxuICAgIGlmICggZGF0ZSBpbnN0YW5jZW9mIERhdGUgKSB7XHJcbiAgICAgICAgZGF0ZVN0cmluZyA9IGAke2RhdGUuZ2V0RnVsbFllYXIoKX0tJHtkYXRlLmdldE1vbnRoKCkgKyAxfS0ke2RhdGUuZ2V0RGF0ZSgpfWA7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICBgJHtBUElfQkFTRV9VUkx9L2NhbGVuZGFyP2RhdGU9JHtkYXRlU3RyaW5nfWAsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgJHtnZXRUb2tlbigpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNlYXJjaE1lZXRpbmdzKCBzZWxlY3RlZERhdGVPcHRpb24sIHNlYXJjaFRleHQgPSAnJyApIHtcclxuICAgIGxldCB1cmwgPSBgJHtBUElfQkFTRV9VUkx9L21lZXRpbmdzLz9wZXJpb2Q9JHtzZWxlY3RlZERhdGVPcHRpb259YDtcclxuICAgIGlmICggc2VhcmNoVGV4dCAhPT0gJycgKSB7XHJcbiAgICAgICAgdXJsICs9ICcmc2VhcmNoPSc7XHJcbiAgICAgICAgdXJsICs9ICggc2VhcmNoVGV4dC5zcGxpdCggJyAnICkgKS5qb2luKCAnJTIwJyApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgIHVybCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke2dldFRva2VuKCl9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gYWRkQXR0ZW5kZWVUb01lZXRpbmcoIG1lZXRpbmcsIGVtYWlsICkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wYXRjaChcclxuICAgICAgICBgJHtBUElfQkFTRV9VUkx9L21lZXRpbmdzLyR7bWVldGluZ1snX2lkJ119P2FjdGlvbj1hZGRfYXR0ZW5kZWUmZW1haWw9JHtlbWFpbH1gLFxyXG4gICAgICAgIHt9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7Z2V0VG9rZW4oKX1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBleGN1c2VGcm9tTWVldGluZyggbWVldGluZyApIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucGF0Y2goXHJcbiAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS9tZWV0aW5ncy8ke21lZXRpbmdbJ19pZCddfT9hY3Rpb249cmVtb3ZlX2F0dGVuZGVlYCxcclxuICAgICAgICB7fSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke2dldFRva2VuKCl9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gYWRkTWVldGluZyggc3VibWl0SlNPTiApIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBgJHtBUElfQkFTRV9VUkx9L21lZXRpbmdzL2AsXHJcbiAgICAgICAgc3VibWl0SlNPTixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke2dldFRva2VuKCl9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufVxyXG5cclxuLy8gYXN5bmMgZnVuY3Rpb24gZmV0Y2hNZWV0aW5nQnlJZCggaWQgKSB7XHJcbi8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcclxuLy8gICAgICAgICBgJHtBUElfQkFTRV9VUkx9L3dvcmtzaG9wcy8ke2lkfWAsXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbi8vICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Z2V0VG9rZW4oKX1gLFxyXG4vLyAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICApO1xyXG5cclxuLy8gICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4vLyB9XHJcblxyXG4vLyBhc3luYyBmdW5jdGlvbiBkZWxldGVNZWV0aW5nQnlJZCggaWQgKSB7XHJcbi8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmRlbGV0ZShcclxuLy8gICAgICAgICBgJHtBUElfQkFTRV9VUkx9L3dvcmtzaG9wcy8ke2lkfWAsXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbi8vICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Z2V0VG9rZW4oKX1gLFxyXG4vLyAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICApO1xyXG5cclxuLy8gICAgIHJldHVybiByZXNwb25zZTtcclxuLy8gfVxyXG5cclxuZXhwb3J0IHtcclxuICAgIGZldGNoTWVldGluZ3MsXHJcbiAgICBzZWFyY2hNZWV0aW5ncyxcclxuICAgIGFkZEF0dGVuZGVlVG9NZWV0aW5nLFxyXG4gICAgZXhjdXNlRnJvbU1lZXRpbmcsXHJcbiAgICBhZGRNZWV0aW5nLFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9