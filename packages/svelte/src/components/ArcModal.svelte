<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let open: boolean = false;
  export let size: 'sm' | 'md' | 'lg' | 'full' = 'md';
  export let closeOnOverlay: boolean = true;
  export let closeOnEscape: boolean = true;

  const dispatch = createEventDispatcher<{ arcClose: void }>();

  function handleArcClose() {
    open = false;
    dispatch('arcClose');
  }
</script>

<arc-modal
  open={open}
  size={size}
  close-on-overlay={closeOnOverlay}
  close-on-escape={closeOnEscape}
  on:arcClose={handleArcClose}
>
  <slot />
</arc-modal>
