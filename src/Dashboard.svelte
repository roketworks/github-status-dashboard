<script>
  import { repositoryStore } from 'stores.js';
  import { getRepository } from 'api/github';
  import RepositoryGrid from 'RepositoryGrid.svelte';

  let repositories = [];
  let newRepository = '';

  repositoryStore.subscribe(value => {
    repositories = value.sort((a, b) => a.nameWithOwner.toLowerCase().localeCompare(b.nameWithOwner.toLowerCase()));
  });

  let getRepositoryPromise;
  async function addRepository() {
    if (newRepository) {
      const existingRepository = repositories.find(x => x.nameWithOwner.toLowerCase() === newRepository.toLowerCase());
      if (existingRepository) {
        return;
      }

      const split = newRepository.split('/');
      const owner = split[0];
      const name = split[1];

      getRepositoryPromise = getRepository(owner, name);
      const repository = await getRepositoryPromise;

      repositoryStore.update(existingRepositories => {
          return [...existingRepositories, repository];
      });
    }

    newRepository = '';
  }
</script>

<section>
  <header>
    <input type="text" bind:value={newRepository} />
    <button on:click={addRepository} class="primary">
      {#await getRepositoryPromise}
        Adding...
      {:then}
        Add repository
      {/await}
    </button>
  </header>

  <RepositoryGrid repositories={repositories} />
</section>
