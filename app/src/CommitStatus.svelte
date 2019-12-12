<script>
import CommitStatusCheck from 'CommitStatusCheck.svelte';
export let commit;
</script>

<div class="status-grid">
  {#each commit.status.contexts as context}
    <CommitStatusCheck statusCheck={context} />
  {/each}
</div>

<style>
.status-grid {
  display: flex;
  min-height: 100px;
}
</style>
