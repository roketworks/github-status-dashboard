<script>
export let statusCheck;
</script>

<div
  class="status-check"
  class:success={statusCheck.state === 'SUCCESS'}
  class:failed={statusCheck.state === 'ERROR'}>
  {statusCheck.context}
</div>

<style>
.status-check {
  flex-grow: 1;
  min-height: 100%;
  background: #a3a8a4;
}

.status-check.success {
  background: #28a745;
}

.status-check.failed {
  background: #db3c3c;
}
</style>
