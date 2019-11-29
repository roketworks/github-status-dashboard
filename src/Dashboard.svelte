<script>
  import { repositoryStore } from 'stores.js';
  import RepositoryGrid from 'RepositoryGrid.svelte';

  let repositories = [];
  let newRepository = '';

  repositoryStore.subscribe(value => {
    repositories = value.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  });

  function addRepository() {
    if (newRepository) {
      repositoryStore.update(existingRepositories => {
        if (!existingRepositories.includes(newRepository)) {
          return [...existingRepositories, newRepository];
        }

        return existingRepositories;
      });
    }

    newRepository = '';
  }
</script>

<section>
  <header>
    <input type="text" bind:value={newRepository} />
    <button on:click={addRepository}>Add repository</button>
  </header>

  <RepositoryGrid repositories={repositories} />
</section>
