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

setNavbar();
showBodyOnLoad();

/***/ }),

/***/ "./public/js/constants.js":
/*!********************************!*\
  !*** ./public/js/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./public/js/data/add_team_form.js":
/*!*****************************************!*\
  !*** ./public/js/data/add_team_form.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable */
var ADD_TEAM_FORM = {
  "name": "Agile team 57",
  "shortName": "agilenew",
  "description": "Team spreading awareness about Agile practices at Zwiggy",
  "members": []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ADD_TEAM_FORM);

/***/ }),

/***/ "./public/js/services/auth.js":
/*!************************************!*\
  !*** ./public/js/services/auth.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./public/js/teams_list.js":
/*!*********************************!*\
  !*** ./public/js/teams_list.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/main.css */ "./public/css/main.css");
/* harmony import */ var _css_teams_list_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/teams_list.css */ "./public/css/teams_list.css");
/* harmony import */ var _customs_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customs/app */ "./public/js/customs/app.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./public/js/constants.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app */ "./public/js/app.js");
/* harmony import */ var _services_teams__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/teams */ "./public/js/services/teams.js");
/* harmony import */ var _data_add_team_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data/add_team_form */ "./public/js/data/add_team_form.js");
/* harmony import */ var _services_user_management__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/user_management */ "./public/js/services/user_management.js");









var users = [];

