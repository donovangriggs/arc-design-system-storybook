<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' = 'primary';
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let disabled: boolean = false;
  export let type: 'button' | 'submit' | 'reset' = 'button';
  export let loading: boolean = false;

  const dispatch = createEventDispatcher<{ arcClick: void }>();

  function handleArcClick() {
    dispatch('arcClick');
  }
</script>

<arc-button
  variant={variant}
  size={size}
  disabled={disabled}
  type={type}
  loading={loading}
  on:arcClick={handleArcClick}
>
  <slot />
</arc-button>
