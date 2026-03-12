<script lang="ts">
  export let variant: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'neutral' = 'primary';
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let dot: boolean = false;
  export let pill: boolean = true;
</script>

<arc-badge
  variant={variant}
  size={size}
  dot={dot}
  pill={pill}
>
  <slot />
</arc-badge>
