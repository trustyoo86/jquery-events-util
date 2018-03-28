# jquery-event-util
Event-related utility that returns the position or offset at which the event occurred. It also allows you to apply event names organically according to the device.

## install

npm install
```bash
npm install jquery-event-util --save
```

yarn install
```bash
yarn add jquery-event-util
```

## build

development mode
```bash
# npm
npm run dev
# yarn
yarn dev
```

production mode
```bash
# npm 
npm run prod
# yarn
yarn prod
```

## Members

<dl>
<dt><a href="#default">default</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#hasTouch">hasTouch()</a> ⇒ <code>boolean</code></dt>
<dd><p>detect mobile device (touch device)</p>
</dd>
<dt><a href="#getEventPos">getEventPos(ev)</a> ⇒ <code>Object</code> | <code>number</code> | <code>number</code></dt>
<dd><p>get event posision</p>
</dd>
<dt><a href="#getEventOffset">getEventOffset(ev)</a> ⇒ <code>Object</code> | <code>number</code> | <code>number</code></dt>
<dd><p>get event offset position</p>
</dd>
<dt><a href="#ua
Returns an object representing the user agent including data such as browser, device and platform">ua
Returns an object representing the user agent including data such as browser, device and platform(_ua, obj)</a> ⇒ <code>object</code></dt>
<dd></dd>
</dl>

<a name="default"></a>

## default
**Kind**: global variable  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| hasTouch | <code>function</code> | has touch function |
| getEventPos | <code>function</code> | get event position |
| getEventOffset | <code>function</code> | get event offset |
| START | <code>string</code> | touch or mouse move start |
| MOVE | <code>string</code> | touch or mouse move |
| END | <code>string</code> | touch or mouse end |
| CANCEL | <code>string</code> | touch cancel or mouse up |
| CLICK | <code>string</code> | click event |
| DOUBLE_CLICK | <code>string</code> | double click event |
| OVER | <code>string</code> | mouse over event |
| OUT | <code>string</code> | mouse out event |
| RESIZE | <code>string</code> | orientation change or resize event |
| URL_CHANGE | <code>string</code> | pop state or hash change |
| INPUT_CHECK | <code>string</code> | input blur event |
| FILE_CHECK | <code>string</code> | file input change event |
| REFRESH | <code>string</code> | refresh event |
| SELECT | <code>string</code> | select change vent |
| DRAG_START | <code>string</code> | mouse drag start event |
| DRAG_END | <code>string</code> | mouse drag end event |
| KEY | <code>string</code> | keypress event |
| ONLOAD | <code>string</code> | onload event |
| DRAW_CLICK | <code>string</code> | click on draw event (specific) |
| DRAW_START | <code>string</code> | draw start event (specific) |
| DRAW_MOVE | <code>string</code> | draw move event (specific) |
| DRAW_END | <code>string</code> | draw end event (specific) |

<a name="hasTouch"></a>

## hasTouch() ⇒ <code>boolean</code>
detect mobile device (touch device)

**Kind**: global function  
**Returns**: <code>boolean</code> - touch device  
**Example**  
```js
import eventUtil from 'jquery-event-util'

 eventUtil.hasTouch()  // true on mobile, false on desktop
```
<a name="getEventPos"></a>

## getEventPos(ev) ⇒ <code>Object</code> \| <code>number</code> \| <code>number</code>
get event posision

**Kind**: global function  
**Returns**: <code>Object</code> - event position object<code>number</code> - x position x<code>number</code> - y position y  

| Param | Type | Description |
| --- | --- | --- |
| ev | <code>Object</code> | event object |

**Example**  
```js
import eventUtil from 'jquery-event-util'

 $('.test').on(eventUtil.MOVE, (e) => {
   eventUtil.getEventPos(e) // {x: number, y: number}
 })
```
<a name="getEventOffset"></a>

## getEventOffset(ev) ⇒ <code>Object</code> \| <code>number</code> \| <code>number</code>
get event offset position

**Kind**: global function  
**Returns**: <code>Object</code> - offset position object<code>number</code> - x offset x position<code>number</code> - y offset y position  

| Param | Type | Description |
| --- | --- | --- |
| ev | <code>Object</code> | event object |

**Example**  
```js
import eventUtil from 'jquery-event-util'

 $('.test').on(eventUtil.MOVE, (e) => {
   eventUtil.getEventOffset(e) // {x: number, y: number}
 })
```
