<aside>
  <div class="content">
    <slot></slot>
  </div>
</aside>

<style>
  aside {
    background: rgba(0,0,0,.1);
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .content {
    border-radius: 4px;
    background: #ffffff;
    border: 1px solid #dddddd;
    overflow: hidden;
    box-shadow: 0 11px 15px -7px rgba(0,0,0,.2),
                0 24px 38px 3px rgba(0,0,0,.14),
                0 9px 46px 8px rgba(0,0,0,.12);
  }
</style>
