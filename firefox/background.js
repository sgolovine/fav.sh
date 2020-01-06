/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./ext/scripts/background/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ext/scripts/background/auth.js":
/*!****************************************!*\
  !*** ./ext/scripts/background/auth.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var baseURL = 'https://github.com';
var path = 'login/oauth/authorize';
var clientId = '7fb2c68496e3fbc3f546';
var scope = 'gist';
var redirect = 'https://chromeauth.fav.sh/';
var authUrl = "".concat(baseURL, "/").concat(path, "?client_id=").concat(clientId, "&scope=").concat(scope, "&redirect_uri=").concat(redirect);

function toggleLogin() {
  chrome.tabs.create({
    url: authUrl
  });
}

chrome.runtime.onMessage.addListener(function (message) {
  if (message.event === 'login') {
    toggleLogin();
  }
});

/***/ }),

/***/ "./ext/scripts/background/index.js":
/*!*****************************************!*\
  !*** ./ext/scripts/background/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth */ "./ext/scripts/background/auth.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _auth__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup */ "./ext/scripts/background/popup.js");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_popup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _popup__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _popup__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./ext/scripts/background/popup.js":
/*!*****************************************!*\
  !*** ./ext/scripts/background/popup.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Initialize windowAppId without a set WINDOW_ID */
var appWindowId = chrome.windows.WINDOW_ID_NONE;
var CONTEXT_MENU_ID = 'fav-extension';
/**
 * Popup dimensions
 */

var POPUP_HEIGHT = 800;
var POPUP_WIDTH = 1500;
/**
 * Helper function that insures
 * that only a single window stays
 * open at a time
 */

function closeIfExist() {
  if (appWindowId > 0) {
    chrome.windows.remove(appWindowId);
    appWindowId = chrome.windows.WINDOW_ID_NONE;
  }
}
/**
 * When the user clicks the context menu item
 * This function will open the app in a popup
 */


function popAppWindow(type) {
  closeIfExist();
  var options = {
    type: 'popup',
    left: 100,
    top: 100,
    height: POPUP_HEIGHT,
    width: POPUP_WIDTH
  };

  if (type === 'open') {
    options.url = 'index.html';
    chrome.windows.create(options, function (win) {
      appWindowId = win.id;
    });
  }
}
/**
 * Create out context menu handler
 */


chrome.contextMenus.onClicked.addListener(function (event) {
  if (event.menuItemId === CONTEXT_MENU_ID) {
    popAppWindow('open');
  }
});
/**
 * Now create the context menu entry
 */

chrome.contextMenus.create({
  id: CONTEXT_MENU_ID,
  title: 'Bookmarks',
  contexts: ['all']
});

/***/ })

/******/ });
//# sourceMappingURL=background.js.map