function populateTeams(teams) {
  var meetingsListDiv = document.getElementById('teamsList');
  meetingsListDiv.innerHTML = '';

  if (teams && teams.length > 0) {
    var meetingsListTitle = document.getElementById('teamsListTitle');
    meetingsListTitle.innerHTML = 'View and edit the teams that you are part of';
    teams.forEach(function (team) {
      var members = [];
      team['members'].forEach(function (member) {
        members.push(member['email']);
      });
      var card = document.createElement('div'); // card.setAttribute( 'class', 'card my-col p-3 m-2 col-12 col-sm-6 col-md-4' );

      card.setAttribute('class', 'card p-3 m-2');
      var cardBody = document.createElement('div');
      cardBody.setAttribute('class', 'card-body');
      var cardTitle = document.createElement('h5');
      cardTitle.setAttribute('class', 'card-title');
      cardTitle.innerHTML = team['name'];
      cardBody.appendChild(cardTitle);
      var cardText = document.createElement('p');
      cardTitle.setAttribute('class', 'card-text');
      cardText.innerHTML = "@".concat(team['shortName']);
      cardBody.appendChild(cardText);
      var buttonExcuse = document.createElement('button');
      buttonExcuse.innerHTML = 'Leave team';
      buttonExcuse.setAttribute('class', 'button-outline-red px-4');
      buttonExcuse.addEventListener('click', function () {
        (0,_services_teams__WEBPACK_IMPORTED_MODULE_6__.excuseFromTeam)(team).then(function (response) {
          if (response.message === _constants__WEBPACK_IMPORTED_MODULE_4__.SUCCESS) {
            (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)('You have been removed from the team', document.body, _constants__WEBPACK_IMPORTED_MODULE_4__.SUCCESS);
            card.remove();
          } else {
            (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error removing: ".concat(response.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_4__.ERROR);
          }
        })["catch"](function (error) {
          try {
            (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error removing: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_4__.ERROR);
          } catch (_unused) {
            (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error removing: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_4__.ERROR);
          }
        });
      });
      cardBody.appendChild(buttonExcuse);
      var hr = document.createElement('hr');
      hr.setAttribute('class', 'my-3');
      cardBody.appendChild(hr);
      var teamMembers = document.createElement('p');
      teamMembers.innerHTML = "<strong>Members: </strong> ".concat(members.join(', '));
      cardBody.appendChild(teamMembers);
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
        if (members.includes(user['email']) === false) {
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
      colSelectButton.innerHTML = 'Add member';
      colSelectButton.addEventListener('click', function () {
        if (selectMember.value !== 'none') {
          (0,_services_teams__WEBPACK_IMPORTED_MODULE_6__.addMemberToTeam)(team, selectMember.value).then(function (response) {
            if (response.message === _constants__WEBPACK_IMPORTED_MODULE_4__.SUCCESS) {
              members.push(selectMember.value);
              teamMembers.innerHTML = "<strong>Members: </strong> ".concat(members.join(', '));
              (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)('Added member successfully', document.body, _constants__WEBPACK_IMPORTED_MODULE_4__.SUCCESS);
            } else {
              (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error adding member: ".concat(response.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_4__.ERROR);
            }
          })["catch"](function (error) {
            try {
              (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error adding member: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_4__.ERROR);
            } catch (_unused2) {
              (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error adding member: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_4__.ERROR);
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
    var _meetingsListTitle = document.getElementById('teamsListTitle');

    _meetingsListTitle.innerHTML = 'Sorry:( you are not part of any team.';
  }
}

function init() {
  // redirect to login page if authorization token doesnt exist
  if (localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_4__.TOKEN) === null) {
    window.location = '/login';
  } // fetch your teams


  (0,_services_teams__WEBPACK_IMPORTED_MODULE_6__.fetchTeams)().then(function (teams) {
    if (teams.message === _constants__WEBPACK_IMPORTED_MODULE_4__.SUCCESS) {
      (0,_services_user_management__WEBPACK_IMPORTED_MODULE_8__.default)().then(function (_users) {
        if (_users.message === _constants__WEBPACK_IMPORTED_MODULE_4__.SUCCESS) {
          users = _users.data;
          populateTeams(teams.data);
        } else {
          (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error fetching users: ".concat(_users.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_4__.ERROR);
        }
      })["catch"](function (error) {
        try {
          (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error fetching users: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_4__.ERROR);
        } catch (_unused3) {
          (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error fetching users: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_4__.ERROR);
        }
      });
    } else {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error fetching teams: ".concat(teams.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_4__.ERROR);
    }
  })["catch"](function (error) {
    try {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error fetching teams: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_4__.ERROR);
    } catch (_unused4) {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error fetching teams: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_4__.ERROR);
    }
  });
}

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
  document.getElementById('inputTeamName').value = '';
  document.getElementById('inputShortName').value = '';
  document.getElementById('teamDescription').value = '';
  document.getElementById('inputMembers').value = '';
}

var myModal = null;
document.getElementById('addNewTeamButton').addEventListener('click', function () {
  myModal = new bootstrap.Modal(document.getElementById('myModal'));
  myModal.show();
});
document.getElementById('modalDismiss').addEventListener('click', function () {
  // const myModal = new bootstrap.Modal( document.getElementById( 'myModal' ) );
  myModal.hide();
});
document.getElementById('submitAddTeam').addEventListener('click', function () {
  // const myModal = new bootstrap.Modal( document.getElementById( 'myModal' ) );
  myModal.hide();
  var teamName = document.getElementById('inputTeamName').value;

  if (teamName.length === 0) {
    (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)('Please enter a  team name', document.body, _constants__WEBPACK_IMPORTED_MODULE_4__.ERROR);
    return;
  }

  var teamShortName = document.getElementById('inputShortName').value;

  if (teamName.length === 0) {
    (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)('Please enter a team Short name.', document.body, _constants__WEBPACK_IMPORTED_MODULE_4__.ERROR);
    return;
  }

  var teamDescription = document.getElementById('teamDescription').value;

  if (teamName.length <= 0) {
    (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)('Please enter a longer description ( 10 characters min )', document.body, _constants__WEBPACK_IMPORTED_MODULE_4__.ERROR);
    return;
  }

  var teamMembers = document.getElementById('inputMembers').value.replace(/\s+/g, '').split(','); // TODO: Validation

  var submitJSON = _data_add_team_form__WEBPACK_IMPORTED_MODULE_7__.default;
  submitJSON['name'] = teamName;
  submitJSON['shortName'] = teamShortName;
  submitJSON['description'] = teamDescription;
  var attendeesJSON = [];

  for (var idxAtt = 0; idxAtt < teamMembers.length; idxAtt += 1) {
    var member = teamMembers[idxAtt];

    switch (attendeeType(member)) {
      case 'email':
        for (var idx = 0; idx < users.length; idx += 1) {
          if (member.toLowerCase() === users[idx]['email'].toLowerCase()) {
            attendeesJSON.push({
              userId: users[idx]['_id'],
              email: users[idx]['email']
            });
            break;
          }
        }

        break;

      default:
        break;
    }
  }

  submitJSON['members'] = attendeesJSON;
  (0,_services_teams__WEBPACK_IMPORTED_MODULE_6__.addTeam)(submitJSON).then(function (response) {
    if (response.message === _constants__WEBPACK_IMPORTED_MODULE_4__.SUCCESS) {
      myModal.hide();
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)('Team added successfully', document.body, _constants__WEBPACK_IMPORTED_MODULE_4__.SUCCESS);
      resetForm();
      setTimeout(function () {
        window.location.reload();
      }, 1500);
    } else {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error adding team: ".concat(response.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_4__.ERROR);
    }
  })["catch"](function (error) {
    myModal.hide();

    try {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error adding team: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_4__.ERROR);
    } catch (_unused5) {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error adding team: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_4__.ERROR);
    }
  });
});
init();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./public/css/teams_list.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./public/css/teams_list.css ***!
  \*************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    font-size: 16px;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n.my-col {\r\n    flex-basis: 30%;\r\n    flex-grow: 0;\r\n    flex-shrink: 0;\r\n}\r\n\r\nhr {\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n    border: 0;\r\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.my-grid {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));\r\n}", "",{"version":3,"sources":["webpack://./public/css/teams_list.css"],"names":[],"mappings":"AAAA;IACI,eAAe;AACnB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,SAAS;IACT,wCAAwC;AAC5C;;AAEA;IACI,aAAa;IACb,2DAA2D;AAC/D","sourcesContent":[":root {\r\n    font-size: 16px;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n.my-col {\r\n    flex-basis: 30%;\r\n    flex-grow: 0;\r\n    flex-shrink: 0;\r\n}\r\n\r\nhr {\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n    border: 0;\r\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.my-grid {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./public/css/teams_list.css":
/*!***********************************!*\
  !*** ./public/css/teams_list.css ***!
  \***********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_teams_list_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./teams_list.css */ "./node_modules/css-loader/dist/cjs.js!./public/css/teams_list.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_teams_list_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_teams_list_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_teams_list_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_teams_list_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


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
/******/ 			"teams_list": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_bootstrap_dist_css_bootstrap_min_css","vendors-node_modules_axios_index_js-node_modules_core-js_stable_index_js-node_modules_regener-efddf7","public_css_main_css-data_image_svg_xml_3csvg_xmlns_27http_www_w3_org_2000_svg_27_viewBox_27-4-b01be0"], () => (__webpack_require__("./public/js/teams_list.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vbWVldGluZ3MvLi9wdWJsaWMvanMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2pzL2N1c3RvbXMvYXBwLmpzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2pzL2RhdGEvYWRkX3RlYW1fZm9ybS5qcyIsIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9qcy9zZXJ2aWNlcy9hdXRoLmpzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2pzL3NlcnZpY2VzL3RlYW1zLmpzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2pzL3NlcnZpY2VzL3VzZXJfbWFuYWdlbWVudC5qcyIsIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9qcy90ZWFtc19saXN0LmpzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2Nzcy90ZWFtc19saXN0LmNzcyIsIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9jc3MvdGVhbXNfbGlzdC5jc3M/NzczYyIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWVldGluZ3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsic2V0TmF2YmFyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIlRPS0VOIiwid2luZG93IiwibG9jYXRpb24iLCJwcm9maWxlSW1hZ2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2V0QXR0cmlidXRlIiwiQVBJX0JBU0VfVVJMIiwiSUQiLCJOQU1FIiwic3BsaXQiLCJmaXJzdE5hbWUiLCJpbm5lckhUTUwiLCJzaG93Qm9keU9uTG9hZCIsImJvZHkiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJwcm9jZXNzIiwiRU1BSUwiLCJTVUNDRVNTIiwiRVJST1IiLCJhZGRUb2FzdCIsIm1lc3NhZ2UiLCJlbGVtZW50Iiwic3RhdGUiLCJkdXJhdGlvbiIsIk1hdGgiLCJtYXgiLCJjZWlsIiwibGVuZ3RoIiwid3JhcHBlciIsImNyZWF0ZUVsZW1lbnQiLCJteXRvYXN0IiwiYXBwZW5kQ2hpbGQiLCJjb250ZW50IiwicCIsInN0eWxlIiwibWFyZ2luQm90dG9tIiwiYWRkIiwic2V0VGltZW91dCIsIkFERF9URUFNX0ZPUk0iLCJyZWdpc3RlciIsImNyZWRlbnRpYWxzIiwiYXhpb3MiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJkYXRhIiwibG9naW4iLCJsb2dvdXQiLCJyZW1vdmVJdGVtIiwiZ2V0VG9rZW4iLCJmZXRjaFRlYW1zIiwiQXV0aG9yaXphdGlvbiIsImFkZFRlYW0iLCJ0ZWFtSlNPTiIsImFkZE1lbWJlclRvVGVhbSIsInRlYW0iLCJlbWFpbCIsImV4Y3VzZUZyb21UZWFtIiwiZ2V0QWxsVXNlcnMiLCJ1c2VycyIsInBvcHVsYXRlVGVhbXMiLCJ0ZWFtcyIsIm1lZXRpbmdzTGlzdERpdiIsIm1lZXRpbmdzTGlzdFRpdGxlIiwiZm9yRWFjaCIsIm1lbWJlcnMiLCJtZW1iZXIiLCJwdXNoIiwiY2FyZCIsImNhcmRCb2R5IiwiY2FyZFRpdGxlIiwiY2FyZFRleHQiLCJidXR0b25FeGN1c2UiLCJhZGRFdmVudExpc3RlbmVyIiwidGhlbiIsImVycm9yIiwiZGVzY3JpcHRpb24iLCJociIsInRlYW1NZW1iZXJzIiwiam9pbiIsInNlbGVjdE1lbWJlckRpdiIsImNvbFNlbGVjdE1lbWJlciIsImxhYmVsU2VsZWN0TWVtYmVyIiwic2VsZWN0TWVtYmVyIiwibm9uTWVtYmVycyIsInVzZXIiLCJpbmNsdWRlcyIsIm5vbk1lbWJlciIsImNvbFNlbGVjdE1lbWJlcjIiLCJjb2xTZWxlY3RCdXR0b24iLCJ2YWx1ZSIsImluaXQiLCJfdXNlcnMiLCJ2YWxpZGF0ZUVtYWlsIiwicmUiLCJ0ZXN0IiwiU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJ2YWxpZGF0ZVRlYW0iLCJhdHRlbmRlZVR5cGUiLCJhdHRlbmRlZSIsInR5cGUiLCJyZXNldEZvcm0iLCJteU1vZGFsIiwiYm9vdHN0cmFwIiwiTW9kYWwiLCJzaG93IiwiaGlkZSIsInRlYW1OYW1lIiwidGVhbVNob3J0TmFtZSIsInRlYW1EZXNjcmlwdGlvbiIsInJlcGxhY2UiLCJzdWJtaXRKU09OIiwiYXR0ZW5kZWVzSlNPTiIsImlkeEF0dCIsImlkeCIsInVzZXJJZCIsInJlbG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsU0FBVCxHQUFxQjtBQUNqQixNQUFLQyxZQUFZLENBQUNDLE9BQWIsQ0FBc0JDLDZDQUF0QixNQUFrQyxJQUF2QyxFQUE4QztBQUMxQ0MsVUFBTSxDQUFDQyxRQUFQLEdBQWtCLFFBQWxCO0FBQ0g7O0FBRUQsTUFBTUMsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBeUIsUUFBekIsQ0FBckI7QUFDQUYsY0FBWSxDQUFDRyxZQUFiLENBQTJCLEtBQTNCLFlBQXFDQyxvREFBckMsY0FBcURULFlBQVksQ0FBQ0MsT0FBYixDQUFzQlMsMENBQXRCLENBQXJEOztBQUVBLDhCQUFvQlYsWUFB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b0JBQW9CO1dBQzFCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLDRHOzs7OztVQzlDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6InRlYW1zX2xpc3QuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBJX0JBU0VfVVJMLCBJRCwgTkFNRSwgVE9LRU4gfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5mdW5jdGlvbiBzZXROYXZiYXIoKSB7XHJcbiAgICBpZiAoIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCBUT0tFTiApID09PSBudWxsICkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICcvbG9naW4nO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByb2ZpbGVJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnbmF2UGljJyApO1xyXG4gICAgcHJvZmlsZUltYWdlLnNldEF0dHJpYnV0ZSggJ3NyYycsIGAke0FQSV9CQVNFX1VSTH0vJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggSUQgKX0ucG5nYCApO1xyXG5cclxuICAgIGNvbnN0IFtmaXJzdE5hbWVdID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oIE5BTUUgKS5zcGxpdCggJyAnICk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ25hbWVOYXYnICkuaW5uZXJIVE1MID0gZmlyc3ROYW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93Qm9keU9uTG9hZCgpIHtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSggJ2hpZGUnICk7XHJcbn1cclxuXHJcbnNldE5hdmJhcigpO1xyXG5zaG93Qm9keU9uTG9hZCgpO1xyXG4iLCIvLyBjb25zdCBBUElfQkFTRV9VUkwgPSAnaHR0cDovL215bWVldGluZ3NhcHAuaGVyb2t1YXBwLmNvbS9hcGknO1xyXG5jb25zdCB7IEFQSV9CQVNFX1VSTCB9ID0gcHJvY2Vzcy5lbnY7XHJcbmNvbnN0IFRPS0VOID0gJ3Rva2VuJztcclxuY29uc3QgRU1BSUwgPSAnZW1haWwnO1xyXG5jb25zdCBOQU1FID0gJ25hbWUnO1xyXG5jb25zdCBJRCA9ICdpZCc7XHJcblxyXG5jb25zdCBTVUNDRVNTID0gJ3N1Y2Nlc3MnO1xyXG5jb25zdCBFUlJPUiA9ICdlcnJvcic7XHJcblxyXG5leHBvcnQge1xyXG4gICAgQVBJX0JBU0VfVVJMLFxyXG4gICAgVE9LRU4sXHJcbiAgICBFTUFJTCxcclxuICAgIE5BTUUsXHJcbiAgICBJRCxcclxuICAgIFNVQ0NFU1MsXHJcbiAgICBFUlJPUixcclxufTtcclxuIiwiaW1wb3J0IHsgU1VDQ0VTUyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcblxyXG5mdW5jdGlvbiBhZGRUb2FzdCggbWVzc2FnZSwgZWxlbWVudCwgc3RhdGUgKSB7XHJcbiAgICBjb25zdCBkdXJhdGlvbiA9IE1hdGgubWF4KCBNYXRoLmNlaWwoICggbWVzc2FnZS5sZW5ndGggKiAxMDAwICkgLyAyNSApLCAxMTAwICk7XHJcblxyXG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XHJcbiAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ215dG9hc3Qtd3JhcHBlcicgKTtcclxuXHJcbiAgICBjb25zdCBteXRvYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuICAgIGlmICggc3RhdGUgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgbXl0b2FzdC5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdteXRvYXN0IG15dG9hc3Qtc3VjY2VzcycgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbXl0b2FzdC5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdteXRvYXN0IG15dG9hc3QtZXJyb3InICk7XHJcbiAgICB9XHJcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKCBteXRvYXN0ICk7XHJcblxyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XHJcbiAgICBjb250ZW50LnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2NvbnRlbnQnICk7XHJcbiAgICBteXRvYXN0LmFwcGVuZENoaWxkKCBjb250ZW50ICk7XHJcblxyXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdwJyApO1xyXG4gICAgcC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwO1xyXG4gICAgcC5pbm5lckhUTUwgPSBtZXNzYWdlO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCggcCApO1xyXG5cclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoIHdyYXBwZXIgKTtcclxuXHJcbiAgICB3cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoICdoaWRlJyApO1xyXG4gICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCAnc2hvdycgKTtcclxuICAgIHNldFRpbWVvdXQoICggKSA9PiB7XHJcbiAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCAnaGlkZScgKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdyYXBwZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgfSwgMTAwMCApO1xyXG4gICAgfSwgZHVyYXRpb24gKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkVG9hc3Q7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXHJcbmNvbnN0IEFERF9URUFNX0ZPUk0gPSB7XHJcbiAgICBcIm5hbWVcIjogXCJBZ2lsZSB0ZWFtIDU3XCIsXHJcbiAgICBcInNob3J0TmFtZVwiOiBcImFnaWxlbmV3XCIsXHJcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiVGVhbSBzcHJlYWRpbmcgYXdhcmVuZXNzIGFib3V0IEFnaWxlIHByYWN0aWNlcyBhdCBad2lnZ3lcIixcclxuICAgIFwibWVtYmVyc1wiOiBbXVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFERF9URUFNX0ZPUk07IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgQVBJX0JBU0VfVVJMLCBUT0tFTiwgRU1BSUwsIE5BTUUgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBjcmVkZW50aWFscyBBbiBvYmplY3Qgd2l0aCBuYW1lLCBlbWFpbCBhbmQgcGFzc3dvcmRcclxuICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgcmVnaXN0ZXIgcmVzcG9uc2UgZGF0YSwgb3IgcmVqZWN0cyBpZiByZXF1ZXN0c1xyXG4gKiB0byByZWdpc3RlciBmYWlsc1xyXG4gKiAqIEBleGFtcGxlIGNyZWRlbnRpYWxzXHJcbiAqIHtcclxuICogIFwibmFtZVwiOiBcIlByYXNoYW50aCBQdXJhbmlrXCIsXHJcbiAqICBcImVtYWlsXCI6IFwicHVyYW5pMkBleGFtcGxlLmNvbVwiLFxyXG4gKiAgXCJwYXNzd29yZFwiOiBcIlB1cmFuaUAyXCJcclxuICogfVxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXIoIGNyZWRlbnRpYWxzICkge1xyXG4gICAgLy8gY29uc29sZS5sb2coY3JlZGVudGlhbHMpO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIGAke0FQSV9CQVNFX1VSTH0vYXV0aC9yZWdpc3RlcmAsXHJcbiAgICAgICAgY3JlZGVudGlhbHMsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gY3JlZGVudGlhbHMgQW4gb2JqZWN0IHdpdGggZW1haWwgYW5kIHBhc3N3b3JkXHJcbiAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGxvZ2luIHJlc3BvbnNlIGRhdGEsIG9yIHJlamVjdHMgaWYgcmVxdWVzdHMgdG9cclxuICogbG9naW4gZmFpbHNcclxuICogQGV4YW1wbGUgY3JlZGVudGlhbHNcclxuICoge1xyXG4gKiAgXCJlbWFpbFwiOiBcInB1cmFuaTIwQGV4YW1wbGUuY29tXCIsXHJcbiAqICBcInBhc3N3b3JkXCI6IFwiUHVyYW5pQDJcIlxyXG4gKiB9XHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBsb2dpbiggY3JlZGVudGlhbHMgKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS9hdXRoL2xvZ2luYCxcclxuICAgICAgICBjcmVkZW50aWFscyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICk7XHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZXMgdGhlIGF1dGggdG9rZW4gYW5kIGVtYWlsIGZyb20gdGhlIGxvY2FsIHN0b3JhZ2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBsb2dvdXQoKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSggVE9LRU4gKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCBOQU1FICk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSggRU1BSUwgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGF1dGhvcml6YXRpb24gdG9rZW4gZm9yIGxvZ2dlZCBpbiB1c2VyLCBvciBudWxsIGlmIG5vIG9uZSBpcyBsb2dnZWQgaW5cclxuICogQHJldHVybnMgVGhlIGF1dGhvcml6YXRpb24gdG9rZW4gZm9yIGxvZ2dlZCBpbiB1c2VyLCBvciBudWxsIGlmIG5vIG9uZSBpcyBsb2dnZWQgaW5cclxuICovXHJcbmZ1bmN0aW9uIGdldFRva2VuKCkge1xyXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCBUT0tFTiApO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgcmVnaXN0ZXIsXHJcbiAgICBsb2dvdXQsXHJcbiAgICBnZXRUb2tlbixcclxuICAgIGxvZ2luLFxyXG59O1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBBUElfQkFTRV9VUkwgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBnZXRUb2tlbiB9IGZyb20gJy4vYXV0aCc7XHJcbmltcG9ydCAnY29yZS1qcy9zdGFibGUnO1xyXG5pbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZSc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaFRlYW1zKCkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS90ZWFtc2AsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgJHtnZXRUb2tlbigpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGFkZFRlYW0oIHRlYW1KU09OICkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIGAke0FQSV9CQVNFX1VSTH0vdGVhbXMvYCxcclxuICAgICAgICB0ZWFtSlNPTixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke2dldFRva2VuKCl9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gYWRkTWVtYmVyVG9UZWFtKCB0ZWFtLCBlbWFpbCApIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucGF0Y2goXHJcbiAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS90ZWFtcy8ke3RlYW1bJ19pZCddfT9hY3Rpb249YWRkX21lbWJlciZlbWFpbD0ke2VtYWlsfWAsXHJcbiAgICAgICAge30sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgJHtnZXRUb2tlbigpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGV4Y3VzZUZyb21UZWFtKCB0ZWFtICkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wYXRjaChcclxuICAgICAgICBgJHtBUElfQkFTRV9VUkx9L3RlYW1zLyR7dGVhbVsnX2lkJ119P2FjdGlvbj1yZW1vdmVfbWVtYmVyYCxcclxuICAgICAgICB7fSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke2dldFRva2VuKCl9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIGZldGNoVGVhbXMsXHJcbiAgICBhZGRUZWFtLFxyXG4gICAgYWRkTWVtYmVyVG9UZWFtLFxyXG4gICAgZXhjdXNlRnJvbVRlYW0sXHJcbn07XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEFQSV9CQVNFX1VSTCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGdldFRva2VuIH0gZnJvbSAnLi9hdXRoJztcclxuXHJcbmltcG9ydCAnY29yZS1qcy9zdGFibGUnO1xyXG5pbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZSc7XHJcblxyXG4vKipcclxuICogR2V0IHRoZSBsaXN0IG9mIGFsbCByZWdpc3RlcmVkIHVzZXJzLlxyXG4gKiBAcmV0dXJucyBsaXN0IG9mIGFsbCB1c2Vyc1xyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gZ2V0QWxsVXNlcnMoKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICBgJHtBUElfQkFTRV9VUkx9L3VzZXJzYCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke2dldFRva2VuKCl9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0QWxsVXNlcnM7XHJcbiIsImltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuaW1wb3J0ICcuLi9jc3MvbWFpbi5jc3MnO1xyXG5pbXBvcnQgJy4uL2Nzcy90ZWFtc19saXN0LmNzcyc7XHJcbmltcG9ydCBhZGRUb2FzdCBmcm9tICcuL2N1c3RvbXMvYXBwJztcclxuaW1wb3J0IHsgU1VDQ0VTUywgRVJST1IsIFRPS0VOIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgJy4vYXBwJztcclxuaW1wb3J0IHsgYWRkTWVtYmVyVG9UZWFtLCBmZXRjaFRlYW1zLCBleGN1c2VGcm9tVGVhbSwgYWRkVGVhbSB9IGZyb20gJy4vc2VydmljZXMvdGVhbXMnO1xyXG5pbXBvcnQgQUREX1RFQU1fRk9STSBmcm9tICcuL2RhdGEvYWRkX3RlYW1fZm9ybSc7XHJcbmltcG9ydCBnZXRBbGxVc2VycyBmcm9tICcuL3NlcnZpY2VzL3VzZXJfbWFuYWdlbWVudCc7XHJcblxyXG5sZXQgdXNlcnMgPSBbXTtcclxuXHJcbmZ1bmN0aW9uIHBvcHVsYXRlVGVhbXMoIHRlYW1zICkge1xyXG4gICAgY29uc3QgbWVldGluZ3NMaXN0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICd0ZWFtc0xpc3QnICk7XHJcbiAgICBtZWV0aW5nc0xpc3REaXYuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgaWYgKCB0ZWFtcyAmJiB0ZWFtcy5sZW5ndGggPiAwICkge1xyXG4gICAgICAgIGNvbnN0IG1lZXRpbmdzTGlzdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICd0ZWFtc0xpc3RUaXRsZScgKTtcclxuICAgICAgICBtZWV0aW5nc0xpc3RUaXRsZS5pbm5lckhUTUwgPSAnVmlldyBhbmQgZWRpdCB0aGUgdGVhbXMgdGhhdCB5b3UgYXJlIHBhcnQgb2YnO1xyXG4gICAgICAgIHRlYW1zLmZvckVhY2goICggdGVhbSApID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbWVtYmVycyA9IFtdO1xyXG4gICAgICAgICAgICB0ZWFtWydtZW1iZXJzJ10uZm9yRWFjaCggKCBtZW1iZXIgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtZW1iZXJzLnB1c2goIG1lbWJlclsnZW1haWwnXSApO1xyXG4gICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuICAgICAgICAgICAgLy8gY2FyZC5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdjYXJkIG15LWNvbCBwLTMgbS0yIGNvbC0xMiBjb2wtc20tNiBjb2wtbWQtNCcgKTtcclxuICAgICAgICAgICAgY2FyZC5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdjYXJkIHAtMyBtLTInICk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmRCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuICAgICAgICAgICAgY2FyZEJvZHkuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAnY2FyZC1ib2R5JyApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2g1JyApO1xyXG4gICAgICAgICAgICBjYXJkVGl0bGUuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAnY2FyZC10aXRsZScgKTtcclxuICAgICAgICAgICAgY2FyZFRpdGxlLmlubmVySFRNTCA9IHRlYW1bJ25hbWUnXTtcclxuICAgICAgICAgICAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQoIGNhcmRUaXRsZSApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2FyZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAncCcgKTtcclxuICAgICAgICAgICAgY2FyZFRpdGxlLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2NhcmQtdGV4dCcgKTtcclxuICAgICAgICAgICAgY2FyZFRleHQuaW5uZXJIVE1MID0gYEAke3RlYW1bJ3Nob3J0TmFtZSddfWA7XHJcbiAgICAgICAgICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKCBjYXJkVGV4dCApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYnV0dG9uRXhjdXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2J1dHRvbicgKTtcclxuICAgICAgICAgICAgYnV0dG9uRXhjdXNlLmlubmVySFRNTCA9ICdMZWF2ZSB0ZWFtJztcclxuICAgICAgICAgICAgYnV0dG9uRXhjdXNlLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2J1dHRvbi1vdXRsaW5lLXJlZCBweC00JyApO1xyXG4gICAgICAgICAgICBidXR0b25FeGN1c2UuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXhjdXNlRnJvbVRlYW0oIHRlYW0gKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCAoIHJlc3BvbnNlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHJlc3BvbnNlLm1lc3NhZ2UgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggJ1lvdSBoYXZlIGJlZW4gcmVtb3ZlZCBmcm9tIHRoZSB0ZWFtJywgZG9jdW1lbnQuYm9keSwgU1VDQ0VTUyApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgcmVtb3Zpbmc6ICR7cmVzcG9uc2UubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCAoIGVycm9yICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciByZW1vdmluZzogJHtlcnJvci5yZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9ufWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciByZW1vdmluZzogJHtlcnJvci5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQoIGJ1dHRvbkV4Y3VzZSApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnaHInICk7XHJcbiAgICAgICAgICAgIGhyLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ215LTMnICk7XHJcbiAgICAgICAgICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKCBociApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdGVhbU1lbWJlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAncCcgKTtcclxuICAgICAgICAgICAgdGVhbU1lbWJlcnMuaW5uZXJIVE1MID0gYDxzdHJvbmc+TWVtYmVyczogPC9zdHJvbmc+ICR7bWVtYmVycy5qb2luKCAnLCAnICl9YDtcclxuICAgICAgICAgICAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQoIHRlYW1NZW1iZXJzICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RNZW1iZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG4gICAgICAgICAgICBzZWxlY3RNZW1iZXJEaXYuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAncm93IGd5LTIgZ3gtMyBhbGlnbi1pdGVtcy1jZW50ZXInICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb2xTZWxlY3RNZW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG4gICAgICAgICAgICBjb2xTZWxlY3RNZW1iZXIuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAnY29sLWF1dG8nICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBsYWJlbFNlbGVjdE1lbWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdsYWJlbCcgKTtcclxuICAgICAgICAgICAgbGFiZWxTZWxlY3RNZW1iZXIuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAndmlzdWFsbHktaGlkZGVuJyApO1xyXG4gICAgICAgICAgICBsYWJlbFNlbGVjdE1lbWJlci5zZXRBdHRyaWJ1dGUoICdmb3InLCAnc2VsZWN0TWVtYmVyJyApO1xyXG4gICAgICAgICAgICBjb2xTZWxlY3RNZW1iZXIuYXBwZW5kQ2hpbGQoIGxhYmVsU2VsZWN0TWVtYmVyICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RNZW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnc2VsZWN0JyApO1xyXG4gICAgICAgICAgICBzZWxlY3RNZW1iZXIuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAnZm9ybS1zZWxlY3QnICk7XHJcbiAgICAgICAgICAgIHNlbGVjdE1lbWJlci5zZXRBdHRyaWJ1dGUoICdpZCcsICdzZWxlY3RNZW1iZXInICk7XHJcbiAgICAgICAgICAgIHNlbGVjdE1lbWJlci5zZXRBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJywgJ1NlbGVjdCBNZW1iZXInICk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vbk1lbWJlcnMgPSBbXTtcclxuICAgICAgICAgICAgdXNlcnMuZm9yRWFjaCggKCB1c2VyICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBtZW1iZXJzLmluY2x1ZGVzKCB1c2VyWydlbWFpbCddICkgPT09IGZhbHNlICkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vbk1lbWJlcnMucHVzaCggdXNlciApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICBzZWxlY3RNZW1iZXIuaW5uZXJIVE1MID0gJzxvcHRpb24gdmFsdWU9XCJub25lXCIgc2VsZWN0ZWQ+U2VsZWN0IG1lbWJlcjwvb3B0aW9uPic7XHJcbiAgICAgICAgICAgIG5vbk1lbWJlcnMuZm9yRWFjaCggKCBub25NZW1iZXIgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RNZW1iZXIuaW5uZXJIVE1MICs9IGA8b3B0aW9uIHZhbHVlPVwiJHtub25NZW1iZXJbJ2VtYWlsJ119XCI+JHtub25NZW1iZXJbJ2VtYWlsJ119PC9vcHRpb24+YDtcclxuICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICBjb2xTZWxlY3RNZW1iZXIuYXBwZW5kQ2hpbGQoIHNlbGVjdE1lbWJlciApO1xyXG5cclxuICAgICAgICAgICAgc2VsZWN0TWVtYmVyRGl2LmFwcGVuZENoaWxkKCBjb2xTZWxlY3RNZW1iZXIgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbFNlbGVjdE1lbWJlcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG4gICAgICAgICAgICBjb2xTZWxlY3RNZW1iZXIyLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2NvbC1hdXRvJyApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY29sU2VsZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2J1dHRvbicgKTtcclxuICAgICAgICAgICAgY29sU2VsZWN0QnV0dG9uLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2J1dHRvbiBteC0yJyApO1xyXG4gICAgICAgICAgICBjb2xTZWxlY3RCdXR0b24uaW5uZXJIVE1MID0gJ0FkZCBtZW1iZXInO1xyXG4gICAgICAgICAgICBjb2xTZWxlY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBzZWxlY3RNZW1iZXIudmFsdWUgIT09ICdub25lJyApIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRNZW1iZXJUb1RlYW0oIHRlYW0sIHNlbGVjdE1lbWJlci52YWx1ZSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCAoIHJlc3BvbnNlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCByZXNwb25zZS5tZXNzYWdlID09PSBTVUNDRVNTICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbWJlcnMucHVzaCggc2VsZWN0TWVtYmVyLnZhbHVlICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU1lbWJlcnMuaW5uZXJIVE1MID0gYDxzdHJvbmc+TWVtYmVyczogPC9zdHJvbmc+ICR7bWVtYmVycy5qb2luKCAnLCAnICl9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggJ0FkZGVkIG1lbWJlciBzdWNjZXNzZnVsbHknLCBkb2N1bWVudC5ib2R5LCBTVUNDRVNTICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgYWRkaW5nIG1lbWJlcjogJHtyZXNwb25zZS5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goICggZXJyb3IgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgYWRkaW5nIG1lbWJlcjogJHtlcnJvci5yZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9ufWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGFkZGluZyBtZW1iZXI6ICR7ZXJyb3IubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgICAgIGNvbFNlbGVjdE1lbWJlcjIuYXBwZW5kQ2hpbGQoIGNvbFNlbGVjdEJ1dHRvbiApO1xyXG5cclxuICAgICAgICAgICAgc2VsZWN0TWVtYmVyRGl2LmFwcGVuZENoaWxkKCBjb2xTZWxlY3RNZW1iZXIyICk7XHJcbiAgICAgICAgICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKCBzZWxlY3RNZW1iZXJEaXYgKTtcclxuICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZCggY2FyZEJvZHkgKTtcclxuICAgICAgICAgICAgbWVldGluZ3NMaXN0RGl2LmFwcGVuZENoaWxkKCBjYXJkICk7XHJcbiAgICAgICAgfSApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBtZWV0aW5nc0xpc3RUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAndGVhbXNMaXN0VGl0bGUnICk7XHJcbiAgICAgICAgbWVldGluZ3NMaXN0VGl0bGUuaW5uZXJIVE1MID0gJ1NvcnJ5OiggeW91IGFyZSBub3QgcGFydCBvZiBhbnkgdGVhbS4nO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgLy8gcmVkaXJlY3QgdG8gbG9naW4gcGFnZSBpZiBhdXRob3JpemF0aW9uIHRva2VuIGRvZXNudCBleGlzdFxyXG4gICAgaWYgKCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggVE9LRU4gKSA9PT0gbnVsbCApIHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSAnL2xvZ2luJztcclxuICAgIH1cclxuXHJcbiAgICAvLyBmZXRjaCB5b3VyIHRlYW1zXHJcbiAgICBmZXRjaFRlYW1zKClcclxuICAgICAgICAudGhlbiggKCB0ZWFtcyApID0+IHtcclxuICAgICAgICAgICAgaWYgKCB0ZWFtcy5tZXNzYWdlID09PSBTVUNDRVNTICkge1xyXG4gICAgICAgICAgICAgICAgZ2V0QWxsVXNlcnMoKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCAoIF91c2VycyApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBfdXNlcnMubWVzc2FnZSA9PT0gU1VDQ0VTUyApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzID0gX3VzZXJzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1bGF0ZVRlYW1zKCB0ZWFtcy5kYXRhICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGZldGNoaW5nIHVzZXJzOiAke191c2Vycy5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goICggZXJyb3IgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGZldGNoaW5nIHVzZXJzOiAke2Vycm9yLnJlc3BvbnNlLmRhdGEuZGVzY3JpcHRpb259YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGZldGNoaW5nIHVzZXJzOiAke2Vycm9yLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgZmV0Y2hpbmcgdGVhbXM6ICR7dGVhbXMubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSApXHJcbiAgICAgICAgLmNhdGNoKCAoIGVycm9yICkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBmZXRjaGluZyB0ZWFtczogJHtlcnJvci5yZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9ufWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBmZXRjaGluZyB0ZWFtczogJHtlcnJvci5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlRW1haWwoIGVtYWlsICkge1xyXG4gICAgY29uc3QgcmUgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XHJcbiAgICByZXR1cm4gcmUudGVzdCggU3RyaW5nKCBlbWFpbCApLnRvTG93ZXJDYXNlKCkgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVUZWFtKCB0ZWFtICkge1xyXG4gICAgY29uc3QgcmUgPSAvQFthLXpBLVpcXC0wLTldKyQvO1xyXG4gICAgcmV0dXJuIHJlLnRlc3QoIFN0cmluZyggdGVhbSApLnRvTG93ZXJDYXNlKCkgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXR0ZW5kZWVUeXBlKCBhdHRlbmRlZSApIHtcclxuICAgIGxldCB0eXBlID0gJyc7XHJcbiAgICBpZiAoIHZhbGlkYXRlRW1haWwoIGF0dGVuZGVlICkgKSB7XHJcbiAgICAgICAgdHlwZSA9ICdlbWFpbCc7XHJcbiAgICB9IGVsc2UgaWYgKCB2YWxpZGF0ZVRlYW0oIGF0dGVuZGVlICkgKSB7XHJcbiAgICAgICAgdHlwZSA9ICd0ZWFtJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdHlwZSA9ICdub25lJztcclxuICAgIH1cclxuICAgIHJldHVybiB0eXBlO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldEZvcm0oKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2lucHV0VGVhbU5hbWUnICkudmFsdWUgPSAnJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnaW5wdXRTaG9ydE5hbWUnICkudmFsdWUgPSAnJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAndGVhbURlc2NyaXB0aW9uJyApLnZhbHVlID0gJyc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2lucHV0TWVtYmVycycgKS52YWx1ZSA9ICcnO1xyXG59XHJcblxyXG5sZXQgbXlNb2RhbCA9IG51bGw7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2FkZE5ld1RlYW1CdXR0b24nICkuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbXlNb2RhbCA9IG5ldyBib290c3RyYXAuTW9kYWwoIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnbXlNb2RhbCcgKSApO1xyXG4gICAgbXlNb2RhbC5zaG93KCk7XHJcbn0gKTtcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnbW9kYWxEaXNtaXNzJyApLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IHtcclxuICAgIC8vIGNvbnN0IG15TW9kYWwgPSBuZXcgYm9vdHN0cmFwLk1vZGFsKCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ215TW9kYWwnICkgKTtcclxuICAgIG15TW9kYWwuaGlkZSgpO1xyXG59ICk7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3N1Ym1pdEFkZFRlYW0nICkuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgLy8gY29uc3QgbXlNb2RhbCA9IG5ldyBib290c3RyYXAuTW9kYWwoIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnbXlNb2RhbCcgKSApO1xyXG4gICAgbXlNb2RhbC5oaWRlKCk7XHJcblxyXG4gICAgY29uc3QgdGVhbU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2lucHV0VGVhbU5hbWUnICkudmFsdWU7XHJcbiAgICBpZiAoIHRlYW1OYW1lLmxlbmd0aCA9PT0gMCApIHtcclxuICAgICAgICBhZGRUb2FzdCggJ1BsZWFzZSBlbnRlciBhICB0ZWFtIG5hbWUnLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHRlYW1TaG9ydE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2lucHV0U2hvcnROYW1lJyApLnZhbHVlO1xyXG4gICAgaWYgKCB0ZWFtTmFtZS5sZW5ndGggPT09IDAgKSB7XHJcbiAgICAgICAgYWRkVG9hc3QoICdQbGVhc2UgZW50ZXIgYSB0ZWFtIFNob3J0IG5hbWUuJywgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdGVhbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICd0ZWFtRGVzY3JpcHRpb24nICkudmFsdWU7XHJcblxyXG4gICAgaWYgKCB0ZWFtTmFtZS5sZW5ndGggPD0gMCApIHtcclxuICAgICAgICBhZGRUb2FzdCggJ1BsZWFzZSBlbnRlciBhIGxvbmdlciBkZXNjcmlwdGlvbiAoIDEwIGNoYXJhY3RlcnMgbWluICknLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHRlYW1NZW1iZXJzID0gKCAoIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnaW5wdXRNZW1iZXJzJyApLnZhbHVlICkucmVwbGFjZSggL1xccysvZywgJycgKSApLnNwbGl0KCAnLCcgKTtcclxuXHJcbiAgICAvLyBUT0RPOiBWYWxpZGF0aW9uXHJcbiAgICBjb25zdCBzdWJtaXRKU09OID0gQUREX1RFQU1fRk9STTtcclxuICAgIHN1Ym1pdEpTT05bJ25hbWUnXSA9IHRlYW1OYW1lO1xyXG4gICAgc3VibWl0SlNPTlsnc2hvcnROYW1lJ10gPSB0ZWFtU2hvcnROYW1lO1xyXG4gICAgc3VibWl0SlNPTlsnZGVzY3JpcHRpb24nXSA9IHRlYW1EZXNjcmlwdGlvbjtcclxuICAgIGNvbnN0IGF0dGVuZGVlc0pTT04gPSBbXTtcclxuXHJcbiAgICBmb3IgKCBsZXQgaWR4QXR0ID0gMDsgaWR4QXR0IDwgdGVhbU1lbWJlcnMubGVuZ3RoOyBpZHhBdHQgKz0gMSApIHtcclxuICAgICAgICBjb25zdCBtZW1iZXIgPSB0ZWFtTWVtYmVyc1tpZHhBdHRdO1xyXG4gICAgICAgIHN3aXRjaCAoIGF0dGVuZGVlVHlwZSggbWVtYmVyICkgKSB7XHJcbiAgICAgICAgY2FzZSAnZW1haWwnOlxyXG4gICAgICAgICAgICBmb3IgKCBsZXQgaWR4ID0gMDsgaWR4IDwgdXNlcnMubGVuZ3RoOyBpZHggKz0gMSApIHtcclxuICAgICAgICAgICAgICAgIGlmICggbWVtYmVyLnRvTG93ZXJDYXNlKCkgPT09IHVzZXJzW2lkeF1bJ2VtYWlsJ10udG9Mb3dlckNhc2UoKSApIHtcclxuICAgICAgICAgICAgICAgICAgICBhdHRlbmRlZXNKU09OLnB1c2goIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiB1c2Vyc1tpZHhdWydfaWQnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IHVzZXJzW2lkeF1bJ2VtYWlsJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6IGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN1Ym1pdEpTT05bJ21lbWJlcnMnXSA9IGF0dGVuZGVlc0pTT047XHJcblxyXG4gICAgYWRkVGVhbSggc3VibWl0SlNPTiApXHJcbiAgICAgICAgLnRoZW4oICggcmVzcG9uc2UgKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggcmVzcG9uc2UubWVzc2FnZSA9PT0gU1VDQ0VTUyApIHtcclxuICAgICAgICAgICAgICAgIG15TW9kYWwuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoICdUZWFtIGFkZGVkIHN1Y2Nlc3NmdWxseScsIGRvY3VtZW50LmJvZHksIFNVQ0NFU1MgKTtcclxuICAgICAgICAgICAgICAgIHJlc2V0Rm9ybSgpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgIH0sIDE1MDAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgYWRkaW5nIHRlYW06ICR7cmVzcG9uc2UubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSApXHJcbiAgICAgICAgLmNhdGNoKCAoIGVycm9yICkgPT4ge1xyXG4gICAgICAgICAgICBteU1vZGFsLmhpZGUoKTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgYWRkaW5nIHRlYW06ICR7ZXJyb3IucmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbn1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgYWRkaW5nIHRlYW06ICR7ZXJyb3IubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSApO1xyXG59ICk7XHJcblxyXG5pbml0KCk7XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4ubXktY29sIHtcXHJcXG4gICAgZmxleC1iYXNpczogMzAlO1xcclxcbiAgICBmbGV4LWdyb3c6IDA7XFxyXFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ociB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLm15LWdyaWQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE5cmVtLCAxZnIpKTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcHVibGljL2Nzcy90ZWFtc19saXN0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkRBQTJEO0FBQy9EXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLm15LWNvbCB7XFxyXFxuICAgIGZsZXgtYmFzaXM6IDMwJTtcXHJcXG4gICAgZmxleC1ncm93OiAwO1xcclxcbiAgICBmbGV4LXNocmluazogMDtcXHJcXG59XFxyXFxuXFxyXFxuaHIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbi5teS1ncmlkIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxOXJlbSwgMWZyKSk7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGVhbXNfbGlzdC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RlYW1zX2xpc3QuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwidGVhbXNfbGlzdFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua21lZXRpbmdzXCJdID0gc2VsZltcIndlYnBhY2tDaHVua21lZXRpbmdzXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19ib290c3RyYXBfZGlzdF9jc3NfYm9vdHN0cmFwX21pbl9jc3NcIixcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2F4aW9zX2luZGV4X2pzLW5vZGVfbW9kdWxlc19jb3JlLWpzX3N0YWJsZV9pbmRleF9qcy1ub2RlX21vZHVsZXNfcmVnZW5lci1lZmRkZjdcIixcInB1YmxpY19jc3NfbWFpbl9jc3MtZGF0YV9pbWFnZV9zdmdfeG1sXzNjc3ZnX3htbG5zXzI3aHR0cF93d3dfdzNfb3JnXzIwMDBfc3ZnXzI3X3ZpZXdCb3hfMjctNC1iMDFiZTBcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9wdWJsaWMvanMvdGVhbXNfbGlzdC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==