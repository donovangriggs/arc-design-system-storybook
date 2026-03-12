<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let variant: 'info' | 'success' | 'warning' | 'error' = 'info';
  export let alertTitle: string | undefined = undefined;
  export let dismissible: boolean = false;
  export let icon: boolean = true;

  const dispatch = createEventDispatcher<{ arcDismiss: void }>();

  function handleArcDismiss() {
    dispatch('arcDismiss');
  }
</script>

<arc-alert
  variant={variant}
  alert-title={alertTitle}
  dismissible={dismissible}
  icon={icon}
  on:arcDismiss={handleArcDismiss}
>
  <slot />
</arc-alert>
