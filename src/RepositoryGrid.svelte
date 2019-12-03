<script>
  import {getLatestStatus} from 'api/github.js';
  import CommitStatus from 'CommitStatus.svelte';
  export let repositoryIds = [];

  let statusPromise = getLatestStatus(repositoryIds);
</script>

<div class="grid">
  {#await statusPromise}
    Loading...
  {:then repositories}
    {#each repositories as repository}
      <div class="repository">
        <header>
          <h2>{repository.name}</h2>
        </header>
        <CommitStatus commit={repository.ref.target.history.edges[0].node} />
      </div>
    {/each}
  {/await}
</div>

<style>
.grid {
  display: flex;
  flex-wrap: wrap;
  padding: 6px;
}

.repository {
  flex-grow: 1;
  padding: 6px;
  margin: 6px;
}

h2 {
  font-size: 1.1rem;
  margin: 0;
}
</style>
