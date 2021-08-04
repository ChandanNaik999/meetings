/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/account.js":
/*!******************************!*\
  !*** ./public/js/account.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/main.css */ "./public/css/main.css");
/* harmony import */ var _css_account_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/account.css */ "./public/css/account.css");
/* harmony import */ var _customs_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customs/app */ "./public/js/customs/app.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app */ "./public/js/app.js");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth */ "./public/js/services/auth.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./public/js/constants.js");
/* harmony import */ var _services_profile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/profile */ "./public/js/services/profile.js");








document.getElementById('editImage').addEventListener('change', function () {
  var formData = new FormData();
  var image = document.getElementById('editImage').files[0];

  if (image === undefined) {
    return;
  }

  formData.append('profilepic', image);
  formData.append('userId', localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_6__.ID));
  (0,_services_profile__WEBPACK_IMPORTED_MODULE_7__.setProfilePic)(formData).then(function (response) {
    if (response.message === _constants__WEBPACK_IMPORTED_MODULE_6__.SUCCESS) {
      var reader = new FileReader();

      reader.onload = function (e) {
        var profileImage = document.getElementById('profileImage');
        profileImage.setAttribute('src', e.target.result);
      };

      reader.readAsDataURL(image);
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)('Profile pic updated successfully', document.body, _constants__WEBPACK_IMPORTED_MODULE_6__.SUCCESS);
      setTimeout(function () {
        window.location.reload();
      }, 1500);
    } else {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error adding profile pic: ".concat(response.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_6__.ERROR);
    }
  })["catch"](function (error) {
    try {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error adding profile pic: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_6__.ERROR);
    } catch (_unused) {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error adding profile pic: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_6__.ERROR);
    }
  });
});
document.getElementById('logoutButton').addEventListener('click', function () {
  (0,_services_auth__WEBPACK_IMPORTED_MODULE_5__.logout)();
  window.location = '/login';
});

function init() {
  var profileImage = document.getElementById('profileImage');
  profileImage.setAttribute('src', "".concat(_constants__WEBPACK_IMPORTED_MODULE_6__.API_BASE_URL, "/").concat(localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_6__.ID), ".png"));
  var inputFullName = document.getElementById('inputName');
  inputFullName.value = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_6__.NAME);
  var inputEmail = document.getElementById('inputEmail');
  inputEmail.value = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_6__.EMAIL);
  var fullName = document.getElementById('profileName');
  fullName.innerHTML = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_6__.NAME);
  (0,_services_profile__WEBPACK_IMPORTED_MODULE_7__.getTotalTeams)().then(function (response) {
    if (response.message === _constants__WEBPACK_IMPORTED_MODULE_6__.SUCCESS) {
      document.getElementById('stat1Value').innerHTML = response.data[0].count;
    }
  })["catch"](function () {
    document.getElementById('stat1Value').innerHTML = ' - ';
  });
  (0,_services_profile__WEBPACK_IMPORTED_MODULE_7__.getTotalMeetings)().then(function (response) {
    if (response.message === _constants__WEBPACK_IMPORTED_MODULE_6__.SUCCESS) {
      document.getElementById('stat2Value').innerHTML = response.data[0].count;
    }
  })["catch"](function () {
    document.getElementById('stat2Value').innerHTML = ' - ';
  });
}

document.getElementById('saveChanges').addEventListener('click', function () {
  var inputFullName = document.getElementById('inputName').value;
  var inputEmail = document.getElementById('inputEmail').value;
  var userData = {
    email: inputEmail,
    name: inputFullName
  };
  var currentEmail = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_6__.EMAIL);
  var loginAgain = false;

  if (currentEmail !== inputEmail) {
    loginAgain = true;
  }

  (0,_services_profile__WEBPACK_IMPORTED_MODULE_7__.updateUserDetails)(userData, 'update_user').then(function (response) {
    if (response.message === _constants__WEBPACK_IMPORTED_MODULE_6__.SUCCESS) {
      localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_6__.EMAIL, response.data.email);
      localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_6__.NAME, response.data.name);
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)('Your details have been updated successfully', document.body, _constants__WEBPACK_IMPORTED_MODULE_6__.SUCCESS);

      if (loginAgain) {
        (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)('You will be logged out. Log in again.', document.body, _constants__WEBPACK_IMPORTED_MODULE_6__.SUCCESS);
        setTimeout(function () {
          (0,_services_auth__WEBPACK_IMPORTED_MODULE_5__.logout)();
          window.location = '/login';
        }, 2000);
      } else {
        setTimeout(function () {
          window.location.reload();
        }, 1500);
      }
    } else {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error updating your details: ".concat(response.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_6__.ERROR);
    }
  })["catch"](function (error) {
    try {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error updating your details: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_6__.ERROR);
    } catch (_unused2) {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error updating your details: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_6__.ERROR);
    }
  });
});
document.getElementById('updatePassword').addEventListener('click', function () {
  var inputOldPassword = document.getElementById('inputOldPassword').value;
  var inputNewPassword1 = document.getElementById('inputNewPassword1').value;
  var inputNewPassword2 = document.getElementById('inputNewPassword2').value;

  if (inputNewPassword1 === '' || inputNewPassword2 === '' || inputOldPassword === '') {
    (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)('Dont enter empty fields 😞', document.body, _constants__WEBPACK_IMPORTED_MODULE_6__.ERROR);
    return;
  }

  if (inputNewPassword1 !== inputNewPassword2) {
    (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)('Your new passwords dont match', document.body, _constants__WEBPACK_IMPORTED_MODULE_6__.ERROR);
    return;
  }

  var userData = {
    oldPassword: inputOldPassword,
    newPassword: inputNewPassword1
  };
  (0,_services_profile__WEBPACK_IMPORTED_MODULE_7__.updateUserDetails)(userData, 'update_password').then(function (response) {
    if (response.message === _constants__WEBPACK_IMPORTED_MODULE_6__.SUCCESS) {
      localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_6__.EMAIL, response.data.email);
      localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_6__.NAME, response.data.name);
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)('Your password has been updated', document.body, _constants__WEBPACK_IMPORTED_MODULE_6__.SUCCESS);
    } else {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error updating password ".concat(response.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_6__.ERROR);
    }
  })["catch"](function (error) {
    try {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error updating password: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_6__.ERROR);
    } catch (_unused3) {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error updating password: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_6__.ERROR);
    }
  });
});
init();

