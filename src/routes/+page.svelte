<script lang="ts">
  import { swipeable, type SwipeEventData } from '$lib';

  let message = '';

  function handler(event: CustomEvent<SwipeEventData>) {
    console.log('swiped', event.detail);
  }
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<div id="testbox" use:swipeable on:swiped={handler} />

{message}

<style>
  #testbox {
    margin: auto;
    width: 500px;
    height: 500px;
    border: 5px red solid;
  }
</style>
