declare namespace svelteHTML {
    interface HTMLAttributes<T> {
      'on:swipedup'?: (e: CustomEvent<import('$lib/types').SwipeEventData>) => void;
      'on:swipeddown'?: (e: CustomEvent<import('$lib/types').SwipeEventData>) => void;
      'on:swipedleft'?: (e: CustomEvent<import('$lib/types').SwipeEventData>) => void;
      'on:swipedright'?: (e: CustomEvent<import('$lib/types').SwipeEventData>) => void;
      'on:swipedstart'?: (e: CustomEvent<import('$lib/types').SwipeEventData>) => void;
      'on:swiped'?: (e: CustomEvent<import('$lib/types').SwipeEventData>) => void;
      'on:swiping'?: (e: CustomEvent<import('$lib/types').SwipeEventData>) => void;
      'on:tap'?: (e: CustomEvent<import('$lib/types').HandledEvents>) => void;
      'on:touchstartormousedown'?: (e: CustomEvent<import('$lib/types').HandledEvents>) => void;
      'on:touchendormouseup'?: (e: CustomEvent<import('$lib/types').HandledEvents>) => void;
    }
  }
  