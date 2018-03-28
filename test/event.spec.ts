/**
 * event test driven spec
 * 
 * @since 2018.03.28 - draft
 */
'use strict'

import event from '../src/event'
import { expect } from 'chai'

describe('jquery-event-util test', () => {
  it('1. event should return object', () => {
    expect(typeof event).to.equal('object')
  })

  it('2. event hasTouch is function', () => {
    expect(typeof event.hasTouch).to.equal('function')
  })

  it('3. hasTouch return boolean', () => {
    const ua = event.hasTouch()
    expect(typeof ua).to.equal('boolean')
  })

  it('4. hasTouch return false when useragent is desktop', () => {
    const isTouch = event.hasTouch()
    expect(isTouch).to.equal(false)
  })

  it('5. start event mouse down on desktop', () => {
    expect(event.START).to.equal('mousedown')
  })

  it('6. hasTouch return true when useragent is mobile', () => {
    const uaStr = 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1'
    const isTouch = event.hasTouch(uaStr)

    expect(isTouch).to.equal(true)
  })
})
