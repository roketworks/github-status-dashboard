<script>
  export let repositories = [];
</script>

{#each repositories as repository}
  <div>{repository}</div>
{/each}
