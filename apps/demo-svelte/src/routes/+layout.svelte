<script>
  import '../app.css';
  import { defineCustomElements } from '@arctech/core/loader';
  import { onMount } from 'svelte';

  onMount(() => {
    defineCustomElements();
  });

  let { children } = $props();
</script>

{@render children()}
