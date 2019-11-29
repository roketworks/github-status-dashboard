<script>
  export let repositories = [];
</script>

{#each repositories as repository}
  <div>{repository.nameWithOwner}</div>
{/each}
