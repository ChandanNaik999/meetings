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
      colSelectButton.innerHTML = 'Add';
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
  var teamShortName = document.getElementById('inputShortName').value;
  var teamDescription = document.getElementById('teamDescription').value;
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_axios_index_js-node_modules_core-js_stable_index_js-node_modules_regener-157406","public_js_customs_app_js-public_js_services_auth_js-public_css_main_css-data_image_svg_xml_3c-4ea2a1"], () => (__webpack_require__("./public/js/teams_list.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vbWVldGluZ3MvLi9wdWJsaWMvanMvZGF0YS9hZGRfdGVhbV9mb3JtLmpzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2pzL3NlcnZpY2VzL3RlYW1zLmpzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2pzL3NlcnZpY2VzL3VzZXJfbWFuYWdlbWVudC5qcyIsIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9qcy90ZWFtc19saXN0LmpzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2Nzcy90ZWFtc19saXN0LmNzcyIsIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9jc3MvdGVhbXNfbGlzdC5jc3M/NzczYyIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWVldGluZ3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsic2V0TmF2YmFyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIlRPS0VOIiwid2luZG93IiwibG9jYXRpb24iLCJwcm9maWxlSW1hZ2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2V0QXR0cmlidXRlIiwiQVBJX0JBU0VfVVJMIiwiSUQiLCJOQU1FIiwic3BsaXQiLCJmaXJzdE5hbWUiLCJpbm5lckhUTUwiLCJzaG93Qm9keU9uTG9hZCIsImJvZHkiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJBRERfVEVBTV9GT1JNIiwiZmV0Y2hUZWFtcyIsImF4aW9zIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJnZXRUb2tlbiIsInJlc3BvbnNlIiwiZGF0YSIsImFkZFRlYW0iLCJ0ZWFtSlNPTiIsImFkZE1lbWJlclRvVGVhbSIsInRlYW0iLCJlbWFpbCIsImV4Y3VzZUZyb21UZWFtIiwiZ2V0QWxsVXNlcnMiLCJ1c2VycyIsInBvcHVsYXRlVGVhbXMiLCJ0ZWFtcyIsIm1lZXRpbmdzTGlzdERpdiIsImxlbmd0aCIsIm1lZXRpbmdzTGlzdFRpdGxlIiwiZm9yRWFjaCIsIm1lbWJlcnMiLCJtZW1iZXIiLCJwdXNoIiwiY2FyZCIsImNyZWF0ZUVsZW1lbnQiLCJjYXJkQm9keSIsImNhcmRUaXRsZSIsImFwcGVuZENoaWxkIiwiY2FyZFRleHQiLCJidXR0b25FeGN1c2UiLCJhZGRFdmVudExpc3RlbmVyIiwidGhlbiIsIm1lc3NhZ2UiLCJTVUNDRVNTIiwiYWRkVG9hc3QiLCJFUlJPUiIsImVycm9yIiwiZGVzY3JpcHRpb24iLCJociIsInRlYW1NZW1iZXJzIiwiam9pbiIsInNlbGVjdE1lbWJlckRpdiIsImNvbFNlbGVjdE1lbWJlciIsImxhYmVsU2VsZWN0TWVtYmVyIiwic2VsZWN0TWVtYmVyIiwibm9uTWVtYmVycyIsInVzZXIiLCJpbmNsdWRlcyIsIm5vbk1lbWJlciIsImNvbFNlbGVjdE1lbWJlcjIiLCJjb2xTZWxlY3RCdXR0b24iLCJ2YWx1ZSIsImluaXQiLCJfdXNlcnMiLCJ2YWxpZGF0ZUVtYWlsIiwicmUiLCJ0ZXN0IiwiU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJ2YWxpZGF0ZVRlYW0iLCJhdHRlbmRlZVR5cGUiLCJhdHRlbmRlZSIsInR5cGUiLCJteU1vZGFsIiwiYm9vdHN0cmFwIiwiTW9kYWwiLCJzaG93IiwiaGlkZSIsInRlYW1OYW1lIiwidGVhbVNob3J0TmFtZSIsInRlYW1EZXNjcmlwdGlvbiIsInJlcGxhY2UiLCJzdWJtaXRKU09OIiwiYXR0ZW5kZWVzSlNPTiIsImlkeEF0dCIsImlkeCIsInVzZXJJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsU0FBVCxHQUFxQjtBQUNqQixNQUFLQyxZQUFZLENBQUNDLE9BQWIsQ0FBc0JDLDZDQUF0QixNQUFrQyxJQUF2QyxFQUE4QztBQUMxQ0MsVUFBTSxDQUFDQyxRQUFQLEdBQWtCLFFBQWxCO0FBQ0g7O0FBRUQsTUFBTUMsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBeUIsUUFBekIsQ0FBckI7QUFDQUYsY0FBWSxDQUFDRyxZQUFiLENBQTJCLEtBQTNCLFlBQXFDQyxvREFBckMsY0FBcURULFlBQVksQ0FBQ0MsT0FBYixDQUFzQlMsMENBQXRCLENBQXJEOztBQUVBLDhCQUFvQlYsWUFBWSxDQUFDQyxPQUFiLENBQXNCVSw0Q0FBdEIsRUFBNkJDLEtBQTdCLENBQW9DLEdBQXBDLENBQXBCO0FBQUE7QUFBQSxNQUFPQyxTQUFQOztBQUNBUCxVQUFRLENBQUNDLGNBQVQsQ0FBeUIsU0FBekIsRUFBcUNPLFNBQXJDLEdBQWlERCxTQUFqRDtBQUNIOztBQUVELFNBQVNFLGNBQVQsR0FBMEI7QUFDdEJULFVBQVEsQ0FBQ1UsSUFBVCxDQUFjQyxTQUFkLENBQXdCQyxNQUF4QixDQUFnQyxNQUFoQztBQUNIOztBQUNESCxjQUFjO0FBQ2RoQixTQUFTLEc7Ozs7Ozs7Ozs7Ozs7O0FDbEJUO0FBQ0EsSUFBTW9CLGFBQWEsR0FBRztBQUNsQixVQUFRLGVBRFU7QUFFbEIsZUFBYSxVQUZLO0FBR2xCLGlCQUFlLDBEQUhHO0FBSWxCLGFBQVc7QUFK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RUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLG9CQUFvQjtXQUMxQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQSw0Rzs7Ozs7VUM5Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJ0ZWFtc19saXN0LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQSV9CQVNFX1VSTCwgSUQsIE5BTUUsIFRPS0VOIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuZnVuY3Rpb24gc2V0TmF2YmFyKCkge1xyXG4gICAgaWYgKCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggVE9LRU4gKSA9PT0gbnVsbCApIHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSAnL2xvZ2luJztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcm9maWxlSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ25hdlBpYycgKTtcclxuICAgIHByb2ZpbGVJbWFnZS5zZXRBdHRyaWJ1dGUoICdzcmMnLCBgJHtBUElfQkFTRV9VUkx9LyR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oIElEICl9LnBuZ2AgKTtcclxuXHJcbiAgICBjb25zdCBbZmlyc3ROYW1lXSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCBOQU1FICkuc3BsaXQoICcgJyApO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICduYW1lTmF2JyApLmlubmVySFRNTCA9IGZpcnN0TmFtZTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0JvZHlPbkxvYWQoKSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoICdoaWRlJyApO1xyXG59XHJcbnNob3dCb2R5T25Mb2FkKCk7XHJcbnNldE5hdmJhcigpO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG5jb25zdCBBRERfVEVBTV9GT1JNID0ge1xyXG4gICAgXCJuYW1lXCI6IFwiQWdpbGUgdGVhbSA1N1wiLFxyXG4gICAgXCJzaG9ydE5hbWVcIjogXCJhZ2lsZW5ld1wiLFxyXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIlRlYW0gc3ByZWFkaW5nIGF3YXJlbmVzcyBhYm91dCBBZ2lsZSBwcmFjdGljZXMgYXQgWndpZ2d5XCIsXHJcbiAgICBcIm1lbWJlcnNcIjogW11cclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBRERfVEVBTV9GT1JNOyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEFQSV9CQVNFX1VSTCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGdldFRva2VuIH0gZnJvbSAnLi9hdXRoJztcclxuaW1wb3J0ICdjb3JlLWpzL3N0YWJsZSc7XHJcbmltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoVGVhbXMoKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICBgJHtBUElfQkFTRV9VUkx9L3RlYW1zYCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke2dldFRva2VuKCl9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gYWRkVGVhbSggdGVhbUpTT04gKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS90ZWFtcy9gLFxyXG4gICAgICAgIHRlYW1KU09OLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7Z2V0VG9rZW4oKX1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBhZGRNZW1iZXJUb1RlYW0oIHRlYW0sIGVtYWlsICkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wYXRjaChcclxuICAgICAgICBgJHtBUElfQkFTRV9VUkx9L3RlYW1zLyR7dGVhbVsnX2lkJ119P2FjdGlvbj1hZGRfbWVtYmVyJmVtYWlsPSR7ZW1haWx9YCxcclxuICAgICAgICB7fSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke2dldFRva2VuKCl9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZXhjdXNlRnJvbVRlYW0oIHRlYW0gKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBhdGNoKFxyXG4gICAgICAgIGAke0FQSV9CQVNFX1VSTH0vdGVhbXMvJHt0ZWFtWydfaWQnXX0/YWN0aW9uPXJlbW92ZV9tZW1iZXJgLFxyXG4gICAgICAgIHt9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7Z2V0VG9rZW4oKX1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgZmV0Y2hUZWFtcyxcclxuICAgIGFkZFRlYW0sXHJcbiAgICBhZGRNZW1iZXJUb1RlYW0sXHJcbiAgICBleGN1c2VGcm9tVGVhbSxcclxufTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgQVBJX0JBU0VfVVJMIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgZ2V0VG9rZW4gfSBmcm9tICcuL2F1dGgnO1xyXG5cclxuaW1wb3J0ICdjb3JlLWpzL3N0YWJsZSc7XHJcbmltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lJztcclxuXHJcbi8qKlxyXG4gKiBHZXQgdGhlIGxpc3Qgb2YgYWxsIHJlZ2lzdGVyZWQgdXNlcnMuXHJcbiAqIEByZXR1cm5zIGxpc3Qgb2YgYWxsIHVzZXJzXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBnZXRBbGxVc2VycygpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgIGAke0FQSV9CQVNFX1VSTH0vdXNlcnNgLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7Z2V0VG9rZW4oKX1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRBbGxVc2VycztcclxuIiwiaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG5pbXBvcnQgJy4uL2Nzcy9tYWluLmNzcyc7XHJcbmltcG9ydCAnLi4vY3NzL3RlYW1zX2xpc3QuY3NzJztcclxuaW1wb3J0IGFkZFRvYXN0IGZyb20gJy4vY3VzdG9tcy9hcHAnO1xyXG5pbXBvcnQgeyBTVUNDRVNTLCBFUlJPUiwgVE9LRU4gfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCAnLi9hcHAnO1xyXG5pbXBvcnQgeyBhZGRNZW1iZXJUb1RlYW0sIGZldGNoVGVhbXMsIGV4Y3VzZUZyb21UZWFtLCBhZGRUZWFtIH0gZnJvbSAnLi9zZXJ2aWNlcy90ZWFtcyc7XHJcbmltcG9ydCBBRERfVEVBTV9GT1JNIGZyb20gJy4vZGF0YS9hZGRfdGVhbV9mb3JtJztcclxuaW1wb3J0IGdldEFsbFVzZXJzIGZyb20gJy4vc2VydmljZXMvdXNlcl9tYW5hZ2VtZW50JztcclxuXHJcbmxldCB1c2VycyA9IFtdO1xyXG5cclxuZnVuY3Rpb24gcG9wdWxhdGVUZWFtcyggdGVhbXMgKSB7XHJcbiAgICBjb25zdCBtZWV0aW5nc0xpc3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3RlYW1zTGlzdCcgKTtcclxuICAgIG1lZXRpbmdzTGlzdERpdi5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICBpZiAoIHRlYW1zICYmIHRlYW1zLmxlbmd0aCA+IDAgKSB7XHJcbiAgICAgICAgY29uc3QgbWVldGluZ3NMaXN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3RlYW1zTGlzdFRpdGxlJyApO1xyXG4gICAgICAgIG1lZXRpbmdzTGlzdFRpdGxlLmlubmVySFRNTCA9ICdWaWV3IGFuZCBlZGl0IHRoZSB0ZWFtcyB0aGF0IHlvdSBhcmUgcGFydCBvZic7XHJcbiAgICAgICAgdGVhbXMuZm9yRWFjaCggKCB0ZWFtICkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtZW1iZXJzID0gW107XHJcbiAgICAgICAgICAgIHRlYW1bJ21lbWJlcnMnXS5mb3JFYWNoKCAoIG1lbWJlciApID0+IHtcclxuICAgICAgICAgICAgICAgIG1lbWJlcnMucHVzaCggbWVtYmVyWydlbWFpbCddICk7XHJcbiAgICAgICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG4gICAgICAgICAgICAvLyBjYXJkLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2NhcmQgbXktY29sIHAtMyBtLTIgY29sLTEyIGNvbC1zbS02IGNvbC1tZC00JyApO1xyXG4gICAgICAgICAgICBjYXJkLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2NhcmQgcC0zIG0tMicgKTtcclxuICAgICAgICAgICAgY29uc3QgY2FyZEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG4gICAgICAgICAgICBjYXJkQm9keS5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdjYXJkLWJvZHknICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnaDUnICk7XHJcbiAgICAgICAgICAgIGNhcmRUaXRsZS5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdjYXJkLXRpdGxlJyApO1xyXG4gICAgICAgICAgICBjYXJkVGl0bGUuaW5uZXJIVE1MID0gdGVhbVsnbmFtZSddO1xyXG4gICAgICAgICAgICBjYXJkQm9keS5hcHBlbmRDaGlsZCggY2FyZFRpdGxlICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjYXJkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdwJyApO1xyXG4gICAgICAgICAgICBjYXJkVGl0bGUuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAnY2FyZC10ZXh0JyApO1xyXG4gICAgICAgICAgICBjYXJkVGV4dC5pbm5lckhUTUwgPSBgQCR7dGVhbVsnc2hvcnROYW1lJ119YDtcclxuICAgICAgICAgICAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQoIGNhcmRUZXh0ICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBidXR0b25FeGN1c2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnYnV0dG9uJyApO1xyXG4gICAgICAgICAgICBidXR0b25FeGN1c2UuaW5uZXJIVE1MID0gJ0xlYXZlIHRlYW0nO1xyXG4gICAgICAgICAgICBidXR0b25FeGN1c2Uuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAnYnV0dG9uLW91dGxpbmUtcmVkIHB4LTQnICk7XHJcbiAgICAgICAgICAgIGJ1dHRvbkV4Y3VzZS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBleGN1c2VGcm9tVGVhbSggdGVhbSApXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oICggcmVzcG9uc2UgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggcmVzcG9uc2UubWVzc2FnZSA9PT0gU1VDQ0VTUyApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCAnWW91IGhhdmUgYmVlbiByZW1vdmVkIGZyb20gdGhlIHRlYW0nLCBkb2N1bWVudC5ib2R5LCBTVUNDRVNTICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciByZW1vdmluZzogJHtyZXNwb25zZS5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goICggZXJyb3IgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIHJlbW92aW5nOiAke2Vycm9yLnJlc3BvbnNlLmRhdGEuZGVzY3JpcHRpb259YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIHJlbW92aW5nOiAke2Vycm9yLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICBjYXJkQm9keS5hcHBlbmRDaGlsZCggYnV0dG9uRXhjdXNlICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBociA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdocicgKTtcclxuICAgICAgICAgICAgaHIuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAnbXktMycgKTtcclxuICAgICAgICAgICAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQoIGhyICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0ZWFtTWVtYmVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdwJyApO1xyXG4gICAgICAgICAgICB0ZWFtTWVtYmVycy5pbm5lckhUTUwgPSBgPHN0cm9uZz5NZW1iZXJzOiA8L3N0cm9uZz4gJHttZW1iZXJzLmpvaW4oICcsICcgKX1gO1xyXG4gICAgICAgICAgICBjYXJkQm9keS5hcHBlbmRDaGlsZCggdGVhbU1lbWJlcnMgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdE1lbWJlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XHJcbiAgICAgICAgICAgIHNlbGVjdE1lbWJlckRpdi5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdyb3cgZ3ktMiBneC0zIGFsaWduLWl0ZW1zLWNlbnRlcicgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbFNlbGVjdE1lbWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XHJcbiAgICAgICAgICAgIGNvbFNlbGVjdE1lbWJlci5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdjb2wtYXV0bycgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsU2VsZWN0TWVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2xhYmVsJyApO1xyXG4gICAgICAgICAgICBsYWJlbFNlbGVjdE1lbWJlci5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICd2aXN1YWxseS1oaWRkZW4nICk7XHJcbiAgICAgICAgICAgIGxhYmVsU2VsZWN0TWVtYmVyLnNldEF0dHJpYnV0ZSggJ2ZvcicsICdzZWxlY3RNZW1iZXInICk7XHJcbiAgICAgICAgICAgIGNvbFNlbGVjdE1lbWJlci5hcHBlbmRDaGlsZCggbGFiZWxTZWxlY3RNZW1iZXIgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdE1lbWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdzZWxlY3QnICk7XHJcbiAgICAgICAgICAgIHNlbGVjdE1lbWJlci5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdmb3JtLXNlbGVjdCcgKTtcclxuICAgICAgICAgICAgc2VsZWN0TWVtYmVyLnNldEF0dHJpYnV0ZSggJ2lkJywgJ3NlbGVjdE1lbWJlcicgKTtcclxuICAgICAgICAgICAgc2VsZWN0TWVtYmVyLnNldEF0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnLCAnU2VsZWN0IE1lbWJlcicgKTtcclxuICAgICAgICAgICAgY29uc3Qgbm9uTWVtYmVycyA9IFtdO1xyXG4gICAgICAgICAgICB1c2Vycy5mb3JFYWNoKCAoIHVzZXIgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIG1lbWJlcnMuaW5jbHVkZXMoIHVzZXJbJ2VtYWlsJ10gKSA9PT0gZmFsc2UgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9uTWVtYmVycy5wdXNoKCB1c2VyICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdE1lbWJlci5pbm5lckhUTUwgPSAnPG9wdGlvbiB2YWx1ZT1cIm5vbmVcIiBzZWxlY3RlZD5TZWxlY3QgbWVtYmVyPC9vcHRpb24+JztcclxuICAgICAgICAgICAgbm9uTWVtYmVycy5mb3JFYWNoKCAoIG5vbk1lbWJlciApID0+IHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdE1lbWJlci5pbm5lckhUTUwgKz0gYDxvcHRpb24gdmFsdWU9XCIke25vbk1lbWJlclsnZW1haWwnXX1cIj4ke25vbk1lbWJlclsnZW1haWwnXX08L29wdGlvbj5gO1xyXG4gICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgIGNvbFNlbGVjdE1lbWJlci5hcHBlbmRDaGlsZCggc2VsZWN0TWVtYmVyICk7XHJcblxyXG4gICAgICAgICAgICBzZWxlY3RNZW1iZXJEaXYuYXBwZW5kQ2hpbGQoIGNvbFNlbGVjdE1lbWJlciApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY29sU2VsZWN0TWVtYmVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XHJcbiAgICAgICAgICAgIGNvbFNlbGVjdE1lbWJlcjIuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAnY29sLWF1dG8nICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb2xTZWxlY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnYnV0dG9uJyApO1xyXG4gICAgICAgICAgICBjb2xTZWxlY3RCdXR0b24uc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAnYnV0dG9uIG14LTInICk7XHJcbiAgICAgICAgICAgIGNvbFNlbGVjdEJ1dHRvbi5pbm5lckhUTUwgPSAnQWRkJztcclxuICAgICAgICAgICAgY29sU2VsZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICggc2VsZWN0TWVtYmVyLnZhbHVlICE9PSAnbm9uZScgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkTWVtYmVyVG9UZWFtKCB0ZWFtLCBzZWxlY3RNZW1iZXIudmFsdWUgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbiggKCByZXNwb25zZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggcmVzcG9uc2UubWVzc2FnZSA9PT0gU1VDQ0VTUyApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1iZXJzLnB1c2goIHNlbGVjdE1lbWJlci52YWx1ZSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1NZW1iZXJzLmlubmVySFRNTCA9IGA8c3Ryb25nPk1lbWJlcnM6IDwvc3Ryb25nPiAke21lbWJlcnMuam9pbiggJywgJyApfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoICdBZGRlZCBtZW1iZXIgc3VjY2Vzc2Z1bGx5JywgZG9jdW1lbnQuYm9keSwgU1VDQ0VTUyApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGFkZGluZyBtZW1iZXI6ICR7cmVzcG9uc2UubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCAoIGVycm9yICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGFkZGluZyBtZW1iZXI6ICR7ZXJyb3IucmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbn1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBhZGRpbmcgbWVtYmVyOiAke2Vycm9yLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICBjb2xTZWxlY3RNZW1iZXIyLmFwcGVuZENoaWxkKCBjb2xTZWxlY3RCdXR0b24gKTtcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdE1lbWJlckRpdi5hcHBlbmRDaGlsZCggY29sU2VsZWN0TWVtYmVyMiApO1xyXG4gICAgICAgICAgICBjYXJkQm9keS5hcHBlbmRDaGlsZCggc2VsZWN0TWVtYmVyRGl2ICk7XHJcbiAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoIGNhcmRCb2R5ICk7XHJcbiAgICAgICAgICAgIG1lZXRpbmdzTGlzdERpdi5hcHBlbmRDaGlsZCggY2FyZCApO1xyXG4gICAgICAgIH0gKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgbWVldGluZ3NMaXN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3RlYW1zTGlzdFRpdGxlJyApO1xyXG4gICAgICAgIG1lZXRpbmdzTGlzdFRpdGxlLmlubmVySFRNTCA9ICdTb3JyeTooIHlvdSBhcmUgbm90IHBhcnQgb2YgYW55IHRlYW0uJztcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIC8vIHJlZGlyZWN0IHRvIGxvZ2luIHBhZ2UgaWYgYXV0aG9yaXphdGlvbiB0b2tlbiBkb2VzbnQgZXhpc3RcclxuICAgIGlmICggbG9jYWxTdG9yYWdlLmdldEl0ZW0oIFRPS0VOICkgPT09IG51bGwgKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJy9sb2dpbic7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZmV0Y2ggeW91ciB0ZWFtc1xyXG4gICAgZmV0Y2hUZWFtcygpXHJcbiAgICAgICAgLnRoZW4oICggdGVhbXMgKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggdGVhbXMubWVzc2FnZSA9PT0gU1VDQ0VTUyApIHtcclxuICAgICAgICAgICAgICAgIGdldEFsbFVzZXJzKClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbiggKCBfdXNlcnMgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggX3VzZXJzLm1lc3NhZ2UgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VycyA9IF91c2Vycy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdWxhdGVUZWFtcyggdGVhbXMuZGF0YSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBmZXRjaGluZyB1c2VyczogJHtfdXNlcnMubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCAoIGVycm9yICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBmZXRjaGluZyB1c2VyczogJHtlcnJvci5yZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9ufWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBmZXRjaGluZyB1c2VyczogJHtlcnJvci5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGZldGNoaW5nIHRlYW1zOiAke3RlYW1zLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gKVxyXG4gICAgICAgIC5jYXRjaCggKCBlcnJvciApID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgZmV0Y2hpbmcgdGVhbXM6ICR7ZXJyb3IucmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbn1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgZmV0Y2hpbmcgdGVhbXM6ICR7ZXJyb3IubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSApO1xyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZUVtYWlsKCBlbWFpbCApIHtcclxuICAgIGNvbnN0IHJlID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG4gICAgcmV0dXJuIHJlLnRlc3QoIFN0cmluZyggZW1haWwgKS50b0xvd2VyQ2FzZSgpICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlVGVhbSggdGVhbSApIHtcclxuICAgIGNvbnN0IHJlID0gL0BbYS16QS1aXFwtMC05XSskLztcclxuICAgIHJldHVybiByZS50ZXN0KCBTdHJpbmcoIHRlYW0gKS50b0xvd2VyQ2FzZSgpICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGF0dGVuZGVlVHlwZSggYXR0ZW5kZWUgKSB7XHJcbiAgICBsZXQgdHlwZSA9ICcnO1xyXG4gICAgaWYgKCB2YWxpZGF0ZUVtYWlsKCBhdHRlbmRlZSApICkge1xyXG4gICAgICAgIHR5cGUgPSAnZW1haWwnO1xyXG4gICAgfSBlbHNlIGlmICggdmFsaWRhdGVUZWFtKCBhdHRlbmRlZSApICkge1xyXG4gICAgICAgIHR5cGUgPSAndGVhbSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHR5cGUgPSAnbm9uZSc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHlwZTtcclxufVxyXG5sZXQgbXlNb2RhbCA9IG51bGw7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2FkZE5ld1RlYW1CdXR0b24nICkuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbXlNb2RhbCA9IG5ldyBib290c3RyYXAuTW9kYWwoIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnbXlNb2RhbCcgKSApO1xyXG4gICAgbXlNb2RhbC5zaG93KCk7XHJcbn0gKTtcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnbW9kYWxEaXNtaXNzJyApLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IHtcclxuICAgIC8vIGNvbnN0IG15TW9kYWwgPSBuZXcgYm9vdHN0cmFwLk1vZGFsKCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ215TW9kYWwnICkgKTtcclxuICAgIG15TW9kYWwuaGlkZSgpO1xyXG59ICk7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3N1Ym1pdEFkZFRlYW0nICkuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgLy8gY29uc3QgbXlNb2RhbCA9IG5ldyBib290c3RyYXAuTW9kYWwoIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnbXlNb2RhbCcgKSApO1xyXG4gICAgbXlNb2RhbC5oaWRlKCk7XHJcblxyXG4gICAgY29uc3QgdGVhbU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2lucHV0VGVhbU5hbWUnICkudmFsdWU7XHJcbiAgICBjb25zdCB0ZWFtU2hvcnROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdpbnB1dFNob3J0TmFtZScgKS52YWx1ZTtcclxuICAgIGNvbnN0IHRlYW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAndGVhbURlc2NyaXB0aW9uJyApLnZhbHVlO1xyXG4gICAgY29uc3QgdGVhbU1lbWJlcnMgPSAoICggZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdpbnB1dE1lbWJlcnMnICkudmFsdWUgKS5yZXBsYWNlKCAvXFxzKy9nLCAnJyApICkuc3BsaXQoICcsJyApO1xyXG5cclxuICAgIC8vIFRPRE86IFZhbGlkYXRpb25cclxuICAgIGNvbnN0IHN1Ym1pdEpTT04gPSBBRERfVEVBTV9GT1JNO1xyXG4gICAgc3VibWl0SlNPTlsnbmFtZSddID0gdGVhbU5hbWU7XHJcbiAgICBzdWJtaXRKU09OWydzaG9ydE5hbWUnXSA9IHRlYW1TaG9ydE5hbWU7XHJcbiAgICBzdWJtaXRKU09OWydkZXNjcmlwdGlvbiddID0gdGVhbURlc2NyaXB0aW9uO1xyXG4gICAgY29uc3QgYXR0ZW5kZWVzSlNPTiA9IFtdO1xyXG5cclxuICAgIGZvciAoIGxldCBpZHhBdHQgPSAwOyBpZHhBdHQgPCB0ZWFtTWVtYmVycy5sZW5ndGg7IGlkeEF0dCArPSAxICkge1xyXG4gICAgICAgIGNvbnN0IG1lbWJlciA9IHRlYW1NZW1iZXJzW2lkeEF0dF07XHJcbiAgICAgICAgc3dpdGNoICggYXR0ZW5kZWVUeXBlKCBtZW1iZXIgKSApIHtcclxuICAgICAgICBjYXNlICdlbWFpbCc6XHJcbiAgICAgICAgICAgIGZvciAoIGxldCBpZHggPSAwOyBpZHggPCB1c2Vycy5sZW5ndGg7IGlkeCArPSAxICkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBtZW1iZXIudG9Mb3dlckNhc2UoKSA9PT0gdXNlcnNbaWR4XVsnZW1haWwnXS50b0xvd2VyQ2FzZSgpICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dGVuZGVlc0pTT04ucHVzaCgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IHVzZXJzW2lkeF1bJ19pZCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogdXNlcnNbaWR4XVsnZW1haWwnXSxcclxuICAgICAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDogYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3VibWl0SlNPTlsnbWVtYmVycyddID0gYXR0ZW5kZWVzSlNPTjtcclxuXHJcbiAgICBhZGRUZWFtKCBzdWJtaXRKU09OIClcclxuICAgICAgICAudGhlbiggKCByZXNwb25zZSApID0+IHtcclxuICAgICAgICAgICAgaWYgKCByZXNwb25zZS5tZXNzYWdlID09PSBTVUNDRVNTICkge1xyXG4gICAgICAgICAgICAgICAgbXlNb2RhbC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICBhZGRUb2FzdCggJ1RlYW0gYWRkZWQgc3VjY2Vzc2Z1bGx5JywgZG9jdW1lbnQuYm9keSwgU1VDQ0VTUyApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBhZGRpbmcgdGVhbTogJHtyZXNwb25zZS5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IClcclxuICAgICAgICAuY2F0Y2goICggZXJyb3IgKSA9PiB7XHJcbiAgICAgICAgICAgIG15TW9kYWwuaGlkZSgpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBhZGRpbmcgdGVhbTogJHtlcnJvci5yZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9ufWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBhZGRpbmcgdGVhbTogJHtlcnJvci5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICk7XHJcbn0gKTtcclxuXHJcbmluaXQoKTtcclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi5teS1jb2wge1xcclxcbiAgICBmbGV4LWJhc2lzOiAzMCU7XFxyXFxuICAgIGZsZXgtZ3JvdzogMDtcXHJcXG4gICAgZmxleC1zaHJpbms6IDA7XFxyXFxufVxcclxcblxcclxcbmhyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4ubXktZ3JpZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTlyZW0sIDFmcikpO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9wdWJsaWMvY3NzL3RlYW1zX2xpc3QuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsU0FBUztJQUNULHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyREFBMkQ7QUFDL0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4ubXktY29sIHtcXHJcXG4gICAgZmxleC1iYXNpczogMzAlO1xcclxcbiAgICBmbGV4LWdyb3c6IDA7XFxyXFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ociB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLm15LWdyaWQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE5cmVtLCAxZnIpKTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90ZWFtc19saXN0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGVhbXNfbGlzdC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJ0ZWFtc19saXN0XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rbWVldGluZ3NcIl0gPSBzZWxmW1wid2VicGFja0NodW5rbWVldGluZ3NcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2F4aW9zX2luZGV4X2pzLW5vZGVfbW9kdWxlc19jb3JlLWpzX3N0YWJsZV9pbmRleF9qcy1ub2RlX21vZHVsZXNfcmVnZW5lci0xNTc0MDZcIixcInB1YmxpY19qc19jdXN0b21zX2FwcF9qcy1wdWJsaWNfanNfc2VydmljZXNfYXV0aF9qcy1wdWJsaWNfY3NzX21haW5fY3NzLWRhdGFfaW1hZ2Vfc3ZnX3htbF8zYy00ZWEyYTFcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9wdWJsaWMvanMvdGVhbXNfbGlzdC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==