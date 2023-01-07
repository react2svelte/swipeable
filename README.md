# @react2svelte/swipable

[![npm version](https://img.shields.io/npm/v/@react2svelte/swipable.svg)](https://www.npmjs.com/package/@react2svelte/swipable)

An action to emit swipe and tap events on an element, based on [react-swipable](https://www.npmjs.com/package/react-swipeable) v7.0.0. Many thanks to all the contributors of that package for their hard work!

This package provides a [Svelte Action](https://svelte.dev/tutorial/actions) called `swipable` to attach to any DOM element to react to swipe events.

## Quickstart

Install the library

```bash
npm i @react2svelte/swipable
```

And add it to your component

```js
<script lang="ts">
  import { swipable } from '@react2svelte/swipable';
  import type { SwipeEventData } from '@react2svelte/swipable';
  // ...

  function handler(e: CustomEvent<SwipeEventData>) {
    console.log('User swiped!', e.detail);
  }

</script>

<div
  use:swipable  <!-- use the action -->
  on:swiped={handler} <!-- set a handler for the swiped event -->
/>
```

## Type hints on the events

Add the following line to your `app.d.ts` file

```js
/// <reference types="@react2svelte/swipable" />
```

(There should already be a line with `/// <reference types="@sveltejs/kit" />`)

## Emitted events

The `swipable` action emits 10 new events:

General swipe events

- `swipedstart` - emitted once, at the beginning of a swipe
- `swiping` - emitted continuously as the user is swiping
- `swiped` - emitted once the swipe is complete

Directional swipe events. These are like `swiped` but for specific directions only

- `swipedup` - User swiped up.
- `swipeddown` - User swiped down.
- `swipedleft` - User swiped left.
- `swipedright` - User swiped right.

Tap events

- `tap`

Passthrough events

- `touchstartormousedown`
- `touchendormouseup`

## Configuration

This library is based on `react-swipable`, and all the same configuration options and default values apply. Configration can be set by passing an object to `use` declation:

```js
<div
  use:swipable={{
    delta: 10,                             // min distance(px) before a swipe starts. *See Notes*
    preventScrollOnSwipe: false,           // prevents scroll during swipe (*See Details*)
    trackTouch: true,                      // track touch input
    trackMouse: false,                     // track mouse input
    rotationAngle: 0,                      // set a rotation angle
    swipeDuration: Infinity,               // allowable duration of a swipe (ms). *See Notes*
    touchEventOptions: { passive: true },  // options for touch listeners (*See Details*)
    }}
/>
```

Please have a look at the [react-swipable documentation](https://www.npmjs.com/package/react-swipeable) for additional information.

## Swipe event data

All Event Handlers are called with the below event data, `SwipeEventData`.

```js
{
  event,          // source event
  initial,        // initial swipe [x,y]
  first,          // true for the first event of a tracked swipe
  deltaX,         // x offset (current.x - initial.x)
  deltaY,         // y offset (current.y - initial.y)
  absX,           // absolute deltaX
  absY,           // absolute deltaY
  velocity,       // √(absX^2 + absY^2) / time - "absolute velocity" (speed)
  vxvy,           // [ deltaX/time, deltaY/time] - velocity per axis
  dir,            // direction of swipe (Left|Right|Up|Down)
}
```

## Alternative: [`svelte-gestures`](https://github.com/Rezi/svelte-gestures)

`svelte-gestures` provides `pinch`, `pan` and `rotate` gestures besides swiping and tapping. However, there is no support for  the `swiping` functionality of `swipable`, which provides continuous updates as the user is swiping, rather than just a final event ones the swipe is complete.

For the user it can be helpful to get visual feedback as they are swiping - for example and image in a gallery - and see the image move as they are swiping, not just once at the end of their swipe.

## License

MIT
