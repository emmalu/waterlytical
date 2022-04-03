<script>
  let count = 0
  const increment = () => {
    count += 1
  }
</script>

<calcite-button on:click={increment}>
  Clicks: {count}
</calcite-button>

