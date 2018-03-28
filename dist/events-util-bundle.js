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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * jquery event utilities
 * Event-related utility that returns the position or offset at which the event occurred.
 * It also allows you to apply event names organically according to the device.
 *
 * @since 2018.03.28 - draft
 * @example
 *  import eventUtil from 'jquery-event-util'
 *
 *  // event name is touchstart on mobile, mousedown on desktop
 *  $('.test').on(eventUtil.MOVE, (e) => {
 *    eventUtil.getEventPosition(e) // {x: number, y: number}
 *    eventUtil.getEventOffset(e) // {x:number, y: number}
 *  })
 */

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vigour_ua_1 = __importDefault(__webpack_require__(1));
/**
 * detect mobile device (touch device)
 *
 * @function hasTouch
 * @return {boolean} touch device
 * @example
 *  import eventUtil from 'jquery-event-util'
 *
 *  eventUtil.hasTouch()  // true on mobile, false on desktop
 */
var hasTouch = function (uaStr) {
    var check = false;
    // agent mapping
    var agent = !uaStr ? window.navigator.userAgent : uaStr;
    // get user agent object
    var useragent = vigour_ua_1.default(agent);
    // hastouch binding
    if (useragent.device !== 'desktop') {
        check = true;
    }
    return check;
};
/**
 * get event posision
 *
 * @function getEventPos
 * @param {Object} ev event object
 * @returns {Object} event position object
 * @return {number} x position x
 * @return {number} y position y
 * @example
 *  import eventUtil from 'jquery-event-util'
 *
 *  $('.test').on(eventUtil.MOVE, (e) => {
 *    eventUtil.getEventPos(e) // {x: number, y: number}
 *  })
 */
var getEventPos = function (ev) {
    var event = null;
    if (hasTouch()) {
        event = ev.originalEvent.touches[0];
    }
    else {
        event = ev;
    }
    if (!event) {
        throw new Error('event object is not defined');
    }
    return {
        x: event.pageX ? parseInt(event.pageX) : 0,
        y: event.pageY ? parseInt(event.pageY) : 0
    };
};
/**
 * get event offset position
 *
 * @function getEventOffset
 * @param {Object} ev event object
 * @returns {Object} offset position object
 * @return {number} x offset x position
 * @return {number} y offset y position
 * @example
 *  import eventUtil from 'jquery-event-util'
 *
 *  $('.test').on(eventUtil.MOVE, (e) => {
 *    eventUtil.getEventOffset(e) // {x: number, y: number}
 *  })
 */
var getEventOffset = function (ev) {
    var event = null;
    if (hasTouch()) {
        event = ev.originalEvent.touches[0];
    }
    else {
        event = ev;
    }
    if (!event) {
        throw new Error('event object is not defined');
    }
    return {
        x: event.offsetX ? parseInt(event.offsetX) : 0,
        y: event.offsetY ? parseInt(event.offsetY) : 0
    };
};
/**
 * @property {Function} hasTouch has touch function
 * @property {Function} getEventPos get event position
 * @property {Function} getEventOffset get event offset
 * @property {string} START touch or mouse move start
 * @property {string} MOVE touch or mouse move
 * @property {string} END touch or mouse end
 * @property {string} CANCEL touch cancel or mouse up
 * @property {string} CLICK click event
 * @property {string} DOUBLE_CLICK double click event
 * @property {string} OVER mouse over event
 * @property {string} OUT mouse out event
 * @property {string} RESIZE orientation change or resize event
 * @property {string} URL_CHANGE pop state or hash change
 * @property {string} INPUT_CHECK input blur event
 * @property {string} FILE_CHECK file input change event
 * @property {string} REFRESH refresh event
 * @property {string} SELECT select change vent
 * @property {string} DRAG_START mouse drag start event
 * @property {string} DRAG_END mouse drag end event
 * @property {string} KEY keypress event
 * @property {string} ONLOAD onload event
 * @property {string} DRAW_CLICK click on draw event (specific)
 * @property {string} DRAW_START draw start event (specific)
 * @property {string} DRAW_MOVE draw move event (specific)
 * @property {string} DRAW_END draw end event (specific)
 */
