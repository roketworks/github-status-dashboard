<script>
  import { accessTokenStore } from 'stores.js';
  import Dashboard from 'Dashboard.svelte';
  import AccessTokenPrompt from 'AccessTokenPrompt.svelte';

  let promptForAccessToken = true;
  accessTokenStore.subscribe(value => {
    promptForAccessToken = !value;
  });
</script>

<main>
  <Dashboard />
  {#if promptForAccessToken}
    <AccessTokenPrompt />
  {/if}
</main>

<style>
  main {
    height: 100%;
  }
</style>
