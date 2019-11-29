<script>
  import { accessTokenStore } from 'stores.js';
  import Modal from 'ui/Modal.svelte';

  let accessToken = null;

  function saveAccessToken() {
    accessTokenStore.set(accessToken);
  }
</script>

<Modal>
  <section id="token-prompt">
    <h1>
      Set GitHub access token
    </h1>

    <p>
      Please provide a new GitHub access token.  A new access token can be generated on
      <a href="https://github.com/settings/tokens">GitHub</a>.
    </p>
    <p>
      This dashboard does not require any admin or write permissions.  Your new access token should
      have the following scopes:
    </p>

    <ul>
      <li>repo:status</li>
    </ul>

    <label for="access-token">Access token</label>
    <input type="password" id="access-token" placeholder="Personal access token" bind:value={accessToken} />

    <button class="primary" on:click={saveAccessToken}>Save</button>
  </section>
</Modal>

<style>
#token-prompt {
  width: 400px;
  padding: 12px;
}

input {
  display: block;
  width: 100%;
}

button {
  float: right;
}
</style>