/***/ }),

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

/***/ "./public/js/services/profile.js":
/*!***************************************!*\
  !*** ./public/js/services/profile.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setProfilePic": () => (/* binding */ setProfilePic),
/* harmony export */   "getProfilePic": () => (/* binding */ getProfilePic),
/* harmony export */   "updateUserDetails": () => (/* binding */ updateUserDetails),
/* harmony export */   "getTotalTeams": () => (/* binding */ getTotalTeams),
/* harmony export */   "getTotalMeetings": () => (/* binding */ getTotalMeetings)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ "./public/js/services/auth.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./public/js/constants.js");
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/stable */ "./node_modules/core-js/stable/index.js");
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







function setProfilePic(_x) {
  return _setProfilePic.apply(this, arguments);
}

function _setProfilePic() {
  _setProfilePic = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(formData) {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().post("".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.API_BASE_URL, "/profile"), formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: "".concat((0,_auth__WEBPACK_IMPORTED_MODULE_1__.getToken)())
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
  return _setProfilePic.apply(this, arguments);
}

function getProfilePic(_x2) {
  return _getProfilePic.apply(this, arguments);
}

function _getProfilePic() {
  _getProfilePic = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
    var response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.API_BASE_URL, "/profile/pic/").concat(id), {
              headers: {
                Authorization: "".concat((0,_auth__WEBPACK_IMPORTED_MODULE_1__.getToken)())
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
  return _getProfilePic.apply(this, arguments);
}

function updateUserDetails(_x3, _x4) {
  return _updateUserDetails.apply(this, arguments);
}

function _updateUserDetails() {
  _updateUserDetails = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(userData, action) {
    var response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().patch("".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.API_BASE_URL, "/account?action=").concat(action), userData, {
              headers: {
                Authorization: "".concat((0,_auth__WEBPACK_IMPORTED_MODULE_1__.getToken)())
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
  return _updateUserDetails.apply(this, arguments);
}

function getTotalTeams() {
  return _getTotalTeams.apply(this, arguments);
}

function _getTotalTeams() {
  _getTotalTeams = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var response;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.API_BASE_URL, "/account/teams"), {
              headers: {
                Authorization: "".concat((0,_auth__WEBPACK_IMPORTED_MODULE_1__.getToken)())
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
  return _getTotalTeams.apply(this, arguments);
}

function getTotalMeetings() {
  return _getTotalMeetings.apply(this, arguments);
}

function _getTotalMeetings() {
  _getTotalMeetings = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var response;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.API_BASE_URL, "/account/meetings"), {
              headers: {
                Authorization: "".concat((0,_auth__WEBPACK_IMPORTED_MODULE_1__.getToken)())
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
  return _getTotalMeetings.apply(this, arguments);
}



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./public/css/account.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./public/css/account.css ***!
  \**********************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\r\n\r\n.bg-green {\r\n    background-color: #20d489;\r\n}\r\n\r\n.button {\r\n    color: #f9f2e7;\r\n    background-color: #20d489;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    box-shadow: none;\r\n    border-style: none;\r\n    padding: 0.5rem;\r\n    border-radius: 8px;\r\n}\r\n\r\n.button-outline {\r\n    color: #20d489;\r\n    background-color: #fff;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    box-shadow: none;\r\n    border-width: 2px;\r\n    border-color: #20d489;\r\n    border-style: solid;\r\n    padding: 0.4rem;\r\n    border-radius: 8px;\r\n}\r\n\r\n.button-outline:hover {\r\n    color: #fff;\r\n    background-color: #20d489;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    box-shadow: none;\r\n    border-width: 2px;\r\n    border-color: #20d489;\r\n    padding: 0.4rem;\r\n    border-radius: 8px;\r\n}\r\n\r\n\r\n.button-outline-red {\r\n    color: #f1416c;\r\n    background-color: #ffeff3;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    box-shadow: none;\r\n    border-width: 2px;\r\n    border-color: #f1416c;\r\n    border-style: solid;\r\n    padding: 0.4rem;\r\n    border-radius: 8px;\r\n}\r\n\r\n.button-outline-red:hover {\r\n    color: #ffeff3;\r\n    background-color: #f1416c;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    box-shadow: none;\r\n    border-width: 2px;\r\n    border-color: #f1416c;\r\n    padding: 0.4rem;\r\n    border-radius: 8px;\r\n    transform: scale(1.05);\r\n    transition: .2s ease-in-out;\r\n}\r\n\r\n\r\n.button:hover {\r\n    color: #f9f2e7;\r\n    background-color: hsl(155, 72%, 44%);\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    box-shadow: none;\r\n    border-style: none;\r\n    padding: 0.5rem;\r\n    border-radius: 8px;\r\n}\r\n\r\n.input-text {\r\n    color: #5e6278;\r\n    background-color: #f5f8fa;\r\n    border-color: #f5f8fa;\r\n    padding: 0.75rem;\r\n    padding-left: 1rem;\r\n    border-radius: 8px;\r\n}\r\n\r\n.inputHelp {\r\n    font-weight: 400;\r\n    font-size: 14px;\r\n    color: #5e6278;\r\n    margin-bottom: 1rem;\r\n    margin-top: 0.5rem;\r\n}\r\n\r\nbody{\r\n    background: #fbf9f6;\r\n    color: #181c32;\r\n    font-family: 'Poppins', sans-serif !important;\r\n}\r\n\r\n.card {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 0;\r\n    word-wrap: break-word;\r\n    background-color: #fff;\r\n    background-clip: border-box;\r\n    border: 0;\r\n    border-radius: 4px;\r\n    margin-bottom: 1.5rem;\r\n    box-shadow: none;\r\n}\r\n\r\n.label-form {\r\n    padding-top: 8px;\r\n}", "",{"version":3,"sources":["webpack://./public/css/account.css"],"names":[],"mappings":";;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,cAAc;IACd,yBAAyB;IACzB,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,sBAAsB;IACtB,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,qBAAqB;IACrB,mBAAmB;IACnB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,yBAAyB;IACzB,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,qBAAqB;IACrB,eAAe;IACf,kBAAkB;AACtB;;;AAGA;IACI,cAAc;IACd,yBAAyB;IACzB,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,qBAAqB;IACrB,mBAAmB;IACnB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,yBAAyB;IACzB,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,qBAAqB;IACrB,eAAe;IACf,kBAAkB;IAClB,sBAAsB;IACtB,2BAA2B;AAC/B;;;AAGA;IACI,cAAc;IACd,oCAAoC;IACpC,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,yBAAyB;IACzB,qBAAqB;IACrB,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,cAAc;IACd,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,cAAc;IACd,6CAA6C;AACjD;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,qBAAqB;IACrB,sBAAsB;IACtB,2BAA2B;IAC3B,SAAS;IACT,kBAAkB;IAClB,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB","sourcesContent":["\r\n\r\n.bg-green {\r\n    background-color: #20d489;\r\n}\r\n\r\n.button {\r\n    color: #f9f2e7;\r\n    background-color: #20d489;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    box-shadow: none;\r\n    border-style: none;\r\n    padding: 0.5rem;\r\n    border-radius: 8px;\r\n}\r\n\r\n.button-outline {\r\n    color: #20d489;\r\n    background-color: #fff;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    box-shadow: none;\r\n    border-width: 2px;\r\n    border-color: #20d489;\r\n    border-style: solid;\r\n    padding: 0.4rem;\r\n    border-radius: 8px;\r\n}\r\n\r\n.button-outline:hover {\r\n    color: #fff;\r\n    background-color: #20d489;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    box-shadow: none;\r\n    border-width: 2px;\r\n    border-color: #20d489;\r\n    padding: 0.4rem;\r\n    border-radius: 8px;\r\n}\r\n\r\n\r\n.button-outline-red {\r\n    color: #f1416c;\r\n    background-color: #ffeff3;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    box-shadow: none;\r\n    border-width: 2px;\r\n    border-color: #f1416c;\r\n    border-style: solid;\r\n    padding: 0.4rem;\r\n    border-radius: 8px;\r\n}\r\n\r\n.button-outline-red:hover {\r\n    color: #ffeff3;\r\n    background-color: #f1416c;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    box-shadow: none;\r\n    border-width: 2px;\r\n    border-color: #f1416c;\r\n    padding: 0.4rem;\r\n    border-radius: 8px;\r\n    transform: scale(1.05);\r\n    transition: .2s ease-in-out;\r\n}\r\n\r\n\r\n.button:hover {\r\n    color: #f9f2e7;\r\n    background-color: hsl(155, 72%, 44%);\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    box-shadow: none;\r\n    border-style: none;\r\n    padding: 0.5rem;\r\n    border-radius: 8px;\r\n}\r\n\r\n.input-text {\r\n    color: #5e6278;\r\n    background-color: #f5f8fa;\r\n    border-color: #f5f8fa;\r\n    padding: 0.75rem;\r\n    padding-left: 1rem;\r\n    border-radius: 8px;\r\n}\r\n\r\n.inputHelp {\r\n    font-weight: 400;\r\n    font-size: 14px;\r\n    color: #5e6278;\r\n    margin-bottom: 1rem;\r\n    margin-top: 0.5rem;\r\n}\r\n\r\nbody{\r\n    background: #fbf9f6;\r\n    color: #181c32;\r\n    font-family: 'Poppins', sans-serif !important;\r\n}\r\n\r\n.card {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 0;\r\n    word-wrap: break-word;\r\n    background-color: #fff;\r\n    background-clip: border-box;\r\n    border: 0;\r\n    border-radius: 4px;\r\n    margin-bottom: 1.5rem;\r\n    box-shadow: none;\r\n}\r\n\r\n.label-form {\r\n    padding-top: 8px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./public/css/account.css":
/*!********************************!*\
  !*** ./public/css/account.css ***!
  \********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_account_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./account.css */ "./node_modules/css-loader/dist/cjs.js!./public/css/account.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_account_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_account_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_account_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_account_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


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
/******/ 			"account": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_bootstrap_dist_css_bootstrap_min_css","vendors-node_modules_axios_index_js-node_modules_core-js_stable_index_js-node_modules_regener-efddf7","public_css_main_css-data_image_svg_xml_3csvg_xmlns_27http_www_w3_org_2000_svg_27_viewBox_27-4-b01be0"], () => (__webpack_require__("./public/js/account.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9qcy9hY2NvdW50LmpzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9qcy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vbWVldGluZ3MvLi9wdWJsaWMvanMvY3VzdG9tcy9hcHAuanMiLCJ3ZWJwYWNrOi8vbWVldGluZ3MvLi9wdWJsaWMvanMvc2VydmljZXMvYXV0aC5qcyIsIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9qcy9zZXJ2aWNlcy9wcm9maWxlLmpzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2Nzcy9hY2NvdW50LmNzcyIsIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9jc3MvYWNjb3VudC5jc3M/NWM2OCIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWVldGluZ3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiaW1hZ2UiLCJmaWxlcyIsInVuZGVmaW5lZCIsImFwcGVuZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJJRCIsInNldFByb2ZpbGVQaWMiLCJ0aGVuIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwiU1VDQ0VTUyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJlIiwicHJvZmlsZUltYWdlIiwic2V0QXR0cmlidXRlIiwidGFyZ2V0IiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsImFkZFRvYXN0IiwiYm9keSIsInNldFRpbWVvdXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsIkVSUk9SIiwiZXJyb3IiLCJkYXRhIiwiZGVzY3JpcHRpb24iLCJsb2dvdXQiLCJpbml0IiwiQVBJX0JBU0VfVVJMIiwiaW5wdXRGdWxsTmFtZSIsInZhbHVlIiwiTkFNRSIsImlucHV0RW1haWwiLCJFTUFJTCIsImZ1bGxOYW1lIiwiaW5uZXJIVE1MIiwiZ2V0VG90YWxUZWFtcyIsImNvdW50IiwiZ2V0VG90YWxNZWV0aW5ncyIsInVzZXJEYXRhIiwiZW1haWwiLCJuYW1lIiwiY3VycmVudEVtYWlsIiwibG9naW5BZ2FpbiIsInVwZGF0ZVVzZXJEZXRhaWxzIiwic2V0SXRlbSIsImlucHV0T2xkUGFzc3dvcmQiLCJpbnB1dE5ld1Bhc3N3b3JkMSIsImlucHV0TmV3UGFzc3dvcmQyIiwib2xkUGFzc3dvcmQiLCJuZXdQYXNzd29yZCIsInNldE5hdmJhciIsIlRPS0VOIiwic3BsaXQiLCJmaXJzdE5hbWUiLCJzaG93Qm9keU9uTG9hZCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInByb2Nlc3MiLCJlbGVtZW50Iiwic3RhdGUiLCJkdXJhdGlvbiIsIk1hdGgiLCJtYXgiLCJjZWlsIiwibGVuZ3RoIiwid3JhcHBlciIsImNyZWF0ZUVsZW1lbnQiLCJteXRvYXN0IiwiYXBwZW5kQ2hpbGQiLCJjb250ZW50IiwicCIsInN0eWxlIiwibWFyZ2luQm90dG9tIiwiYWRkIiwicmVnaXN0ZXIiLCJjcmVkZW50aWFscyIsImF4aW9zIiwiaGVhZGVycyIsImxvZ2luIiwicmVtb3ZlSXRlbSIsImdldFRva2VuIiwiQXV0aG9yaXphdGlvbiIsImdldFByb2ZpbGVQaWMiLCJpZCIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsUUFBUSxDQUFDQyxjQUFULENBQXlCLFdBQXpCLEVBQXVDQyxnQkFBdkMsQ0FBeUQsUUFBekQsRUFBbUUsWUFBTztBQUN0RSxNQUFNQyxRQUFRLEdBQUcsSUFBSUMsUUFBSixFQUFqQjtBQUNBLE1BQU1DLEtBQUssR0FBR0wsUUFBUSxDQUFDQyxjQUFULENBQXlCLFdBQXpCLEVBQXVDSyxLQUF2QyxDQUE2QyxDQUE3QyxDQUFkOztBQUNBLE1BQUtELEtBQUssS0FBS0UsU0FBZixFQUEyQjtBQUN2QjtBQUNIOztBQUNESixVQUFRLENBQUNLLE1BQVQsQ0FBaUIsWUFBakIsRUFBK0JILEtBQS9CO0FBQ0FGLFVBQVEsQ0FBQ0ssTUFBVCxDQUFpQixRQUFqQixFQUEyQkMsWUFBWSxDQUFDQyxPQUFiLENBQXNCQywwQ0FBdEIsQ0FBM0I7QUFDQUMsa0VBQWEsQ0FBRVQsUUFBRixDQUFiLENBQ0tVLElBREwsQ0FDVyxVQUFFQyxRQUFGLEVBQWdCO0FBQ25CLFFBQUtBLFFBQVEsQ0FBQ0MsT0FBVCxLQUFxQkMsK0NBQTFCLEVBQW9DO0FBQ2hDLFVBQU1DLE1BQU0sR0FBRyxJQUFJQyxVQUFKLEVBQWY7O0FBQ0FELFlBQU0sQ0FBQ0UsTUFBUCxHQUFnQixVQUFFQyxDQUFGLEVBQVM7QUFDckIsWUFBTUMsWUFBWSxHQUFHckIsUUFBUSxDQUFDQyxjQUFULENBQXlCLGNBQXpCLENBQXJCO0FBQ0FvQixvQkFBWSxDQUFDQyxZQUFiLENBQTJCLEtBQTNCLEVBQWtDRixDQUFDLENBQUNHLE1BQUYsQ0FBU0MsTUFB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QTtXQUNBLElBQUk7V0FDSjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLG9CQUFvQjtXQUMxQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQSw0Rzs7Ozs7VUM5Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJhY2NvdW50LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuaW1wb3J0ICcuLi9jc3MvbWFpbi5jc3MnO1xyXG5pbXBvcnQgJy4uL2Nzcy9hY2NvdW50LmNzcyc7XHJcbmltcG9ydCBhZGRUb2FzdCBmcm9tICcuL2N1c3RvbXMvYXBwJztcclxuaW1wb3J0ICcuL2FwcCc7XHJcbmltcG9ydCB7IGxvZ291dCB9IGZyb20gJy4vc2VydmljZXMvYXV0aCc7XHJcbmltcG9ydCB7IFNVQ0NFU1MsIEVSUk9SLCBJRCwgQVBJX0JBU0VfVVJMLCBOQU1FLCBFTUFJTCB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgc2V0UHJvZmlsZVBpYywgdXBkYXRlVXNlckRldGFpbHMsIGdldFRvdGFsVGVhbXMsIGdldFRvdGFsTWVldGluZ3MgfSBmcm9tICcuL3NlcnZpY2VzL3Byb2ZpbGUnO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdlZGl0SW1hZ2UnICkuYWRkRXZlbnRMaXN0ZW5lciggJ2NoYW5nZScsICggKSA9PiB7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2VkaXRJbWFnZScgKS5maWxlc1swXTtcclxuICAgIGlmICggaW1hZ2UgPT09IHVuZGVmaW5lZCApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoICdwcm9maWxlcGljJywgaW1hZ2UgKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCggJ3VzZXJJZCcsIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCBJRCApICk7XHJcbiAgICBzZXRQcm9maWxlUGljKCBmb3JtRGF0YSApXHJcbiAgICAgICAgLnRoZW4oICggcmVzcG9uc2UgKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggcmVzcG9uc2UubWVzc2FnZSA9PT0gU1VDQ0VTUyApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gKCBlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2ZpbGVJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAncHJvZmlsZUltYWdlJyApO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGVJbWFnZS5zZXRBdHRyaWJ1dGUoICdzcmMnLCBlLnRhcmdldC5yZXN1bHQgKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTCggaW1hZ2UgKTtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCAnUHJvZmlsZSBwaWMgdXBkYXRlZCBzdWNjZXNzZnVsbHknLCBkb2N1bWVudC5ib2R5LCBTVUNDRVNTICk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgfSwgMTUwMCApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBhZGRpbmcgcHJvZmlsZSBwaWM6ICR7cmVzcG9uc2UubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSApXHJcbiAgICAgICAgLmNhdGNoKCAoIGVycm9yICkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBhZGRpbmcgcHJvZmlsZSBwaWM6ICR7ZXJyb3IucmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbn1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgYWRkaW5nIHByb2ZpbGUgcGljOiAke2Vycm9yLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gKTtcclxufSApO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdsb2dvdXRCdXR0b24nICkuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbG9nb3V0KCk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24gPSAnL2xvZ2luJztcclxufSApO1xyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGNvbnN0IHByb2ZpbGVJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAncHJvZmlsZUltYWdlJyApO1xyXG4gICAgcHJvZmlsZUltYWdlLnNldEF0dHJpYnV0ZSggJ3NyYycsIGAke0FQSV9CQVNFX1VSTH0vJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggSUQgKX0ucG5nYCApO1xyXG5cclxuICAgIGNvbnN0IGlucHV0RnVsbE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2lucHV0TmFtZScgKTtcclxuICAgIGlucHV0RnVsbE5hbWUudmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggTkFNRSApO1xyXG5cclxuICAgIGNvbnN0IGlucHV0RW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2lucHV0RW1haWwnICk7XHJcbiAgICBpbnB1dEVtYWlsLnZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oIEVNQUlMICk7XHJcblxyXG4gICAgY29uc3QgZnVsbE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3Byb2ZpbGVOYW1lJyApO1xyXG4gICAgZnVsbE5hbWUuaW5uZXJIVE1MID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oIE5BTUUgKTtcclxuXHJcbiAgICBnZXRUb3RhbFRlYW1zKCApXHJcbiAgICAgICAgLnRoZW4oICggcmVzcG9uc2UgKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggcmVzcG9uc2UubWVzc2FnZSA9PT0gU1VDQ0VTUyApIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc3RhdDFWYWx1ZScgKS5pbm5lckhUTUwgPSByZXNwb25zZS5kYXRhWzBdLmNvdW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSApXHJcbiAgICAgICAgLmNhdGNoKCAoICkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3N0YXQxVmFsdWUnICkuaW5uZXJIVE1MID0gJyAtICc7XHJcbiAgICAgICAgfSApO1xyXG5cclxuICAgIGdldFRvdGFsTWVldGluZ3MoIClcclxuICAgICAgICAudGhlbiggKCByZXNwb25zZSApID0+IHtcclxuICAgICAgICAgICAgaWYgKCByZXNwb25zZS5tZXNzYWdlID09PSBTVUNDRVNTICkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzdGF0MlZhbHVlJyApLmlubmVySFRNTCA9IHJlc3BvbnNlLmRhdGFbMF0uY291bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IClcclxuICAgICAgICAuY2F0Y2goICggKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc3RhdDJWYWx1ZScgKS5pbm5lckhUTUwgPSAnIC0gJztcclxuICAgICAgICB9ICk7XHJcbn1cclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc2F2ZUNoYW5nZXMnICkuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29uc3QgaW5wdXRGdWxsTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnaW5wdXROYW1lJyApLnZhbHVlO1xyXG4gICAgY29uc3QgaW5wdXRFbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnaW5wdXRFbWFpbCcgKS52YWx1ZTtcclxuICAgIGNvbnN0IHVzZXJEYXRhID0ge1xyXG4gICAgICAgIGVtYWlsOiBpbnB1dEVtYWlsLFxyXG4gICAgICAgIG5hbWU6IGlucHV0RnVsbE5hbWUsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgY3VycmVudEVtYWlsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oIEVNQUlMICk7XHJcbiAgICBsZXQgbG9naW5BZ2FpbiA9IGZhbHNlO1xyXG4gICAgaWYgKCBjdXJyZW50RW1haWwgIT09IGlucHV0RW1haWwgKSB7XHJcbiAgICAgICAgbG9naW5BZ2FpbiA9IHRydWU7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVVc2VyRGV0YWlscyggdXNlckRhdGEsICd1cGRhdGVfdXNlcicgKVxyXG4gICAgICAgIC50aGVuKCAoIHJlc3BvbnNlICkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIHJlc3BvbnNlLm1lc3NhZ2UgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSggRU1BSUwsIHJlc3BvbnNlLmRhdGEuZW1haWwgKTtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCBOQU1FLCByZXNwb25zZS5kYXRhLm5hbWUgKTtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCAnWW91ciBkZXRhaWxzIGhhdmUgYmVlbiB1cGRhdGVkIHN1Y2Nlc3NmdWxseScsIGRvY3VtZW50LmJvZHksIFNVQ0NFU1MgKTtcclxuICAgICAgICAgICAgICAgIGlmICggbG9naW5BZ2FpbiApIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggJ1lvdSB3aWxsIGJlIGxvZ2dlZCBvdXQuIExvZyBpbiBhZ2Fpbi4nLCBkb2N1bWVudC5ib2R5LCBTVUNDRVNTICk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dvdXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJy9sb2dpbic7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwMCApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAxNTAwICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIHVwZGF0aW5nIHlvdXIgZGV0YWlsczogJHtyZXNwb25zZS5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IClcclxuICAgICAgICAuY2F0Y2goICggZXJyb3IgKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIHVwZGF0aW5nIHlvdXIgZGV0YWlsczogJHtlcnJvci5yZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9ufWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciB1cGRhdGluZyB5b3VyIGRldGFpbHM6ICR7ZXJyb3IubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSApO1xyXG59ICk7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3VwZGF0ZVBhc3N3b3JkJyApLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnN0IGlucHV0T2xkUGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2lucHV0T2xkUGFzc3dvcmQnICkudmFsdWU7XHJcbiAgICBjb25zdCBpbnB1dE5ld1Bhc3N3b3JkMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnaW5wdXROZXdQYXNzd29yZDEnICkudmFsdWU7XHJcbiAgICBjb25zdCBpbnB1dE5ld1Bhc3N3b3JkMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnaW5wdXROZXdQYXNzd29yZDInICkudmFsdWU7XHJcblxyXG4gICAgaWYgKCBpbnB1dE5ld1Bhc3N3b3JkMSA9PT0gJycgfHwgaW5wdXROZXdQYXNzd29yZDIgPT09ICcnIHx8IGlucHV0T2xkUGFzc3dvcmQgPT09ICcnICkge1xyXG4gICAgICAgIGFkZFRvYXN0KCAnRG9udCBlbnRlciBlbXB0eSBmaWVsZHMg8J+YnicsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICggaW5wdXROZXdQYXNzd29yZDEgIT09IGlucHV0TmV3UGFzc3dvcmQyICkge1xyXG4gICAgICAgIGFkZFRvYXN0KCAnWW91ciBuZXcgcGFzc3dvcmRzIGRvbnQgbWF0Y2gnLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1c2VyRGF0YSA9IHtcclxuICAgICAgICBvbGRQYXNzd29yZDogaW5wdXRPbGRQYXNzd29yZCxcclxuICAgICAgICBuZXdQYXNzd29yZDogaW5wdXROZXdQYXNzd29yZDEsXHJcbiAgICB9O1xyXG5cclxuICAgIHVwZGF0ZVVzZXJEZXRhaWxzKCB1c2VyRGF0YSwgJ3VwZGF0ZV9wYXNzd29yZCcgKVxyXG4gICAgICAgIC50aGVuKCAoIHJlc3BvbnNlICkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIHJlc3BvbnNlLm1lc3NhZ2UgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSggRU1BSUwsIHJlc3BvbnNlLmRhdGEuZW1haWwgKTtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCBOQU1FLCByZXNwb25zZS5kYXRhLm5hbWUgKTtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCAnWW91ciBwYXNzd29yZCBoYXMgYmVlbiB1cGRhdGVkJywgZG9jdW1lbnQuYm9keSwgU1VDQ0VTUyApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciB1cGRhdGluZyBwYXNzd29yZCAke3Jlc3BvbnNlLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gKVxyXG4gICAgICAgIC5jYXRjaCggKCBlcnJvciApID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgdXBkYXRpbmcgcGFzc3dvcmQ6ICR7ZXJyb3IucmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbn1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgdXBkYXRpbmcgcGFzc3dvcmQ6ICR7ZXJyb3IubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSApO1xyXG59ICk7XHJcblxyXG5pbml0KCk7XHJcbiIsImltcG9ydCB7IEFQSV9CQVNFX1VSTCwgSUQsIE5BTUUsIFRPS0VOIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuZnVuY3Rpb24gc2V0TmF2YmFyKCkge1xyXG4gICAgaWYgKCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggVE9LRU4gKSA9PT0gbnVsbCApIHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSAnL2xvZ2luJztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcm9maWxlSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ25hdlBpYycgKTtcclxuICAgIHByb2ZpbGVJbWFnZS5zZXRBdHRyaWJ1dGUoICdzcmMnLCBgJHtBUElfQkFTRV9VUkx9LyR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oIElEICl9LnBuZ2AgKTtcclxuXHJcbiAgICBjb25zdCBbZmlyc3ROYW1lXSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCBOQU1FICkuc3BsaXQoICcgJyApO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICduYW1lTmF2JyApLmlubmVySFRNTCA9IGZpcnN0TmFtZTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0JvZHlPbkxvYWQoKSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoICdoaWRlJyApO1xyXG59XHJcblxyXG5zZXROYXZiYXIoKTtcclxuc2hvd0JvZHlPbkxvYWQoKTtcclxuIiwiLy8gY29uc3QgQVBJX0JBU0VfVVJMID0gJ2h0dHA6Ly9teW1lZXRpbmdzYXBwLmhlcm9rdWFwcC5jb20vYXBpJztcclxuY29uc3QgeyBBUElfQkFTRV9VUkwgfSA9IHByb2Nlc3MuZW52O1xyXG5jb25zdCBUT0tFTiA9ICd0b2tlbic7XHJcbmNvbnN0IEVNQUlMID0gJ2VtYWlsJztcclxuY29uc3QgTkFNRSA9ICduYW1lJztcclxuY29uc3QgSUQgPSAnaWQnO1xyXG5cclxuY29uc3QgU1VDQ0VTUyA9ICdzdWNjZXNzJztcclxuY29uc3QgRVJST1IgPSAnZXJyb3InO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIEFQSV9CQVNFX1VSTCxcclxuICAgIFRPS0VOLFxyXG4gICAgRU1BSUwsXHJcbiAgICBOQU1FLFxyXG4gICAgSUQsXHJcbiAgICBTVUNDRVNTLFxyXG4gICAgRVJST1IsXHJcbn07XHJcbiIsImltcG9ydCB7IFNVQ0NFU1MgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5cclxuZnVuY3Rpb24gYWRkVG9hc3QoIG1lc3NhZ2UsIGVsZW1lbnQsIHN0YXRlICkge1xyXG4gICAgY29uc3QgZHVyYXRpb24gPSBNYXRoLm1heCggTWF0aC5jZWlsKCAoIG1lc3NhZ2UubGVuZ3RoICogMTAwMCApIC8gMjUgKSwgMTEwMCApO1xyXG5cclxuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG4gICAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdteXRvYXN0LXdyYXBwZXInICk7XHJcblxyXG4gICAgY29uc3QgbXl0b2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XHJcbiAgICBpZiAoIHN0YXRlID09PSBTVUNDRVNTICkge1xyXG4gICAgICAgIG15dG9hc3Quc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAnbXl0b2FzdCBteXRvYXN0LXN1Y2Nlc3MnICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG15dG9hc3Quc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAnbXl0b2FzdCBteXRvYXN0LWVycm9yJyApO1xyXG4gICAgfVxyXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZCggbXl0b2FzdCApO1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdjb250ZW50JyApO1xyXG4gICAgbXl0b2FzdC5hcHBlbmRDaGlsZCggY29udGVudCApO1xyXG5cclxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAncCcgKTtcclxuICAgIHAuc3R5bGUubWFyZ2luQm90dG9tID0gMDtcclxuICAgIHAuaW5uZXJIVE1MID0gbWVzc2FnZTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoIHAgKTtcclxuXHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKCB3cmFwcGVyICk7XHJcblxyXG4gICAgd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCAnaGlkZScgKTtcclxuICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCggJ3Nob3cnICk7XHJcbiAgICBzZXRUaW1lb3V0KCAoICkgPT4ge1xyXG4gICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCggJ2hpZGUnICk7XHJcbiAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge1xyXG4gICAgICAgICAgICB3cmFwcGVyLnJlbW92ZSgpO1xyXG4gICAgICAgIH0sIDEwMDAgKTtcclxuICAgIH0sIGR1cmF0aW9uICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZFRvYXN0O1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBBUElfQkFTRV9VUkwsIFRPS0VOLCBFTUFJTCwgTkFNRSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtvYmplY3R9IGNyZWRlbnRpYWxzIEFuIG9iamVjdCB3aXRoIG5hbWUsIGVtYWlsIGFuZCBwYXNzd29yZFxyXG4gKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSByZWdpc3RlciByZXNwb25zZSBkYXRhLCBvciByZWplY3RzIGlmIHJlcXVlc3RzXHJcbiAqIHRvIHJlZ2lzdGVyIGZhaWxzXHJcbiAqICogQGV4YW1wbGUgY3JlZGVudGlhbHNcclxuICoge1xyXG4gKiAgXCJuYW1lXCI6IFwiUHJhc2hhbnRoIFB1cmFuaWtcIixcclxuICogIFwiZW1haWxcIjogXCJwdXJhbmkyQGV4YW1wbGUuY29tXCIsXHJcbiAqICBcInBhc3N3b3JkXCI6IFwiUHVyYW5pQDJcIlxyXG4gKiB9XHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiByZWdpc3RlciggY3JlZGVudGlhbHMgKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhjcmVkZW50aWFscyk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS9hdXRoL3JlZ2lzdGVyYCxcclxuICAgICAgICBjcmVkZW50aWFscyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICk7XHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBjcmVkZW50aWFscyBBbiBvYmplY3Qgd2l0aCBlbWFpbCBhbmQgcGFzc3dvcmRcclxuICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgbG9naW4gcmVzcG9uc2UgZGF0YSwgb3IgcmVqZWN0cyBpZiByZXF1ZXN0cyB0b1xyXG4gKiBsb2dpbiBmYWlsc1xyXG4gKiBAZXhhbXBsZSBjcmVkZW50aWFsc1xyXG4gKiB7XHJcbiAqICBcImVtYWlsXCI6IFwicHVyYW5pMjBAZXhhbXBsZS5jb21cIixcclxuICogIFwicGFzc3dvcmRcIjogXCJQdXJhbmlAMlwiXHJcbiAqIH1cclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGxvZ2luKCBjcmVkZW50aWFscyApIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBgJHtBUElfQkFTRV9VUkx9L2F1dGgvbG9naW5gLFxyXG4gICAgICAgIGNyZWRlbnRpYWxzLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG59XHJcblxyXG4vKipcclxuICogUmVtb3ZlcyB0aGUgYXV0aCB0b2tlbiBhbmQgZW1haWwgZnJvbSB0aGUgbG9jYWwgc3RvcmFnZS5cclxuICovXHJcbmZ1bmN0aW9uIGxvZ291dCgpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCBUT0tFTiApO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oIE5BTUUgKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCBFTUFJTCApO1xyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyB0aGUgYXV0aG9yaXphdGlvbiB0b2tlbiBmb3IgbG9nZ2VkIGluIHVzZXIsIG9yIG51bGwgaWYgbm8gb25lIGlzIGxvZ2dlZCBpblxyXG4gKiBAcmV0dXJucyBUaGUgYXV0aG9yaXphdGlvbiB0b2tlbiBmb3IgbG9nZ2VkIGluIHVzZXIsIG9yIG51bGwgaWYgbm8gb25lIGlzIGxvZ2dlZCBpblxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0VG9rZW4oKSB7XHJcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oIFRPS0VOICk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICByZWdpc3RlcixcclxuICAgIGxvZ291dCxcclxuICAgIGdldFRva2VuLFxyXG4gICAgbG9naW4sXHJcbn07XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IGdldFRva2VuIH0gZnJvbSAnLi9hdXRoJztcclxuaW1wb3J0IHsgQVBJX0JBU0VfVVJMIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0ICdjb3JlLWpzL3N0YWJsZSc7XHJcbmltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNldFByb2ZpbGVQaWMoIGZvcm1EYXRhICkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIGAke0FQSV9CQVNFX1VSTH0vcHJvZmlsZWAsXHJcbiAgICAgICAgZm9ybURhdGEsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnLFxyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7Z2V0VG9rZW4oKX1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFByb2ZpbGVQaWMoIGlkICkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS9wcm9maWxlL3BpYy8ke2lkfWAsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgJHtnZXRUb2tlbigpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVVzZXJEZXRhaWxzKCB1c2VyRGF0YSwgYWN0aW9uICkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wYXRjaChcclxuICAgICAgICBgJHtBUElfQkFTRV9VUkx9L2FjY291bnQ/YWN0aW9uPSR7YWN0aW9ufWAsXHJcbiAgICAgICAgdXNlckRhdGEsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgJHtnZXRUb2tlbigpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFRvdGFsVGVhbXMoICkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS9hY2NvdW50L3RlYW1zYCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke2dldFRva2VuKCl9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0VG90YWxNZWV0aW5ncyggKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICBgJHtBUElfQkFTRV9VUkx9L2FjY291bnQvbWVldGluZ3NgLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7Z2V0VG9rZW4oKX1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgc2V0UHJvZmlsZVBpYyxcclxuICAgIGdldFByb2ZpbGVQaWMsXHJcbiAgICB1cGRhdGVVc2VyRGV0YWlscyxcclxuICAgIGdldFRvdGFsVGVhbXMsXHJcbiAgICBnZXRUb3RhbE1lZXRpbmdzLFxyXG59O1xyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcblxcclxcbi5iZy1ncmVlbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMGQ0ODk7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24ge1xcclxcbiAgICBjb2xvcjogI2Y5ZjJlNztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwZDQ4OTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLW91dGxpbmUge1xcclxcbiAgICBjb2xvcjogIzIwZDQ4OTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjMjBkNDg5O1xcclxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgICBwYWRkaW5nOiAwLjRyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi1vdXRsaW5lOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMGQ0ODk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogIzIwZDQ4OTtcXHJcXG4gICAgcGFkZGluZzogMC40cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5idXR0b24tb3V0bGluZS1yZWQge1xcclxcbiAgICBjb2xvcjogI2YxNDE2YztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWZmMztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjZjE0MTZjO1xcclxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgICBwYWRkaW5nOiAwLjRyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi1vdXRsaW5lLXJlZDpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiAjZmZlZmYzO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjE0MTZjO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcclxcbiAgICBib3JkZXItY29sb3I6ICNmMTQxNmM7XFxyXFxuICAgIHBhZGRpbmc6IDAuNHJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5idXR0b246aG92ZXIge1xcclxcbiAgICBjb2xvcjogI2Y5ZjJlNztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE1NSwgNzIlLCA0NCUpO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC10ZXh0IHtcXHJcXG4gICAgY29sb3I6ICM1ZTYyNzg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY4ZmE7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogI2Y1ZjhmYTtcXHJcXG4gICAgcGFkZGluZzogMC43NXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dEhlbHAge1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGNvbG9yOiAjNWU2Mjc4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbmJvZHl7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmYmY5ZjY7XFxyXFxuICAgIGNvbG9yOiAjMTgxYzMyO1xcclxcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBtaW4td2lkdGg6IDA7XFxyXFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubGFiZWwtZm9ybSB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA4cHg7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3B1YmxpYy9jc3MvYWNjb3VudC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7O0FBR0E7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9COzs7QUFHQTtJQUNJLGNBQWM7SUFDZCxvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuXFxyXFxuLmJnLWdyZWVuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwZDQ4OTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbiB7XFxyXFxuICAgIGNvbG9yOiAjZjlmMmU3O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjBkNDg5O1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tb3V0bGluZSB7XFxyXFxuICAgIGNvbG9yOiAjMjBkNDg5O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcclxcbiAgICBib3JkZXItY29sb3I6ICMyMGQ0ODk7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIHBhZGRpbmc6IDAuNHJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLW91dGxpbmU6aG92ZXIge1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwZDQ4OTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjMjBkNDg5O1xcclxcbiAgICBwYWRkaW5nOiAwLjRyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmJ1dHRvbi1vdXRsaW5lLXJlZCB7XFxyXFxuICAgIGNvbG9yOiAjZjE0MTZjO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlZmYzO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcclxcbiAgICBib3JkZXItY29sb3I6ICNmMTQxNmM7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIHBhZGRpbmc6IDAuNHJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLW91dGxpbmUtcmVkOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6ICNmZmVmZjM7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMTQxNmM7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogI2YxNDE2YztcXHJcXG4gICAgcGFkZGluZzogMC40cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxyXFxuICAgIHRyYW5zaXRpb246IC4ycyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiAjZjlmMmU3O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTU1LCA3MiUsIDQ0JSk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LXRleHQge1xcclxcbiAgICBjb2xvcjogIzVlNjI3ODtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjhmYTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjZjVmOGZhO1xcclxcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0SGVscCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgY29sb3I6ICM1ZTYyNzg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keXtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZiZjlmNjtcXHJcXG4gICAgY29sb3I6ICMxODFjMzI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG1pbi13aWR0aDogMDtcXHJcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5sYWJlbC1mb3JtIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDhweDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hY2NvdW50LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYWNjb3VudC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJhY2NvdW50XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rbWVldGluZ3NcIl0gPSBzZWxmW1wid2VicGFja0NodW5rbWVldGluZ3NcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2Jvb3RzdHJhcF9kaXN0X2Nzc19ib290c3RyYXBfbWluX2Nzc1wiLFwidmVuZG9ycy1ub2RlX21vZHVsZXNfYXhpb3NfaW5kZXhfanMtbm9kZV9tb2R1bGVzX2NvcmUtanNfc3RhYmxlX2luZGV4X2pzLW5vZGVfbW9kdWxlc19yZWdlbmVyLWVmZGRmN1wiLFwicHVibGljX2Nzc19tYWluX2Nzcy1kYXRhX2ltYWdlX3N2Z194bWxfM2NzdmdfeG1sbnNfMjdodHRwX3d3d193M19vcmdfMjAwMF9zdmdfMjdfdmlld0JveF8yNy00LWIwMWJlMFwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3B1YmxpYy9qcy9hY2NvdW50LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iXSwic291cmNlUm9vdCI6IiJ9