exports.default = {
    hasTouch: hasTouch,
    getEventPos: getEventPos,
    getEventOffset: getEventOffset,
    HAS_TOUCH: hasTouch,
    START: hasTouch() ? 'touchstart' : 'mousedown',
    MOVE: hasTouch() ? 'touchmove' : 'mousemove',
    END: hasTouch() ? 'touchend' : 'mouseup',
    CANCEL: hasTouch() ? 'touchcancel' : 'mouseup',
    CLICK: 'click',
    DOUBLE_CLICK: 'dblclick',
    OVER: 'mouseover',
    OUT: 'mouseout',
    RESIZE: 'onorientationchange' in window ? 'orientationchange' : 'resize',
    URL_CHANGE: 'onpopstate' in window ? 'popstate' : 'hashchange',
    INPUT_CHECK: 'blur',
    FILE_CHECK: 'change',
    CHANGE: 'change',
    REFRESH: 'refresh',
    SELECT: 'select',
    DRAG_START: 'dragStart',
    DRAG_END: 'dragEnd',
    KEY: 'keypress',
    ONLOAD: 'onload',
    DRAW_CLICK: 'click.draw',
    DRAW_START: hasTouch() ? 'touchstart.draw' : 'mousedown.draw',
    DRAW_MOVE: hasTouch() ? 'touchmove.draw' : 'mousemove.draw',
    DRAW_END: hasTouch() ? 'touchend.draw' : 'mouseup.draw',
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function ua
 * Returns an object representing the user agent including data such as browser, device and platform
 * @param {string} _ua - the raw user agent string to be converted
 * @param {string} obj - (optional) object to be merged to the output result
 * @returns {object} object representing your user agent
 */
module.exports = exports = function exports(_ua, obj) {
  if (!obj) obj = {};
  // _ua = 'webos; linux - large screen'
  var node = 'node.js';
  var _ff = 'firefox';
  var _mac = 'mac';
  var _chrome = 'chrome';
  var _android = 'android';
  var _mobile = '.+mobile';
  var _webkit = 'webkit';
  var _ps = 'playstation';
  var _xbox = 'xbox';
  var _linux = 'linux';
  var _castDetect = 'crkey';
  var _chromecast = 'cast';
  var _tablet = 'tablet';
  var _windows = 'windows';
  var _phone = 'phone';
  var _facebook = 'facebook';
  var _edge = 'edge';
  var _version = 'version';
  var _samsung = 'samsung';

  var _fullUA = typeof _ua === 'string' ? _ua.toLowerCase() : node;
  var _vendorIdx = _fullUA.indexOf('*vg*');
  _ua = ~_vendorIdx ? _fullUA.substring(0, _vendorIdx - 1) : _fullUA;

  /**
   * browser detection
   */
  test.call(obj, _ua, function (query, arr) {
    obj.browser = arr[2] || query;
    var _v = _ua.match(new RegExp('((([\\/ ]' + _version + '|' + arr[0] + '(?!.+' + _version + '))[/ ])| rv:)([0-9]{1,4}\\.[0-9]{0,2})'));
    obj[_version] = _v ? Number(_v[4]) : 0;
    obj.prefix = arr[1];
    // TODO: add prefix for opera v>12.15;
    // TODO: windows check for ie 11 may be too general;
  }, [true, _webkit], ['\\(' + _windows, 'ms', 'ie'], ['safari', _webkit], [_ff, 'moz'], ['opera', 'O'], ['msie', 'ms', 'ie'], [_facebook], [_chrome + '|crios/', _webkit, _chrome], [_edge, _webkit, _edge], [node, false, true]);

  /**
   * platform detection
   */
  test.call(obj, _ua, 'platform', [true, _windows], [_linux], ['lg.{0,3}netcast', 'lg'], // TODO:propably need to add more!
  [_ff + _mobile, _ff], [_mac + ' os x', _mac], ['iphone|ipod|ipad', 'ios'], [_xbox], [_ps], [_android], [_windows], [_castDetect, _chromecast], ['smart-tv;|;' + _samsung + ';smarttv', _samsung], // SmartTV2013
  [node]);

  /**
   * device detection
   */
  test.call(obj, _ua, 'device', [true, 'desktop'], [_windows + '.+touch|ipad|' + _android, _tablet], [_phone + '|phone|(' + _android + _mobile + ')|(' + _ff + _mobile + ')|' + _windows + ' phone|iemobile', _phone], [_xbox + '|' + _ps, 'console'], [_castDetect, _chromecast], [_tablet + '|amazon-fireos|nexus (?=[^1-6])\\d{1,2}', _tablet], ['\\btv\\b|smarttv|googletv|appletv|hbbtv|pov_tv|netcast.tv|webos.+large|viera|aft[bsm]|bravia', 'tv'], ['mozilla\\/5.0 \\(compatible; .+http:\\/\\/', 'bot'], [node, 'server']);

  return obj;

  /**
   * test
   * search for regexps in the userAgent
   * fn is a on success callback
   * check tests in https://github.com/faisalman/ua-parser-js to test for userAgents
   * @method
   */
  function test(_ua, fn) {
    for (var tests = arguments, i = tests.length - 1, t = tests[i], query = t[0]; query !== true && !new RegExp(query).test(_ua) && i > 0; t = tests[--i], query = t[0]) {} //eslint-disable-line
    // this for has no body
    if (fn.slice || fn.call(this, query, t)) {
      this[fn] = t[1] === void 0 ? query : t[1];
    }
  }
};

/***/ })
/******/ ]);
//# sourceMappingURL=events-util-bundle.js.map