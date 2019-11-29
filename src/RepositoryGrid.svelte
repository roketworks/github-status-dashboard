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
      <div class="repository">
        <header>
          <h2>{repository.name}</h2>
        </header>

        <div class="status-grid">
          {#each repository.ref.target.history.edges[0].node.status.contexts as context}
            <div
              class="status"
              class:success={context.state === 'SUCCESS'}
              class:failed={context.state === 'ERROR'}>
              {context.context}
            </div>
          {/each}
        </div>
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

.status-grid {
  display: flex;
  min-height: 100px;
}

.status {
  flex-grow: 1;
  min-height: 100%;
  background: #a3a8a4;
}

.status.success {
  background: #28a745;
}

.status.failed {
  background: #db3c3c;
}
</style>
