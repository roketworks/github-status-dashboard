<script>
  import { accessTokenStore } from 'stores.js';
  import { setAccessToken } from 'api/github.js';
  import Dashboard from 'Dashboard.svelte';
  import AccessTokenPrompt from 'AccessTokenPrompt.svelte';

  let promptForAccessToken = true;
  accessTokenStore.subscribe(accessToken => {
    if (accessToken) {
      promptForAccessToken = false;
      setAccessToken(accessToken);
    } else {
      promptForAccessToken = true;
    }
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
