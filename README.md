# @react2svelte/swipable

An action to emit swipe and tap events on an element, based on [react-swipable](https://www.npmjs.com/package/react-swipeable) v7.0.0.

## Quickstart

Install the library

```bash
npm i react-swipeable
```

And add it to your component

```
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

```
/// <reference types="@react2svelte/swipable" />
```

(There should already be a line with `/// <reference types="@sveltejs/kit" />`)

## Emitted Events

The `swipable` action emits 10 new events:

General swipe events

- swipedstart
- swiping
- swiped

Directional swipe events

- swipedup
- swipeddown
- swipedleft
- swipedright

Tap events

- tap
- touchstartormousedown
- touchendormouseup

## Configuration

This library is based on `react-swipable`, and all the same configuration options and default values apply. Configration can be set by passing an object to `use` declation:

```
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
