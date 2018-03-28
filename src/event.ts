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
'use strict'

import ua from 'vigour-ua'

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
const hasTouch = (uaStr?: string): boolean => {
  let check = false
  // agent mapping
  const agent = !uaStr ? window.navigator.userAgent : uaStr
  // get user agent object
  const useragent = ua(agent)
  // hastouch binding
  if (useragent.device !== 'desktop') {
    check = true
  }

  return check
}

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
const getEventPos = (ev: any): object => {
  let event = null

  if (hasTouch()) {
    event = ev.originalEvent.touches[0]
  } else {
    event = ev
  }

  if (!event) {
    throw new Error('event object is not defined')
  }

  return {
    x: event.pageX ? parseInt(event.pageX) : 0,
    y: event.pageY ? parseInt(event.pageY) : 0
  }
}

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
const getEventOffset = (ev) => {
  let event = null

  if (hasTouch()) {
    event = ev.originalEvent.touches[0]
  } else {
    event = ev
  }

  if (!event) {
    throw new Error('event object is not defined')
  }

  return {
    x: event.offsetX ? parseInt(event.offsetX) : 0,
    y: event.offsetY ? parseInt(event.offsetY) : 0
  }
}

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
export default {
  hasTouch,
  getEventPos,
  getEventOffset,
  HAS_TOUCH: hasTouch,
  START: hasTouch() ? 'touchstart' : 'mousedown', // drag start
  MOVE: hasTouch() ? 'touchmove' : 'mousemove', // drag move
  END: hasTouch() ? 'touchend' : 'mouseup', // drag end
  CANCEL: hasTouch() ? 'touchcancel' : 'mouseup', // drag cancel
  CLICK: 'click', // click
  DOUBLE_CLICK: 'dblclick', // double click
  OVER: 'mouseover', // mouse over
  OUT: 'mouseout', // mouse out
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
}