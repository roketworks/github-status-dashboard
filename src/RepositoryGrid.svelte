<script>
  import {getLatestStatus} from 'api/github.js';
  export let repositoryIds = [];

  let statusPromise = getLatestStatus(repositoryIds);
</script>

<div class="grid">
  {#await statusPromise}
    Loading...
  {:then repositories}
    {#each repositories as repository}
      <div>
        <header>
          <h2>{repository.name}</h2>
        </header>

        <div>{repository.ref.name}</div>
        <div>Overall: {repository.ref.target.history.edges[0].node.status.state}</div>
        <div>Checks:</div>
        <ul>
        {#each repository.ref.target.history.edges[0].node.status.contexts as context}
          <li>
            <div>{context.context}</div>
            <div>{context.description}</div>
            <div>{context.state}</div>
          </li>
        {/each}
        </ul>
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

.grid > div {
  padding: 6px;
  margin: 6px;
}

h2 {
  font-size: 1.1rem;
  margin: 0;
}
</style>
