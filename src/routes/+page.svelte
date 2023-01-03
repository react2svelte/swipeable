<script lang="ts">
  import { swiping } from '$lib';
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div
  id="testbox"
  use:swiping={{
    onSwiped: (eventData) => console.log('User Swiped!', eventData)
  }}
/>

<style>
  #testbox {
    width: 500px;
    height: 500px;
    border: 5px;
    border-color: red;
  }
</style>
